"""Import saved HumanTech Angular pages into Jekyll data (no network required)."""
from pathlib import Path
from html import unescape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
GROUPS = {'Master project': 'Master thesis', 'Bachelor project': 'Bachelor Thesis',
          'Internship project': 'Internship and semester projects',
          'Semester project': 'Internship and semester projects'}

def text(value):
    return ' '.join(unescape(re.sub(r'<[^>]*>', ' ', value or '')).split())

def person(value):
    return text(value.get('first_name', '') + ' ' + value.get('last_name', ''))

def extract():
    projects = {}
    if not list((ROOT / "downloads_students").glob("*.html")):
        raise FileNotFoundError("No HTML source files in downloads_students; existing data left unchanged.")
    for path in sorted((ROOT / 'downloads_students').glob('*.html')):
        found = False
        for script in re.findall(r'<script[^>]*>(.*?)</script>', path.read_text(), re.S):
            if '&q;body&q;' not in script:
                continue
            for old, new in [('&q;', '"'), ('&l;', '<'), ('&g;', '>'), ('&s;', "'"), ('&a;', '&')]:
                script = script.replace(old, new)
            for response in json.loads(script).values():
                body = response.get('body', {})
                if not isinstance(body, dict) or 'students' not in body:
                    continue
                kind = body['type']['name']
                # Explicit mapping: never silently guess an unfamiliar qualification.
                category = GROUPS[kind]
                paragraphs = [text(p) for p in re.split(r'</(?:p|div|li|h[1-6])\s*>|<br\s*/?>', body.get('text') or '', flags=re.I)]
                project = dict(id=body['id'], title=text(body['title']), type=kind,
                    category=category, date=body.get('date'),
                    description=[p for p in paragraphs if p],
                    students=[person(p) for p in body['students']],
                    supervisors=[person(p) for p in body.get('supervisors', [])],
                    picture=body.get('picture'),
                    source='https://www.humantech.institute/projects/' + str(body['id']))
                if project['picture'] and not project['picture'].startswith('https://'):
                    project['picture'] = 'https://www.humantech.institute/' + project['picture'].lstrip('/')
                if project['id'] in projects and project != projects[project['id']]:
                    raise ValueError('Conflicting copies of project ' + str(project['id']))
                projects[project['id']] = project
                found = True
        if not found:
            raise ValueError('No project data found: ' + str(path))
    return sorted(projects.values(), key=lambda p: (p['date'] or '', p['title']), reverse=True)

if __name__ == '__main__':
    projects = extract()
    additions_path = ROOT / '_data/additional_student_projects.json'
    if additions_path.exists():
        known_ids = {str(p['id']) for p in projects}
        for project in json.loads(additions_path.read_text()):
            if str(project['id']) not in known_ids:
                projects.append(project)
                known_ids.add(str(project['id']))
    summaries_path = ROOT / '_data/student_project_summaries.json'
    if summaries_path.exists():
        summaries = json.loads(summaries_path.read_text())
        for project in projects:
            if str(project['id']) in summaries:
                project['description'] = [summaries[str(project['id'])]]
    (ROOT / '_data/student_projects.json').write_text(json.dumps(projects, ensure_ascii=False, indent=2) + '\n')
    print(f'Imported {len(projects)} unique projects.')
    for category in dict.fromkeys(GROUPS.values()):
        print(category + ': ' + str(sum(p['category'] == category for p in projects)))
    print('Projects with source photos:', sum(bool(p['picture']) for p in projects))

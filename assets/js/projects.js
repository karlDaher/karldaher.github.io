
/* =========================================================
   PROJECT DATA
   To add a project: copy one object below, edit every field,
   add it to the array. Tags control the filter pills — reuse
   existing tag names where possible (AI, Healthcare,
   Entertainment, Education, Knowledge, Product, Research, Finance).
   ========================================================= */
const PROJECTS = [
  {
    title: "EmoSense — Emotion Intelligence Consulting",
    tags: ["AI", "Product"],
    problem: "Enterprise strategy teams have no structured way to act on emotion/affect data, even though consumer-facing emotion design research is maturing fast.",
    approach: "Designed a tiered consulting model — a fixed-scope 10-day 'AI Agent Sprint,' a SaaS subscription tier, and a research retainer — grounded in a synthesis of major consulting-firm outlook reports.",
    output: "Built a working interactive HTML demo, a sales page, and a piloted 'Emotional Resonance Audit' sprint format.",
    impact: "Validated a productized-consulting front door that can convert into recurring retainer work — currently piloting unpaid with a first client to prove the model before pricing it fully.",
    stack: "Claude, HTML/JS, market research synthesis",
    links: []
  },
  {
    title: "Gutpap — Multi-Agent Content Automation",
    tags: ["AI", "Product"],
    problem: "A Swiss B2B gift-wrapping wholesaler needed a scalable content and SEO pipeline ahead of Christmas 2026 without hiring a full marketing team.",
    approach: "Architected a multi-agent automation pipeline using n8n, Supabase, and the Claude Agent SDK, paired with a bilingual FR/EN content framework and a Pinterest-led distribution strategy.",
    output: "Shipped a Christmas 2026 catalog landing page with schema/SEO work and an automated content generation loop.",
    impact: "Gives a small wholesaler enterprise-grade content velocity at a fraction of the headcount cost — now the flagship case study for the EmoSense advisory model.",
    stack: "n8n, Supabase, Claude Agent SDK, SEO/schema",
    links: []
  },
  {
    title: "Market Exposure Tracker",
    tags: ["AI", "Finance", "Knowledge"],
    problem: "Tracking exposure to big tech, semiconductors, and China AI-chip policy risk across a portfolio meant manually checking scattered news and price feeds.",
    approach: "Built a lightweight automated pipeline combining live price data with news sentiment, summarized by an LLM, delivered on a schedule.",
    output: "A running Python tool (yfinance + Google News RSS + Claude Haiku) that posts daily digests to Telegram via GitHub Actions.",
    impact: "Turns a manual daily research habit into a five-second morning read — a reusable pattern for any thesis-driven watchlist.",
    stack: "Python, yfinance, GitHub Actions, Claude Haiku, Telegram API",
    links: []
  },
  {
    title: "DigiRENT-AI",
    tags: ["AI", "Product"],
    problem: "Real-estate agencies spent significant manual effort writing and formatting rental listing ads before publishing them to a portal.",
    approach: "Led the AI feature track within IMMOMIG SA's InnoSuisse-funded R&D roadmap, embedding AI-assisted ad generation directly into the agency workflow.",
    output: "A shipped AI module (live on digirent.swiss) that drastically cuts the time agencies spend drafting listing ads.",
    impact: "Turned a funded R&D initiative into a production feature agencies use every day — a concrete AI-in-workflow deployment, not a demo.",
    stack: "Product leadership, InnoSuisse R&D, applied AI/ML",
    links: [{ label: "digirent.swiss →", url: "https://digirent.swiss/en/digirent#digirent_ia_modules" }]
  },
  {
    title: "dreamo.ch — Swiss Real Estate Portal",
    tags: ["Product", "AI"],
    problem: "Property buyers, tenants, and agencies in Switzerland worked across fragmented listing sites and disconnected agency systems.",
    approach: "Contributed to IMMOMIG SA's consumer-facing portal, including an AI-driven broker-matching flow: sellers fill in a valuation form and the system suggests the most relevant brokers for their property.",
    output: "A live property portal (dreamo.ch) with identity federation across partner agency sites, digital rental applications, and AI-assisted broker matching.",
    impact: "One account now works across multiple agency websites, and AI matching replaces manual broker sourcing for sellers.",
    stack: "Product development, AI matching logic, partner integrations",
    links: [{ label: "dreamo.ch →", url: "https://www.dreamo.ch/en/c/about-24613" }]
  },
  {
    title: "Enhancing Conversational Agents with Empathic Abilities",
    tags: ["AI", "Research"],
    problem: "Conversational agents typically respond to what users say, not how they feel — limiting their usefulness in emotionally sensitive contexts.",
    approach: "Peer-reviewed research investigating methods for detecting and responding to user affect within conversational AI systems.",
    output: "A published paper at ACM (ICMI proceedings) presenting the empathic-response approach and findings.",
    impact: "Direct academic foundation for every applied empathic-AI and mental-health chatbot project on this page.",
    stack: "Affective computing, conversational AI, HCI research methods",
    links: [{ label: "Publication (ACM) →", url: "https://dl.acm.org/doi/pdf/10.1145/3472306.3478344" }]
  },
  {
    title: "TIMED Europe — Time Experience in Europe's Digital Age",
    tags: ["Research", "Knowledge", "Education"],
    problem: "It's unclear how digitalisation is reshaping how people across Europe experience time, allocate it, and perceive its effect on their wellbeing.",
    approach: "Postdoctoral researcher on this CHANSE-funded, trans-European interdisciplinary study spanning six countries (Czech Republic, Germany, Poland, Spain, Switzerland, UK), using mixed methods — interviews, online surveys, psychophysiology, and real-time behavioral analysis.",
    output: "An active multi-country research program producing cross-national data on digital-age time perception.",
    impact: "Positions Karl inside a live, funded, international research consortium — direct evidence of cross-border academic collaboration at scale.",
    stack: "Mixed-methods research, psychophysiology, cross-national coordination",
    links: []
  },
  {
    title: "Nutritional Survey — OSAV / FSVO",
    tags: ["Healthcare", "Research"],
    problem: "Switzerland's Federal Food Safety and Veterinary Office needed a way to run parallel multilingual nutritional surveys nationally, with a specific focus on emerging meat-substitute consumption.",
    approach: "Developing a private-app solution letting people scan what they eat, building a Swiss-referenced nutritional database from the results.",
    output: "A local-questionnaire app architecture with scan-based logging and a Switzerland-specific meat-substitute reference database.",
    impact: "Gives a federal agency real-time, structured national nutrition data instead of one-off paper surveys.",
    stack: "Multilingual survey design, mobile data capture, federal-agency collaboration",
    links: []
  },
  {
    title: "Colearnis — Co-Conception Learning Information System",
    tags: ["Education", "AI", "Knowledge"],
    problem: "Companies struggle to capture and pass on employees' tacit know-how before it's lost to turnover or retirement.",
    approach: "Project manager for an InnoSuisse-funded platform, built with HES-SO HE-Arc, FELCO SA, and PX Group, that captures know-how as interactive videos guided by an intelligent virtual assistant.",
    output: "A live collaborative platform (colearnis.ch) for employee-driven know-how capture and dissemination.",
    impact: "Converts tacit, at-risk institutional knowledge into a structured, searchable, reusable asset for the company.",
    stack: "InnoSuisse R&D, interactive video, virtual assistant design",
    links: [{ label: "colearnis.ch →", url: "https://colearnis.ch/" }]
  },
  {
    title: "Chatbot for Depression & Anxiety with Passive Monitoring",
    tags: ["Healthcare", "AI", "Research"],
    problem: "Patients with depression and anxiety need continuous, low-friction support between therapy sessions, but clinicians can't observe day-to-day state changes.",
    approach: "Collaboration with the University of Fribourg's psychology department to build a therapy-support app with an integrated chatbot, combined with passive monitoring of location, step count, and app usage.",
    output: "A working application pairing conversational therapy support with passive behavioral signal collection.",
    impact: "Gives clinicians indirect visibility into patient state between sessions without adding any manual logging burden.",
    stack: "Conversational AI, passive sensing, clinical psychology collaboration",
    links: []
  },
  {
    title: "Beat — Digital Therapy Platform",
    tags: ["Healthcare"],
    problem: "Therapists and patients lacked a structured digital channel for delivering and tracking therapy programs between in-person sessions.",
    approach: "Collaboration with the University of Fribourg psychology department to design a platform connecting therapists with patients for online programs and personal follow-up.",
    output: "A digital therapy platform supporting structured online therapy programs and ongoing patient follow-up.",
    impact: "Extends a therapist's reach beyond scheduled sessions with a consistent, trackable follow-up channel.",
    stack: "Platform design, clinical psychology collaboration",
    links: []
  },
  {
    title: "MonCosamo Mobile Application",
    tags: ["Healthcare", "Education"],
    problem: "Students in Fribourg canton often don't know which support structure fits their situation and default to slower generalist assistance channels.",
    approach: "Collaboration with Haute école de santé Fribourg (HEdS-FR) to build an app that analyzes a student's situation against a database of medical and support locations.",
    output: "An application that routes students directly to the most appropriate support structure based on their profile.",
    impact: "Cuts out the generalist-assistance bottleneck, getting students to the right help faster.",
    stack: "Recommendation logic, healthcare-location database, mobile app",
    links: []
  },
  {
    title: "Festineuch Mobile Application",
    tags: ["Entertainment"],
    problem: "Festival visitors walking through a history-themed tunnel installation had no way to engage with the content beyond passively viewing it.",
    approach: "Collaboration with HE-Arc to build an app that synchronizes each section of a physical history tunnel with matching in-app content as visitors move through it.",
    output: "A synchronized physical-digital experience for FestiNeuch festival visitors.",
    impact: "Turned a static walkthrough into a guided, section-by-section interactive experience.",
    stack: "Location-synced mobile experience design",
    links: []
  },
  {
    title: "Musicotherapy Chatbot for Emotion Regulation",
    tags: ["Healthcare", "AI", "Research"],
    problem: "Students needed accessible, low-cost tools for regulating emotion through relaxation techniques, without requiring in-person sessions.",
    approach: "Research investigating a Chatfuel-built chatbot that guides users through muscle and breath relaxation techniques, tested for effectiveness in a student population.",
    output: "A deployed relaxation chatbot and a published write-up of its development and evaluation.",
    impact: "Demonstrated that a low-code chatbot can deliver a measurable emotion-regulation intervention at near-zero marginal cost per user.",
    stack: "Chatfuel, emotion-regulation protocol design, research evaluation",
    links: [{ label: "Write-up (Medium) →", url: "https://medium.com/empathic-labs/development-of-a-musicotherapy-chatbot-with-chatfuel-bac604169cd1" }]
  },
  {
    title: "Phoenician Alphabet in AR/VR — Art Installation",
    tags: ["Entertainment", "Knowledge"],
    problem: "An artist's body of exhibitions existed only as physical showrooms, inaccessible once each exhibition closed.",
    approach: "Developed a VR/AR experience for a Fribourg-based artist that recreates the history of his expositions and preserves the showroom itself in virtual form.",
    output: "A VR/AR experience layering the Phoenician alphabet's history onto a preserved digital showroom.",
    impact: "Gives a physical art exhibition permanent, revisitable digital life after the original showroom is gone.",
    stack: "AR/VR development, spatial digitization, cultural-heritage design",
    links: []
  },
  {
    title: "App-Based Aftercare Study",
    tags: ["Healthcare", "Research"],
    problem: "Inpatients discharged after treatment for mental illness often lose access to evidence-based support and are prone to relapse and re-hospitalization.",
    approach: "Project manager, funded by the Gertrud Thalmann Fonds with the University of Fribourg and Universitäre Psychiatrische Kliniken Basel (UPK), building an app-based aftercare intervention that brings psychotherapy content into daily life.",
    output: "A research-backed aftercare app extending post-discharge support beyond the hospital.",
    impact: "Aimed directly at reducing relapse and re-hospitalization rates by keeping evidence-based care present in patients' everyday lives.",
    stack: "Clinical research design, mobile intervention, funder/hospital coordination",
    links: []
  },
  {
    title: "My CSIR Portal",
    tags: ["Knowledge", "Product"],
    problem: "Refugees and case workers at Le Centre social d'intégration des réfugiés (CSIR) lacked a secure channel for exchanging sensitive information, and two key administrative processes were still fully manual.",
    approach: "Project manager for a platform providing confidential internal messaging between CSIR professionals and refugees, plus digitized workflows for integration-income (RI) disbursement and study-grant applications.",
    output: "A secure messaging and administrative platform digitizing two previously paper-based processes.",
    impact: "Protects sensitive refugee data while cutting the time and friction of essential administrative processes.",
    stack: "Secure messaging architecture, workflow digitization, public-sector collaboration",
    links: []
  }
];

/* ========================================================= */

const grid = document.getElementById('grid');
const rail = document.getElementById('filterRail');

function allTags(){
  const counts = {};
  PROJECTS.forEach(p => p.tags.forEach(t => counts[t] = (counts[t]||0)+1));
  return counts;
}

let activeTag = 'All';

function renderPills(){
  const counts = allTags();
  const tags = ['All', ...Object.keys(counts).sort()];
  rail.querySelectorAll('.pill').forEach(el => el.remove());
  tags.forEach(t => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-pressed', String(t === activeTag));
    btn.className = 'pill' + (t === activeTag ? ' active' : '');
    const n = t === 'All' ? PROJECTS.length : counts[t];
    btn.innerHTML = t + ' <span class="count">' + n + '</span>';
    btn.onclick = () => { activeTag = t; renderPills(); renderGrid(); };
    rail.appendChild(btn);
  });
}

function renderGrid(){
  const items = activeTag === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(activeTag));
  grid.innerHTML = '';
  if(items.length === 0){
    grid.innerHTML = '<div class="empty-state">No entries filed under this tag yet.</div>';
    return;
  }
  items.forEach((p, i) => {
    const idx = PROJECTS.indexOf(p) + 1;
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-head">
        <div>
          <div class="rec-no">NO. ${String(idx).padStart(3,'0')}</div>
          <h2>${p.title}</h2>
        </div>
        <div class="tagset">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
      <div class="field"><span class="field-label">PROBLEM</span><span class="field-body">${p.problem}</span></div>
      <div class="field"><span class="field-label">APPROACH</span><span class="field-body">${p.approach}</span></div>
      <div class="field"><span class="field-label">OUTPUT</span><span class="field-body">${p.output}</span></div>
      <div class="field"><span class="field-label">IMPACT</span><span class="field-body impact">${p.impact}</span></div>
      <div class="card-foot">
        <span class="stack">${p.stack ? '<b>Stack —</b> ' + p.stack : ''}</span>
        <span class="links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.querySelector('.project-index .eyebrow').textContent =
  document.querySelector('.project-index .eyebrow').textContent.replace('{{N}}', String(PROJECTS.length).padStart(3,'0'));
document.querySelector('.project-index footer span').textContent =
  document.querySelector('.project-index footer span').textContent.replace('{{DATE}}',
    new Date().toLocaleDateString('en-US', { year:'numeric', month:'long' }));

renderPills();
renderGrid();

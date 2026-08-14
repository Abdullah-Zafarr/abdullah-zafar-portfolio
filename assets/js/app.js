const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const iconify = () => window.lucide?.createIcons({attrs:{'stroke-width':2}});

const links = {
  github:'https://github.com/Abdullah-Zafarr',
  linkedin:'https://www.linkedin.com/in/abdullahz-dev/',
  email:'mailto:abdullahzafar.codes@gmail.com',
  codeforces:'https://codeforces.com/profile/rodrickkkk'
};
const routes = {
  home:'pages/home.html',
  projects:'pages/projects.html',
  experience:'pages/experience.html',
  about:'pages/about.html',
  contact:'pages/contact.html'
};
const files = {
  logo:'assets/brand/az-mark.svg',
  resume:'assets/documents/Abdullah-Zafar-Resume.pdf',
  portrait:'assets/images/profile/abdullah-zafar.jfif'
};

const profileMemes = {
  Recruiter: 'assets/images/profile/recruiter-meme.png',
  Client: 'assets/images/profile/client-meme.png',
  Developer: 'assets/images/profile/developer-meme.png',
  Explorer: 'assets/images/profile/explorer-meme.png'
};

const projects = [
 {
   id:'voice',
   title:'Production-Grade Voice Agent',
   short:'Voice AI',
   image:'assets/images/projects/voice-ui.png',
   rank:'1',
   year:'2026',
   match:'98%',
   runtime:'Sub-750ms',
   rating:'PG',
   desc:'A full-duplex conversational voice system with Twilio telephony, WebSocket audio, Deepgram STT, and sub-750ms Groq inference.',
   stack:['TypeScript','Twilio','Deepgram','Groq'],
   repo:'https://github.com/Abdullah-Zafarr/Production_Grade_Voice_Agent',
   teaserType:'waveform',
   teaserTag:'LIVE TELEPHONY STREAM · 680MS LATENCY'
 },
 {
   id:'clinical',
   title:'Autonomous Clinical Reporter',
   short:'Clinical AI',
   image:'assets/images/projects/clinical.png',
   rank:'2',
   year:'2026',
   match:'96%',
   runtime:'99.4% accuracy',
   rating:'16+',
   desc:'An event-driven healthcare platform that converts unstructured medical scans into validated, standardized diagnostic reports.',
   stack:['TypeScript','LangGraph','Pydantic','Gemini'],
   repo:'https://github.com/Abdullah-Zafarr/Autonomous-Clinical-Reporter',
   demo:'https://ultrasound-reporting-service.vercel.app',
   teaserType:'scanner',
   teaserTag:'DICOM SCAN PARSER · 99.4% VALIDATED'
 },
 {
   id:'rag',
   title:'Native RAG Architecture',
   short:'Native RAG',
   image:'assets/images/projects/rag.png',
   rank:'3',
   year:'2026',
   match:'95%',
   runtime:'Framework-free',
   rating:'PG',
   desc:'A production RAG engine built from scratch with OCR ingestion, vector-store purging, Groq streaming, and grounding telemetry.',
   stack:['Python','ChromaDB','OCR','Groq'],
   repo:'https://github.com/Abdullah-Zafarr/Native-RAG-Architecture',
   teaserType:'vectors',
   teaserTag:'ZERO-FRAMEWORK RAG · CHROMADB TELEMETRY'
 },
 {
   id:'analyst',
   title:'LLM Data Analyst',
   short:'DataMind AI',
   image:'assets/images/projects/analyst.png',
   rank:'4',
   year:'2026',
   match:'94%',
   runtime:'91% self-fix',
   rating:'PG',
   desc:'A conversational analyst that translates natural language into sandboxed Pandas execution with self-correcting debug loops.',
   stack:['Python','Pandas','Streamlit','Groq'],
   repo:'https://github.com/Abdullah-Zafarr/LLM-Data-Analyst-Groq',
   teaserType:'terminal',
   teaserTag:'SANDBOXED REPL · SELF-CORRECTING FIX'
 },
 {
   id:'multimodal',
   title:'Multimodal Agentic Workflow',
   short:'Agent Workflow',
   image:'assets/images/projects/multimodal.png',
   rank:'5',
   year:'2026',
   match:'92%',
   runtime:'Multi-tool',
   rating:'PG',
   desc:'An agentic engine combining web search, audio extraction, Gemini Multimodal, cleanup, and dual CLI/Streamlit interfaces.',
   stack:['Python','Gemini','SerpAPI','Streamlit'],
   repo:'https://github.com/Abdullah-Zafarr/Multimodal-Agentic-Workflow',
   teaserType:'agents',
   teaserTag:'MULTI-AGENT PIPELINE · GEMINI REASONING'
 },
 {
   id:'memory',
   title:'Mem0 Graph Memory Engine',
   short:'Memory Engine',
   image:'assets/images/projects/memory.png',
   rank:'6',
   year:'2026',
   match:'91%',
   runtime:'Long-term',
   rating:'PG',
   desc:'A persistent memory agent with multi-session facts, contradiction overrides, Qdrant storage, and context telemetry.',
   stack:['Python','Mem0','Qdrant','Agents'],
   repo:'https://github.com/Abdullah-Zafarr/Mem0-Graph-Memory-Engine',
   teaserType:'graph',
   teaserTag:'GRAPH MEMORY OVERRIDES · QDRANT STORE'
 }
];

const notifications = [
  { title:'Production Voice Agent v2.0', time:'Today', desc:'Sub-750ms latency full-duplex telephony live on GitHub.', icon:'phone-call' },
  { title:'Autonomous Clinical Reporter', time:'Yesterday', desc:'Standardized diagnostic ultrasound reporter with 99.4% accuracy.', icon:'activity' },
  { title:'Codeforces Rank #70', time:'2 days ago', desc:'Ranked 70th in Pakistan with 100+ day daily streak.', icon:'trophy' },
  { title:'Resume AZ-2026 Updated', time:'This week', desc:'Full resume with production AI metrics available for download.', icon:'file-check' }
];

const profileConfigs = {
  Recruiter: {
    avatarColor: 'linear-gradient(145deg,#168bd1,#174f8b)',
    tagline: '<b>Top Candidate</b> · 98% Match for AI & Full-Stack Roles',
    description: 'Co-founder and AI engineer specializing in latency-critical voice systems, medical diagnostic reporting, and production RAG pipelines built to scale outside the demo.',
    primaryBtn: { text:'Download Resume', icon:'file-down', href:files.resume, external:true },
    secondaryBtn: { text:'View Career Episodes', icon:'history', href:routes.experience },
    maturity: 'HIRE 2026',
    topPicksTitle: `Today's Top Picks for Recruiters`,
    pCardOrder: ['voice', 'clinical', 'rag', 'analyst', 'multimodal', 'memory'],
    railOrder: ['picks', 'continue', 'ranked', 'skills']
  },
  Developer: {
    avatarColor: 'linear-gradient(145deg,#b94bd0,#522069)',
    tagline: '<b>Top 70</b> on Codeforces in Pakistan · Framework-Free AI Architect',
    description: 'Specializing in framework-free RAG with ChromaDB, sub-750ms raw audio telephony pipelines, persistent graph memory, and self-correcting agent execution loops.',
    primaryBtn: { text:'GitHub Profile', icon:'github', href:links.github, external:true },
    secondaryBtn: { text:'Explore Architecture', icon:'code-xml', href:routes.projects },
    maturity: 'DEV 2026',
    topPicksTitle: `Trending in Open-Source & Architecture`,
    pCardOrder: ['rag', 'memory', 'voice', 'multimodal', 'analyst', 'clinical'],
    railOrder: ['picks', 'ranked', 'skills', 'continue']
  },
  Client: {
    avatarColor: 'linear-gradient(145deg,#00a98f,#14534d)',
    tagline: '<b>Commercial AI Systems</b> · High-ROI Deployed Software',
    description: 'Delivering dependable, commercial-grade AI applications for enterprises and startups — from real-time telephony voice agents to automated clinical reporting.',
    primaryBtn: { text:`Let's Build Together`, icon:'send', href:routes.contact },
    secondaryBtn: { text:'View Live Demos', icon:'external-link', href:routes.projects },
    maturity: 'PROD 2026',
    topPicksTitle: `Ready-to-Deploy Solutions & Demos`,
    pCardOrder: ['clinical', 'voice', 'analyst', 'rag', 'multimodal', 'memory'],
    railOrder: ['picks', 'ranked', 'continue', 'skills']
  },
  Explorer: {
    avatarColor: 'linear-gradient(145deg,#ff8b24,#9b4007)',
    tagline: '<b>Top 70</b> in Pakistan on Codeforces · AI Systems Engineer',
    description: 'AI engineer and co-founder building production-grade voice agents, retrieval systems, and intelligent workflows that hold up outside the demo.',
    primaryBtn: { text:'Resume', icon:'file-down', href:files.resume, external:true },
    secondaryBtn: { text:'More Info', icon:'circle-alert', href:routes.about },
    maturity: 'AI 2026',
    topPicksTitle: `Today's Top Picks for Explorer`,
    pCardOrder: ['voice', 'clinical', 'rag', 'analyst', 'multimodal', 'memory'],
    railOrder: ['picks', 'ranked', 'continue', 'skills']
  }
};

let soundEnabled = true;
const getActiveProfile = () => sessionStorage.getItem('az-profile') || 'Recruiter';
const pageName = document.body.dataset.page || '';

const nav = active => {
  const prof = getActiveProfile();
  const cfg = profileConfigs[prof] || profileConfigs.Recruiter;
  return `<header class="netflix-nav">
    <a href="${routes.home}" class="nav-logo" aria-label="Abdullah Zafar home"><img src="${files.logo}" alt="AZ"></a>
    <nav>
      <a class="${active==='home'?'active':''}" href="${routes.home}">Home</a>
      <a class="${active==='projects'?'active':''}" href="${routes.projects}">Projects</a>
      <a class="${active==='experience'?'active':''}" href="${routes.experience}">Experience</a>
      <a class="${active==='about'?'active':''}" href="${routes.about}">About</a>
      <a class="${active==='contact'?'active':''}" href="${routes.contact}">Contact</a>
    </nav>
    <div class="nav-tools">
      <button class="nav-tool search-toggle" aria-label="Search"><i data-lucide="search"></i></button>
      <div class="search-box">
        <input aria-label="Search projects" placeholder="Titles, skills, projects (e.g. voice, python, rag)">
        <button aria-label="Close search" class="search-close"><i data-lucide="x"></i></button>
      </div>
      <div class="notification-wrapper">
        <button class="nav-tool notif-toggle" aria-label="Notifications" title="Recent Updates">
          <i data-lucide="bell"></i><b></b>
        </button>
        <div class="notification-dropdown" id="notif-dropdown">
          <div class="notif-header">
            <strong>Notifications</strong>
            <span>4 New</span>
          </div>
          <div class="notif-list">
            ${notifications.map(n => `
              <div class="notif-item">
                <div class="notif-icon"><i data-lucide="${n.icon}"></i></div>
                <div class="notif-content">
                  <b>${n.title}</b>
                  <p>${n.desc}</p>
                  <small>${n.time}</small>
                </div>
              </div>
            `).join('')}
          </div>
          <a href="${routes.projects}" class="notif-footer">View Pinned Releases <i data-lucide="chevron-right"></i></a>
        </div>
      </div>
      <button class="profile-menu" title="Switch Profile (Current: ${prof})" aria-label="Change profile">
        <span class="nav-avatar">
          <img src="${profileMemes[prof] || profileMemes.Developer}" alt="${prof}">
        </span>
        <i data-lucide="chevron-down"></i>
      </button>
      <button class="mobile-toggle" aria-label="Open menu"><i data-lucide="menu"></i></button>
    </div>
  </header>
  <aside class="mobile-drawer">
    <button class="drawer-close"><i data-lucide="x"></i></button>
    <img src="${files.logo}" alt="AZ">
    <a href="${routes.home}">Home</a>
    <a href="${routes.projects}">Projects</a>
    <a href="${routes.experience}">Experience</a>
    <a href="${routes.about}">About</a>
    <a href="${routes.contact}">Contact</a>
  </aside>`;
};

const footer = () => `<footer class="eledra-footer">
  <div class="eledra-container">
    <div class="eledra-top-nav">
      <div class="eledra-col">
        <h4 class="eledra-col-title">NAVIGATION</h4>
        <div class="eledra-links-row">
          <a href="${routes.projects}">PROJECTS</a>
          <a href="${routes.experience}">EXPERIENCE</a>
          <a href="${routes.about}">ABOUT</a>
          <a href="${routes.contact}">CONTACT</a>
        </div>
      </div>

      <div class="eledra-col">
        <h4 class="eledra-col-title">CONNECT</h4>
        <div class="eledra-links-row">
          <a href="${files.resume}" target="_blank" rel="noopener noreferrer">RESUME</a>
          <a href="${links.github}" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="${links.email}">EMAIL</a>
        </div>
      </div>
    </div>

    <div class="eledra-mega-wordmark-wrap" id="footer-easter-egg" title="Press for next episode">
      <div class="eledra-ambient-glow"></div>
      <button class="eledra-next-btn" id="footer-next-btn" type="button" aria-label="Press for next episode">
        <i data-lucide="play"></i> <span>PRESS FOR NEXT EPISODE</span>
      </button>
      <h2 class="eledra-mega-wordmark" id="footer-wordmark">LET’S BUILD SOMETHING.</h2>
    </div>
  </div>
</footer>`;

const teaserSnippet = p => {
  if(p.teaserType === 'waveform') {
    return `<div class="teaser-animation waveform-anim">
      <div class="wave-bars"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="teaser-meta-badge"><i data-lucide="audio-lines"></i> SUB-750MS STREAM</div>
    </div>`;
  }
  if(p.teaserType === 'scanner') {
    return `<div class="teaser-animation scanner-anim">
      <div class="scan-grid"></div>
      <div class="scan-laser"></div>
      <div class="teaser-meta-badge"><i data-lucide="scan-eye"></i> 99.4% PARSED</div>
    </div>`;
  }
  if(p.teaserType === 'vectors') {
    return `<div class="teaser-animation vector-anim">
      <div class="vector-nodes"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="teaser-meta-badge"><i data-lucide="database"></i> CHROMADB CHUNKS</div>
    </div>`;
  }
  if(p.teaserType === 'terminal') {
    return `<div class="teaser-animation terminal-anim">
      <div class="code-line">&gt; df.clean().run()</div>
      <div class="code-line green">&gt; fix_loop[0]: OK</div>
      <div class="teaser-meta-badge"><i data-lucide="terminal"></i> SANDBOX REPL</div>
    </div>`;
  }
  if(p.teaserType === 'agents') {
    return `<div class="teaser-animation agents-anim">
      <div class="agent-pills"><span>Web</span><em>➔</em><span>Audio</span><em>➔</em><span>Gemini</span></div>
      <div class="teaser-meta-badge"><i data-lucide="bot"></i> MULTI-AGENT</div>
    </div>`;
  }
  return `<div class="teaser-animation graph-anim">
    <div class="graph-pulse"></div>
    <div class="teaser-meta-badge"><i data-lucide="network"></i> MEM0 GRAPH</div>
  </div>`;
};

const card = (p, rank=false) => `<article tabindex="0" class="title-card" data-project="${p.id}" data-search="${p.title.toLowerCase()} ${p.stack.join(' ').toLowerCase()}">
  ${rank?`<span class="top-number">${p.rank}</span>`:''}
  <div class="card-poster">
    <img src="${p.image}" alt="${p.title} interface" loading="lazy">
    <span class="card-title">${p.short}</span>
    <span class="netflix-n">A</span>
  </div>
  <div class="card-hover">
    <div class="teaser-viewport">
      ${teaserSnippet(p)}
      <span class="teaser-tag">${p.teaserTag}</span>
    </div>
    <div class="hover-actions">
      <a href="${p.repo}" target="_blank" aria-label="Open repository" title="View Code on GitHub"><i data-lucide="play"></i></a>
      <button data-info="${p.id}" aria-label="More information" title="Open Project Details"><i data-lucide="info"></i></button>
      ${p.demo?`<a href="${p.demo}" target="_blank" class="round secondary" aria-label="Live Demo" title="Launch Demo"><i data-lucide="external-link"></i></a>`:''}
      <span></span>
      <a href="${p.repo}" target="_blank" class="round secondary" aria-label="GitHub"><i data-lucide="github"></i></a>
    </div>
    <strong>${p.match} Match</strong>
    <div class="hover-meta"><span>${p.rating}</span> ${p.year} · ${p.runtime}</div>
    <p>${p.stack.slice(0,3).join(' · ')}</p>
  </div>
</article>`;

const listCard = p => `<article class="list-item-card" data-project="${p.id}" data-search="${p.title.toLowerCase()} ${p.stack.join(' ').toLowerCase()}">
  <div class="list-card-thumb" onclick="openDetails('${p.id}')">
    <img src="${p.image}" alt="${p.title}" loading="lazy">
    <span class="netflix-n">A</span>
  </div>
  <div class="list-card-info">
    <div class="list-card-header">
      <h3>${p.title}</h3>
      <span class="list-match">${p.match} Match</span>
      <span class="list-year">${p.year}</span>
      <span class="list-rating">${p.rating}</span>
    </div>
    <p class="list-desc">${p.desc}</p>
    <div class="list-stack">
      ${p.stack.map(s => `<span>${s}</span>`).join('')}
    </div>
  </div>
  <div class="list-card-actions">
    <button class="play-btn" onclick="openDetails('${p.id}')"><i data-lucide="info"></i> Details</button>
    <a href="${p.repo}" target="_blank" class="info-btn"><i data-lucide="github"></i> Code</a>
    ${p.demo ? `<a href="${p.demo}" target="_blank" class="demo-btn"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
  </div>
</article>`;

const rail = (title, items, klass='') => `<section class="rail-section ${klass} reveal" data-rail-group="rail">
  <div class="rail-heading">
    <h2>${title}</h2>
    <a href="${routes.projects}">Explore All <i data-lucide="chevron-right"></i></a>
  </div>
  <div class="rail-shell">
    <button class="rail-arrow prev" aria-label="Scroll left"><i data-lucide="chevron-left"></i></button>
    <div class="title-rail">${items.join('')}</div>
    <button class="rail-arrow next" aria-label="Scroll right"><i data-lucide="chevron-right"></i></button>
  </div>
</section>`;

function profileGate(){
  return `<section class="profiles-screen" id="profiles">
    <a href="index.html" class="profiles-logo"><img src="${files.logo}" alt="AZ"></a>
    <button class="profile-sound-status" id="sound-toggle" aria-label="Toggle Sound">
      <i data-lucide="${soundEnabled?'volume-2':'volume-x'}"></i> Sound ${soundEnabled?'on':'off'}
    </button>
    <div class="profiles-content">
      <h1>Who's watching?</h1>
      <div class="profiles-list">
        <button class="viewer" data-profile="Recruiter">
          <span class="viewer-art recruiter">
            <img src="${profileMemes.Recruiter}" alt="Recruiter" class="viewer-img">
          </span>
          <b>Recruiter</b>
        </button>
        <button class="viewer" data-profile="Client">
          <span class="viewer-art client">
            <img src="${profileMemes.Client}" alt="Client" class="viewer-img">
          </span>
          <b>Client</b>
        </button>
        <button class="viewer" data-profile="Developer">
          <span class="viewer-art developer">
            <img src="${profileMemes.Developer}" alt="Developer" class="viewer-img">
          </span>
          <b>Developer</b>
        </button>
        <button class="viewer" data-profile="Explorer">
          <span class="viewer-art explorer">
            <img src="${profileMemes.Explorer}" alt="Explorer" class="viewer-img">
          </span>
          <b>Explorer</b>
        </button>
      </div>
      <button class="manage-profiles">MANAGE PROFILES</button>
    </div>
    <div class="profile-transition-logo"><img src="${files.logo}" alt=""></div>
  </section>`;
}

function tvRemoteHint(){
  return '';
}

function getSortedProjectsForProfile(orderIds){
  const map = new Map(projects.map(p => [p.id, p]));
  const ordered = orderIds.map(id => map.get(id)).filter(Boolean);
  projects.forEach(p => { if(!ordered.includes(p)) ordered.push(p); });
  return ordered;
}

function renderBrowseRails(prof){
  const cfg = profileConfigs[prof] || profileConfigs.Recruiter;
  const orderedProjects = getSortedProjectsForProfile(cfg.pCardOrder);
  let skills = [['python','Python'],['fastapi','FastAPI'],['docker','Docker'],['postgresql','PostgreSQL'],['github','GitHub'],['linux','Linux'],['javascript','JavaScript'],['pandas','Pandas']];

  const railsMap = {
    picks: rail(cfg.topPicksTitle, orderedProjects.map(p=>card(p))),
    ranked: rail('Top 6 in Abdullah Zafar Today', projects.map(p=>card(p,true)), 'ranked-rail'),
    continue: rail(`Continue Watching for ${prof}s`, [
      experienceCard('01','Co-Founder & Lead AI Engineer','Eledra Labs','Jun 2026 — Present','76'),
      experienceCard('02','AI Engineering Intern','Bricklix','Mar 2026 — May 2026','100'),
      experienceCard('03','B.S. Computer Science','NASTP Institute of IT','2025 — 2029','30')
    ], 'continue-rail'),
    skills: `<section class="rail-section skill-rail reveal" data-rail-group="skills">
      <div class="rail-heading">
        <h2>Because you explored AI Engineering</h2>
        <a href="${routes.experience}">See Skills <i data-lucide="chevron-right"></i></a>
      </div>
      <div class="skills-row">
        ${skills.map(([l,n])=>`<a href="${routes.experience}" tabindex="0" class="skill-tile"><img src="assets/icons/${l}.svg" alt="${n} logo"><span>${n}</span></a>`).join('')}
      </div>
    </section>`
  };

  return cfg.railOrder.map(key => railsMap[key]).join('');
}

function home(){
  const prof = getActiveProfile();
  const cfg = profileConfigs[prof] || profileConfigs.Recruiter;

  return `${profileGate()}
  ${nav('home')}
  <main class="browse-page">
    <section class="billboard" id="hero-billboard">
      <div class="billboard-bg"></div>
      <div class="billboard-copy">
        <p class="original"><span>A</span> SERIES · PROFILE: <em id="profile-pill">${prof.toUpperCase()}</em></p>
        <h1>ABDULLAH<br><em>ZAFAR</em></h1>
        <p class="billboard-ranking" id="billboard-ranking-text">${cfg.tagline}</p>
        <p class="billboard-description" id="billboard-desc-text">${cfg.description}</p>
        <div class="billboard-buttons" id="billboard-buttons-container">
          <a href="${cfg.primaryBtn.href}" ${cfg.primaryBtn.external?'target="_blank"':''} class="play-btn" tabindex="0">
            <i data-lucide="${cfg.primaryBtn.icon}"></i> ${cfg.primaryBtn.text}
          </a>
          <a href="${cfg.secondaryBtn.href}" class="info-btn" tabindex="0">
            <i data-lucide="${cfg.secondaryBtn.icon}"></i> ${cfg.secondaryBtn.text}
          </a>
        </div>
      </div>
      <div class="maturity" id="maturity-badge">
        <i data-lucide="volume-2"></i>
        <span>${cfg.maturity}</span>
      </div>
    </section>
    <div class="browse-rails" id="browse-rails-container">
      ${renderBrowseRails(prof)}
    </div>
  </main>
  ${tvRemoteHint()}
  ${footer()}
  ${modal()}`;
}

function experienceCard(n,title,company,date,progress){
  return `<a href="${routes.experience}" class="continue-card" tabindex="0">
    <span class="episode-number">${n}</span>
    <div>
      <b>${title}</b>
      <p>${company} · ${date}</p>
      <i><em style="width:${progress}%"></em></i>
    </div>
    <span class="episode-play"><i data-lucide="play"></i></span>
  </a>`;
}

function modal(){
  return `<dialog class="details-modal" id="details-modal">
    <button class="modal-close" aria-label="Close"><i data-lucide="x"></i></button>
    <div class="modal-hero">
      <img alt="Project screenshot">
      <div>
        <p class="original"><span>A</span> ORIGINAL PROJECT</p>
        <h2></h2>
        <div class="modal-actions"></div>
      </div>
    </div>
    <div class="modal-body">
      <div>
        <strong class="modal-match"></strong>
        <p class="modal-desc"></p>
      </div>
      <aside>
        <p><b>Technologies:</b> <span class="modal-stack"></span></p>
        <p><b>Creator:</b> Abdullah Zafar</p>
        <p><b>Genre:</b> AI Engineering</p>
      </aside>
    </div>
  </dialog>`;
}

function projectsPage(){
  const isListView = localStorage.getItem('az-projects-view') === 'list';
  return `${nav('projects')}
  <main class="sub-page">
    <section class="page-billboard projects-billboard">
      <div>
        <p class="original"><span>A</span> COLLECTION</p>
        <h1>MY LIST</h1>
        <p>Six pinned repositories. Real product interfaces. Every project opens directly to its source.</p>
      </div>
    </section>
    <section class="catalog">
      <div class="catalog-head">
        <h2>Abdullah's Pinned Projects</h2>
        <div class="catalog-controls">
          <button class="${!isListView?'active':''}" id="view-grid-btn" aria-label="Grid view" title="Grid View"><i data-lucide="grid-3x3"></i></button>
          <button class="${isListView?'active':''}" id="view-list-btn" aria-label="List view" title="List View"><i data-lucide="list"></i></button>
        </div>
      </div>
      <div class="project-grid ${isListView?'list-mode':''}" id="catalog-container">
        ${isListView ? projects.map(p=>listCard(p)).join('') : projects.map(p=>card(p)).join('')}
      </div>
    </section>
  </main>
  ${tvRemoteHint()}
  ${footer()}
  ${modal()}`;
}

function experiencePage(){
  return `${nav('experience')}
  <main class="sub-page">
    <section class="page-billboard experience-billboard">
      <div>
        <p class="original"><span>A</span> CAREER SERIES</p>
        <h1>EXPERIENCE</h1>
        <p>Three episodes. One trajectory: building dependable AI systems from Lahore for teams around the world.</p>
        <a href="${files.resume}" target="_blank" class="play-btn"><i data-lucide="file-down"></i> Download Resume</a>
      </div>
    </section>
    <section class="episodes">
      <div class="episodes-head">
        <h2>Episodes</h2>
        <span>Season 1</span>
      </div>
      ${episode('1','Co-Founder & Lead AI Engineer','Eledra Labs · Jun 2026 — Present','Co-founded a development agency and lead technical architecture for commercial multi-agent systems. Designed scalable backends, optimized processing loops, and owned the route from idea to production.','bot')}
      ${episode('2','AI Engineering Intern','Bricklix · Mar 2026 — May 2026','Built autonomous phone voice assistants using raw-audio processing and telephony APIs. Created LLM transformation paths and ran endpoint latency analysis to improve real-time response.','audio-lines')}
      ${episode('3','B.S. Computer Science','NASTP Institute of IT · 2025 — 2029','Building rigorous computer-science foundations alongside applied AI systems, competitive programming, and production engineering.','graduation-cap')}
    </section>
    ${stackSection()}
  </main>
  ${footer()}`;
}

function episode(n,title,meta,desc,icon){
  return `<article class="episode reveal" tabindex="0">
    <span class="episode-index">${n}</span>
    <div class="episode-thumb"><i data-lucide="${icon}"></i><span>${n}</span></div>
    <div>
      <h3>${title}</h3>
      <b>${meta}</b>
      <p>${desc}</p>
    </div>
    <button aria-label="Play episode"><i data-lucide="play"></i></button>
  </article>`;
}

function stackSection(){
  let skills=[['python','Python'],['langchain','LangGraph'],['fastapi','FastAPI'],['docker','Docker'],['postgresql','PostgreSQL'],['qdrant','Qdrant'],['pandas','Pandas'],['linux','Linux'],['github','GitHub'],['javascript','JavaScript']];
  return `<section class="stack-section reveal">
    <h2>Cast & Technology</h2>
    <div>
      ${skills.map(([l,n])=>`<span tabindex="0"><img src="assets/icons/${l}.svg" alt="${n}">${n}</span>`).join('')}
    </div>
  </section>`;
}

function aboutPage(){
  return `${nav('about')}
  <main class="sub-page">
    <section class="about-hero">
      <div class="about-photo"><img src="${files.portrait}" alt="Abdullah Zafar"></div>
      <div>
        <p class="original"><span>A</span> BIOGRAPHY</p>
        <h1>ABDULLAH<br>ZAFAR</h1>
        <p class="about-meta"><b>98% Match</b> 2026 · Lahore, Pakistan · AI Engineer</p>
        <p>I work where AI demos become reliable software: latency gets measured, outputs get validated, tools receive guardrails, and the system still has to work tomorrow.</p>
        <p>My focus spans real-time voice, retrieval, memory, healthcare workflows, and conversational data systems. The goal is consistent across all of them—make AI genuinely useful.</p>
        <div class="billboard-buttons">
          <a href="${files.resume}" target="_blank" class="play-btn"><i data-lucide="file-down"></i> Resume</a>
          <a target="_blank" href="${links.linkedin}" class="info-btn"><i data-lucide="linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </section>
    <section class="achievement-row">
      <article tabindex="0">
        <span>01</span>
        <h2>National Rank #70</h2>
        <p>Ranked 70th in Pakistan among thousands of Codeforces competitors.</p>
      </article>
      <article tabindex="0">
        <span>02</span>
        <h2>100+ Day Streak</h2>
        <p>Maintained a daily competitive-programming challenge streak.</p>
      </article>
      <article tabindex="0">
        <span>03</span>
        <h2>6 Pinned Builds</h2>
        <p>A portfolio spanning voice, RAG, multimodal agents, memory, health, and data.</p>
      </article>
    </section>
  </main>
  ${footer()}`;
}

function contactPage(){
  return `${nav('contact')}
  <main class="sub-page contact-page">
    <section class="contact-title">
      <p class="original"><span>A</span> DIRECT LINE</p>
      <h1>LET'S MAKE<br>SOMETHING <em>WORTH WATCHING.</em></h1>
      <p>Hiring for an AI role or building a serious AI product? Send the brief.</p>
    </section>
    <section class="contact-layout">
      <form id="contact-form">
        <div class="field-row">
          <label>Name<input required name="name" placeholder="Your name"></label>
          <label>Email<input required type="email" name="email" placeholder="you@company.com"></label>
        </div>
        <label>I'm reaching out about
          <select name="type">
            <option>A role / opportunity</option>
            <option>A client project</option>
            <option>A collaboration</option>
            <option>Something else</option>
          </select>
        </label>
        <label>Message
          <textarea required name="message" placeholder="Tell me what you're building..."></textarea>
        </label>
        <button class="play-btn" type="submit"><i data-lucide="send"></i> Send Message</button>
        <small>Opens your email app with the message prefilled. Nothing is stored.</small>
      </form>
      <aside>
        <h2>More ways to connect</h2>
        <a target="_blank" href="${links.linkedin}">
          <i data-lucide="linkedin"></i>
          <span><b>LinkedIn</b>in/abdullahz-dev</span>
          <i data-lucide="arrow-up-right"></i>
        </a>
        <a target="_blank" href="${links.github}">
          <i data-lucide="github"></i>
          <span><b>GitHub</b>Abdullah-Zafarr</span>
          <i data-lucide="arrow-up-right"></i>
        </a>
        <a href="${links.email}">
          <i data-lucide="mail"></i>
          <span><b>Email</b>abdullahzafar.codes@gmail.com</span>
          <i data-lucide="arrow-up-right"></i>
        </a>
        <p><i></i> Available for selected roles and client work</p>
      </aside>
    </section>
  </main>
  ${footer()}`;
}

const renderers = { home, projects:projectsPage, experience:experiencePage, about:aboutPage, contact:contactPage };
if (pageName && renderers[pageName]) $('#site').innerHTML = renderers[pageName]();
iconify();

function applyProfileUI(profileName) {
  sessionStorage.setItem('az-profile', profileName);
  const cfg = profileConfigs[profileName] || profileConfigs.Recruiter;

  const pill = $('#profile-pill');
  if (pill) pill.textContent = profileName.toUpperCase();

  const rankText = $('#billboard-ranking-text');
  if (rankText) rankText.innerHTML = cfg.tagline;

  const descText = $('#billboard-desc-text');
  if (descText) descText.textContent = cfg.description;

  const btns = $('#billboard-buttons-container');
  if (btns) {
    btns.innerHTML = `
      <a href="${cfg.primaryBtn.href}" ${cfg.primaryBtn.external?'target="_blank"':''} class="play-btn" tabindex="0">
        <i data-lucide="${cfg.primaryBtn.icon}"></i> ${cfg.primaryBtn.text}
      </a>
      <a href="${cfg.secondaryBtn.href}" class="info-btn" tabindex="0">
        <i data-lucide="${cfg.secondaryBtn.icon}"></i> ${cfg.secondaryBtn.text}
      </a>
    `;
  }

  const mat = $('#maturity-badge span');
  if (mat) mat.textContent = cfg.maturity;

  const navAvatar = $('.nav-avatar');
  if (navAvatar) {
    navAvatar.style.background = cfg.avatarColor;
    navAvatar.textContent = profileName.slice(0,2).toUpperCase();
  }

  const railsContainer = $('#browse-rails-container');
  if (railsContainer) {
    railsContainer.innerHTML = renderBrowseRails(profileName);
    bindRailInteractions();
    initIntersectionObserver();
  }

  iconify();
}

function bindRailInteractions(){
  $$('.rail-shell').forEach(shell => {
    const r = $('.title-rail', shell);
    const prevBtn = $('.prev', shell);
    const nextBtn = $('.next', shell);

    const updateArrows = () => {
      if(!r) return;
      if(prevBtn) {
        prevBtn.style.opacity = r.scrollLeft > 15 ? '1' : '0.2';
        prevBtn.style.pointerEvents = r.scrollLeft > 15 ? 'auto' : 'none';
      }
      if(nextBtn) {
        const atEnd = r.scrollLeft >= (r.scrollWidth - r.clientWidth - 15);
        nextBtn.style.opacity = atEnd ? '0.2' : '1';
        nextBtn.style.pointerEvents = atEnd ? 'none' : 'auto';
      }
    };

    nextBtn?.addEventListener('click', () => {
      r.scrollBy({ left: r.clientWidth * 0.75, behavior: 'smooth' });
      setTimeout(updateArrows, 400);
    });
    prevBtn?.addEventListener('click', () => {
      r.scrollBy({ left: -r.clientWidth * 0.75, behavior: 'smooth' });
      setTimeout(updateArrows, 400);
    });

    r?.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  });

  $$('[data-info]').forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    openDetails(btn.dataset.info);
  }));

  $$('.title-card').forEach(c => c.addEventListener('click', e => {
    if(!e.target.closest('a,button')) openDetails(c.dataset.project);
  }));
}

let observerInstance = null;
function initIntersectionObserver(){
  observerInstance?.disconnect();
  observerInstance = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('revealed');
  }), { threshold: 0.05 });
  $$('.reveal').forEach(el => observerInstance.observe(el));
}

function initTVKeyboardNavigation(){
  let activeFocusEl = null;

  function getFocusableElements() {
    const dialog = $('#details-modal');
    if (dialog && dialog.open) {
      return $$('button, a, input, [tabindex="0"]', dialog).filter(el => !el.hidden && el.offsetParent !== null);
    }
    return $$('.billboard-buttons a, .title-card, .continue-card, .skill-tile, .project-grid .title-card, .episode, .stack-section span, .achievement-row article, .footer-links a, .eledra-links-row a', document)
      .filter(el => !el.hidden && el.offsetParent !== null);
  }

  window.addEventListener('keydown', e => {
    const dialog = $('#details-modal');
    const searchBox = $('.search-box');

    if (e.key === 'Escape') {
      if (dialog && dialog.open) {
        dialog.close();
        e.preventDefault();
        return;
      }
      if (searchBox?.classList.contains('open')) {
        searchBox.classList.remove('open');
        e.preventDefault();
        return;
      }
      $('#notif-dropdown')?.classList.remove('open');
      $('.mobile-drawer')?.classList.remove('open');
      return;
    }

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      return;
    }

    if ((e.key === '/' || e.key === 's' || e.key === 'S') && !e.ctrlKey && !e.metaKey) {
      if (!dialog?.open) {
        e.preventDefault();
        searchBox?.classList.add('open');
        $('.search-box input')?.focus();
        return;
      }
    }

    if (e.key === 'p' || e.key === 'P') {
      if (!dialog?.open) {
        sessionStorage.removeItem('az-profile');
        location.href = 'index.html';
        return;
      }
    }

    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      const items = getFocusableElements();
      if (!items.length) return;

      e.preventDefault();
      let currentIndex = items.indexOf(document.activeElement);
      if (currentIndex === -1) currentIndex = items.indexOf(activeFocusEl);

      let nextIndex = currentIndex;

      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % items.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      } else if (e.key === 'ArrowDown') {
        const currentRect = items[currentIndex]?.getBoundingClientRect();
        if (currentRect) {
          const below = items.filter((it, idx) => idx > currentIndex && it.getBoundingClientRect().top > currentRect.bottom - 10);
          nextIndex = below.length ? items.indexOf(below[0]) : (currentIndex + 1) % items.length;
        } else {
          nextIndex = 0;
        }
      } else if (e.key === 'ArrowUp') {
        const currentRect = items[currentIndex]?.getBoundingClientRect();
        if (currentRect) {
          const above = items.filter((it, idx) => idx < currentIndex && it.getBoundingClientRect().bottom < currentRect.top + 10);
          nextIndex = above.length ? items.indexOf(above[above.length - 1]) : Math.max(0, currentIndex - 1);
        } else {
          nextIndex = 0;
        }
      }

      const target = items[nextIndex];
      if (target) {
        $$('.tv-focus').forEach(el => el.classList.remove('tv-focus'));
        target.classList.add('tv-focus');
        target.focus();
        activeFocusEl = target;

        const parentRail = target.closest('.title-rail');
        if (parentRail) {
          target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.classList.contains('title-card')) {
      e.preventDefault();
      openDetails(document.activeElement.dataset.project);
    }
  });

  document.addEventListener('focusin', e => {
    if (e.target.classList?.contains('title-card') || e.target.classList?.contains('continue-card')) {
      $$('.tv-focus').forEach(el => el.classList.remove('tv-focus'));
      e.target.classList.add('tv-focus');
      activeFocusEl = e.target;
    }
  });
}

function setup(){
  const navEl = $('.netflix-nav');
  window.addEventListener('scroll', () => navEl?.classList.toggle('scrolled', scrollY > 40));

  $('.mobile-toggle')?.addEventListener('click', () => $('.mobile-drawer')?.classList.add('open'));
  $('.drawer-close')?.addEventListener('click', () => $('.mobile-drawer')?.classList.remove('open'));

  // Search
  $('.search-toggle')?.addEventListener('click', () => {
    $('.search-box')?.classList.add('open');
    $('.search-box input')?.focus();
  });
  $('.search-close')?.addEventListener('click', () => $('.search-box')?.classList.remove('open'));

  $('.search-box input')?.addEventListener('input', e => {
    const val = e.target.value.toLowerCase().trim();
    const cards = $$('.title-card, .list-item-card');
    cards.forEach(c => {
      const searchData = c.dataset.search || '';
      c.hidden = val ? !searchData.includes(val) : false;
    });
  });

  // Notifications toggle
  $('.notif-toggle')?.addEventListener('click', e => {
    e.stopPropagation();
    $('#notif-dropdown')?.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.notification-wrapper')) {
      $('#notif-dropdown')?.classList.remove('open');
    }
  });

  // Projects View Toggle (Grid / List)
  const gridBtn = $('#view-grid-btn');
  const listBtn = $('#view-list-btn');
  const catalog = $('#catalog-container');

  gridBtn?.addEventListener('click', () => {
    gridBtn.classList.add('active');
    listBtn?.classList.remove('active');
    catalog?.classList.remove('list-mode');
    localStorage.setItem('az-projects-view', 'grid');
    if (catalog) catalog.innerHTML = projects.map(p => card(p)).join('');
    bindRailInteractions();
    iconify();
  });

  listBtn?.addEventListener('click', () => {
    listBtn.classList.add('active');
    gridBtn?.classList.remove('active');
    catalog?.classList.add('list-mode');
    localStorage.setItem('az-projects-view', 'list');
    if (catalog) catalog.innerHTML = projects.map(p => listCard(p)).join('');
    bindRailInteractions();
    iconify();
  });

  // Sound Toggle on Profile Screen
  $('#sound-toggle')?.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    const btn = $('#sound-toggle');
    if (btn) btn.innerHTML = `<i data-lucide="${soundEnabled?'volume-2':'volume-x'}"></i> Sound ${soundEnabled?'on':'off'}`;
    iconify();
  });

  bindRailInteractions();

  const gate = $('#profiles');
  if (gate) {
    const forcedProfile = new URLSearchParams(location.search).get('profile');
    const isLanding = location.pathname.endsWith('/') || location.pathname.endsWith('/index.html');
    if (forcedProfile) sessionStorage.setItem('az-profile', forcedProfile);

    $$('.viewer', gate).forEach(v => v.addEventListener('click', () => {
      const selected = v.dataset.profile;
      sessionStorage.setItem('az-profile', selected);
      v.classList.add('chosen');
      $$('.viewer', gate).filter(x => x !== v).forEach(x => x.classList.add('not-chosen'));
      gate.classList.add('profile-selecting');

      if (soundEnabled) {
        const sound = new Audio('assets/audio/netflix-sound.mp3');
        sound.volume = 0.72;
        sound.play().catch(() => {});
      }

      setTimeout(() => {
        gate.classList.add('profile-exit');
        applyProfileUI(selected);
      }, 1250);

      setTimeout(() => gate.remove(), 1900);
    }));

    const savedProfile = sessionStorage.getItem('az-profile');
    if (savedProfile && (!isLanding || forcedProfile)) {
      gate.remove();
      applyProfileUI(savedProfile);
    }
  }

  $('.profile-menu')?.addEventListener('click', () => {
    sessionStorage.removeItem('az-profile');
    location.href = 'index.html';
  });

  const dialog = $('#details-modal');
  $('.modal-close')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

  $('.tv-hint-close')?.addEventListener('click', () => $('#tv-hint')?.remove());

  initIntersectionObserver();

  $('#contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    location.href = `mailto:abdullahzafar.codes@gmail.com?subject=${encodeURIComponent(`${d.get('type')} — ${d.get('name')}`)}&body=${encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`)}`;
  });

  initTVKeyboardNavigation();

  // Footer Fun Interactive Cycler
  const funPhrases = [
    'LET’S BUILD SOMETHING.',
    'ARE YOU STILL WATCHING?',
    'WORKS ON MY MACHINE.',
    '0 ERRORS, 42 WARNINGS.',
    'SUB-750MS LATENCY.',
    'SHIP IT TO PROD.',
    'TA-DUM!'
  ];
  let phraseIdx = 0;
  const wordmarkWrap = $('#footer-easter-egg');
  const wordmarkEl = $('#footer-wordmark');
  
  if (wordmarkWrap && wordmarkEl) {
    wordmarkWrap.addEventListener('click', () => {
      phraseIdx = (phraseIdx + 1) % funPhrases.length;
      wordmarkEl.classList.add('wordmark-glitch');
      
      const newPhrase = funPhrases[phraseIdx];
      wordmarkEl.textContent = newPhrase;

      if (newPhrase === 'TA-DUM!') {
        const sound = new Audio('assets/audio/netflix-sound.mp3');
        sound.volume = 0.65;
        sound.play().catch(() => {});
      }

      setTimeout(() => {
        wordmarkEl.classList.remove('wordmark-glitch');
      }, 250);
    });
  }
}

function openDetails(id){
  const p = projects.find(x => x.id === id);
  const d = $('#details-modal');
  if(!p || !d) return;

  $('.modal-hero>img', d).src = p.image;
  $('.modal-hero h2', d).textContent = p.title;
  $('.modal-match', d).textContent = `${p.match} Match · ${p.year} · ${p.runtime}`;
  $('.modal-desc', d).textContent = p.desc;
  $('.modal-stack', d).textContent = p.stack.join(', ');
  $('.modal-actions', d).innerHTML = `
    <a class="play-btn" target="_blank" href="${p.repo}"><i data-lucide="github"></i> View Repository</a>
    ${p.demo ? `<a class="info-btn" target="_blank" href="${p.demo}"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
  `;
  iconify();
  d.showModal();
}

setup();

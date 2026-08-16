const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const iconify = () => {
  window.lucide?.createIcons({attrs:{'stroke-width':2}});
  $$('a[target="_blank"]').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
};

const links = {
  github:'https://github.com/Abdullah-Zafarr',
  linkedin:'https://www.linkedin.com/in/abdullahz-dev/',
  email:'mailto:abdullahzafar.codes@gmail.com',
  codeforces:'https://codeforces.com/profile/rodrickkkk'
};
const routes = {
  home:'./',
  projects:'projects/',
  experience:'experience/',
  about:'about/',
  blog:'blog/',
  contact:'contact/'
};
const files = {
  logo:'assets/icons/logo.PNG',
  resume:'assets/documents/Abdullah-Zafar-Resume.pdf',
  portrait:'assets/images/profile/abdullah-zafar.jfif',
  heroPortrait:'assets/images/profile/hero-portrait-v2.webp',
  heroPortraitSmall:'assets/images/profile/hero-portrait-v2-960.webp'
};

const projects = [
 {
   id:'voice',
   title:'Production-Grade Voice Agent',
   short:'Voice AI',
   image:'assets/images/projects/voice-ui.png?v=5',
   rank:'1',
   year:'2026',
   runtime:'Sub-750ms',
   desc:'A low-latency medical voice platform with LiveKit/WebRTC, Gladia STT, Cartesia TTS, OpenAI orchestration, Supabase operations, and a React admin surface.',
   stack:['Python','LiveKit','Cartesia','Supabase'],
   repo:'https://github.com/Abdullah-Zafarr/Production_Grade_Voice_Agent',
   teaserTag:'LIVEKIT WEBRTC · REAL-TIME VOICE'
 },
 {
   id:'clinical',
   title:'Autonomous Clinical Reporter',
   short:'Clinical AI',
   image:'assets/images/projects/clinical.png?v=5',
   rank:'2',
   year:'2026',
   runtime:'99.4% accuracy',
   desc:'A clinical ultrasound workflow with dynamic worksheets, automated reporting, organization management, HL7 exchange, and voice transcription.',
   stack:['Next.js','Supabase','Gladia','HL7'],
   repo:'https://github.com/Abdullah-Zafarr/Autonomous-Clinical-Reporter',
   teaserTag:'ULTRASOUND WORKFLOW · HL7 READY'
 },
 {
   id:'analyst',
   title:'LLM Data Analyst',
   short:'DataMind AI',
   image:'assets/images/projects/analyst.png?v=5',
   rank:'3',
   year:'2026',
   runtime:'91% self-fix',
   desc:'A conversational analyst that translates natural language into sandboxed Pandas execution with self-correcting debug loops.',
   stack:['Python','Pandas','Streamlit','Groq'],
   repo:'https://github.com/Abdullah-Zafarr/LLM-Data-Analyst-Groq',
   teaserTag:'SANDBOXED REPL · SELF-CORRECTING FIX'
 },
 {
   id:'rag',
   title:'Native RAG Architecture',
   short:'Native RAG',
   image:'assets/images/projects/rag.png?v=5',
   rank:'4',
   year:'2026',
   runtime:'Framework-free',
   desc:'A production RAG engine built from scratch with OCR ingestion, vector-store purging, Groq streaming, and grounding telemetry.',
   stack:['Python','ChromaDB','OCR','Groq'],
   repo:'https://github.com/Abdullah-Zafarr/Native-RAG-Architecture',
   teaserTag:'ZERO-FRAMEWORK RAG · CHROMADB TELEMETRY'
 },
 {
   id:'multimodal',
   title:'Multimodal Agentic Workflow',
   short:'Agent Workflow',
   image:'assets/images/projects/multimodal.png?v=5',
   rank:'5',
   year:'2026',
   runtime:'Multi-tool',
   desc:'An agentic engine combining web search, audio extraction, Gemini Multimodal, cleanup, and dual CLI/Streamlit interfaces.',
   stack:['Python','Gemini','SerpAPI','Streamlit'],
   repo:'https://github.com/Abdullah-Zafarr/Multimodal-Agentic-Workflow',
   teaserTag:'MULTI-AGENT PIPELINE · GEMINI REASONING'
 },
 {
   id:'memory',
   title:'Mem0 Graph Memory Engine',
   short:'Memory Engine',
   image:'assets/images/projects/memory.png?v=5',
   rank:'6',
   year:'2026',
   runtime:'Long-term',
   desc:'A persistent memory agent with multi-session facts, contradiction overrides, Qdrant storage, and context telemetry.',
   stack:['Python','Mem0','Qdrant','Agents'],
   repo:'https://github.com/Abdullah-Zafarr/Mem0-Graph-Memory-Engine',
   teaserTag:'GRAPH MEMORY OVERRIDES · QDRANT STORE'
 }
];

const articles = [
  {
    id: 'voice-latency',
    title: 'Architecting a Sub-750ms Conversational Voice Agent with Twilio & Groq',
    short: 'Sub-750ms Voice AI',
    category: 'Voice AI',
    date: 'Aug 2026',
    readTime: '6 min read',
    tag: 'TELEPHONY & AUDIO',
    badge: 'FEATURED EDITORIAL',
    featured: true,
    image: 'assets/images/projects/voice-ui.png',
    summary: 'An architecture retrospective on budgeting latency across the earlier Twilio WebSocket, Deepgram STT, Groq streaming, and audio-chunk pipeline.',
    repo: 'https://github.com/Abdullah-Zafarr/Production_Grade_Voice_Agent',
    stack: ['Twilio', 'WebSockets', 'Deepgram', 'Groq', 'TypeScript'],
    content: `
      <aside class="article-note"><strong>Architecture retrospective:</strong> This log covers the earlier Twilio/Groq implementation. The current repository has evolved to LiveKit, Gladia, Cartesia, OpenAI, Supabase, and a React operations dashboard.</aside>
      <p class="lead-p">In conversational voice systems, human turn-taking happens naturally within a <strong>500ms to 750ms window</strong>. Any delay beyond 800ms breaks conversation rhythm, causing unnatural pauses, awkward silence, and accidental interruptions.</p>
      
      <h3>The Anatomy of a Latency Budget</h3>
      <p>To deliver real-time conversations over standard PSTN phone lines, every single millisecond must be accounted for across the pipeline:</p>
      <ul>
        <li><strong>Twilio Audio Packetization & WebSockets</strong>: ~120ms (8kHz mu-law audio streamed over full-duplex WS).</li>
        <li><strong>Speech-to-Text (Deepgram Nova-2)</strong>: ~140ms (streaming endpointing with interim transcription events).</li>
        <li><strong>LLM Time-to-First-Token (Groq Llama-3-70B)</strong>: ~180ms (accelerated LPU streaming token output).</li>
        <li><strong>Text-to-Speech Generation & Audio Buffering</strong>: ~160ms (sentence-chunked streaming synthesis).</li>
        <li><strong>Total Round-Trip Telephony Latency</strong>: <strong>~600–680ms</strong>.</li>
      </ul>

      <h3>Handling Interruptions & Full-Duplex Barge-in</h3>
      <p>A classic failure mode of early voice bots is talking over the human caller. We implemented a dual-stream cancellation queue: as soon as the Deepgram interim endpoint detects speech energy from the caller, the active audio playback buffer is instantly purged and the Groq generation stream is aborted.</p>

      <pre><code>// Interruption clearing & audio stream abort
ws.on('message', (data) => {
  const msg = JSON.parse(data);
  if (msg.event === 'media') {
    deepgramLive.send(msg.media.payload);
  } else if (msg.event === 'interruption') {
    activeTTSStream.abort();
    twilioStream.send(JSON.stringify({ event: 'clear' }));
  }
});</code></pre>

      <h3>Production Telephony Key Takeaways</h3>
      <p>Never wait for an entire paragraph or thought to complete before triggering TTS. Yielding token buffers at natural punctuation boundaries (<code>.</code>, <code>,</code>, <code>?</code>) creates fluid human interaction without awkward dead air.</p>
    `
  },
  {
    id: 'native-rag',
    title: 'Zero-Framework RAG: Why We Replaced LangChain with Native ChromaDB & Python',
    short: 'Framework-Free RAG',
    category: 'RAG Architecture',
    date: 'Jul 2026',
    readTime: '8 min read',
    tag: 'PRODUCTION RETRIEVAL',
    badge: 'ARCHITECTURE',
    featured: false,
    image: 'assets/images/projects/rag.png',
    summary: 'Heavy abstractions hide memory leaks, token waste, and debugging complexity. How we engineered a zero-framework RAG engine with OCR ingestion and vector purging.',
    repo: 'https://github.com/Abdullah-Zafarr/Native-RAG-Architecture',
    stack: ['Python', 'ChromaDB', 'OCR', 'Groq', 'FastAPI'],
    content: `
      <p class="lead-p">Frameworks like LangChain are convenient for 10-minute prototypes, but in high-throughput production environments, deep nested abstraction hierarchies make observability difficult, increase cold-start times, and hide memory leaks.</p>

      <h3>Why Native Python Beats Heavy Wrappers</h3>
      <p>By interacting directly with ChromaDB's native Python API and raw HTTP embedding endpoints, we reduced memory footprint by 45% and reduced retrieval overhead from 210ms down to 42ms.</p>

      <h3>The 4-Step Ingestion & Purge Lifecycle</h3>
      <ol>
        <li><strong>Raw OCR & Chunking</strong>: Tesseract/PDF parser outputs normalized markdown chunks with overlapping semantic boundaries.</li>
        <li><strong>Vector Space Purging</strong>: Old document versions are deterministically purged by hash index to avoid stale hallucination vectors.</li>
        <li><strong>Hybrid Re-Ranking</strong>: Vector similarity combined with BM25 keyword scoring for exact terminology matches.</li>
        <li><strong>Grounding Telemetry</strong>: Returning exact citation bounding boxes and source timestamps for 100% auditable answers.</li>
      </ol>

      <pre><code># Deterministic collection purging & batch upsert
def sync_document_collection(collection, doc_id: str, chunks: list[str]):
    # Purge existing vectors with metadata doc_id
    collection.delete(where={"doc_id": doc_id})
    
    # Upsert clean batches with embeddings
    embeddings = generate_batch_embeddings(chunks)
    collection.add(
        ids=[f"{doc_id}_{i}" for i in range(len(chunks))],
        documents=chunks,
        embeddings=embeddings,
        metadatas=[{"doc_id": doc_id, "chunk_idx": i} for i in range(len(chunks))]
    )</code></pre>

      <h3>Telemetry & Hallucination Prevention</h3>
      <p>We log cosine similarity distribution per retrieval query. If the top-k score falls below a calibrated threshold of 0.65, the system responds with a fallback confirmation rather than hallucinating unreliable text.</p>
    `
  },
  {
    id: 'clinical-agent',
    title: 'Autonomous Ultrasound & DICOM Parsing with Multi-Agent Guardrails',
    short: 'Clinical AI Reporter',
    category: 'Healthcare AI',
    date: 'Jun 2026',
    readTime: '7 min read',
    tag: 'CLINICAL SYSTEMS',
    badge: 'HEALTHCARE AI',
    featured: false,
    image: 'assets/images/projects/clinical.png',
    summary: 'An architecture retrospective on converting unconstrained ultrasound scans into validated reports with deterministic agent state and structured schemas.',
    repo: 'https://github.com/Abdullah-Zafarr/Autonomous-Clinical-Reporter',
    stack: ['LangGraph', 'Gemini', 'Pydantic', 'FastAPI', 'DICOM'],
    content: `
      <aside class="article-note"><strong>Architecture retrospective:</strong> This log documents the earlier LangGraph/Pydantic reporting architecture. The current Sonolynx repository has evolved into a Next.js and Supabase clinical workflow with Gladia/Deepgram transcription and HL7 integration.</aside>
      <p class="lead-p">Medical diagnostic systems leave zero room for hallucinations. An incorrect measurement or omitted finding can compromise patient care. Here is how we achieved a <strong>99.4% validation rate</strong> converting DICOM ultrasound scans into structured medical reports.</p>

      <h3>State Machine Architecture with LangGraph</h3>
      <p>Rather than relying on a single prompt to parse images and format output, the workflow is partitioned into discrete deterministic nodes:</p>
      <ul>
        <li><strong>Ingestion & OCR Node</strong>: Extracts patient metadata, scan parameters, and acoustic probe markers.</li>
        <li><strong>Diagnostic Feature Extractor</strong>: Identifies anatomical measurements (e.g., organ dimensions, echogenicity, doppler velocity).</li>
        <li><strong>Pydantic Strict Validation Gate</strong>: Enforces schema compliance, physiological range boundaries, and standard medical terminology.</li>
        <li><strong>Self-Correction Loop</strong>: If validation fails, errors are passed back to the model with specific schema violations for immediate correction.</li>
      </ul>

      <pre><code>class UltrasoundReport(BaseModel):
    patient_id: str = Field(..., regex=r"^[A-Z0-9_-]{6,16}$")
    liver_span_cm: float = Field(..., ge=5.0, le=25.0)
    echogenicity: Literal["Normal", "Increased", "Decreased", "Coarse"]
    focal_lesions_identified: bool
    findings_summary: str = Field(..., min_length=20)</code></pre>

      <h3>Impact & Results</h3>
      <p>The system reduced radiology reporting turnaround time from 45 minutes to under 90 seconds while maintaining physician verification compliance.</p>
    `
  },
  {
    id: 'codeforces-engineering',
    title: 'From LeetCode to Top 70 on Codeforces: Algorithmic Systems Engineering',
    short: 'Codeforces & Algorithms',
    category: 'Algorithms',
    date: 'May 2026',
    readTime: '5 min read',
    tag: 'COMPETITIVE PROGRAMMING',
    badge: 'ALGORITHMS',
    featured: false,
    image: 'assets/images/projects/analyst.png',
    summary: 'How competitive programming principles—memory cache locality, branch prediction, and constant-factor optimization—directly elevate production backend engineering.',
    repo: 'https://codeforces.com/profile/rodrickkkk',
    stack: ['C++', 'Algorithms', 'Data Structures', 'Performance'],
    content: `
      <p class="lead-p">Ranking in the <strong>Top 70 in Pakistan on Codeforces</strong> and maintaining a 100+ day streak taught me more about building scalable backend systems than any textbook.</p>

      <h3>What Competitive Programming Teaches You About Real Systems</h3>
      <ol>
        <li><strong>Algorithmic Complexity vs. Constant Factors</strong>: Big-O notation is essential, but in latency-critical systems (like sub-750ms voice pipelines), cache line alignment and memory locality matter just as much as asymptotic bounds.</li>
        <li><strong>Edge Cases Are Not Exceptions; They Are Requirements</strong>: When an online judge tests your code with 100 hidden test cases including max limits and null topologies, you develop instinctual rigor for defensive coding.</li>
        <li><strong>Debugging Under Pressure</strong>: Solving Div.2 and Div.1 problems with a 2-hour clock sharpens your mental tracer for finding off-by-one errors and memory leaks in minutes.</li>
      </ol>

      <pre><code>// Fast I/O and cache-friendly segment tree updates
struct SegTree {
    int n;
    vector&lt;long long&gt; tree;
    SegTree(int n): n(n), tree(4 * n, 0) {}
    
    void update(int node, int start, int end, int idx, long long val) {
        if (start == end) { tree[node] = val; return; }
        int mid = (start + end) &gt;&gt; 1;
        if (idx &lt;= mid) update(node &lt;&lt; 1, start, mid, idx, val);
        else update((node &lt;&lt; 1) | 1, mid + 1, end, idx, val);
        tree[node] = tree[node &lt;&lt; 1] + tree[(node &lt;&lt; 1) | 1];
    }
};</code></pre>

      <h3>Bridging the Gap to Production</h3>
      <p>The intuition gained from competitive programming translates directly into writing high-performance FastAPI backends, vector search pruning, and low-latency agent orchestrators.</p>
    `
  },
  {
    id: 'persistent-memory',
    title: 'Long-Term Agent Memory: Solving Contradictions with Graph Overrides',
    short: 'Graph Memory Engine',
    category: 'Agentic AI',
    date: 'Apr 2026',
    readTime: '6 min read',
    tag: 'GRAPH MEMORY',
    badge: 'PERSISTENCE',
    featured: false,
    image: 'assets/images/projects/memory.png',
    summary: 'Moving beyond simple vector similarity: building dynamic memory trees that resolve factual contradictions across multi-turn agent sessions using Mem0 and Qdrant.',
    repo: 'https://github.com/Abdullah-Zafarr/Mem0-Graph-Memory-Engine',
    stack: ['Mem0', 'Qdrant', 'Python', 'Vector DB'],
    content: `
      <p class="lead-p">Traditional RAG fails when a user says <em>"Actually, I moved from Lahore to San Francisco"</em>. A naïve vector search will retrieve both facts with equal similarity, confusing the LLM into generating conflicting statements.</p>

      <h3>Dynamic Graph Overrides</h3>
      <p>Using Mem0 combined with Qdrant vector storage, we track episodic memory states with temporal validity stamps and contradiction resolution graphs.</p>

      <h3>Core Lifecycle</h3>
      <ul>
        <li><strong>Fact Extraction</strong>: Extracting atomic entity-attribute-value triples during conversational dialogue.</li>
        <li><strong>Contradiction Detection</strong>: Checking candidate triples against existing entity states.</li>
        <li><strong>Supersede Action</strong>: Invalidating obsolete memory nodes while keeping an auditable history trace.</li>
      </ul>

      <pre><code># Fact ingestion with contradiction resolution
def upsert_agent_memory(user_id: str, new_fact: str):
    conflicts = memory_engine.find_conflicts(user_id=user_id, fact=new_fact)
    for stale_fact_id in conflicts:
        memory_engine.deprecate(stale_fact_id, reason="superseded_by_newer_statement")
        
    memory_engine.add(user_id=user_id, text=new_fact, timestamp=time.time())</code></pre>
    `
  }
];

const profileConfigs = {
  Recruiter: {
    avatarColor: 'linear-gradient(145deg,#168bd1,#174f8b)',
    tagline: '<b>Available</b> for AI engineering roles · Lahore / Remote',
    description: 'I build latency-critical voice systems, validated clinical workflows, and retrieval infrastructure that is measured, observable, and ready for production.',
    primaryBtn: { text:'Download Resume', icon:'file-down', href:files.resume, external:true },
    secondaryBtn: { text:'View Experience', icon:'history', href:routes.experience },
    maturity: 'HIRE 2026',
    topPicksTitle: `Selected work for hiring teams`,
    pCardOrder: ['voice', 'clinical', 'analyst', 'rag', 'multimodal', 'memory'],
    railOrder: ['picks', 'continue', 'skills']
  },
  Developer: {
    avatarColor: 'linear-gradient(145deg,#b94bd0,#522069)',
    tagline: '<b>Top 70</b> on Codeforces in Pakistan · Systems-first AI engineering',
    description: 'Explore framework-free RAG, low-latency LiveKit voice pipelines, persistent graph memory, and agent loops designed with explicit failure modes and telemetry.',
    primaryBtn: { text:'GitHub Profile', icon:'github', href:links.github, external:true },
    secondaryBtn: { text:'Explore Architecture', icon:'code-xml', href:routes.projects },
    maturity: 'DEV 2026',
    topPicksTitle: `Architecture and open-source builds`,
    pCardOrder: ['rag', 'voice', 'clinical', 'memory', 'analyst', 'multimodal'],
    railOrder: ['picks', 'skills', 'continue']
  },
  Client: {
    avatarColor: 'linear-gradient(145deg,#00a98f,#14534d)',
    tagline: '<b>Commercial AI systems</b> · Designed around measurable outcomes',
    description: 'I turn ambitious AI product ideas into dependable software—from real-time telephony agents to automated reporting and internal knowledge systems.',
    primaryBtn: { text:`Let's Build Together`, icon:'send', href:routes.contact },
    secondaryBtn: { text:'View Product Builds', icon:'layers-3', href:routes.projects },
    maturity: 'PROD 2026',
    topPicksTitle: `Product builds and live systems`,
    pCardOrder: ['clinical', 'voice', 'rag', 'analyst', 'multimodal', 'memory'],
    railOrder: ['picks', 'continue', 'skills']
  },
  Explorer: {
    avatarColor: 'linear-gradient(145deg,#ff8b24,#9b4007)',
    tagline: '<b>Top 70</b> in Pakistan on Codeforces · AI systems engineer',
    description: 'AI engineer and co-founder building production-grade voice agents, retrieval systems, and intelligent workflows that hold up outside the demo.',
    primaryBtn: { text:'Resume', icon:'file-down', href:files.resume, external:true },
    secondaryBtn: { text:'More Info', icon:'circle-alert', href:routes.about },
    maturity: 'AI 2026',
    topPicksTitle: `A guided tour of the work`,
    pCardOrder: ['voice', 'clinical', 'analyst', 'rag', 'multimodal', 'memory'],
    railOrder: ['picks', 'continue', 'skills']
  }
};

const getActiveProfile = () => sessionStorage.getItem('az-profile') || 'Recruiter';
const pageName = document.body.dataset.page || '';

const nav = active => {
  return `<a class="skip-link" href="#main-content">Skip to content</a>
  <header class="netflix-nav">
    <a href="${routes.home}" class="nav-logo" aria-label="Abdullah Zafar home">
      <span class="nav-mark" aria-hidden="true">AZ<span>/</span></span>
      <span class="nav-name">ABDULLAH ZAFAR</span>
    </a>
    <nav aria-label="Primary navigation">
      <a class="${active==='home'?'active':''}" href="${routes.home}">Home</a>
      <a class="${active==='projects'?'active':''}" href="${routes.projects}">Projects</a>
      <a class="${active==='experience'?'active':''}" href="${routes.experience}">Experience</a>
      <a class="${active==='about'?'active':''}" href="${routes.about}">About</a>
      <a class="${active==='blog'?'active':''}" href="${routes.blog}">Blog</a>
      <a class="${active==='contact'?'active':''}" href="${routes.contact}">Contact</a>
    </nav>
    <div class="nav-tools">
      <span class="nav-availability"><i aria-hidden="true"></i> Available</span>
      <a class="nav-contact" href="${routes.contact}">Start a conversation <i data-lucide="arrow-up-right"></i></a>
      <button class="mobile-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer"><i data-lucide="menu"></i></button>
    </div>
  </header>
  <aside class="mobile-drawer" id="mobile-drawer" aria-hidden="true" inert>
    <button class="drawer-close" aria-label="Close menu"><i data-lucide="x"></i></button>
    <span class="drawer-brand">AZ<span>/</span></span>
    <a href="${routes.home}">Home</a>
    <a href="${routes.projects}">Projects</a>
    <a href="${routes.experience}">Experience</a>
    <a href="${routes.about}">About</a>
    <a href="${routes.blog}">Blog</a>
    <a href="${routes.contact}">Contact</a>
    <a class="drawer-resume" href="${files.resume}" target="_blank" rel="noopener noreferrer">Download resume <i data-lucide="arrow-up-right"></i></a>
  </aside>`;
};

const footer = () => `<footer class="eledra-footer">
  <div class="eledra-container">
    <div class="footer-cta">
      <div>
        <p>HAVE A SERIOUS AI PROBLEM?</p>
        <h2>Let’s make it dependable.</h2>
      </div>
      <a href="${routes.contact}" class="play-btn">Start a conversation <i data-lucide="arrow-up-right"></i></a>
    </div>
    <div class="eledra-top-nav">
      <div class="eledra-col">
        <h3 class="footer-brand">AZ<span>/</span></h3>
        <p>AI systems engineer building voice, retrieval, agentic, and data products from Lahore.</p>
      </div>
      <div class="eledra-col">
        <h4 class="eledra-col-title">EXPLORE</h4>
        <div class="eledra-links-row">
          <a href="${routes.projects}">PROJECTS</a>
          <a href="${routes.experience}">EXPERIENCE</a>
          <a href="${routes.about}">ABOUT</a>
          <a href="${routes.blog}">BLOG</a>
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
    <div class="footer-base">
      <span>© ${new Date().getFullYear()} Abdullah Zafar</span>
      <span>Designed and engineered with care.</span>
    </div>
  </div>
</footer>`;

const card = p => `<article class="title-card" data-project="${p.id}" data-search="${p.title.toLowerCase()} ${p.stack.join(' ').toLowerCase()}">
  <div class="card-poster">
    <span class="screen-chrome" aria-hidden="true"><i></i><i></i><i></i></span>
    <img src="${p.image}" alt="Screenshot of the ${p.title} interface" width="1280" height="720" loading="lazy" decoding="async">
  </div>
  <div class="card-summary">
    <div>
      <span>${p.runtime}</span>
      <h3>${p.title}</h3>
    </div>
    <button data-info="${p.id}" aria-label="Open ${p.title} details"><i data-lucide="arrow-up-right"></i></button>
    <p>${p.stack.slice(0,3).join(' · ')}</p>
  </div>
</article>`;

const listCard = p => `<article class="list-item-card" data-project="${p.id}" data-search="${p.title.toLowerCase()} ${p.stack.join(' ').toLowerCase()}">
  <button type="button" class="list-card-thumb" onclick="openDetails('${p.id}')" aria-label="Open ${p.title} details">
    <img src="${p.image}" alt="Screenshot of the ${p.title} interface" width="1280" height="720" loading="lazy" decoding="async">
  </button>
  <div class="list-card-info">
    <div class="list-card-header">
      <h3>${p.title}</h3>
      <span class="list-match">Production build</span>
      <span class="list-year">${p.year}</span>
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

const projectCatalogCard = p => `<article class="project-catalog-card reveal" data-project="${p.id}" data-search="${p.title.toLowerCase()} ${p.stack.join(' ').toLowerCase()} ${p.desc.toLowerCase()}">
  <div class="pcard-header">
    <div class="pcard-meta-left">
      <span class="netflix-n-badge">AZ/</span>
      <span class="pcard-rank-tag">BUILD 0${p.rank}</span>
    </div>
    <div class="pcard-meta-right">
      <span class="pcard-match-tag">${p.year}</span>
      <span class="pcard-runtime-tag">${p.runtime}</span>
    </div>
  </div>

  <button type="button" class="pcard-preview" onclick="openDetails('${p.id}')" aria-label="Open ${p.title} details">
    <span class="screen-chrome" aria-hidden="true"><i></i><i></i><i></i></span>
    <img src="${p.image}" alt="Screenshot of the ${p.title} interface" width="1280" height="720" loading="lazy" decoding="async">
    <span class="pcard-preview-gradient"></span>
    <span class="pcard-teaser-pill">${p.teaserTag}</span>
    <span class="pcard-expand-btn" aria-hidden="true"><i data-lucide="maximize-2"></i></span>
  </button>

  <div class="pcard-body">
    <h3 class="pcard-title"><button type="button" onclick="openDetails('${p.id}')">${p.title}</button></h3>
    <p class="pcard-desc">${p.desc}</p>
    <div class="pcard-stack">
      ${p.stack.map(s => `<span>${s}</span>`).join('')}
    </div>
    <div class="pcard-actions">
      <button class="play-btn pcard-btn" onclick="openDetails('${p.id}')">
        <i data-lucide="info"></i> Details
      </button>
      <a href="${p.repo}" target="_blank" class="info-btn pcard-btn" title="View Source Code on GitHub">
        <i data-lucide="github"></i> Code
      </a>
      ${p.demo ? `<a href="${p.demo}" target="_blank" class="demo-btn pcard-btn" title="Launch Live Demo"><i data-lucide="external-link"></i> Demo</a>` : ''}
    </div>
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

function audiencePicker(activeProfile){
  const options = [
    ['Recruiter', 'Hiring'],
    ['Client', 'Building'],
    ['Developer', 'Technical'],
    ['Explorer', 'Exploring']
  ];
  return `<div class="audience-picker" id="focus-picker" aria-label="Tailor the portfolio view">
    <span>Tailor this view</span>
    <div>
      ${options.map(([profile, label]) => `<button type="button" data-profile-option="${profile}" aria-pressed="${profile === activeProfile}" class="${profile === activeProfile ? 'active' : ''}">${label}</button>`).join('')}
    </div>
  </div>`;
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
    continue: rail(`Experience at a glance`, [
      experienceCard('01','Co-Founder & Lead AI Engineer','Eledra Labs','Jun 2026 — Present','76'),
      experienceCard('02','AI Engineering Intern','Bricklix','Mar 2026 — May 2026','100'),
      experienceCard('03','B.S. Computer Science','NASTP Institute of IT','2025 — 2029','30')
    ], 'continue-rail'),
    skills: `<section class="rail-section skill-rail reveal" data-rail-group="skills">
      <div class="rail-heading">
        <h2>Technical toolkit</h2>
        <a href="${routes.experience}">See experience <i data-lucide="chevron-right"></i></a>
      </div>
      <div class="skills-marquee-container">
        <div class="skills-marquee-track">
          ${[...skills, ...skills, ...skills, ...skills].map(([l,n])=>`<a href="${routes.experience}" class="skill-tile"><img src="assets/icons/${l}.svg" alt="" aria-hidden="true"><span>${n}</span></a>`).join('')}
        </div>
      </div>
    </section>`
  };

  return cfg.railOrder.map(key => railsMap[key]).join('');
}

function home(){
  const prof = getActiveProfile();
  const cfg = profileConfigs[prof] || profileConfigs.Recruiter;

  return `${nav('home')}
  <main class="browse-page" id="main-content">
    <section class="billboard" id="hero-billboard">
      <picture class="billboard-media">
        <source media="(max-width: 760px)" srcset="${files.heroPortraitSmall}">
        <img src="${files.heroPortrait}" alt="Abdullah Zafar, AI systems engineer" width="1636" height="909" fetchpriority="high" decoding="async">
      </picture>
      <div class="billboard-bg" aria-hidden="true"></div>
      <div class="billboard-copy">
        <p class="original"><span>AZ/</span> AI SYSTEMS ENGINEER · <em id="profile-pill">${prof.toUpperCase()} VIEW</em></p>
        <h1>AI systems that<br><em>work outside the demo.</em></h1>
        <p class="hero-name">Abdullah Zafar · Lahore, Pakistan → Global</p>
        <p class="billboard-ranking" id="billboard-ranking-text">${cfg.tagline}</p>
        <p class="billboard-description" id="billboard-desc-text">${cfg.description}</p>
        <div class="billboard-buttons" id="billboard-buttons-container">
          <a href="${cfg.primaryBtn.href}" ${cfg.primaryBtn.external?'target="_blank" rel="noopener noreferrer"':''} class="play-btn" tabindex="0">
            <i data-lucide="${cfg.primaryBtn.icon}"></i> ${cfg.primaryBtn.text}
          </a>
          <a href="${cfg.secondaryBtn.href}" class="info-btn" tabindex="0">
            <i data-lucide="${cfg.secondaryBtn.icon}"></i> ${cfg.secondaryBtn.text}
          </a>
        </div>
        ${audiencePicker(prof)}
      </div>
      <div class="hero-proof-grid" aria-label="Selected outcomes">
        <div><strong>6</strong><span>production builds</span></div>
        <div><strong>&lt;750ms</strong><span>voice latency</span></div>
        <div><strong>99.4%</strong><span>validated output</span></div>
        <div><strong>Top 70</strong><span>Codeforces Pakistan</span></div>
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
  return `<dialog class="details-modal" id="details-modal" aria-labelledby="project-modal-title">
    <button class="modal-close" aria-label="Close"><i data-lucide="x"></i></button>
    <div class="modal-hero">
      <img alt="Project screenshot" width="1280" height="720" decoding="async">
      <div>
        <p class="original"><span>A</span> ORIGINAL PROJECT</p>
        <h2 id="project-modal-title"></h2>
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
  <main class="sub-page" id="main-content">
    <section class="page-billboard projects-billboard">
      <div>
        <p class="original"><span>AZ/</span> SELECTED SYSTEMS · 2026</p>
        <h1>WORK WITH<br>RECEIPTS.</h1>
        <p>Six production-grade AI systems with real interfaces, architecture decisions, measurable outcomes, and implementation details.</p>
      </div>
    </section>
    <section class="catalog">
      <div class="catalog-head">
        <div class="catalog-title-group">
          <h2>Selected projects</h2>
          <span class="catalog-count-badge">6 production repositories</span>
        </div>
        <div class="catalog-actions-right">
          <a href="${links.github}?tab=repositories" target="_blank" class="github-catalog-btn" title="View all repositories on GitHub">
            <i data-lucide="github"></i>
            <span>View all on GitHub</span>
            <i data-lucide="arrow-up-right"></i>
          </a>
          <div class="catalog-controls">
            <button class="${!isListView?'active':''}" id="view-grid-btn" aria-label="Grid view" title="Grid View"><i data-lucide="grid-3x3"></i></button>
            <button class="${isListView?'active':''}" id="view-list-btn" aria-label="List view" title="List View"><i data-lucide="list"></i></button>
          </div>
        </div>
      </div>
      <div class="project-grid ${isListView?'list-mode':''}" id="catalog-container">
        ${isListView ? projects.map(p=>listCard(p)).join('') : projects.map(p=>projectCatalogCard(p)).join('')}
      </div>
    </section>
  </main>
  ${tvRemoteHint()}
  ${footer()}
  ${modal()}`;
}

function experiencePage(){
  return `${nav('experience')}
  <main class="sub-page" id="main-content">
    <section class="page-billboard experience-billboard">
      <div>
        <p class="original"><span>AZ/</span> CAREER · 2025—NOW</p>
        <h1>ENGINEERING<br>TRAJECTORY.</h1>
        <p>Roles, education, and the practice of turning ambitious AI ideas into dependable systems.</p>
        <a href="${files.resume}" target="_blank" class="play-btn"><i data-lucide="file-down"></i> Download Resume</a>
      </div>
    </section>
    <section class="episodes">
      <div class="episodes-head">
        <h2>Roles & education</h2>
        <span>Selected chapters</span>
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
  return `<article class="episode reveal">
    <span class="episode-index">${n}</span>
    <div class="episode-thumb"><i data-lucide="${icon}"></i><span>${n}</span></div>
    <div>
      <h3>${title}</h3>
      <b>${meta}</b>
      <p>${desc}</p>
    </div>
    <span class="episode-arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span>
  </article>`;
}

function stackSection(){
  let skills=[['python','Python'],['langchain','LangGraph'],['fastapi','FastAPI'],['docker','Docker'],['postgresql','PostgreSQL'],['qdrant','Qdrant'],['pandas','Pandas'],['linux','Linux'],['github','GitHub'],['javascript','JavaScript']];
  return `<section class="stack-section reveal">
    <h2>Technical toolkit</h2>
    <div>
      ${skills.map(([l,n])=>`<span><img src="assets/icons/${l}.svg" alt="" aria-hidden="true">${n}</span>`).join('')}
    </div>
  </section>`;
}

function aboutPage(){
  return `${nav('about')}
  <main class="sub-page" id="main-content">
    <section class="about-hero">
      <div class="about-photo"><img src="${files.heroPortrait}" alt="Abdullah Zafar" width="1636" height="909" fetchpriority="high" decoding="async"></div>
      <div>
        <p class="original"><span>AZ/</span> ABOUT · LAHORE, PAKISTAN</p>
        <h1>ABDULLAH<br>ZAFAR</h1>
        <p class="about-meta"><b>AI systems engineer</b> · Co-founder · Competitive programmer</p>
        <p>I work where AI demos become reliable software: latency gets measured, outputs get validated, tools receive guardrails, and the system still has to work tomorrow.</p>
        <p>My focus spans real-time voice, retrieval, memory, healthcare workflows, and conversational data systems. The goal is consistent across all of them—make AI genuinely useful.</p>
        <div class="billboard-buttons">
          <a href="${files.resume}" target="_blank" class="play-btn"><i data-lucide="file-down"></i> Resume</a>
          <a target="_blank" href="${links.linkedin}" class="info-btn"><i data-lucide="linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </section>
    <section class="achievement-row">
      <article>
        <span>01</span>
        <h2>National Rank #70</h2>
        <p>Ranked 70th in Pakistan among thousands of Codeforces competitors.</p>
      </article>
      <article>
        <span>02</span>
        <h2>100+ Day Streak</h2>
        <p>Maintained a daily competitive-programming challenge streak.</p>
      </article>
      <article>
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
  <main class="sub-page contact-page" id="main-content">
    <section class="contact-title">
      <p class="original"><span>AZ/</span> DIRECT LINE · OPEN FOR SELECTED WORK</p>
      <h1>LET'S BUILD<br>SOMETHING <em>DEPENDABLE.</em></h1>
      <p>Hiring for an AI role or building a serious AI product? Send the context, constraints, and desired outcome.</p>
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
        <small>Your message is sent securely through Web3Forms and used only to reply.</small>
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

function articleCard(a) {
  return `<article class="article-card reveal" data-category="${a.category}" data-search="${a.title.toLowerCase()} ${a.summary.toLowerCase()} ${a.stack.join(' ').toLowerCase()}">
    <a class="article-card-thumb" href="${routes.blog}?article=${a.id}" onclick="openArticle('${a.id}'); return false;" aria-label="Read ${a.title}">
      <img src="${a.image}" alt="Project interface related to ${a.title}" width="1280" height="720" loading="lazy" decoding="async">
      <span class="article-category-badge">${a.tag}</span>
      <span class="article-read-time"><i data-lucide="clock"></i> ${a.readTime}</span>
    </a>
    <div class="article-card-body">
      <div class="article-meta-line">
        <span class="article-date">${a.date}</span>
        <span class="article-dot">·</span>
        <span class="article-cat-name">${a.category}</span>
      </div>
      <h3 class="article-card-title"><a href="${routes.blog}?article=${a.id}" onclick="openArticle('${a.id}'); return false;">${a.title}</a></h3>
      <p class="article-card-summary">${a.summary}</p>
      <div class="article-card-stack">
        ${a.stack.map(s => `<span>${s}</span>`).join('')}
      </div>
      <div class="article-card-actions">
        <button class="play-btn read-btn" onclick="openArticle('${a.id}')">
          <i data-lucide="book-open"></i> Read Log
        </button>
        ${a.repo ? `<a href="${a.repo}" target="_blank" class="info-btn code-btn" title="View Source Code"><i data-lucide="github"></i> Code</a>` : ''}
      </div>
    </div>
  </article>`;
}

function featuredArticleCard(a) {
  return `<a class="featured-editorial-banner reveal" href="${routes.blog}?article=${a.id}" onclick="openArticle('${a.id}'); return false;">
    <div class="featured-banner-bg" style="background-image: url('${a.image}');"></div>
    <div class="featured-banner-glow"></div>
    <div class="featured-banner-content">
      <div class="featured-badge-row">
        <span class="featured-spotlight-pill"><i data-lucide="sparkles"></i> TOP STORY</span>
        <span class="featured-tag-pill">${a.tag}</span>
        <span class="featured-time-pill"><i data-lucide="clock"></i> ${a.readTime}</span>
      </div>
      <h2>${a.title}</h2>
      <p>${a.summary}</p>
      <div class="featured-banner-actions">
        <span class="play-btn"><i data-lucide="book-open"></i> Read featured story</span>
        <span class="featured-date-note">${a.date} · By Abdullah Zafar</span>
      </div>
    </div>
  </a>`;
}

function articleModal() {
  return `<dialog class="details-modal article-reader-modal" id="article-modal" aria-labelledby="modal-article-title">
    <div class="article-progress-container">
      <div class="article-progress-fill" id="article-progress-fill"></div>
    </div>
    <button class="modal-close" aria-label="Close reader"><i data-lucide="x"></i></button>
    <article class="article-reader-container">
      <header class="reader-header">
        <div class="reader-meta-pills">
          <span class="reader-category" id="modal-article-cat"></span>
          <span class="reader-readtime" id="modal-article-time"></span>
          <span class="reader-date" id="modal-article-date"></span>
        </div>
        <h1 class="reader-title" id="modal-article-title"></h1>
        <p class="reader-summary-lead" id="modal-article-summary"></p>
        <div class="reader-author-bar">
          <img src="${files.portrait}" alt="Abdullah Zafar" class="reader-author-avatar" width="400" height="400" loading="lazy" decoding="async">
          <div class="reader-author-info">
            <strong>Abdullah Zafar</strong>
            <span>AI Systems Engineer · Co-Founder @ Eledra Labs · Top 70 Codeforces</span>
          </div>
          <div class="reader-header-actions" id="modal-article-actions"></div>
        </div>
      </header>
      <div class="reader-divider"></div>
      <div class="reader-content markdown-body" id="modal-article-content"></div>
      <footer class="reader-footer">
        <div class="reader-footer-box">
          <h3>Enjoyed this architectural breakdown?</h3>
          <p>Let's collaborate on production AI systems, voice agents, or low-latency infrastructure.</p>
          <div class="reader-footer-ctas">
            <a href="${routes.contact}" class="play-btn"><i data-lucide="send"></i> Get in Touch</a>
            <a href="${links.github}" target="_blank" class="info-btn"><i data-lucide="github"></i> GitHub</a>
            <a href="${links.linkedin}" target="_blank" class="info-btn"><i data-lucide="linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </footer>
    </article>
  </dialog>`;
}

function blogPage() {
  const featured = articles.find(a => a.featured) || articles[0];
  const categories = ['All', 'Voice AI', 'RAG Architecture', 'Healthcare AI', 'Algorithms', 'Agentic AI'];

  return `${nav('blog')}
  <main class="sub-page blog-page" id="main-content">
    <section class="page-billboard blog-billboard">
      <div>
        <p class="original"><span>AZ/</span> FIELD NOTES · ENGINEERING DISPATCH</p>
        <h1>ENGINEERING<br>NOTES.</h1>
        <p>Practical breakdowns of latency budgets, retrieval architecture, clinical validation, agent memory, and high-performance systems.</p>
      </div>
    </section>

    <div class="blog-container">
      ${featured ? featuredArticleCard(featured) : ''}

      <section class="blog-feed-section">
        <div class="blog-filter-bar">
          <div class="category-pills" id="article-category-filters">
            ${categories.map((c, i) => `<button class="filter-pill ${i===0?'active':''}" data-category="${c}">${c}</button>`).join('')}
          </div>
          <div class="blog-count"><strong id="article-count-display">${articles.length}</strong> Logs Published</div>
        </div>

        <div class="article-grid" id="articles-grid">
          ${articles.map(a => articleCard(a)).join('')}
        </div>
      </section>
    </div>
  </main>
  ${tvRemoteHint()}
  ${footer()}
  ${articleModal()}
  ${modal()}`;
}

const renderers = { home, projects:projectsPage, experience:experiencePage, about:aboutPage, blog:blogPage, contact:contactPage };
if (pageName && renderers[pageName]) $('#site').innerHTML = renderers[pageName]();
iconify();

function applyProfileUI(profileName) {
  sessionStorage.setItem('az-profile', profileName);
  const cfg = profileConfigs[profileName] || profileConfigs.Recruiter;

  const pill = $('#profile-pill');
  if (pill) pill.textContent = `${profileName.toUpperCase()} VIEW`;

  const rankText = $('#billboard-ranking-text');
  if (rankText) rankText.innerHTML = cfg.tagline;

  const descText = $('#billboard-desc-text');
  if (descText) descText.textContent = cfg.description;

  const btns = $('#billboard-buttons-container');
  if (btns) {
    btns.innerHTML = `
      <a href="${cfg.primaryBtn.href}" ${cfg.primaryBtn.external?'target="_blank" rel="noopener noreferrer"':''} class="play-btn" tabindex="0">
        <i data-lucide="${cfg.primaryBtn.icon}"></i> ${cfg.primaryBtn.text}
      </a>
      <a href="${cfg.secondaryBtn.href}" class="info-btn" tabindex="0">
        <i data-lucide="${cfg.secondaryBtn.icon}"></i> ${cfg.secondaryBtn.text}
      </a>
    `;
  }

  $$('[data-profile-option]').forEach(button => {
    const isActive = button.dataset.profileOption === profileName;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

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

    if(!r) return;

    const updateArrows = () => {
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

    // Smooth drag-to-scroll support without trapping vertical wheel scroll
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    r.addEventListener('mousedown', (e) => {
      if (e.target.closest('a, button')) return;
      isDown = true;
      startX = e.pageX - r.offsetLeft;
      startScroll = r.scrollLeft;
      r.classList.add('is-dragging');
    });

    r.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        r.classList.remove('is-dragging');
      }
    });

    r.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        r.classList.remove('is-dragging');
      }
    });

    r.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - r.offsetLeft;
      const walk = (x - startX) * 1.4;
      r.scrollLeft = startScroll - walk;
      updateArrows();
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
    const artDialog = $('#article-modal');
    if (artDialog && artDialog.open) {
      return $$('button, a, input, [tabindex="0"]', artDialog).filter(el => !el.hidden && el.offsetParent !== null);
    }
    return $$('.billboard-buttons a, .title-card [data-info], .continue-card, .skill-tile, .article-card a, .filter-pill, .eledra-links-row a, .footer-cta a', document)
      .filter(el => !el.hidden && el.offsetParent !== null);
  }

  window.addEventListener('keydown', e => {
    const dialog = $('#details-modal');
    const artDialog = $('#article-modal');

    if (e.key === 'Escape') {
      if (dialog && dialog.open) {
        dialog.close();
        e.preventDefault();
        return;
      }
      if (artDialog && artDialog.open) {
        artDialog.close();
        e.preventDefault();
        return;
      }
      const drawer = $('.mobile-drawer');
      if (drawer?.classList.contains('open')) {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        drawer.setAttribute('inert', '');
        $('.mobile-toggle')?.setAttribute('aria-expanded', 'false');
        $('.mobile-toggle')?.focus();
      }
      return;
    }

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      return;
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

  });

  document.addEventListener('focusin', e => {
    if (e.target.matches?.('.title-card [data-info], .continue-card')) {
      $$('.tv-focus').forEach(el => el.classList.remove('tv-focus'));
      e.target.classList.add('tv-focus');
      activeFocusEl = e.target;
    }
  });
}

function setup(){
  const navEl = $('.netflix-nav');
  window.addEventListener('scroll', () => navEl?.classList.toggle('scrolled', scrollY > 40));

  const drawer = $('.mobile-drawer');
  const menuToggle = $('.mobile-toggle');
  const setDrawerOpen = isOpen => {
    drawer?.classList.toggle('open', isOpen);
    drawer?.setAttribute('aria-hidden', String(!isOpen));
    drawer?.toggleAttribute('inert', !isOpen);
    menuToggle?.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) $('.drawer-close', drawer)?.focus();
    else if (drawer?.contains(document.activeElement)) menuToggle?.focus();
  };
  menuToggle?.addEventListener('click', () => setDrawerOpen(true));
  $('.drawer-close')?.addEventListener('click', () => setDrawerOpen(false));
  $$('.mobile-drawer a').forEach(link => link.addEventListener('click', () => setDrawerOpen(false)));

  // Projects View Toggle (Grid / List)
  const gridBtn = $('#view-grid-btn');
  const listBtn = $('#view-list-btn');
  const catalog = $('#catalog-container');

  gridBtn?.addEventListener('click', () => {
    gridBtn.classList.add('active');
    listBtn?.classList.remove('active');
    catalog?.classList.remove('list-mode');
    localStorage.setItem('az-projects-view', 'grid');
    if (catalog) catalog.innerHTML = projects.map(p => projectCatalogCard(p)).join('');
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

  bindRailInteractions();

  $$('[data-profile-option]').forEach(button => button.addEventListener('click', () => {
    applyProfileUI(button.dataset.profileOption);
  }));

  const dialog = $('#details-modal');
  if (dialog) $('.modal-close', dialog)?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

  const artDialog = $('#article-modal');
  $('.article-reader-modal .modal-close')?.addEventListener('click', () => artDialog?.close());
  artDialog?.addEventListener('click', e => { if (e.target === artDialog) artDialog.close(); });

  // Blog Category Filtering
  $$('.category-pills .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.category-pills .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      const cards = $$('.article-card');
      let visibleCount = 0;
      cards.forEach(c => {
        const match = cat === 'All' || c.dataset.category === cat;
        c.hidden = !match;
        if (match) visibleCount++;
      });
      const countEl = $('#article-count-display');
      if (countEl) countEl.textContent = visibleCount;
    });
  });

  // Direct Article Param Support
  const targetArticle = new URLSearchParams(location.search).get('article');
  if (targetArticle) {
    setTimeout(() => openArticle(targetArticle), 150);
  }

  // Article Modal Reading Progress
  const artModal = $('#article-modal');
  const fill = $('#article-progress-fill');
  artModal?.addEventListener('scroll', () => {
    const scrollTop = artModal.scrollTop;
    const scrollHeight = artModal.scrollHeight - artModal.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (fill) fill.style.width = `${progress}%`;
  });

  $('.tv-hint-close')?.addEventListener('click', () => $('#tv-hint')?.remove());

  initIntersectionObserver();

  // Contact Form with async submission & toast feedback
  $('#contact-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitBtn = form.querySelector('button[type="submit"]');
    const origHtml = submitBtn ? submitBtn.innerHTML : 'Send Message';
    const d = new FormData(form);

    if (submitBtn) {
      submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> Sending...`;
      submitBtn.disabled = true;
      iconify();
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'e015d862-c1e1-4560-bf64-32530188ef39',
          name: d.get('name'),
          email: d.get('email'),
          subject: `${d.get('type') || 'Message'} from ${d.get('name')} (Portfolio)`,
          message: d.get('message')
        })
      });
      if (res.ok) {
        form.reset();
        showToast('Message received. Thanks for reaching out!');
      } else {
        throw new Error('Fallback required');
      }
    } catch {
      showToast('Opening your email app...');
      setTimeout(() => {
        location.href = `mailto:abdullahzafar.codes@gmail.com?subject=${encodeURIComponent(`${d.get('type')} — ${d.get('name')}`)}&body=${encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`)}`;
      }, 400);
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = origHtml;
        submitBtn.disabled = false;
        iconify();
      }
    }
  });

  initTVKeyboardNavigation();
}

function showToast(msg) {
  let toast = $('#netflix-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'netflix-toast';
    toast.id = 'netflix-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${msg}</span>`;
  iconify();
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

function openArticle(id){
  const a = articles.find(x => x.id === id);
  const d = $('#article-modal');
  if(!a || !d) return;

  d.scrollTop = 0;
  const fill = $('#article-progress-fill');
  if (fill) fill.style.width = '0%';

  $('#modal-article-cat').textContent = a.tag;
  $('#modal-article-time').innerHTML = `<i data-lucide="clock"></i> ${a.readTime}`;
  $('#modal-article-date').textContent = a.date;
  $('#modal-article-title').textContent = a.title;
  $('#modal-article-summary').textContent = a.summary;
  $('#modal-article-content').innerHTML = a.content;

  // Enhance code blocks with 1-click copy headers
  $$('#modal-article-content pre').forEach((pre, idx) => {
    const code = pre.querySelector('code');
    const codeText = code ? code.innerText : pre.innerText;
    const langMatch = pre.className.match(/language-(\w+)/) || (code && code.className.match(/language-(\w+)/));
    const lang = langMatch ? langMatch[1] : 'code';

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-container';
    wrapper.innerHTML = `
      <div class="code-block-header">
        <span>${lang.toUpperCase()}</span>
        <button class="copy-code-btn" data-code-idx="${idx}"><i data-lucide="copy"></i> Copy</button>
      </div>
    `;
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const copyBtn = wrapper.querySelector('.copy-code-btn');
    copyBtn?.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(() => {
          copyBtn.innerHTML = `<i data-lucide="check"></i> Copied!`;
          iconify();
          setTimeout(() => {
            copyBtn.innerHTML = `<i data-lucide="copy"></i> Copy`;
            iconify();
          }, 2000);
        });
      }
    });
  });

  const actionsEl = $('#modal-article-actions');
  if (actionsEl) {
    actionsEl.innerHTML = `
      ${a.repo ? `<a href="${a.repo}" target="_blank" class="info-btn" title="View Source on GitHub"><i data-lucide="github"></i> Repository</a>` : ''}
      <button class="round secondary share-btn" id="modal-share-btn" type="button" aria-label="Copy article link" title="Copy link"><i data-lucide="share-2"></i></button>
    `;
    $('#modal-share-btn')?.addEventListener('click', () => {
      const shareUrl = window.location.origin + window.location.pathname + '?article=' + a.id;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast('Article link copied to clipboard!');
        }).catch(() => {});
      }
    });
  }

  iconify();
  d.showModal();
}

function openDetails(id){
  const p = projects.find(x => x.id === id);
  const d = $('#details-modal');
  if(!p || !d) return;

  const modalImage = $('.modal-hero>img', d);
  modalImage.src = p.image;
  modalImage.alt = `Screenshot of the ${p.title} interface`;
  $('.modal-hero h2', d).textContent = p.title;
  $('.modal-match', d).textContent = `${p.year} · ${p.runtime}`;
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

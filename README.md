<div align="center">
  <img src="assets/icons/logo.PNG" width="120" alt="AZ logo" />

  # Abdullah Zafar - Netflix-Inspired Portfolio

  **A cinematic portfolio for an AI engineer who builds production systems.**

  [![Portfolio](https://img.shields.io/badge/Portfolio-Live_Preview-E50914?style=for-the-badge&logo=netflix&logoColor=white)](./index.html)
  [![Resume](https://img.shields.io/badge/Resume-Download-FFFFFF?style=for-the-badge&logo=readthedocs&logoColor=111111)](./assets/documents/Abdullah-Zafar-Resume.pdf)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abdullahz-dev/)
  [![GitHub](https://img.shields.io/badge/GitHub-Abdullah--Zafarr-181717?style=for-the-badge&logo=github)](https://github.com/Abdullah-Zafarr)
</div>

---

## The experience

This is not a conventional developer portfolio. It borrows the interaction language of Netflix and turns Abdullah's career, technical stack, and AI projects into a streaming-style experience built for recruiters, clients, and engineers.

Visitors choose a viewing profile, enter a cinematic browse screen, explore ranked project rails, open interactive project previews, and move through dedicated career and contact pages.

<p align="center">
  <img src="assets/readme/profiles-preview.png" width="49%" alt="Who is watching profile selector" />
  <img src="assets/readme/browse-preview.png" width="49%" alt="Netflix-inspired portfolio browse screen" />
</p>

## What makes it different

- **Netflix-style landing experience** with Recruiter, Client, Developer, and Explorer profiles
- **Cinematic browse interface** with a hero billboard, horizontal rails, rankings, and hover previews
- **Real work, not mock projects** - every featured card links to one of Abdullah's pinned repositories
- **Authentic product screenshots** taken from the applications themselves
- **Multi-page structure** covering projects, experience, biography, and contact
- **Interactive project details** with technology metadata, repository links, and live demos where available
- **Responsive layouts** designed for desktop, tablet, and mobile
- **No build step** - the complete site runs as portable static HTML, CSS, and JavaScript
- **GitHub Pages ready** with relative paths and a `.nojekyll` marker

## Featured projects

| Project | What it does | Core stack | Source |
| --- | --- | --- | --- |
| **Production-Grade Voice Agent** | Full-duplex conversational voice AI with telephony routing, streaming audio, and sub-750ms inference. | TypeScript, Twilio, Deepgram, Groq | [Repository](https://github.com/Abdullah-Zafarr/Production_Grade_Voice_Agent) |
| **Autonomous Clinical Reporter** | Converts unstructured medical scans into validated diagnostic reports with 99.4% structural accuracy. | TypeScript, LangGraph, Pydantic, Gemini | [Repository](https://github.com/Abdullah-Zafarr/Autonomous-Clinical-Reporter) |
| **Native RAG Architecture** | Framework-free RAG engine with OCR ingestion, vector-store management, streaming, and grounding telemetry. | Python, ChromaDB, OCR, Groq | [Repository](https://github.com/Abdullah-Zafarr/Native-RAG-Architecture) |
| **LLM Data Analyst** | Translates natural-language questions into sandboxed Pandas execution with self-correcting debug loops. | Python, Pandas, Streamlit, Groq | [Repository](https://github.com/Abdullah-Zafarr/LLM-Data-Analyst-Groq) |
| **Multimodal Agentic Workflow** | Combines web search, audio extraction, multimodal reasoning, and automatic resource cleanup. | Python, Gemini, SerpAPI, Streamlit | [Repository](https://github.com/Abdullah-Zafarr/Multimodal-Agentic-Workflow) |
| **Mem0 Graph Memory Engine** | Persistent multi-session agent memory with contradiction handling and context telemetry. | Python, Mem0, Qdrant, Agents | [Repository](https://github.com/Abdullah-Zafarr/Mem0-Graph-Memory-Engine) |

## Technology

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Lucide-Icons-F56565?style=flat-square" alt="Lucide icons" />
  <img src="https://img.shields.io/badge/GitHub_Pages-Ready-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages ready" />
</p>

The portfolio deliberately avoids a framework and package manager. Everything required to run it is stored in the repository, including the icon library, brand assets, project media, and interface sound.

## Repository structure

```text
.
|-- index.html                         # Default Who's Watching? landing page
|-- pages/
|   |-- home.html                      # Main browse experience
|   |-- projects.html                  # Pinned project catalog
|   |-- experience.html                # Career timeline and technology
|   |-- about.html                     # Biography and achievements
|   `-- contact.html                   # Contact form and social links
|-- assets/
|   |-- audio/                         # Profile transition sound
|   |-- brand/                         # AZ logo
|   |-- css/                           # Global responsive styling
|   |-- documents/                     # Resume
|   |-- icons/                         # Colored technology logos
|   |-- images/
|   |   |-- profile/                   # Portrait
|   |   `-- projects/                  # Real application screenshots
|   |-- js/                            # Content, rendering, and interactions
|   |-- readme/                        # Repository preview images
|   `-- vendor/                        # Locally vendored dependencies
|-- .gitignore
|-- .nojekyll
`-- README.md
```

## Run locally

No installation is required. Clone the repository and start any static file server from its root.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
python -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

> Opening the HTML files directly may work for basic browsing, but a local server is recommended for consistent media and navigation behavior.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open the repository's **Settings**.
3. Select **Pages** under **Code and automation**.
4. Set the source to **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save and wait for GitHub to publish the site.

The repository uses relative URLs, so it works on both user pages and project pages without a build process.

## Contact

- **Email:** [abdullahzafar.codes@gmail.com](mailto:abdullahzafar.codes@gmail.com)
- **LinkedIn:** [linkedin.com/in/abdullahz-dev](https://www.linkedin.com/in/abdullahz-dev/)
- **GitHub:** [github.com/Abdullah-Zafarr](https://github.com/Abdullah-Zafarr)
- **Codeforces:** [codeforces.com/profile/rodrickkkk](https://codeforces.com/profile/rodrickkkk)

## Acknowledgment

The interface is inspired by Netflix's visual and interaction patterns. Netflix is a trademark of Netflix, Inc. This project is an independent portfolio and is not affiliated with, endorsed by, or sponsored by Netflix.

---

<div align="center">
  <strong>Designed and engineered by Abdullah Zafar.</strong>
</div>

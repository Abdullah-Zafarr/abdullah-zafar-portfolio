# Frontend implementation change report

## 1. Architecture retained

The portfolio remains a static, framework-free site. HTML entry points provide metadata, a root container, stylesheets, Lucide icons, and one shared JavaScript application. The JavaScript renderer selects the page from `body[data-page]`, generates page markup, and attaches shared behavior.

This approach preserves simple hosting and extensionless routes while avoiding a migration that would add build tooling without directly improving the requested experience.

## 2. Files changed or added

### Existing files updated

| Area | Files | Purpose |
| --- | --- | --- |
| Root documentation | `README.md` | Reframed the site, updated feature descriptions, project stacks, and directory notes. |
| Home entry | `index.html` | Revised title, theme color, Open Graph/Twitter metadata, social image, hero preload, and asset versions. |
| Public route entries | `about/index.html`, `blog/index.html`, `contact/index.html`, `experience/index.html`, `projects/index.html` | Added the refresh stylesheet/versioning and updated route-specific metadata where appropriate. |
| Compatibility entries | `pages/home.html`, `pages/about.html`, `pages/blog.html`, `pages/contact.html`, `pages/experience.html`, `pages/projects.html` | Kept alternate static entry points synchronized with the current CSS and JavaScript versions. |
| Application | `assets/js/app.js` | Rebuilt navigation, home hierarchy, project cards, audience tailoring, footer, accessibility behavior, dialogs, content, and interactions. |

### New files

| File | Purpose |
| --- | --- |
| `assets/css/refresh.css` | 716-line interface refresh layered after the original stylesheet. |
| `assets/images/profile/hero-portrait-v2.webp` | Full desktop editorial portrait. |
| `assets/images/profile/hero-portrait-v2-960.webp` | Lightweight mobile portrait source. |
| `assets/images/profile/hero-portrait-social-v2.jpg` | Social-card-compatible 1200 × 676 portrait. |
| `UI_UX_AUDIT.md` | Concise implementation audit. |
| `reports/*` | Detailed audit, implementation, visual, accessibility, motion, and verification reports. |

The current `assets/js/app.js` is 1,461 lines and renders six public page types from a shared project/article data model.

## 3. HTML and metadata changes

### Global entry-point changes

- Increased the asset version from `v=6` to `v=7` for the original stylesheet and JavaScript.
- Added `assets/css/refresh.css?v=1` after the original stylesheet so the refresh remains isolated and reversible.
- Kept the vendored Lucide runtime and existing static-host structure.
- Preserved `<base href="../">` in nested/compatibility entry points so root-relative project assets resolve correctly.

### Home metadata

- Changed the browser theme color from Netflix red to graphite `#09090b`.
- Replaced the “Who’s Watching?” title with “Abdullah Zafar — AI Systems Engineer.”
- Removed “Interactive Netflix-style experience” from the Open Graph description.
- Added the new editorial social portrait to Open Graph and Twitter metadata.
- Added explicit 1200 × 676 social-image dimensions and descriptive alternative text.
- Added a high-priority WebP hero preload only where the portrait is above the fold.

### Route metadata

The main route entry points retain specific descriptions and titles for Projects, Experience, About, Blog, and Contact. About and Contact now use the new social portrait. Projects, Experience, and Blog retain content-relevant project imagery.

## 4. JavaScript changes

### Shared application model

The application retains centralized route, file, project, article, and audience configuration. The updated project model removes entertainment-only `match` and `rating` fields. Cards now derive visible content from:

- Project title and short label.
- Year and build number.
- Outcome/runtime label.
- Description.
- Current core stack.
- Repository URL.
- Optional live-demo URL.
- Interface screenshot and evidence tag.

### Navigation

The new navigation renderer provides:

- Skip-to-content link.
- AZ wordmark and full name.
- Labeled primary navigation.
- Active-route indication.
- Availability status.
- One desktop contact action.
- Mobile toggle with `aria-controls` and `aria-expanded`.
- Inert, focus-managed mobile drawer.

Search, fake notifications, profile management, and other product-simulation controls were removed.

### Home and audience tailoring

The mandatory profile gate, delayed exit animation, audio playback, and meme avatars were removed.

Four non-blocking audience modes remain:

| Mode | Label | Primary emphasis |
| --- | --- | --- |
| Recruiter | Hiring | Resume, experience, and broad project credibility. |
| Client | Building | Commercial outcomes and product builds. |
| Developer | Technical | Repositories, architecture, and implementation details. |
| Explorer | Exploring | Guided overview of work and background. |

Changing the mode updates the hero copy, actions, project order, rail order, and `aria-pressed` state immediately. The selected mode is stored for the current session.

### Project presentation

Three consistent project representations are supported:

1. Home rail card with persistent title, outcome, stack summary, and details button.
2. Project-catalog card with framed screenshot, build/year metadata, summary, stack chips, details, code, and optional demo.
3. List card with thumbnail button, visible summary, stack, details, code, and optional demo.

The project detail dialog updates its image source, descriptive alt text, title, year/outcome, summary, stack, and actions before opening.

### Blog behavior

- Article thumbnails and titles are actual links with stable `?article=` URLs.
- Featured editorial is an anchor rather than a generic clickable container.
- Direct article query parameters open the correct dialog.
- Category pills filter article cards and update the visible count.
- Article dialog exposes title/category/date/read time, repository action, copy-link action, reading progress, and code-copy controls.
- The share button now has an explicit accessible name.

### Contact form

The form:

- Disables the submit action while sending.
- Shows “Sending” state.
- Submits JSON through Web3Forms.
- Resets and displays success feedback on an OK response.
- Opens a prefilled email fallback on failure.
- Restores the original button state in all outcomes.

### External-link safety

Static external links include `rel="noopener noreferrer"`. The shared icon-rendering helper also normalizes every dynamically created `target="_blank"` anchor to include the safe relationship attributes.

## 5. CSS implementation

The refresh is deliberately layered after the legacy stylesheet. It changes the visible system without requiring a high-risk wholesale deletion of older selectors.

### Core tokens

| Token | Value | Role |
| --- | --- | --- |
| `--black` | `#09090b` | Page background. |
| `--surface` | `#121214` | Primary card/panel surface. |
| `--surface-2` | `#19191c` | Secondary surface. |
| `--red` | `#ff4057` | Controlled primary accent. |
| `--white` | `#f6f4f1` | Primary text. |
| `--gray` / `--muted` | `#a5a3a0` | Supporting text. |
| `--green` | `#84d7a5` | Availability and positive proof. |
| `--line` | `rgba(255,255,255,.11)` | Default structural border. |
| `--container` | `1360px` | Maximum page content width. |
| `--page-gutter` | `clamp(20px, 4.5vw, 72px)` | Responsive horizontal spacing. |
| `--radius` | `18px` | Primary component radius. |
| `--ease` | `cubic-bezier(.16,1,.3,1)` | Shared editorial motion curve. |

### Major component families restyled

- Navigation and mobile drawer.
- Hero portrait, copy, actions, audience picker, and proof grid.
- Project rails, catalog cards, list cards, screenshot chrome, and arrows.
- Experience cards/timeline and stack tiles.
- About portrait and achievements.
- Contact form and alternate contact links.
- Blog featured story, filters, cards, reader, code blocks, and notes.
- Project and article dialogs.
- Footer conversion block and link groups.
- Focus-visible and reduced-motion states.

## 6. Content corrections

The implementation removed language that implied the portfolio was an entertainment product:

- “Netflix-style” social copy.
- Match percentages.
- Maturity ratings.
- “Original project” styling as a primary brand cue.
- Profile-switching and “Who’s watching?” gate language.
- Fake notification and playback behaviors.

The Voice AI and clinical summaries were updated to current repository directions. Older article bodies remain available as retrospectives with clear notes explaining that the repositories have evolved.

The dead clinical demo was removed from the project data, its detail dialog, project card actions, README table, and client-facing call-to-action language.

## 7. Routing and compatibility

All six route directories use `<base href="../">`, allowing shared asset and route strings to remain consistent. The six files under `pages/` provide compatible direct-entry alternatives and use the same base strategy. Static asset validation explicitly accounted for these document bases.

## 8. Maintenance guidance

When adding a project:

1. Add one project object with a unique `id`.
2. Add the ID to each audience ordering where it should appear.
3. Supply a genuine 16:9 screenshot whenever possible.
4. Add a demo only after confirming the deployed URL returns successfully.
5. Keep outcome labels factual and distinguish measured results from targets.
6. Test both project grid and list modes.

When changing visual styles, add new rules to `refresh.css` until the legacy stylesheet can be intentionally consolidated. Avoid scattering refresh rules back into the original 2,000+ line stylesheet.

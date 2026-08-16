# Accessibility, responsive design, and motion report

## 1. Scope and standard of claim

This report documents accessibility-aligned implementation and source-level checks. It does not claim formal WCAG conformance. Formal conformance requires browser, assistive-technology, zoom/reflow, contrast, and user testing beyond static inspection.

## 2. Document structure

Each rendered page includes:

- A skip link targeting `#main-content`.
- One primary navigation labeled “Primary navigation.”
- Exactly one main content landmark with `id="main-content"`.
- A shared header and footer.
- Page-specific headings and section structure.

Renderer smoke tests confirmed the main landmark and navigation label on Home, Projects, Experience, About, Blog, and Contact.

## 3. Keyboard access

### Native semantics

Interactive actions use anchors or buttons. Project-card articles are not placed in the tab order. Their details controls are real buttons, while external destinations are anchors.

### Directional navigation

The retained directional-key helper targets actual focusable actions:

- Hero actions.
- Project detail buttons.
- Experience cards.
- Skill links.
- Article links.
- Category filters.
- Footer links and CTA.

When a dialog is open, navigation is constrained to that dialog’s buttons, links, and inputs. Arrow movement scrolls the chosen item into view. Escape closes project dialogs, article dialogs, or the mobile drawer in that order.

### Focus presentation

Buttons, anchors, inputs, text areas, and selects receive a visible two-pixel white outline with a four-pixel offset through `:focus-visible`. Directional focus uses the same visual language and removes transforms that could make the selected target move.

## 4. Mobile navigation

The drawer begins with:

- `aria-hidden="true"`.
- The `inert` attribute.
- A menu trigger with `aria-expanded="false"` and `aria-controls="mobile-drawer"`.

Opening the drawer:

1. Adds the open visual state.
2. Sets `aria-hidden` to false.
3. Removes `inert`.
4. Sets the trigger’s `aria-expanded` to true.
5. Moves focus to the close button.

Closing the drawer reverses the state. If focus remains inside the drawer, focus returns to the menu trigger. Drawer links close the drawer, and Escape also closes it and restores focus.

## 5. Dialogs

Project and article overlays use native `<dialog>` elements and `showModal()`.

### Project dialog

- Labeled by the project title.
- Explicit close button.
- Backdrop click close.
- Escape close through native/custom handling.
- Project-specific screenshot alt text.
- Repository and optional demo actions.

### Article dialog

- Labeled by the article title.
- Explicit close button with “Close reader” label.
- Backdrop and Escape close.
- Reading progress indicator.
- Repository action where available.
- Share control labeled “Copy article link.”
- Copy buttons on code blocks with visible copied feedback.

Native dialog behavior supplies modal focus containment in supporting browsers. A production assistive-technology pass is still recommended.

## 6. Image accessibility

- The hero portrait uses “Abdullah Zafar, AI systems engineer.”
- Project screenshots name the associated interface.
- Article thumbnails describe their relationship to the technical article.
- The article author portrait identifies Abdullah.
- Decorative skill icons use empty alt text and `aria-hidden="true"`.
- Static and rendered image checks confirmed an `alt` attribute on every generated `<img>` element.

## 7. Controls and state

- Audience buttons expose selection through `aria-pressed`.
- Project grid/list buttons have visible active states and accessible names.
- Category filters are buttons, not clickable text.
- Rail arrows have “Scroll left” and “Scroll right” labels.
- Mobile menu open/closed state is synchronized with `aria-expanded`.
- External links use `noopener noreferrer` when opened in a new tab.

## 8. Forms and feedback

The contact form uses visible field labels and focus states. During submission the send button is disabled and its label changes to “Sending.” Completion or fallback is announced visually through a toast.

Recommended follow-up: add or verify a polite live region for toast announcements during a screen-reader pass. The current source provides visual feedback but the final assistive-technology announcement behavior was not browser-tested.

## 9. Responsive layout

The refresh uses fluid type, a fluid page gutter, responsive grids, and three principal breakpoints:

| Breakpoint | Main adaptations |
| --- | --- |
| `max-width: 1100px` | Reduces desktop density, adjusts hero/rail/footer and multi-column compositions. |
| `max-width: 900px` | Switches to mobile navigation, reflows hero and content grids, and simplifies page structures. |
| `max-width: 640px` | Tightens typography/actions, creates a two-by-two proof grid, uses single-column layouts, and adjusts cards/dialogs for narrow screens. |

### Mobile-specific image behavior

The home `<picture>` selects the 960 × 541 portrait at widths below 760 px. CSS repositions the portrait and overlays gradients so copy remains legible. Project content does not rely on hover; card text and actions stay visible on touch devices.

### Reflow behavior

- Hero buttons wrap instead of overflowing.
- Proof points become two rows on narrow screens.
- Catalog and informational grids reduce columns progressively.
- Contact and footer groups become vertical.
- Dialog widths are bounded by the viewport.
- Page gutters never fall below 20 px through the shared token.

Manual 200% zoom and 320 px browser checks remain recommended because the browser runtime was unavailable during the final audit.

## 10. Motion inventory

### Intentional motion

| Motion | Purpose | Implementation character |
| --- | --- | --- |
| Section reveal | Clarifies entry into the viewport. | 14 px vertical offset, opacity transition, 0.6–0.7 second editorial easing. |
| Card hover lift | Reinforces clickability on pointer devices. | Small translate and border/shadow change. |
| Mobile drawer | Communicates off-canvas state. | Short transform transition. |
| Rail scrolling | Supports horizontal project browsing. | Pointer drag, arrows, and smooth scroll. |
| Toolkit marquee | Shows breadth without a tall grid. | Continuous horizontal movement. |
| Reading progress | Communicates long-form article position. | Width tracks dialog scroll. |
| Toast feedback | Confirms form, copy, or share actions. | Short entrance and timed removal. |

The mandatory delayed profile transition, intro sound, fake playback, footer phrase cycler, and entertainment-style animation were removed.

## 11. Reduced-motion behavior

At `prefers-reduced-motion: reduce`:

- Scroll behavior becomes immediate.
- CSS animation duration and iteration are constrained globally.
- Transitions are effectively disabled.
- Section reveals appear immediately without translation.
- Hover transforms are removed.
- The skills marquee stops and remains readable.
- Directional navigation does not depend on moving focus effects.

This provides a complete no-essential-motion path rather than disabling only one animation.

## 12. Accessibility risks to test after deployment

| Risk | Why source review is insufficient | Recommended test |
| --- | --- | --- |
| Color contrast | Gradients, overlays, and rendered font weight affect actual contrast. | Axe/Lighthouse plus manual contrast sampling. |
| Dialog announcements | Browser and screen-reader combinations differ. | NVDA + Firefox/Chrome and VoiceOver + Safari. |
| Toast announcement | Visual feedback may not be announced without a live region. | Submit and copy actions with a screen reader. |
| Zoom/reflow | CSS source cannot prove every intermediate width. | 200% and 400% zoom; 320 CSS-pixel viewport. |
| Focus order | Generated content and dialogs should be experienced end to end. | Keyboard-only walkthrough of all six routes. |
| Form errors | External service responses vary. | Force success, server error, offline, and mail fallback. |

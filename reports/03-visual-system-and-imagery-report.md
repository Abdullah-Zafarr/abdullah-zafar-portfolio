# Visual system and imagery report

## 1. Art-direction objective

The visual objective was to preserve the useful qualities of the original site—dark atmosphere, strong contrast, cinematic scale, and technical confidence—while replacing the streaming-service imitation with a personal editorial identity.

The final direction can be summarized as:

> Editorial AI systems portfolio: graphite surfaces, warm white type, a restrained red signal, real interface evidence, and one premium human portrait.

## 2. Brand hierarchy

### Before

- Netflix conventions supplied most of the immediate recognition.
- A mandatory profile screen became the first brand impression.
- Cartoon avatars and entertainment labels competed with professional evidence.
- Large condensed uppercase type appeared too frequently.

### After

- `AZ/` is the compact brand signal.
- “Abdullah Zafar” remains visible in the global header.
- The portrait and role lead the first viewport.
- Sentence-case editorial headings and measured technical labels form the typographic hierarchy.
- Red is an accent for signal and action, not a full-page identity borrowed from Netflix.

## 3. Typography

The project loads fonts in the existing Google Fonts import and uses a three-family hierarchy:

| Family | Use | Reason |
| --- | --- | --- |
| Outfit | Display headings, wordmarks, section titles, large modal titles. | Strong geometric presence without the entertainment-poster association of a condensed display face. |
| Inter | Body copy, navigation, controls, descriptions, and forms. | High legibility across sizes and interface contexts. |
| JetBrains Mono | Technical metadata, tags, proof labels, eyebrow text, and footer labels. | Adds engineering character without reducing body readability. |

Fallback stacks are present for all three roles. Body copy uses Inter with system fallbacks; display text falls back to Inter; metadata falls back to the generic monospace family.

## 4. Color and surfaces

The palette is intentionally narrow:

- Background: `#09090b`.
- Primary surface: `#121214`.
- Elevated/secondary surfaces: `#111114`, `#141417`, and `#19191c`.
- Primary text: warm white `#f6f4f1`.
- Supporting text: `#a5a3a0`.
- Primary accent: coral red `#ff4057`.
- Positive/availability accent: `#84d7a5`.
- Structural borders: translucent white at 11% and 20%.

The background includes a restrained red radial glow near the upper-right region. This supports the portrait lighting and avoids making every component compete through saturated color.

## 5. Spacing, shape, and layout

- Content maximum: 1,360 px.
- Horizontal gutter: fluid from 20 px to 72 px.
- Default card radius: 18 px.
- Hero and featured surfaces use larger radii where hierarchy requires them.
- Borders carry most grouping work; heavy shadows are reserved for portrait depth and select hover states.
- Headline sizes use `clamp()` so scale changes continuously rather than jumping only at breakpoints.

## 6. Hero portrait

### Problem addressed

The original first viewport used imagery that communicated “application demo” and “entertainment avatar” more strongly than “AI systems engineer.” It also made consistent text placement difficult.

### Final portrait composition

The new portrait was created as a restrained editorial photograph:

- Abdullah is positioned on the right.
- The left side contains low-detail negative space for the headline and actions.
- Wardrobe and background remain black/graphite.
- A subtle red rim light connects the subject to the interface accent.
- The framing is wide enough for desktop use while preserving a useful mobile crop.
- No text, fake UI, logos, or decorative technology graphics are embedded into the bitmap.

### Delivered assets

| Asset | Dimensions | Size | Use |
| --- | ---: | ---: | --- |
| `hero-portrait-v2.webp` | 1672 × 941 | 36,226 bytes | Desktop/tablet hero. |
| `hero-portrait-v2-960.webp` | 960 × 541 | 10,774 bytes | Mobile source selected by `<picture>`. |
| `hero-portrait-social-v2.jpg` | 1200 × 676 | 35,059 bytes | Open Graph and Twitter preview. |

The two WebP variants use the same approximately 16:9 composition. The social JPEG uses the expected large-card width and explicitly declared dimensions in metadata.

### Loading behavior

- Home uses a `<picture>` element with the 960 px source below 760 px.
- The full hero is preloaded with `fetchpriority="high"` on the home entry points.
- The hero image declares width and height, uses asynchronous decoding, and is not lazy-loaded because it is above the fold.
- Social metadata uses the JPEG, avoiding reliance on platforms that may handle WebP previews inconsistently.

## 7. Project imagery

The project screenshots were retained because they are stronger trust evidence than generic AI artwork. The redesign changes their presentation rather than replacing them with invented product visuals.

### Presentation treatment

- A consistent 16:9 display area is used for the six catalog screenshots.
- Minimal browser-window chrome visually groups different products.
- Cropping and object-fit rules keep the card grid stable.
- Text summaries and actions are outside the screenshot, preventing readability from depending on content baked into the image.
- Lazy loading and asynchronous decoding are applied to below-the-fold project images.
- Alternative text identifies each image as a screenshot of the named project interface.

### Core catalog screenshots

| File | Dimensions | Size |
| --- | ---: | ---: |
| `analyst.png` | 1280 × 720 | 120,299 bytes |
| `clinical.png` | 1280 × 720 | 95,512 bytes |
| `memory.png` | 1280 × 720 | 450,535 bytes |
| `multimodal.png` | 1280 × 720 | 171,712 bytes |
| `rag.png` | 1280 × 720 | 210,025 bytes |
| `voice-ui.png` | 1280 × 720 | 183,656 bytes |

The memory screenshot is the heaviest core catalog asset at approximately 440 KB. It is not a release blocker because it is lazy-loaded, but it is the first candidate for a future WebP/AVIF conversion.

### Supporting project imagery

The repository also contains 1920 px hero and analytics images. These remain available for article or page contexts. They were not promoted into the home hero because product evidence and personal identity serve different purposes.

## 8. Image quality assessment

The final hero was visually inspected after generation. At the delivered size it has:

- Clean facial and hair detail.
- No visible text or structural generation artifacts.
- Controlled red edge lighting.
- Sufficient tonal separation between black clothing and background.
- A usable copy-safe left field.
- A subject placement that remains recognizable in the social crop.

The image is intentionally subdued. Increasing background detail, neon effects, or floating AI symbols would make it more generic and reduce headline legibility.

## 9. Visual consistency decisions

- Genuine screenshots are used for product proof.
- Generated imagery is limited to the personal editorial hero.
- Lucide remains the single interface icon system.
- Pills are reserved for metadata and filters.
- Outlined surfaces and restrained shadows replace heavy glow.
- Red does not indicate every interactive element; white and bordered controls support action hierarchy.
- Continuous decorative motion is limited to the toolkit marquee and can be disabled by user preference.

## 10. Recommended future image work

1. Convert `memory.png`, `rag.png`, `multimodal.png`, and `voice-ui.png` to tested WebP/AVIF variants while retaining transparent or sharp UI detail.
2. Capture fresh screenshots whenever the corresponding repositories change materially.
3. Keep catalog screenshots at the same 16:9 ratio to avoid card-layout changes.
4. Avoid stock “AI brain” imagery; it would weaken the evidence-first direction.
5. Test the social image through each target platform’s preview debugger after deployment.

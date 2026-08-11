# TRIFIT LA

A redesign of [trifitla.com](https://trifitla.com), the 29,000 square foot club on
Colorado Ave in Santa Monica. Built with [Stacks](https://github.com/stacksjs/stacks):
STX templates, Crosswind, and Bun.

The site is a single marketing page today. Every price, class name, opening hour, and
address on it is taken from the live site; there are no invented testimonials, statistics,
or partner logos.

## What is here

| Path | What it holds |
|---|---|
| `resources/views/index.stx` | The landing page: markup, design tokens, and page CSS |
| `public/images/trifit/` | Facility and class photography |
| `config/` | Stacks configuration |
| `routes/` | API routes (the page itself is served by STX, no route needed) |

## Design notes

- **One accent.** The TRIFIT green (`#5dd37c`) is the only accent, identical in both
  themes. Neutrals are a cool green-leaning grey.
- **Light by default.** The theme guard runs before first paint and only serves dark to a
  visitor who has chosen it. `?theme=dark` is a non-persisting override for previews.
- **Two type families.** Outfit for display and headings, Geist for body.
- **One shape system.** Interactive controls are full pill, panels and media are 16px.
- **Motion is CSS only.** A load-in on the hero and a `view()` timeline reveal on
  sections. Everything collapses to static under `prefers-reduced-motion`.

## Develop

```bash
./buddy dev --frontend
```

Then open the printed URL. Lint with `./buddy lint`, type check with `./buddy typecheck`.

## Screenshots and QA

The bundled headless-browser skill drives a system Chromium over CDP with no extra
dependencies:

```bash
bun storage/framework/defaults/ai/skills/stacks-browse/scripts/browse.ts responsive http://localhost:3001/
```

## Credits

Photography belongs to TRIFIT LA. This repository is a design exercise, not an official
TRIFIT LA property.

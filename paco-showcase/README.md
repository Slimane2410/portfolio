# PACO Showcase

Static, dependency-free bilingual research showcase. It can be hosted directly on GitHub Pages, Vercel, Netlify, or any static file server.

## Local preview

From the repository root:

```bash
python -m http.server 4173 --directory paco-showcase
```

Then open `http://localhost:4173`.

## Evidence policy

- The headline results come from the paper's frozen repeatability campaign: 40 physical runs over two fixed tasks, with 40/40 goal arrivals and no reported collision in that campaign.
- Those results are scoped evidence, not a universal safety guarantee. Geometric collisions and physical contacts were observed during other exploratory development trials.
- Clearance is measured edge-to-edge between the controller's safety discs. A negative clearance means that these discs overlap; it does not necessarily mean that the robot chassis touched.
- The two-agent physical aggregates contain 19 runs because one run used the wrong fixed-obstacle layout and was excluded from the aggregate analysis. That run still reached its goal and remains part of the 40/40 arrival count.
- Figures `paper_f9_final_zone.png` through `paper_f13_tolerance.png` are copied from the current paper draft. The physical-validation figures are generated from the experiment logs in this repository.
- Every photograph and video currently displayed on the site is authentic experimental media. There are no generated-media placeholders in the current showcase.

## Preprint

The site publishes `assets/reports/paco-preprint-draft-v1-compact.pdf`, a versioned copy of `Paper/redaction/main_version_compacte.pdf`. It is intentionally labelled **Draft v1** because affiliations and the corresponding-author field are still provisional.

When those fields and the remaining TODOs have been cleaned, replace the versioned PDF and remove the visible draft warning from the page.

## Visual validation

The checked viewports, screenshots, link/media checks, and console results are documented in `VALIDATION.md`. Captures are stored in `VALIDATION_captures/`.

## Deployment

GitHub Pages is the simplest option for this static site. Vercel is also suitable when preview deployments or a custom-domain workflow are useful.

# Slimane Aouanouk — Engineering Portfolio

Static bilingual engineering portfolio hosted with GitHub Pages.

## Architecture

```text
.
├── index.html              # Language-aware entry point
├── en/                     # English pages
│   └── projects/           # English case studies
├── fr/                     # French pages
│   └── projects/           # French case studies
├── assets/
│   ├── css/                # Shared styles
│   ├── js/                 # Shared browser scripts
│   ├── icons/              # Favicons and web manifest
│   ├── images/             # Common and project images
│   ├── videos/             # Common and project videos
│   └── documents/          # Resume and project documents
├── archive/                # Sources and generated/legacy material
├── tools/                  # Maintenance and validation scripts
└── paco-showcase/          # Independent PACO static site (do not relocate)
```

Public portfolio pages use symmetrical language paths such as
`en/projects/f1.html` and `fr/projects/f1.html`. File and directory names use
lowercase English `kebab-case`. The PACO showcase deliberately remains at
`paco-showcase/index.html` so its published URL does not change.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`. The entry point redirects to the stored
portfolio language, defaulting to English.

## Validation

Check all local HTML and CSS references after moving or adding resources:

```bash
ruby tools/validate-local-links.rb
```

## Deployment URLs

- English home: `/portfolio/en/index.html`
- French home: `/portfolio/fr/index.html`
- PACO showcase: `/portfolio/paco-showcase/index.html`

## Analytics

This static site has no application framework, build step or configured lint
command. Its 36 bilingual content pages and PACO showcase share the deferred
`assets/js/analytics-consent.js?v=2` loader. The root `index.html` only redirects
and does not record a separate page view.

At the owner's request, GA4 (`G-M2D682VTWG`) and Microsoft Clarity (`z2qjbnft0f`)
now load automatically on every content document. Both scripts are asynchronous
and protected against duplicate initialization. The official Microsoft snippet
is preserved. No custom tracking events or visitor identifiers are added.
Google signals and advertising personalization remain disabled.

The previous consent implementation is retained **in JavaScript comments** for
restoration. The consent stylesheet references are commented out in every page.
No consent panel or Privacy settings / Confidentialité button is created.
Previously saved consent choices are not read or changed by the active loader.
The active code sends no consent API calls and does not assert that visitors
have granted consent. Clarity's account settings and regional behavior still
apply; automatic script loading does not guarantee all recording features.

Normal links load new HTML documents. PACO's language changes and anchor links
reuse the existing recorder without reinitializing it. No SPA router hooks or
production dependencies are needed. The script URL version prevents browsers
from continuing to use the previous cached consent interface.

### Validation

```bash
ruby tools/validate-local-links.rb
node --check assets/js/analytics-consent.js
node --check assets/js/script.js
node --check paco-showcase/script.js
node --check tools/test-analytics.cjs
git diff --check
```

There is no generated build artifact: GitHub Pages serves the source files.
Optional browser checks use Playwright outside the repository. Run
`python3 -m http.server 4189 --bind 127.0.0.1` in one terminal, then:

```bash
npm install --prefix /tmp/portfolio-analytics-test --no-save playwright
/tmp/portfolio-analytics-test/node_modules/.bin/playwright install chromium
PLAYWRIGHT_MODULE=/tmp/portfolio-analytics-test/node_modules/playwright node tools/test-analytics.cjs
```

These tests stub vendor responses to avoid sending synthetic visits. They check
all 37 content documents for one shared loader and disabled consent CSS, and
verify automatic loading, correct IDs, async scripts, duplicate prevention,
absence of consent controls, navigation and browser JavaScript errors in Chromium.
An optional `BROWSER_EXECUTABLE` can select a locally installed Chrome binary.

### Verification after deployment

1. Open `https://slimaneaouanouk.com` with analytics blockers disabled for the
   check. There should be no consent panel or Privacy settings button.
2. In DevTools Network, verify exactly one `www.clarity.ms/tag/z2qjbnft0f` and one
   `www.googletagmanager.com/gtag/js?id=G-M2D682VTWG` script per document.
3. Verify Clarity `/collect` and GA4 `/g/collect` requests, and check the Console
   for errors. Visit EN, FR, a case study and `/paco-showcase/`.
4. Check Clarity recordings and GA4 Realtime in the owner dashboards. Dashboard
   configuration, retention and masking settings are not changed by this code.

A local smoke test on 2026-10-24 loaded both real vendor scripts automatically
(HTTP 200), observed Clarity and GA4 collection responses (HTTP 204), and found
no consent controls or JavaScript errors. Owner dashboard reporting and the
production deployment remain separate verification steps.

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

## Analytics and consent

This is a static HTML/CSS/JavaScript site: there is no application framework,
root layout, package manager dependency, build step, or configured lint command.
Each of the 36 bilingual content pages and the PACO showcase includes the same
`assets/js/analytics-consent.js` (deferred) and isolated
`assets/css/analytics-consent.css`. The root `index.html` only redirects to a
language homepage and intentionally does not record a separate page view.

The shared loader replaces the previous inline GA4 snippets. It retains GA4
`G-M2D682VTWG` and adds the official Clarity snippet for `z2qjbnft0f`. Both vendor
scripts are asynchronous and guarded against repeated initialization. Normal
links load new HTML documents; no SPA router or manual page-view hook is needed.
PACO's language changes and anchor navigation keep the existing recorder running
without reinitializing it. Its consent controls follow language changes.

Before explicit acceptance, **neither vendor script is downloaded** and neither
vendor receives analytics requests, including cookieless pings. The English/French
consent panel offers equally styled Accept/Decline controls. The existing language
chooser is presented first. Visitors may continue browsing without accepting.
The Privacy settings / Confidentialité button reopens the panel on every content
page. Both tools share the analytics choice; advertising consent remains denied.
No custom visitor identifiers, tracking events, or personal data fields are added.
Clarity's default sensitive-content masking remains in place.

The necessary preference is stored in localStorage under
`portfolio.analytics-consent.v1` for 180 days, shared across paths and languages
on the same origin. Expired/invalid choices require consent again. If storage is
unavailable, acceptance lasts only for that document. Withdrawal sends denied
consent to loaded SDKs, disables GA, removes accessible first-party GA/Clarity
cookies across domain/path scopes, and reloads to unload both SDKs (denied Clarity
consent alone can still allow cookieless tracking). Other tabs reload when the
stored choice changes; browser back/forward cache restores recheck via reload.
Withdrawal does not delete previously collected server-side data or cookies on
vendor domains, which site JavaScript cannot access.

### Checks

There is no generated build artifact: GitHub Pages serves these source files.
Run the existing link check and JavaScript syntax checks:

```bash
ruby tools/validate-local-links.rb
node --check assets/js/analytics-consent.js
node --check assets/js/script.js
node --check paco-showcase/script.js
node --check tools/test-analytics.cjs
git diff --check
```

Optional Chrome/Chromium integration checks use Playwright outside the repository
(no production dependency or lockfile). In one terminal run
`python3 -m http.server 4189 --bind 127.0.0.1`; in another:

```bash
npm install --prefix /tmp/portfolio-analytics-test --no-save playwright
/tmp/portfolio-analytics-test/node_modules/.bin/playwright install chromium
PLAYWRIGHT_MODULE=/tmp/portfolio-analytics-test/node_modules/playwright node tools/test-analytics.cjs
```

The tests stub vendor responses to avoid sending synthetic test traffic. They
check denied/default consent, opt-in queues and IDs, asynchronous loading,
duplicate prevention, withdrawal/cookie deletion, expiry, cross-tab changes,
language/navigation persistence, keyboard focus, mobile layout, unavailable
storage, and browser JavaScript errors. Optionally set `BROWSER_EXECUTABLE` to a
Chrome binary and `ANALYTICS_SCREENSHOT` to a screenshot destination.

### Verify after deployment

1. Open `https://slimaneaouanouk.com` in a clean browser profile, disable analytics
   blockers for this test, choose a language, and open DevTools Network.
2. Before acceptance, or after Decline, verify there are no requests to
   `clarity.ms`, `googletagmanager.com`, or `google-analytics.com` and no analytics
   cookies. Essential consent/language storage is expected.
3. Accept analytics. Verify exactly one `www.clarity.ms/tag/z2qjbnft0f` and one
   `www.googletagmanager.com/gtag/js?id=G-M2D682VTWG` script per document. Subsequent
   requests should include Clarity `/collect` and GA4 `/g/collect`. Check the
   Console for errors and both dashboards (Clarity recordings and GA4 Realtime).
4. Navigate to a case study, change language, and visit `/paco-showcase/`. Confirm
   the choice persists and the SDKs are not initialized twice within a document.
5. Reopen Privacy settings and Decline. The page reloads, analytics cookies on
   the site are cleared, and no new analytics requests occur. Repeat in another
   open tab to check consent synchronization.

A local smoke test on 2026-10-24 also loaded the real vendor scripts: both returned
HTTP 200, Clarity and GA4 collection returned HTTP 204, and no JavaScript errors
were observed. This confirms SDK initialization and request delivery, not
visibility in the owner's dashboards or production deployment.

In Clarity project settings, require consent and retain sensitive-content masking;
review masking before adding any form or private content. Keep the site's privacy
information aligned with both vendors, purposes, cookies, retention and contact
information. The panel links to both vendors' privacy statements. Dashboard
settings, any GA/Clarity account linking, and dashboard reporting require owner
verification; they are not changed by this repository integration. Official API:
[Clarity Consent V2](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2).

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

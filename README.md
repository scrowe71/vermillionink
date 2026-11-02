# Vermillion Ink demo — v0.2.3

Ready-to-deploy static website for a GitHub demo repository.

## Deployment engine settings

- Repository/project directory: repository root
- Site type: static HTML/CSS/JavaScript
- Build command: none
- Install command: none
- Publish/output directory: . (repository root)
- Entry page: index.html
- Environment variables/secrets: none required
- Server runtime/database: none required

Extract the ZIP and commit its contents directly to your repository root. index.html should be at the top level, alongside assets/, style.css and app.js. Connect that repository to your deployment engine and use the settings above. Do not publish only the scripts/ or assets/ directory.

All navigation uses relative .html URLs, so the site also works under a GitHub Pages repository subpath. A host may optionally support extensionless paths such as /artists, but no rewrite configuration is required for the supplied links. GitHub Pages can deploy from the root of the selected branch; .nojekyll is included.

## Pages

- index.html — homepage and curated scrolling featured gallery
- artists.html — artist directory
- ashton.html — Ashton biography and 12-photo portfolio
- resident.html — clearly marked resident artist placeholder
- services.html — illustrative service descriptions
- contact.html — address, map, phone, hours and booking
- manage.html — browser-local photo manager

## Photo manager

Changes are saved only in the current browser and site origin. Export/import transfers collections between browsers. Changes on the current hosted demo do not transfer automatically to a new domain. This demo has no shared upload service or authenticated administrator system. Included ashton-portfolio.js contains the 12 supplied artwork photographs. The homepage featured selection still includes labeled stock placeholders.

## Version updates

Edit version.json, then run node scripts/update-version.mjs using Node.js 18 or later. This updates every static footer label. Node is only needed for this optional maintenance step, not to serve the website.

## Content notes

The supplied portrait, homepage photo and portfolio images are included locally. The black logo is an AI-assisted reconstruction from the supplied shirt photograph. Gallery placeholders remain labeled. Artist biography, resident artist details and service descriptions still need approval. Address, telephone, opening hours, Instagram and booking links use the information supplied for this project.

Google Fonts is the only external design dependency; local fallback fonts are defined. Instagram, booking and map links open their respective external services. No analytics, credentials or existing hosting account identifiers are included.

## Included files

All HTML pages, CSS, browser JavaScript, images, version metadata, the optional version-update helper and this README. The ZIP excludes Git history, .openai hosting configuration, credentials, source-reference photos that are not used by the site, and deployment archives.


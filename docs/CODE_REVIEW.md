# Code Review

Date: 2026-05-13
Repository: `suntarme-glitch/california-bar-exam`
Scope: static PWA, GitHub Pages access, Gist sync, content structure, documentation readiness.

## Summary

The project is a compact static PWA for a personal California Bar Exam preparation track. It has no build system or backend, which keeps deployment simple and makes GitHub Pages a good fit.

The main technical risks were PWA-specific:

- stale service workers could keep serving old broken assets;
- installed PWA start URL pointed to the GitHub Pages domain root instead of the repository path;
- initial Gist auto-sync merged the wrong object shape and could corrupt local progress state.

These issues were fixed in this revision.

## Findings Fixed

### P1: Installed PWA could open the wrong URL on GitHub Pages

File: `manifest.json`

`start_url` was `/`, which points to:

```text
https://suntarme-glitch.github.io/
```

The app is actually served from:

```text
https://suntarme-glitch.github.io/california-bar-exam/
```

Fix:

- added relative `id`;
- changed `start_url` to `./`;
- added relative `scope`.

### P1: Stale service worker could block fresh deployments

Files: `sw.js`, `index.html`

The previous service worker used a cache-first pattern and older versions also attempted to precache root paths such as `/data.js`, which do not match the GitHub Pages project path. This can leave mobile browsers or installed PWAs stuck on stale cache.

Fix:

- adopted network-first behavior for app assets;
- bumped cache to `bar-exam-v8`;
- delete old caches on activation;
- force new worker activation;
- added `?reset=1` escape hatch to unregister service workers and clear cache storage.

### P1: Initial Gist auto-sync merged the wrong object

File: `index.html`

`gistLoad()` returns:

```js
{ progress: {}, notes: {} }
```

The settings modal path handled this correctly, but the automatic startup path passed the whole remote object into `mergeProgress()`. That could create invalid progress keys such as `progress` and `notes`.

Fix:

- startup sync now calls `mergeProgress(local, remote.progress || {})`;
- startup sync also merges remote notes through `mergeNotes()`.

### P2: Lesson badge background used invalid CSS

File: `index.html`

The badge background attempted to convert `var(--gold)` into `rgba(gold, 0.12)`, which is invalid CSS.

Fix:

- added `dimColor(color)`;
- maps `var(--gold)` to `var(--gold-dim)` and equivalent theme variables.

## Current Architecture Risks

### Content maintainability

`data.js` is already more than 4,000 lines and stores large HTML template strings. This is workable for a personal tool, but code review will become harder as the track approaches 100 lessons.

Recommended future path: define lessons in Markdown or structured JSON, then generate `data.js` or render content from a small schema.

### No automated browser test

There is no Playwright/Cypress setup. For now, local QA is manual. Because the project has no package manager, adding browser tests would require a new tooling decision.

Recommended future path: add a small Playwright smoke test that checks dashboard load, lesson open, note save and service worker registration.

### Token storage

GitHub token is stored in `localStorage`. This is acceptable for a personal study tracker and documented as such, but it should not be reused for a multi-user product.

Recommended future path: keep this project personal/offline-first or replace Gist sync with a proper backend/OAuth flow.

### Product/content mismatch

The UI frames the project as a "100 lessons" track. Current implemented content is 52 lessons.

Recommended future path: keep the "100 lessons" goal in product copy, but expose "52 implemented / 100 planned" somewhere in docs or UI if the project becomes public-facing.

## Verification Performed

- Cloned repository and inspected all runtime files.
- Parsed `data.js` with Node VM and counted subjects/lessons.
- Verified no duplicate subject ids and no empty lessons.
- Confirmed GitHub Pages URL responds with HTTP 200.
- Reviewed remote fix branches and fast-forwarded the branch that fixes stale service worker behavior.

Additional checks should be run after each content or UI change:

```bash
node --check data.js
node --check sw.js
node -e "JSON.parse(require('fs').readFileSync('manifest.json', 'utf8')); console.log('manifest ok')"
python3 -m http.server 8000
```

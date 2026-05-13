# Technical Documentation

## Назначение

`california-bar-exam` - статическое PWA-приложение для персональной подготовки к California Bar Exam. Оно не требует backend, базы данных или build pipeline: вся логика и контент лежат в репозитории и исполняются в браузере.

## Архитектура

```text
Browser
  ├─ index.html
  │   ├─ CSS theme and responsive layout
  │   ├─ dashboard rendering
  │   ├─ lesson rendering
  │   ├─ progress and notes persistence
  │   └─ GitHub Gist sync
  ├─ data.js
  │   └─ const SUBJECTS = [...]
  ├─ manifest.json
  │   └─ installable PWA metadata
  └─ sw.js
      └─ service worker cache and offline fallback
```

There is no module loader. `data.js` is loaded before the inline application script in `index.html`, so `SUBJECTS` is available globally.

## Runtime Files

### `index.html`

Single-file application shell:

- defines the full visual system and responsive layout;
- renders the sidebar, subject cards, lessons, quiz answers and notes area;
- stores progress and notes in `localStorage`;
- optionally syncs state to GitHub Gist;
- registers the service worker;
- supports `?reset=1` cache reset for stuck mobile/PWA sessions.

Important state keys:

| Key | Purpose |
| --- | --- |
| `barProgress` | Completed lesson map |
| `barNotes` | Per-lesson notes map |
| `gistToken` | GitHub token for Gist sync |
| `gistId` | Existing Gist id |

### `data.js`

Content source of truth. Shape:

```js
const SUBJECTS = [
  {
    id: 'contracts',
    name: 'Contracts',
    icon: '📜',
    color: 'var(--blue)',
    desc: '...',
    lessons: [
      {
        title: '...',
        content: `...trusted lesson HTML...`
      }
    ]
  }
];
```

Current content count:

- 13 subjects
- 52 implemented lessons
- 100 lessons planned by product framing

Lesson `content` is trusted HTML authored in the repository. It can include components already styled by `index.html`, including:

- `l-section`
- `timeline`
- `concept-card`
- `hbox`
- `comp-table`
- `bar-example`
- `bar-option`
- `quote-box`

### `manifest.json`

PWA metadata. Because this is a GitHub Pages project site, not an organization root site, `start_url` and `scope` must stay relative:

```json
{
  "id": "./",
  "start_url": "./",
  "scope": "./"
}
```

Using `/` here would make installed PWAs open `https://suntarme-glitch.github.io/` instead of `/california-bar-exam/`.

### `sw.js`

Service worker behavior:

- cache namespace: `bar-exam-v8`;
- deletes old cache versions on activation;
- uses network-first for app assets;
- caches successful same-origin responses;
- caches Google Fonts stylesheet opportunistically;
- bypasses GitHub API requests so Gist sync is never served from cache;
- returns a simple `Offline` response only when network and cache both fail.

This avoids the main failure mode from earlier versions: stale cache blocking fresh GitHub Pages deployments.

## Progress Data Model

`barProgress` maps subject id to lesson index booleans:

```json
{
  "contracts": {
    "0": true,
    "1": false
  },
  "torts": {
    "0": true
  }
}
```

`barNotes` maps subject id to lesson index strings:

```json
{
  "contracts": {
    "0": "Offer vs invitation to negotiate..."
  }
}
```

Gist sync payload version 2 stores both:

```json
{
  "__v": 2,
  "progress": {
    "contracts": {
      "0": true
    }
  },
  "notes": {
    "contracts": {
      "0": "My note"
    }
  }
}
```

Legacy Gist payloads that contain only progress are still accepted and converted to `{ progress, notes: {} }`.

## Sync Semantics

Progress merge is additive:

- if either local or remote marks a lesson as done, merged value is done;
- completed lessons are not automatically unset by remote state.

Notes merge is length-based:

- for the same lesson, the longer note wins;
- this is intentionally simple and avoids timestamp bookkeeping.

This is enough for a personal study tool, but not a collaborative sync engine.

## Deployment

Recommended GitHub Pages settings:

- source: deploy from branch;
- branch: `main`;
- folder: `/` repository root.

Expected public URL:

```text
https://suntarme-glitch.github.io/california-bar-exam/
```

After a deploy that changes `sw.js`, the app should self-update. If a device remains stuck on an old service worker, use:

```text
https://suntarme-glitch.github.io/california-bar-exam/?reset=1
```

## Local QA Checklist

Run static syntax checks:

```bash
node --check data.js
node --check sw.js
node -e "JSON.parse(require('fs').readFileSync('manifest.json', 'utf8')); console.log('manifest ok')"
```

Run local server:

```bash
python3 -m http.server 8000
```

Manual browser checks:

- dashboard loads without console errors;
- subject cards render;
- lesson opens and the badge has a tinted background;
- option click reveals the correct answer;
- "Отметить" updates progress;
- notes autosave and persist after reload;
- sync modal opens and closes;
- `?reset=1` unregisters service workers and reloads;
- mobile width shows the menu button and sidebar overlay.

## Known Technical Debt

- The app is a single large `index.html`; future growth would benefit from splitting UI, sync and content rendering into separate files.
- `data.js` stores long trusted HTML strings, which is simple but hard to review at 100 lessons. A structured lesson schema or Markdown pipeline would improve maintainability.
- GitHub token storage in `localStorage` is acceptable for a personal private tool, but not for a shared/public SaaS design.
- Quiz state is per render only; selected answers are not persisted.
- Dashboard copy says "100 уроков" while only 52 lessons are currently implemented. This is product framing, not current content count.

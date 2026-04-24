const CACHE = 'bar-exam-v2';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function cacheOk(req, res) {
  if (!res || !res.ok) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.g')) return;
  const clone = res.clone();
  caches.open(CACHE).then(c => c.put(req, clone)).catch(() => {});
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.url.includes('api.github.com')) return;

  const accept = req.headers.get('accept') || '';
  const isHTML = req.mode === 'navigate' || accept.includes('text/html');

  if (isHTML) {
    // network-first for pages: always show fresh app shell when online
    e.respondWith(
      fetch(req)
        .then(res => { cacheOk(req, res); return res; })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // stale-while-revalidate for static assets
  e.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(res => { cacheOk(req, res); return res; })
        .catch(() => cached);
      return cached || network;
    })
  );
});

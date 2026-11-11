// Temps de jeu handball : mise en cache complète pour un fonctionnement hors ligne.
// Change CACHE à chaque nouvelle version pour que les iPad la récupèrent.
const CACHE = 'tdj-v1.9.0';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './assets/ffhand.woff2', './assets/poppins-400.ttf', './assets/poppins-600.ttf', './assets/poppins-700.ttf',
  './assets/logo-ffhb.svg', './assets/fond.jpg', './assets/ffhand.ttf', './assets/logo-report.png', './lib/jspdf.umd.min.js',
  './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});

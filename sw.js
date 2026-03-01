self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open('transit-pwa-v6');
    await cache.addAll(['./','./index.html','./manifest.webmanifest']);
    self.skipWaiting();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    try {
      return await fetch(e.request);
    } catch (err) {
      const cache = await caches.open('transit-pwa-v6');
      const cached = await cache.match(e.request, { ignoreSearch: true });
      return cached || Response.error();
    }
  })());
});

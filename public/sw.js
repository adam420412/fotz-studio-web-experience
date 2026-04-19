// Service worker disabled. Replaces any stale cached worker with a no-op
// that clears its own caches and then unregisters itself.
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      if (self.caches) {
        const keys = await caches.keys();
        await Promise.all(keys.map(function (k) { return caches.delete(k); }));
      }
      await self.registration.unregister();
      const clients = await self.clients.matchAll();
      clients.forEach(function (c) { c.navigate(c.url); });
    })()
  );
});

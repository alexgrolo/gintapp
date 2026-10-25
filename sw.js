/* GintApp Service Worker
 * Sorgt dafür, dass Android die GintApp als App installieren kann (Vollbild ohne Browserleiste).
 * Er speichert bewusst nichts zwischen: Jede Seite kommt frisch aus dem Netz, damit alle immer
 * die aktuelle Version sehen. Ohne Internet erscheint nur ein kurzer Hinweis.
 */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;               // Daten, Bilder, Schriften laufen normal
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<body style="font-family:system-ui;background:#F6F4F9;color:#0A0A0A;padding:48px 20px">' +
    '<h1 style="margin:0 0 8px">GintApp</h1><p>Keine Internetverbindung. Die GintApp braucht Internet, um eure Gins zu laden.</p></body>',
    { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } })));
});

/* Service worker – Mano Registro
   1) Rende l'app utilizzabile anche senza connessione.
   2) Genera localmente i file .ics per Apple Calendar (i dati non lasciano mai il telefono). */
const CACHE = "mano-registro-v1";
const SHELL = ["./", "index.html", "manifest.json", "icon-180.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function fromB64url(s){
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while(s.length % 4) s += "=";
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for(let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if(url.origin !== location.origin) return;

  // Evento calendario generato sul dispositivo
  if(url.pathname.includes("/ics/") && url.searchParams.has("d")){
    try{
      const ics = fromB64url(url.searchParams.get("d"));
      e.respondWith(new Response(ics, {
        headers: {"Content-Type": "text/calendar; charset=utf-8", "Cache-Control": "no-store"}
      }));
    }catch(err){
      e.respondWith(new Response("Evento non valido", {status: 400}));
    }
    return;
  }

  // App: prima la rete (per ricevere gli aggiornamenti), poi la cache se offline
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      if(res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});

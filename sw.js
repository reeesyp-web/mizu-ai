// Service worker mínimo: solo hace la app instalable.
// No intercepta ninguna petición, así que no puede romper tu página ni las llamadas a la IA.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});

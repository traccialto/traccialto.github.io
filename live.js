"use strict";

const I18N = {
  it: {
    waitingConnection: "In attesa del collegamento",
    waitingFirstFix: "In attesa della prima posizione",
    center: "Centra",
    activityEnded: "Attività terminata",
    paused: "In pausa",
    positionReceived: "Posizione ricevuta",
    sessionExpired: "Sessione scaduta",
    gpsOutdated: "Posizione non aggiornata · in attesa di GPS affidabile",
    sessionTerminated: "Sessione terminata, scaduta o non disponibile",
    reconnecting: "Collegamento interrotto · nuovo tentativo in corso",
    linkInvalid: "Link mancante o non valido",
    httpsRequired: "Apri il link in un browser HTTPS aggiornato",
    connectionUnavailable: "Collegamento non disponibile",
    speed: "Velocità",
    speedRun: "Passo attuale",
    average: "Media in movimento",
    averageRun: "Passo medio",
    altitude: "Quota",
    distance: "Distanza",
    elapsed: "Tempo attivo",
    ascent: "Salita D+",
    movingTimeShort: "In movimento",
    movingTime: "Tempo in movimento:",
    lastGps: "Ultimo GPS affidabile: {s} secondi fa",
    noPosition: "Nessuna posizione ricevuta.",
    collapse: "Riduci statistiche",
    expand: "Mostra statistiche",
    trackLegend: "Traccia blu: percorso previsto · verde: tragitto ricevuto",
    statsSummary: "Informazioni sulla condivisione",
    disclaimer: "Condivisione sperimentale: non è un servizio di emergenza. La traccia segue i punti filtrati ricevuti e le loro correzioni; può includere un breve tratto precedente all’apertura.",
    mapStreets: "Mappa",
    mapSatellite: "Satellite",
    map3D: "3D",
    modes: { trekking: "Trekking", bicycle: "Bicicletta", running: "Corsa", walking: "Camminata" }
  },
  en: {
    waitingConnection: "Waiting for connection",
    waitingFirstFix: "Waiting for first location",
    center: "Center",
    activityEnded: "Activity ended",
    paused: "Paused",
    positionReceived: "Location received",
    sessionExpired: "Session expired",
    gpsOutdated: "Location outdated · waiting for reliable GPS",
    sessionTerminated: "Session ended, expired, or unavailable",
    reconnecting: "Connection lost · reconnecting...",
    linkInvalid: "Missing or invalid link",
    httpsRequired: "Open the link in an updated HTTPS browser",
    connectionUnavailable: "Connection unavailable",
    speed: "Speed",
    speedRun: "Current pace",
    average: "Moving average",
    averageRun: "Average pace",
    altitude: "Altitude",
    distance: "Distance",
    elapsed: "Active time",
    ascent: "Ascent D+",
    movingTimeShort: "Moving time",
    movingTime: "Moving time:",
    lastGps: "Last reliable GPS: {s}s ago",
    noPosition: "No position received yet.",
    collapse: "Collapse stats",
    expand: "Show stats",
    trackLegend: "Blue track: planned route · green: recorded track",
    statsSummary: "Sharing details",
    disclaimer: "Experimental live sharing: not an emergency service. Track follows received filtered points and their corrections; may include a short segment prior to opening.",
    mapStreets: "Map",
    mapSatellite: "Satellite",
    map3D: "3D",
    modes: { trekking: "Hiking", bicycle: "Cycling", running: "Running", walking: "Walking" }
  },
  fr: {
    waitingConnection: "En attente de connexion",
    waitingFirstFix: "En attente de la première position",
    center: "Centrer",
    activityEnded: "Activité terminée",
    paused: "En pause",
    positionReceived: "Position reçue",
    sessionExpired: "Session expirée",
    gpsOutdated: "Position non actualisée · en attente d'un GPS fiable",
    sessionTerminated: "Session terminée, expirée ou indisponible",
    reconnecting: "Connexion interrompue · reconnexion en cours...",
    linkInvalid: "Lien manquant ou invalide",
    httpsRequired: "Ouvrez le lien dans un navigateur HTTPS récent",
    connectionUnavailable: "Connexion indisponible",
    speed: "Vitesse",
    speedRun: "Allure actuelle",
    average: "Moyenne en mouvement",
    averageRun: "Allure moyenne",
    altitude: "Altitude",
    distance: "Distance",
    elapsed: "Temps actif",
    ascent: "Dénivelé D+",
    movingTimeShort: "En mouvement",
    movingTime: "Temps en mouvement :",
    lastGps: "Dernier GPS fiable : il y a {s}s",
    noPosition: "Aucune position reçue.",
    collapse: "Réduire les statistiques",
    expand: "Afficher les statistiques",
    trackLegend: "Trace bleue : itinéraire prévu · verte : trajet reçu",
    statsSummary: "Informations sur le partage",
    disclaimer: "Partage en direct expérimental : ce n'est pas un service d'urgence. Le tracé suit les points filtrés reçus et leurs corrections.",
    mapStreets: "Carte",
    mapSatellite: "Satellite",
    map3D: "3D",
    modes: { trekking: "Randonnée", bicycle: "Vélo", running: "Course", walking: "Marche" }
  },
  es: {
    waitingConnection: "Esperando conexión",
    waitingFirstFix: "Esperando primera posición",
    center: "Centrar",
    activityEnded: "Actividad finalizada",
    paused: "En pausa",
    positionReceived: "Posición recibida",
    sessionExpired: "Sesión caducada",
    gpsOutdated: "Posición no actualizada · esperando GPS fiable",
    sessionTerminated: "Sesión finalizada, caducada o no disponible",
    reconnecting: "Conexión interrumpida · reintentando...",
    linkInvalid: "Enlace no válido o ausente",
    httpsRequired: "Abre el enlace en un navegador HTTPS actualizado",
    connectionUnavailable: "Conexión no disponible",
    speed: "Velocidad",
    speedRun: "Ritmo actual",
    average: "Media en movimiento",
    averageRun: "Ritmo medio",
    altitude: "Altitud",
    distance: "Distancia",
    elapsed: "Tiempo activo",
    ascent: "Desnivel D+",
    movingTimeShort: "En movimiento",
    movingTime: "Tiempo en movimiento:",
    lastGps: "Último GPS fiable: hace {s}s",
    noPosition: "Ninguna posición recibida.",
    collapse: "Reducir estadísticas",
    expand: "Mostrar estadísticas",
    trackLegend: "Ruta azul: trayecto previsto · verde: trayecto recibido",
    statsSummary: "Información sobre el seguimiento",
    disclaimer: "Seguimiento en directo experimental: no es un servicio de emergencia. La ruta sigue los puntos filtrados recibidos y sus correcciones.",
    mapStreets: "Mapa",
    mapSatellite: "Satélite",
    map3D: "3D",
    modes: { trekking: "Senderismo", bicycle: "Bicicleta", running: "Carrera", walking: "Caminata" }
  }
};

let currentLang = (() => {
  const s = localStorage.getItem("traccialto_lang");
  if (s && I18N[s]) return s;
  const n = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  if (n.startsWith("it")) return "it";
  if (n.startsWith("fr")) return "fr";
  if (n.startsWith("es")) return "es";
  return "en";
})();

function t(k, vars) {
  let str = (I18N[currentLang] && I18N[currentLang][k]) || (I18N.en && I18N.en[k]) || k;
  if (vars) Object.keys(vars).forEach(v => str = str.replace(`{${v}}`, vars[v]));
  return str;
}

function applyLang(lang) {
  if (I18N[lang]) currentLang = lang;
  localStorage.setItem("traccialto_lang", currentLang);
  document.documentElement.lang = currentLang;
  document.querySelectorAll("#langPicker button").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-l") === currentLang);
  });
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (k) el.textContent = t(k);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const k = el.getAttribute("data-i18n-title");
    if (k) { el.title = t(k); el.setAttribute("aria-label", t(k)); }
  });
  if (latestPosition) updateTelemetryDisplay(latestPosition);
  else updateTelemetryDisplay({ mode: "trekking" });
  updateFreshness();
}

const text = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
const map = L.map("map", { zoomControl: false }).setView([30, 25], 3);
L.control.zoom({ position: "topright" }).addTo(map);
const streetLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
new ResizeObserver(() => document.documentElement.style.setProperty("--map-controls-top", (document.querySelector("header").getBoundingClientRect().bottom + 12) + "px")).observe(document.querySelector("header"));

let marker = null, following = true, lastTs = 0, lastSeq = 0, lastFix = 0, lastGps = 0, isPaused = false, ended = false, expires = 0, queue = Promise.resolve(), pending = 0, points = [], clients = [], receivedTrack = [], latestPosition = null;
const line = L.polyline([], { color: "#54d8b0", weight: 5 }).addTo(map);
map.on("dragstart", () => following = false);
document.getElementById("follow").onclick = () => { following = true; if (marker) map.setView(marker.getLatLng(), 16); if (window.syncLive3d) window.syncLive3d(); };
const bytes = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
const pace = v => { if (!(v > 0)) return "—"; const s = Math.round(1000 / v); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") + " /km"; };
const finite = (v, min, max) => typeof v === "number" && Number.isFinite(v) && v >= min && v <= max;

function filteredTrack(tail, now) {
  if (!Array.isArray(tail) || !tail.length || tail.length > 250) return false;
  let previous = 0;
  for (const p of tail) {
    if (!Array.isArray(p) || p.length !== 4 || !finite(p[0], -85, 85) || !finite(p[1], -180, 180) || !Number.isSafeInteger(p[2]) || p[2] <= previous || p[2] > now + 120000 || typeof p[3] !== "boolean") return false;
    previous = p[2];
  }
  const from = tail[0][2];
  receivedTrack = receivedTrack.filter(p => p[2] < from).concat(tail).slice(-10000);
  points = [];
  previous = 0;
  for (const p of receivedTrack) {
    if (!points.length || p[3] || (previous > 0 && p[2] - previous > 300000)) points.push([]);
    points[points.length - 1].push([p[0], p[1]]);
    previous = p[2];
  }
  line.setLatLngs(points);
  return true;
}

function updateTelemetryDisplay(p) {
  if (!p) p = {};
  const modes = (I18N[currentLang] && I18N[currentLang].modes) || I18N.en.modes;
  const modeKey = p.mode || "trekking";
  text("mode", modes[modeKey] || modeKey || "Live");

  const distStr = finite(p.distance, 0, 1e7) ? (p.distance / 1000).toFixed(2) + " km" : "—";
  const elapsedStr = finite(p.elapsed, 0, 1e9) ? Math.floor(p.elapsed / 3600000) + "h " + (Math.floor(p.elapsed / 60000) % 60) + "m" : "—";
  const movingStr = finite(p.moving, 0, 1e9) ? Math.floor(p.moving / 3600000) + "h " + (Math.floor(p.moving / 60000) % 60) + "m" : "—";
  const speedKmhStr = finite(p.speed, 0, 100) ? (p.speed * 3.6).toFixed(1) + " km/h" : "—";
  const avgKmhStr = finite(p.average, 0, 100) ? (p.average * 3.6).toFixed(1) + " km/h" : "—";
  const paceStr = finite(p.speed, 0, 100) ? pace(p.speed) : "—";
  const avgPaceStr = finite(p.average, 0, 100) ? pace(p.average) : "—";
  const altStr = finite(p.altitude, -500, 10000) ? Math.round(p.altitude) + " m" : "—";
  const ascentStr = finite(p.ascent, 0, 50000) ? Math.round(p.ascent) + " m" : "—";

  let cards;
  if (modeKey === "running") {
    cards = [
      [t("speedRun"), paceStr],
      [t("averageRun"), avgPaceStr],
      [t("distance"), distStr],
      [t("elapsed"), elapsedStr],
      [t("ascent"), ascentStr],
      [t("movingTimeShort"), movingStr]
    ];
  } else if (modeKey === "bicycle") {
    cards = [
      [t("speed"), speedKmhStr],
      [t("average"), avgKmhStr],
      [t("distance"), distStr],
      [t("ascent"), ascentStr],
      [t("elapsed"), elapsedStr],
      [t("altitude"), altStr]
    ];
  } else if (modeKey === "walking") {
    cards = [
      [t("distance"), distStr],
      [t("elapsed"), elapsedStr],
      [t("speed"), speedKmhStr],
      [t("average"), avgKmhStr],
      [t("ascent"), ascentStr],
      [t("altitude"), altStr]
    ];
  } else {
    // Default: trekking
    cards = [
      [t("ascent"), ascentStr],
      [t("altitude"), altStr],
      [t("distance"), distStr],
      [t("elapsed"), elapsedStr],
      [t("speed"), speedKmhStr],
      [t("average"), avgKmhStr]
    ];
  }

  for (let i = 0; i < 6; i++) {
    text(`c${i + 1}Label`, cards[i][0]);
    text(`c${i + 1}Val`, cards[i][1]);
  }
  text("movingTime", finite(p.moving, 0, 1e9) ? t("movingTime") + " " + Math.floor(p.moving / 3600000) + "h " + (Math.floor(p.moving / 60000) % 60) + "m" : "");
  if (window.setLiveMapModeVisibility) window.setLiveMapModeVisibility(modeKey);
}

async function init() {
  document.getElementById("langPicker").onclick = e => {
    const l = e.target.getAttribute("data-l");
    if (l) applyLang(l);
  };
  applyLang(currentLang);

  const hash = window.liveFragment;
  delete window.liveFragment;
  if (!/^f2:[a-f0-9]{32}:[a-f0-9]{32}$/.test(hash || "")) { text("status", t("linkInvalid")); return; }
  if (!crypto.subtle) { text("status", t("httpsRequired")); return; }
  const [, channel, secret] = hash.split(":");
  let routeSeq = 0, routeTs = 0, cachedRoute = null;

  function showRoute() {
    if (!latestPosition) return;
    const p = { ...latestPosition };
    if (cachedRoute && cachedRoute.routeVersion === p.routeVersion) p.planned = cachedRoute.planned;
    if (window.updateLivePlanned) window.updateLivePlanned(p);
    if (window.syncLive3d) window.syncLive3d();
  }

  const key = await crypto.subtle.importKey("raw", Uint8Array.from(secret.match(/../g), h => parseInt(h, 16)), "AES-GCM", false, ["decrypt"]);

  async function accept(raw) {
    if (!raw || raw.length > 65536 || ended) return;
    try {
      const envelope = JSON.parse(raw);
      if (envelope.v !== 1) return;
      const iv = bytes(envelope.iv);
      if (iv.length !== 12) return;
      const clear = await crypto.subtle.decrypt({ name: "AES-GCM", iv, additionalData: new TextEncoder().encode(channel) }, key, bytes(envelope.data));
      const p = JSON.parse(new TextDecoder().decode(clear)), now = Date.now();
      if (p.channel !== channel || !Number.isSafeInteger(p.seq) || p.seq <= (p.kind === "route" ? routeSeq : lastSeq) || !Number.isSafeInteger(p.ts) || p.ts <= (p.kind === "route" ? routeTs : lastTs) || p.ts > now + 120000 || !finite(p.expires, now, now + 13 * 3600000)) return;
      if (p.kind === "route") {
        if (typeof p.planned !== "string" || p.planned.length > 24000 || !/^([a-f0-9]{64})$/.test(p.routeVersion || "")) return;
        const digest = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(p.planned))), b => b.toString(16).padStart(2, "0")).join("");
        if (digest !== p.routeVersion) return;
        routeTs = p.ts; routeSeq = p.seq; cachedRoute = p; showRoute(); return;
      }
      lastTs = p.ts; lastSeq = p.seq; expires = p.expires;
      if (p.kind === "waiting") { text("status", t("waitingFirstFix")); return; }
      if (p.ended === true) { ended = true; text("status", t("activityEnded")); clients.forEach(c => { try { c.disconnect(); } catch (_) { } }); return; }
      latestPosition = p;
      const hasPlanned = Boolean((typeof p.routeVersion === "string" && p.routeVersion.length) || cachedRoute);
      if (hasPlanned) {
        receivedTrack = [];
        points = [];
        line.setLatLngs([]);
      }
      showRoute();
      updateTelemetryDisplay(p);
      isPaused = p.paused === true;
      if (finite(p.gpsTime, 0, now + 120000)) lastGps = p.gpsTime;
      const filtered = hasPlanned ? false : filteredTrack(p.track, now);
      if (finite(p.lat, -85, 85) && finite(p.lon, -180, 180) && finite(p.fixTime, 0, now + 120000) && p.fixTime > lastFix) {
        lastFix = p.fixTime;
        const ll = [p.lat, p.lon];
        if (!marker) marker = L.circleMarker(ll, { radius: 9, color: "white", weight: 3, fillColor: "#1780df", fillOpacity: 1 }).addTo(map);
        else marker.setLatLng(ll);
        if (following) map.setView(ll, map.getZoom() < 12 ? 16 : map.getZoom());
      }
      if (window.syncLive3d) window.syncLive3d();
      text("status", p.paused ? t("paused") : t("positionReceived"));
      updateFreshness();
    } catch (_) { }
  }

  const transport = await window.listenFirebaseLive(channel, raw => {
    if (raw && raw.length <= 65536 && pending < 16) { pending++; queue = queue.then(() => accept(raw)).finally(() => pending--); }
  }, permanent => {
    if (!ended) {
      if (permanent) ended = true;
      text("status", permanent ? t("sessionTerminated") : t("reconnecting"));
    }
  });
  clients.push(transport);
  if (ended) transport.disconnect();
  text("status", t("waitingFirstFix"));
}

let wakeLock = null;
async function requestWakeLock() {
  if (ended || !("wakeLock" in navigator) || document.visibilityState !== "visible") return;
  try {
    if (!wakeLock) {
      wakeLock = await navigator.wakeLock.request("screen");
      wakeLock.addEventListener("release", () => { wakeLock = null; });
    }
  } catch (_) { }
}
function releaseWakeLock() {
  if (wakeLock) { try { wakeLock.release(); } catch (_) { } wakeLock = null; }
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    requestWakeLock();
    try { map.invalidateSize(); } catch (_) { }
    if (latestPosition) updateTelemetryDisplay(latestPosition);
    updateFreshness();
  }
});
document.addEventListener("pointerdown", () => { requestWakeLock(); }, { passive: true });

function updateFreshness() {
  if (ended) { releaseWakeLock(); return; }
  if (expires && Date.now() > expires) {
    ended = true; releaseWakeLock(); text("status", t("sessionExpired"));
    clients.forEach(c => { try { c.disconnect(); } catch (_) { } });
    return;
  }
  if (lastGps || lastFix) {
    const seconds = Math.max(0, Math.floor((Date.now() - (lastGps || lastFix)) / 1000));
    text("updated", t("lastGps", { s: seconds }));
    if (seconds > 20 && !isPaused) text("status", t("gpsOutdated"));
  }
}

setInterval(updateFreshness, 1000);
requestWakeLock();
init().catch(() => text("status", t("connectionUnavailable")));

document.getElementById("collapseStats").onclick = function () {
  const compact = document.querySelector(".panel").classList.toggle("compact");
  this.setAttribute("aria-expanded", String(!compact));
  this.setAttribute("aria-label", compact ? t("expand") : t("collapse"));
  this.title = compact ? t("expand") : t("collapse");
};

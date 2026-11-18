(function () {
  "use strict";

  const I18N = {
    it: {
      pageTitle: "Traccialto — Trekking, Bicicletta, Corsa e Camminata Offline",
      pageDesc: "Un’app sola per camminare, correre, pedalare e andare in montagna offline: mappe e metriche per ogni attività, vie ferrate opt-in, zone 1–50 km, GPX/KML, tramonto offline e Replay 3D. Gratis e senza pubblicità.",
      skipToContent: "Vai al contenuto",
      brandAria: "Traccialto inizio",
      navAria: "Menu principale",
      langAria: "Lingua",
      modesGalleryAria: "Esplora le 4 attività outdoor",
      trekImgAlt: "Trekking in montagna presso un lago alpino",
      bikeImgAlt: "Bicicletta gravel lungo un passo montano",
      runImgAlt: "Corsa lungo pista pedonale e fiume",
      walkImgAlt: "Camminata su viale alberato lungo il lago",
      feat1TopoAria: "Illustrazione vettoriale del rilievo topografico",
      feat3BoxAria: "Anteprima modalità AMOLED e calcolo tramonto offline",
      qrAlt: "QR Code per aprire Traccialto su Google Play",
      footerPrivacyLink: "Informativa Privacy",

      navActivities: "Modalità",
      navFeatures: "Funzioni",
      navPrivacy: "Privacy",
      navFaq: "Domande",
      btnAvailability: "Scarica su Google Play",
      btnAvailabilityShort: "Google Play",

      heroBadge: "Trekking · Bicicletta · Corsa · Camminata",
      heroTitle: "Un’app sola per camminare, correre,<br>pedalare e andare in montagna.",
      heroLead: "Scegli come ti muovi e Traccialto adatta mappa, routing, punti utili e metriche: sentieri T1–T6 e ferrate in quota, ciclovie in bici, passo al km di corsa o passeggiate essenziali. Zone offline 1–50 km e GPX/KML liberi, senza account né pubblicità.",
      btnHeroDownload: "Scarica gratis su Google Play",
      btnHeroExplore: "Confronta le 4 modalità",

      spec1Val: "4 attività",
      spec1Lbl: "Motori e POI dedicati",
      spec2Val: "1–50 km",
      spec2Lbl: "Zone offline con un tocco",
      spec3Val: "GPX · KML",
      spec3Lbl: "Import ed export HTML 3D",
      spec4Val: "0 € · No ads",
      spec4Lbl: "Senza account obbligatorio",

      mTrekShort: "Trekking",
      mTrekHint: "Sentieri, T1–T6 e ferrate",
      mBikeShort: "Bicicletta",
      mBikeHint: "Ciclovie e manubrio",
      mRunShort: "Corsa",
      mRunHint: "Passo al km e anelli",
      mWalkShort: "Camminata",
      mWalkHint: "Parchi e mappa pulita",
      tabTrek: "01 · Trekking",
      tabBike: "02 · Bicicletta",
      tabRun: "03 · Corsa",
      tabWalk: "04 · Camminata",

      discIntroNum: "01 / MODALITÀ DEDICATE",
      discIntroTitle: "Quattro attività reali, non un profilo unico adattato.",
      discIntroDesc: "Traccialto non applica una formula generica a tutti gli sport. Ogni modalità adotta motori di calcolo, punti utili sulla mappa, velocità stimate e metriche pensate per chi fa trekking, pedala, corre o cammina.",

      trekTag: "01 · Montagna",
      trekTitle: "Trekking & Montagna",
      trekDesc: "Prepara escursioni e anelli privilegiando i sentieri, includendo su richiesta le vie ferrate mappate (con avviso su attrezzatura e condizioni). Confronta quote, salita e durata stimata prima di partire.",
      trekF1: "<strong>Difficoltà T1–T6 in Italia</strong> dove presenti nei dati; i tratti non classificati restano indicati",
      trekF2: "<strong>Tempi sul tuo passo reale</strong> calibrati su pendenza DEM, T1–T6 e storico",
      trekF3: "<strong>Voce svolta, fuori rotta e +500 m D+</strong> più orario del tramonto calcolato offline",
      trekF4: "<strong>Bussola orientata</strong> sulla cartografia topografica con rifugi e bivacchi",
      trekPill: "Compatibile con tracce GPX ufficiali CAI e regionali",

      bikeTag: "02 · Due ruote",
      bikeTitle: "Bicicletta",
      bikeDesc: "Algoritmo di routing calibrato per ciclovie, strade bianche e viabilità a basso scorrimento. Schermata ad alto contrasto concepita per essere letta all’istante dal supporto da manubrio.",
      bikeF1: "<strong>Routing ciclistico dedicato</strong> con priorità a piste ciclabili e sterrati compatti",
      bikeF2: "<strong>Guida vocale svolte & fuori rotta</strong> e orario del tramonto visibile dal vivo",
      bikeF3: "<strong>Distanza, velocità e quota</strong> ad alto contrasto sul supporto da manubrio",
      bikeF4: "<strong>Registrazione continua</strong> e zone scaricabili offline fino a 50 km",
      bikePill: "Verifica fondo e accessibilità per la tua bicicletta",

      runTag: "03 · Ritmo",
      runTitle: "Corsa",
      runDesc: "Per uscite nei parchi, lungo i fiumi e sulle vie pedonali: passo recente e medio al chilometro, pausa automatica e anelli su distanza o durata.",
      runF1: "<strong>Anelli personalizzabili</strong> per distanza o durata, con limite D+ facoltativo",
      runF2: "<strong>Istruzioni vocali essenziali</strong> solo sulle svolte effettive, passo al km e pausa auto",
      runF3: "<strong>Fontane e punti preferiti</strong> selezionabili sulla mappa di corsa",
      runF4: "<strong>Zone offline fino a 50 km:</strong> scarica prima l’area che ti serve",
      runPill: "Passo recente e medio al km in tempo reale, zero distrazioni",

      walkTag: "04 · Quotidiano",
      walkTitle: "Camminata",
      walkDesc: "Pensata per passeggiate urbane, parchi e sentieri dolci senza la complessità dell’alta quota: ritmo leggero e mappa ripulita dagli elementi non pertinenti.",
      walkF1: "<strong>Mappa essenziale per passeggiare:</strong> mostra punti acqua e i tuoi punti preferiti",
      walkF2: "<strong>Anelli flessibili</strong> per distanza o tempo disponibile fuori porta",
      walkF3: "<strong>Funzione Trip Trim</strong> per ripulire code o soste accidentali a fine uscita",
      walkF4: "<strong>Diario con foto e statistiche</strong> sempre nel tuo archivio locale",
      walkPill: "Perfetta per passeggiate, parchi e cammini leggeri",

      startNum: "02 / DALL’IDEA ALL’USCITA",
      startTitle: "Meno preparativi. Più tempo fuori.",
      s1Title: "Scegli l’attività",
      s1Desc: "Trekking, bicicletta, corsa o camminata: metriche, punti sulla mappa e pianificazione seguono la tua scelta.",
      s2Title: "Prepara la tua uscita",
      s2Desc: "Crea tappe, importa una traccia o cerca un anello. Controlla il percorso e scarica le mappe disponibili.",
      s3Title: "Parti e ritrova i tuoi progressi",
      s3Desc: "Segui il percorso o registra liberamente. Al ritorno trovi mappa, tempi e profilo nel tuo storico.",

      showNum: "03 / DENTRO L’APP (GOOGLE PLAY)",
      showTitle: "Progettata per leggersi bene in ogni uscita all’aperto.",
      showDesc: "Esempio delle schermate incluse gratis su Android: navigazione dedicata per tutte e 4 le attività, anelli su misura con zone 1–50 km, Replay 3D e Storie fotografiche.",
      show1Title: "Mappa topografica, T1–T6 & tramonto offline",
      show1Desc: "Indicazioni vocali alle svolte, avviso fuori rotta e calcolo solare senza campo telefonico.",
      show2Title: "Bici, Corsa & Camminata con anelli su misura",
      show2Desc: "Routing per ciclovie, passo al km nella corsa, mappa pulita per passeggiare e aree offline 1–50 km.",
      show3Title: "Replay 3D, Storie foto & export HTML",
      show3Desc: "Rivivi la traccia in 3D, crea una Storia con i dati dell’uscita o esporta una pagina web autonoma.",
      ui1Chip1: "T3 · Sentiero alpino",
      ui1Chip2: "☀ Tramonto 18:14 · 3h 20m luce",
      ui1M1: "Quota",
      ui1M3: "Passo reale",
      ui2Chip1: "Anello Bicicletta",
      ui2Chip2: "Ciclovie & sterrato",
      ui2CardTitle: "Anello ciclabile · Vista manubrio",
      ui2CardDesc: "Priorità a piste ciclabili e strade bianche; metriche ad alto contrasto e tramonto dal vivo.",
      ui2M1: "Distanza",
      ui2M2: "D+ Max",
      ui2M3: "Zona offline",
      ui3Chip1: "Replay 3D pronto",
      ui3Chip2: "HTML interattivo",
      ui3CardTitle: "Giro del Lago · Storia",
      ui3M1: "Percorso",
      ui3M2: "Salita",
      ui3M3: "Esporta",

      featNum: "04 / STRUMENTI PER IL TERRENO",
      featIntroTitle: "Strumenti costruiti per il terreno reale.",
      featIntroDesc: "Prepara l’itinerario, osserva il terreno e scegli quali dati tenere a vista durante l’uscita.",

      feat1Tag: "Morfologia & Mappe Offline",
      feat1Title: "Rilievi 3D DEM, zone offline 1–50 km & Replay 3D",
      feat1Desc: "Il modello digitale del terreno DEM mostra versanti, creste e ripidezza in 3D, e a fine uscita rivedi il percorso in Replay 3D. Puoi scaricare intere aree cercando una località (1–50 km) anche senza una traccia già pronta.",
      feat1Badge: "Vetta • 2.814 m",

      feat2Tag: "Itinerari Circolari",
      feat2Title: "Un anello, come lo vuoi tu",
      feat2Desc: "Scegli distanza oppure durata e, se vuoi, un limite alla salita totale. Confronta le alternative sulla rete disponibile per la tua modalità. Distanza e tempo sono stime; alcuni tratti possono ripetersi. Il calcolo richiede internet.",
      feat2Dist: "Distanza",
      feat2Gain: "Dislivello",
      feat2Est: "Stima",

      feat3Tag: "Efficienza & Luce Naturale",
      feat3Title: "Display AMOLED & orario tramonto offline",
      feat3Desc: "Vista nera essenziale con registrazione a schermo spento, più calcolo solare offline dell’orario di tramonto e luce residua con avviso se l’arrivo stimato supera il buio (Trekking e Bici).",
      feat3Header: "MODALITÀ AMOLED ATTIVA",
      feat3Gps: "GPS: PRECISO",
      feat3Altitude: "Quota Attuale",
      feat3Gain: "Dislivello D+",
      feat3Dist: "Distanza",
      feat3Battery: "Tempo attivo",
      feat3SunsetLeft: "☀ Tramonto oggi 18:14",
      feat3SunsetRight: "3h 20m luce · calcolo offline",

      feat4Tag: "Ricordi & Sicurezza",
      feat4Title: "Replay 3D, Storie e sicurezza SOS",
      feat4Desc: "Rivedi la traccia con Replay 3D, crea una Storia con foto e dati oppure esporta una pagina HTML (interattiva nei browser compatibili; vista salvata e profilo altimetrico su iPhone).",
      feat4P1: "File HTML standalone con mappa interattiva e profilo dislivello",
      feat4P2: "Schermata SOS con coordinate rapide per il 112 e torcia ottica in codice Morse",
      feat4P3: "Strumento Trip Trim per rimuovere tempi morti all’inizio e alla fine",
      feat4P4: "Disponibile in italiano, inglese, francese e spagnolo",

      feat5Tag: "Sezione Amici Facoltativa",
      feat5Title: "Condividi percorsi con i tuoi amici",
      feat5Desc: "L’app base continua a funzionare senza account. Se vuoi scambiare itinerari con amici fidati, accedi facoltativamente con Google, scegli un @username univoco e condividi i percorsi dal tuo Google Drive (permesso limitato drive.file), con pieno controllo su rimozione e accessi.",
      feat5P1: "Ricerca per @username esatto, senza mostrare email o nome Google",
      feat5P2: "Rimozione di un singolo percorso o svuotamento completo dell’archivio condiviso",
      feat5P3: "Archivio condiviso separato dal backup privato (appDataFolder) su Drive",
      feat5P4: "Notifiche locali per richieste d’amicizia attivabili dalle impostazioni",

      feat6Tag: "Guida Vocale & Live Tracking",
      feat6Title: "Voce alle svolte, fuori rotta e Live cifrato",
      feat6Desc: "Indicazioni vocali alle svolte effettive con allarme fuori rotta, sessione live cifrata sul telefono (AES-GCM fino a 8 ore), punti utili filtrati per sport e tema scuro leggibile.",
      feat6P1: "Guida vocale mirata alle svolte, avvisi ogni 500 m D+ e fuori rotta",
      feat6P2: "Fontane e preferiti attivabili su mappa; rifugi e bivacchi alpini nel Trekking",
      feat6P3: "Live tracking opt-in AES-GCM sul dispositivo (massimo 8 ore)",
      feat6P4: "Tema scuro ad alto contrasto, pausa auto e pannello Notifiche",

      privNum: "05 / PRIVACY E CONTROLLO",
      privTitle: "I tuoi percorsi appartengono solo a te.",
      privDesc: "Lo storico rimane sul telefono, senza alcun account obbligatorio. Servizi cartografici online, backup Drive, Amici e condivisione live sono gestibili nelle impostazioni e inviano solo i dati necessari alla funzione richiesta.",
      privB1Title: "Il tuo storico sul dispositivo",
      privB1Desc: "Conserva attività e impostazioni sul telefono. Scegli tu quando esportarle o condividerle.",
      privB2Title: "Backup privato su Google Drive",
      privB2Desc: "Sincronizza e ripristina percorsi, diario e foto nella cartella nascosta (appDataFolder) del tuo Google Drive personale, senza server esterni.",
      privB4Title: "Amici e condivisione live facoltativi",
      privB4Desc: "In Amici usi uno @username pubblico senza mostrare email o nome agli altri e salvi i percorsi condivisi sul tuo Drive (drive.file); la sessione Live cifra la posizione con AES-GCM sul telefono.",
      privB3Title: "Zero cookie e zero tracciamento",
      privB3Desc: "Né questo sito né l’app includono Google Analytics, Facebook Pixel o reti pubblicitarie di monetizzazione.",
      privBtn: "Leggi l’informativa completa sulla privacy",

      faqNum: "06 / DOMANDE FREQUENTI",
      faqTitle: "Tutto quello che c’è da sapere.",
      faqDesc: "Risposte semplici e trasparenti su licenza, funzionamento offline, privacy e compatibilità con i tuoi dispositivi Android.",
      q1: "Traccialto è davvero completamente gratuita?",
      a1: "Sì. Non ci sono canoni mensili, non esistono funzioni 'pro' a pagamento e non ci sono banner pubblicitari. Traccialto nasce come progetto indipendente e artigianale dedicato a chi ama camminare, correre, pedalare e vivere la montagna con uno strumento pulito e trasparente.",
      q2: "Funziona anche offline dove non c’è campo telefonico?",
      a2: "Puoi registrare con il GPS e seguire una traccia salvata senza connessione. Scarica prima le mappe disponibili per il percorso e verifica che siano presenti. Ricerca dei luoghi, nuovi itinerari e contenuti non scaricati richiedono internet. La precisione GPS dipende dalle condizioni.",
      q3: "Posso importare i miei percorsi e tracce GPX esistenti?",
      a3: "Puoi importare file GPX e KML compatibili, visualizzarli e seguirli. La disponibilità delle quote dipende dal file e dai dati cartografici. Usa tracce di cui hai il diritto di disporre.",
      q4: "Come funziona il backup dei miei percorsi?",
      a4: "Puoi collegare facoltativamente il tuo account Google per salvare e sincronizzare in modo incrementale percorsi, camminate, diario e foto nella cartella privata dell’app (appDataFolder) sul tuo Google Drive, con ripristino anche in background quando cambi telefono.",
      q5: "Quali versioni di Android sono supportate?",
      a5: "L’app richiede Android 8 o successivo. Prestazioni del 3D, ricezione GPS e registrazione in background dipendono dal dispositivo. Alcune funzioni richiedono versioni Android più recenti.",
      q6: "Come funziona la sezione Amici ed è obbligatoria?",
      a6: "È completamente facoltativa: puoi usare tutte le funzioni di cartografia e registrazione senza alcun account. Se attivi Amici, accedi con Google, scegli un @username univoco e condividi solo i percorsi selezionati tramite un file archivio dedicato sul tuo Google Drive (permesso limitato drive.file), con notifiche configurabili nelle impostazioni, rimozione singola o totale e disconnessione o eliminazione profilo in ogni momento.",

      closingTag: "Pronto per la prossima uscita",
      closingTitle: "Portati solo l’essenziale.",
      closingDesc: "Disponibile su Google Play Store. Scarica l’applicazione gratuita e inizia a esplorare in tutte e 4 le modalità.",
      closingBtn: "Scarica gratis su Google Play",
      qrTitle: "Sei al computer?",
      qrDesc: "Inquadra il QR col telefono per installare",
      closingFoot: "Android 8+ · Gratis · Senza pubblicità",

      footerCopy: "© 2026 Traccialto. Progetto indipendente per trekking, bicicletta, corsa e camminata. Senza strumenti pubblicitari. Consulta l’informativa privacy."
    },

    en: {
      pageTitle: "Traccialto — Offline Hiking, Cycling, Running & Walking",
      pageDesc: "One app built for walking, running, cycling, and mountain trails offline: tailored routing & metrics, opt-in via ferratas, 1–50 km areas, GPX/KML, offline sunset & 3D Replay. Free, zero ads.",
      skipToContent: "Skip to content",
      brandAria: "Traccialto home",
      navAria: "Main menu",
      langAria: "Language",
      modesGalleryAria: "Explore all 4 outdoor activities",
      trekImgAlt: "Hiking in the mountains by an alpine lake",
      bikeImgAlt: "Gravel bicycle along a mountain pass",
      runImgAlt: "Running along a riverside pedestrian track",
      walkImgAlt: "Walking on a tree-lined lakeside path",
      feat1TopoAria: "Vector illustration of topographic terrain relief",
      feat3BoxAria: "Preview of AMOLED mode and offline sunset calculation",
      qrAlt: "QR code to open Traccialto on Google Play",
      footerPrivacyLink: "Privacy Policy",

      navActivities: "Activities",
      navFeatures: "Features",
      navPrivacy: "Privacy",
      navFaq: "FAQ",
      btnAvailability: "Get it on Google Play",
      btnAvailabilityShort: "Google Play",

      heroBadge: "Hiking · Cycling · Running · Walking",
      heroTitle: "One app built for walking, running,<br>cycling, and mountain trails.",
      heroLead: "Pick how you move and Traccialto adapts maps, routing, map points, and metrics: T1–T6 trails and opt-in ferratas, bike cycleways, km running pace, or clutter-free walks. 1–50 km offline zones & open GPX/KML, no account, zero ads.",
      btnHeroDownload: "Get it free on Google Play",
      btnHeroExplore: "Compare all 4 modes",

      spec1Val: "4 activities",
      spec1Lbl: "Dedicated routing & POIs",
      spec2Val: "1–50 km",
      spec2Lbl: "One-tap offline zones",
      spec3Val: "GPX · KML",
      spec3Lbl: "Import & 3D HTML export",
      spec4Val: "€0 · No ads",
      spec4Lbl: "No account required",

      mTrekShort: "Hiking",
      mTrekHint: "Trails, T1–T6 & ferratas",
      mBikeShort: "Cycling",
      mBikeHint: "Cycleways & handlebar",
      mRunShort: "Running",
      mRunHint: "Km pace & loops",
      mWalkShort: "Walking",
      mWalkHint: "Parks & clean map",
      tabTrek: "01 · Hiking",
      tabBike: "02 · Cycling",
      tabRun: "03 · Running",
      tabWalk: "04 · Walking",

      discIntroNum: "01 / DEDICATED MODES",
      discIntroTitle: "Four real outdoor activities, not one generic profile.",
      discIntroDesc: "Traccialto doesn't apply a generic formula to all sports. Each mode uses routing algorithms, mode-aware map points, speed estimates, and metrics tailored for hiking, cycling, running, or walking.",

      trekTag: "01 · Mountains",
      trekTitle: "Trekking & Hiking",
      trekDesc: "Plan hikes and loops prioritizing footpaths, and optionally include mapped via ferrata routes (with gear and condition alerts). Compare altitudes, climbs, and estimated times before heading out.",
      trekF1: "<strong>Trail difficulty T1–T6 in Italy</strong> where present; unclassified segments remain clearly marked",
      trekF2: "<strong>Personal pace timing</strong> calibrated on DEM slope, T1–T6, and your track history",
      trekF3: "<strong>Turn voice prompts, off-route alert & +500 m D+</strong> plus offline sunset time",
      trekF4: "<strong>Oriented compass</strong> on topographic maps with alpine huts and bivouacs",
      trekPill: "Compatible with official regional and CAI GPX tracks",

      bikeTag: "02 · Two wheels",
      bikeTitle: "Cycling",
      bikeDesc: "Routing algorithm calibrated for cycle paths, gravel roads, and low-traffic routes. High-contrast screen designed for instant reading from your handlebar mount.",
      bikeF1: "<strong>Dedicated bicycle routing</strong> prioritizing bike lanes and packed gravel",
      bikeF2: "<strong>Turn-by-turn voice & off-route alerts</strong> plus live offline sunset timing",
      bikeF3: "<strong>Distance, speed, and altitude</strong> on a crisp handlebar view",
      bikeF4: "<strong>Continuous tracking</strong> and downloadable offline areas up to 50 km",
      bikePill: "Check surface conditions and accessibility for your bike",

      runTag: "03 · Pace",
      runTitle: "Running",
      runDesc: "For park runs, riverside paths, and pedestrian routes: recent and average pace per kilometer, auto-pause, and distance or time-based loops.",
      runF1: "<strong>Customizable loops</strong> by distance or duration, with optional D+ limits",
      runF2: "<strong>Essential turn voice prompts</strong> focused only on real street turns, pace & auto-pause",
      runF3: "<strong>Water fountains and favorite points</strong> selectable on your running map",
      runF4: "<strong>Offline zones up to 50 km:</strong> download your running area ahead of time",
      runPill: "Live recent and average pace per km, zero distractions",

      walkTag: "04 · Everyday",
      walkTitle: "Walking",
      walkDesc: "Designed for city walks, parks, and gentle trails without high-mountain clutter: relaxed rhythm and clean maps focused on essentials.",
      walkF1: "<strong>Essential walking map:</strong> shows water points and your saved favorites",
      walkF2: "<strong>Flexible loops</strong> tailored to available distance or time",
      walkF3: "<strong>Trip Trim tool</strong> to clean up accidental waiting tails after saving",
      walkF4: "<strong>Photo diary and stats</strong> stored in your private on-device archive",
      walkPill: "Ideal for city walks, parks, and gentle paths",

      startNum: "02 / FROM PLAN TO OUTING",
      startTitle: "Less preparation. More time outdoors.",
      s1Title: "Choose your activity",
      s1Desc: "Hiking, cycling, running, or walking: metrics, map points, and planning adapt to your choice.",
      s2Title: "Prepare your outing",
      s2Desc: "Create stops, import a GPX track, or generate a loop. Review the route and download maps.",
      s3Title: "Head out and track your progress",
      s3Desc: "Follow the track or record freely. Find map, times, and elevation profile in your history upon return.",

      showNum: "03 / INSIDE THE APP (GOOGLE PLAY)",
      showTitle: "Designed to stay readable on every outdoor route.",
      showDesc: "Preview of key screens included free on Android: dedicated navigation across all 4 activities, custom loops with 1–50 km offline areas, 3D Replay, and photo Stories.",
      show1Title: "Topo maps, T1–T6 & offline sunset",
      show1Desc: "Turn-by-turn voice prompts, off-route alert, and zero-signal daylight timing.",
      show2Title: "Cycling, Running & Walking with smart loops",
      show2Desc: "Cycleway routing, running pace per km, clean walking maps, and 1–50 km offline areas.",
      show3Title: "3D Replay, photo Stories & HTML export",
      show3Desc: "Revisit your track in 3D, build a photo Story card, or export a standalone web page.",
      ui1Chip1: "T3 · Alpine trail",
      ui1Chip2: "☀ Sunset 18:14 · 3h 20m light",
      ui1M1: "Altitude",
      ui1M3: "Your pace",
      ui2Chip1: "Cycling Loop",
      ui2Chip2: "Cycleways & gravel",
      ui2CardTitle: "Cycleway loop · Handlebar view",
      ui2CardDesc: "Prioritizes bike lanes and compact gravel; crisp handlebar metrics and live offline sunset.",
      ui2M1: "Distance",
      ui2M2: "Max D+",
      ui2M3: "Offline zone",
      ui3Chip1: "3D Replay ready",
      ui3Chip2: "Interactive HTML",
      ui3CardTitle: "Lake Loop · Story",
      ui3M1: "Route",
      ui3M2: "Climb",
      ui3M3: "Export",

      featNum: "04 / REAL TERRAIN TOOLS",
      featIntroTitle: "Tools built for real terrain.",
      featIntroDesc: "Plan your route, inspect the terrain, and choose which metrics stay visible on screen.",

      feat1Tag: "Terrain Morphology & Offline Areas",
      feat1Title: "3D DEM terrain relief, 1–50 km offline zones & 3D Replay",
      feat1Desc: "High-resolution DEM models show slopes, ridges, and steepness in 3D, and let you revisit finished trips in 3D Replay. Download entire areas (1–50 km) by searching any place even without a prebuilt track.",
      feat1Badge: "Summit • 2,814 m",

      feat2Tag: "Circular Routes",
      feat2Title: "A loop route, just how you want it",
      feat2Desc: "Choose distance or duration and, if desired, a limit on total climb. Compare alternatives on the network available for your mode. Distance and time are estimates; some segments may repeat. Calculation requires an internet connection.",
      feat2Dist: "Distance",
      feat2Gain: "Elevation",
      feat2Est: "Estimate",

      feat3Tag: "Energy Efficiency & Natural Light",
      feat3Title: "AMOLED cockpit & offline sunset timing",
      feat3Desc: "Essential pure-black view with screen-off recording, plus offline solar calculation of local sunset and remaining daylight with late-arrival warnings (Trekking & Cycling).",
      feat3Header: "AMOLED MODE ACTIVE",
      feat3Gps: "GPS: ACCURATE",
      feat3Altitude: "Current Alt.",
      feat3Gain: "Elevation D+",
      feat3Dist: "Distance",
      feat3Battery: "Active time",
      feat3SunsetLeft: "☀ Sunset today 18:14",
      feat3SunsetRight: "3h 20m light · offline calc",

      feat4Tag: "Memories & Safety",
      feat4Title: "3D Replay, Stories & offline SOS",
      feat4Desc: "Review tracks in 3D Replay, craft a Story with photos and metrics, or export a standalone HTML page (interactive in compatible browsers; saved view and elevation profile on iPhone).",
      feat4P1: "Standalone HTML file with interactive map and elevation profile",
      feat4P2: "SOS screen with 112 shortcut, GPS coordinates, and Morse-code optical flashlight",
      feat4P3: "Trip Trim tool to remove waiting times at start and finish",
      feat4P4: "Available in Italian, English, French, and Spanish",

      feat5Tag: "Optional Friends Space",
      feat5Title: "Share routes with trusted friends",
      feat5Desc: "Core navigation keeps working without any account. If you enable Friends, sign in optionally with Google, choose a unique @username, and share chosen routes via a dedicated Google Drive archive (limited drive.file scope), with full control over removal and access.",
      feat5P1: "Exact @username search without exposing your Google email or display name",
      feat5P2: "Remove a single shared route or clear your entire shared archive at any time",
      feat5P3: "Shared Drive file kept separate from your private appDataFolder backup",
      feat5P4: "Local friend-request notifications configurable in app Settings",

      feat6Tag: "Voice Guidance & Live Tracking",
      feat6Title: "Turn prompts, off-route alert & encrypted Live",
      feat6Desc: "Focused turn voice prompts and off-route alarm, optional on-device AES-GCM encrypted live sharing (up to 8 hours), mode-aware POIs, and readable Dark Mode.",
      feat6P1: "Focused turn voice prompts, alerts every 500 m D+ & off-route check",
      feat6P2: "Fountains and favorites toggled on map; alpine huts & bivouacs in Trekking",
      feat6P3: "Opt-in on-device AES-GCM encrypted live sharing (8 hours maximum)",
      feat6P4: "High-contrast Dark Mode, auto-pause & Notifications settings panel",

      privNum: "05 / PRIVACY & CONTROL",
      privTitle: "Your routes belong only to you.",
      privDesc: "Your history stays on your device with no mandatory account. Online map services, Drive backup, Friends, and live sharing can be managed in Settings and send only what is required for the requested feature.",
      privB1Title: "History stored on device",
      privB1Desc: "Keep your activities and settings on your phone. You choose when to export or share them.",
      privB2Title: "Private Google Drive backup",
      privB2Desc: "Sync and restore your routes, diary, and photos inside the hidden app folder (appDataFolder) of your personal Google Drive, with no third-party servers.",
      privB4Title: "Optional Friends & encrypted live share",
      privB4Desc: "Friends uses a public @username without showing your email to others and stores shared tracks on your Drive (drive.file); Live sessions encrypt coordinates on-device with AES-GCM.",
      privB3Title: "Zero cookies, zero trackers",
      privB3Desc: "Neither this website nor the app include Google Analytics, Facebook Pixel, or monetization ad networks.",
      privBtn: "Read full privacy policy",

      faqNum: "06 / FAQ & CLARITY",
      faqTitle: "Everything you need to know.",
      faqDesc: "Clear and honest answers regarding licenses, offline functionality, privacy, and Android compatibility.",
      q1: "Is Traccialto truly completely free?",
      a1: "Yes. There are no monthly subscriptions, no paid 'pro' tiers, and no advertising banners. Traccialto was created as an independent, crafted tool for walking, running, cycling, and mountain outings with a clean and honest experience.",
      q2: "Does it work offline without mobile signal?",
      a2: "You can record GPS tracks and follow saved routes completely offline. Download available maps for your route beforehand and verify they are present. Place search, new routes, and undownloaded map data require an internet connection. GPS accuracy depends on conditions.",
      q3: "Can I import my existing GPX / KML tracks?",
      a3: "Yes, you can import compatible GPX and KML files, view them, and navigate along them. Elevation availability depends on the file and map data. Use tracks you have the right to use.",
      q4: "How does track backup work?",
      a4: "You can optionally connect your Google account to incrementally back up and sync routes, recorded walks, diary notes, and photos into the private app folder (appDataFolder) of your Google Drive, with background restore when switching phones.",
      q5: "Which Android versions are supported?",
      a5: "The app requires Android 8 or newer. 3D performance, GPS reception, and background recording depend on your device. Some features require newer Android versions.",
      q6: "How does the Friends feature work, and is it required?",
      a6: "It is completely optional: every core mapping, planning, and GPS recording feature works with no account. If you opt in to Friends, you sign in with Google, register a unique @username, and share selected routes through a dedicated archive file in your own Google Drive (limited drive.file permission), with configurable notifications, single or bulk route removal, and full profile deletion anytime.",

      closingTag: "Ready for your next trip",
      closingTitle: "Bring only what matters.",
      closingDesc: "Available on Google Play Store. Download the free app and explore across all 4 activities.",
      closingBtn: "Get it free on Google Play",
      qrTitle: "On a computer?",
      qrDesc: "Scan the QR code with your phone to install",
      closingFoot: "Android 8+ · Free · Zero Ads",

      footerCopy: "© 2026 Traccialto. Independent project for hiking, cycling, running, and walking. Zero ads. See privacy policy."
    },

    fr: {
      pageTitle: "Traccialto — Randonnée, Vélo, Course et Marche Hors-Ligne",
      pageDesc: "Une seule app pour marcher, courir, pédaler et randonner hors-ligne : cartes et métriques dédiées, via ferrata en option, zones 1–50 km, GPX/KML, coucher du soleil et Replay 3D. Gratuit, sans pub.",
      skipToContent: "Aller au contenu",
      brandAria: "Traccialto accueil",
      navAria: "Menu principal",
      langAria: "Langue",
      modesGalleryAria: "Explorer les 4 activités outdoor",
      trekImgAlt: "Randonnée en montagne près d'un lac alpin",
      bikeImgAlt: "Vélo gravel le long d'un col de montagne",
      runImgAlt: "Course le long d'une voie piétonne en bord de rivière",
      walkImgAlt: "Marche sur un chemin arboré au bord du lac",
      feat1TopoAria: "Illustration vectorielle du relief topographique",
      feat3BoxAria: "Aperçu du mode AMOLED et calcul hors-ligne du coucher du soleil",
      qrAlt: "Code QR pour ouvrir Traccialto sur Google Play",
      footerPrivacyLink: "Politique de confidentialité",

      navActivities: "Activités",
      navFeatures: "Fonctions",
      navPrivacy: "Confidentialité",
      navFaq: "FAQ",
      btnAvailability: "Télécharger sur Google Play",
      btnAvailabilityShort: "Google Play",

      heroBadge: "Randonnée · Vélo · Course · Marche",
      heroTitle: "Une seule app pour marcher, courir,<br>pédaler et partir en montagne.",
      heroLead: "Choisissez votre activité et Traccialto adapte carte, routage, points utiles et métriques : sentiers T1–T6 et via ferrata en option, pistes cyclables, allure au km en course ou marche épurée. Zones hors-ligne 1–50 km et GPX/KML ouverts.",
      btnHeroDownload: "Télécharger gratuit sur Google Play",
      btnHeroExplore: "Comparer les 4 modes",

      spec1Val: "4 activités",
      spec1Lbl: "Routage et POI dédiés",
      spec2Val: "1–50 km",
      spec2Lbl: "Zones hors-ligne en 1 clic",
      spec3Val: "GPX · KML",
      spec3Lbl: "Import & export HTML 3D",
      spec4Val: "0 € · Sans pub",
      spec4Lbl: "Sans compte obligatoire",

      mTrekShort: "Randonnée",
      mTrekHint: "Sentiers, T1–T6 & ferrata",
      mBikeShort: "Vélo",
      mBikeHint: "Pistes & vue guidon",
      mRunShort: "Course",
      mRunHint: "Allure /km & boucles",
      mWalkShort: "Marche",
      mWalkHint: "Parcs & carte épurée",
      tabTrek: "01 · Randonnée",
      tabBike: "02 · Vélo",
      tabRun: "03 · Course",
      tabWalk: "04 · Marche",

      discIntroNum: "01 / MODES DÉDIÉS",
      discIntroTitle: "Quatre vraies disciplines, pas un profil générique.",
      discIntroDesc: "Traccialto n'applique pas une formule générique à tous les sports. Chaque mode adopte des moteurs de calcul, points utiles adaptés sur la carte, allures estimées et métriques pour la randonnée, le vélo, la course ou la marche.",

      trekTag: "01 · Montagne",
      trekTitle: "Randonnée & Montagne",
      trekDesc: "Préparez randonnées et boucles sur les sentiers, en incluant sur choix explicite les via ferrata cartographiées (avec rappel d'équipement et de conditions). Comparez altitudes, montées et durées avant de partir.",
      trekF1: "<strong>Difficulté T1–T6 en Italie</strong> répertoriée là où présente dans les données ; les segments non classés restent indiqués",
      trekF2: "<strong>Temps selon votre allure réelle</strong> calibrés sur pente DEM, T1–T6 et historique",
      trekF3: "<strong>Voix aux bifurcations, hors-trace & +500 m D+</strong> avec heure du coucher du soleil hors-ligne",
      trekF4: "<strong>Boussole orientée</strong> sur cartographie topographique avec refuges et bivouacs",
      trekPill: "Compatible avec les traces GPX officielles et régionales",

      bikeTag: "02 · Deux roues",
      bikeTitle: "Vélo & Cyclisme",
      bikeDesc: "Algorithme de calcul adapté aux voies vertes, chemins carrossables et routes secondaires. Écran à haut contraste pensé pour être lu instantanément sur guidon.",
      bikeF1: "<strong>Routage vélo spécifique</strong> priorisant pistes cyclables et pistes en terre battue",
      bikeF2: "<strong>Guidage vocal & alerte hors-trace</strong> avec heure du coucher du soleil en direct",
      bikeF3: "<strong>Distance, vitesse et altitude</strong> haute lisibilité sur votre guidon",
      bikeF4: "<strong>Enregistrement continu</strong> et zones téléchargeables hors-ligne jusqu'à 50 km",
      bikePill: "Vérifiez le revêtement et l'accessibilité selon votre vélo",

      runTag: "03 · Allure",
      runTitle: "Course à pied",
      runDesc: "Pour vos sorties en parc, bord de rivière ou voie piétonne : allure récente et moyenne au kilomètre, pause automatique et boucles sur distance ou durée.",
      runF1: "<strong>Boucles personnalisables</strong> selon distance ou durée, avec limite D+ optionnelle",
      runF2: "<strong>Instructions vocales essentielles</strong> aux vrais changements de direction, allure & pause auto",
      runF3: "<strong>Fontaines et points favoris</strong> affichables sur votre carte de course",
      runF4: "<strong>Zones hors-ligne jusqu'à 50 km :</strong> téléchargez votre secteur à l'avance",
      runPill: "Allure récente et moyenne au km en direct, sans distraction",

      walkTag: "04 · Quotidien",
      walkTitle: "Marche",
      walkDesc: "Conçue pour les balades en ville, les parcs et les sentiers doux sans encombrement alpin : rythme calme et carte épurée.",
      walkF1: "<strong>Carte dédiée à la balade :</strong> affiche points d'eau et vos points favoris",
      walkF2: "<strong>Boucles flexibles</strong> selon la distance ou le temps disponible",
      walkF3: "<strong>Fonction Trip Trim</strong> pour nettoyer les arrêts prolongés au départ ou à l'arrivée",
      walkF4: "<strong>Journal avec photos et statistiques</strong> conservés dans vos archives locales",
      walkPill: "Parfaite pour balades, parcs et promenades légères",

      startNum: "02 / DE L'IDÉE À LA SORTIE",
      startTitle: "Moins de préparatifs. Plus de temps dehors.",
      s1Title: "Choisissez l'activité",
      s1Desc: "Randonnée, vélo, course ou marche : métriques, points sur carte et calculs s'adaptent à votre choix.",
      s2Title: "Préparez votre sortie",
      s2Desc: "Créez des étapes, importez une trace GPX ou générez une boucle. Téléchargez les cartes nécessaires.",
      s3Title: "Partez et suivez vos progrès",
      s3Desc: "Suivez la trace ou enregistrez librement. Retrouvez carte, temps et profil dans votre historique.",

      showNum: "03 / DANS L'APP (GOOGLE PLAY)",
      showTitle: "Conçue pour rester lisible sur chaque sortie outdoor.",
      showDesc: "Aperçu des écrans inclus gratuitement sur Android : navigation dédiée aux 4 activités, boucles sur mesure et zones 1–50 km, Replay 3D et Stories photo.",
      show1Title: "Carte topo, T1–T6 & coucher du soleil",
      show1Desc: "Guidage vocal aux bifurcations, alerte hors-trace et heure solaire sans réseau.",
      show2Title: "Vélo, Course & Marche avec boucles sur mesure",
      show2Desc: "Routage cyclable, allure au km en course, carte marche épurée et zones hors-ligne 1–50 km.",
      show3Title: "Replay 3D, Stories photo & export HTML",
      show3Desc: "Revivez la trace en 3D, créez une Story photo ou exportez une page web autonome.",
      ui1Chip1: "T3 · Sentier alpin",
      ui1Chip2: "☀ Coucher 18:14 · 3h 20m jour",
      ui1M1: "Altitude",
      ui1M3: "Votre allure",
      ui2Chip1: "Boucle Vélo",
      ui2Chip2: "Pistes & chemins",
      ui2CardTitle: "Boucle cyclable · Vue guidon",
      ui2CardDesc: "Priorité aux pistes cyclables et chemins stables ; lecture nette et coucher du soleil en direct.",
      ui2M1: "Distance",
      ui2M2: "D+ Max",
      ui2M3: "Zone hors-ligne",
      ui3Chip1: "Replay 3D prêt",
      ui3Chip2: "HTML interactif",
      ui3CardTitle: "Tour du Lac · Story",
      ui3M1: "Parcours",
      ui3M2: "Montée",
      ui3M3: "Exporter",

      featNum: "04 / OUTILS DE TERRAIN",
      featIntroTitle: "Des outils conçus pour le terrain réel.",
      featIntroDesc: "Préparez l'itinéraire, observez le relief et choisissez les données à garder sous les yeux.",

      feat1Tag: "Morphologie & Cartes Hors-Ligne",
      feat1Title: "Relief 3D DEM, zones 1–50 km & Replay 3D",
      feat1Desc: "Le modèle DEM haute résolution affiche pentes et crêtes en 3D, et le Replay 3D vous fait revivre chaque sortie. Téléchargez une zone complète (1–50 km) par recherche de lieu sans même avoir de trace prête.",
      feat1Badge: "Sommet • 2 814 m",

      feat2Tag: "Itinéraires Circulaires",
      feat2Title: "Une boucle selon vos envies",
      feat2Desc: "Définissez une distance ou une durée, avec une limite optionnelle de dénivelé. Comparez les variantes sur le réseau disponible pour votre activité. Distance et durée sont des estimations ; certains tronçons peuvent se répéter. Le calcul requiert internet.",
      feat2Dist: "Distance",
      feat2Gain: "Dénivelé",
      feat2Est: "Estimation",

      feat3Tag: "Efficacité & Lumière Naturelle",
      feat3Title: "Écran AMOLED & coucher du soleil hors-ligne",
      feat3Desc: "Affichage noir épuré avec enregistrement écran éteint, plus calcul solaire hors-ligne du coucher du soleil et de la lumière restante avec alerte si l'arrivée dépasse la nuit (Randonnée et Vélo).",
      feat3Header: "MODE AMOLED ACTIF",
      feat3Gps: "GPS : PRÉCIS",
      feat3Altitude: "Altitude actuelle",
      feat3Gain: "Dénivelé D+",
      feat3Dist: "Distance",
      feat3Battery: "Temps actif",
      feat3SunsetLeft: "☀ Coucher à 18:14",
      feat3SunsetRight: "3h 20m de jour · calcul hors-ligne",

      feat4Tag: "Souvenirs & Sécurité",
      feat4Title: "Replay 3D, Stories & SOS hors-ligne",
      feat4Desc: "Revivez vos traces en Replay 3D, créez une story avec photos et données ou exportez une page web HTML (interactive dans les navigateurs compatibles ; vue enregistrée et profil sur iPhone).",
      feat4P1: "Fichier HTML autonome avec carte interactive et profil de dénivelé",
      feat4P2: "Écran SOS avec raccourci 112, coordonnées GPS et lampe torche en code Morse",
      feat4P3: "Outil Trip Trim pour nettoyer les temps morts au début et à la fin",
      feat4P4: "Disponible en italien, anglais, français et espagnol",

      feat5Tag: "Espace Amis Optionnel",
      feat5Title: "Partagez vos parcours entre amis",
      feat5Desc: "L'application de base reste utilisable sans aucun compte. Si vous activez Amis, connectez-vous facultativement avec Google, choisissez un @username unique et partagez vos itinéraires via votre Google Drive (autorisation limitée drive.file), avec maîtrise complète des retraits.",
      feat5P1: "Recherche par @username exact, sans exposer votre e-mail ou nom Google",
      feat5P2: "Retrait d'un seul itinéraire ou effacement complet des parcours partagés",
      feat5P3: "Archive partagée distincte de votre sauvegarde privée (appDataFolder)",
      feat5P4: "Notifications locales pour les demandes d'amis réglables dans Paramètres",

      feat6Tag: "Guidage Vocal & Suivi Live",
      feat6Title: "Voix aux virages, hors-trace & Live chiffré",
      feat6Desc: "Guidage vocal aux vraies bifurcations et alerte hors-trace, suivi live facultatif chiffré AES-GCM sur mobile (8 h max), points utiles par sport et thème sombre lisible.",
      feat6P1: "Guidage vocal aux virages, alertes tous les 500 m D+ & hors-trace",
      feat6P2: "Points d'eau et favoris activables sur carte ; refuges et bivouacs en Randonnée",
      feat6P3: "Partage live facultatif chiffré AES-GCM sur l'appareil (maximum 8 h)",
      feat6P4: "Thème sombre contrasté, pause auto & menu Notifications dédié",

      privNum: "05 / CONFIDENTIALITÉ & CONTRÔLE",
      privTitle: "Vos parcours n'appartiennent qu'à vous.",
      privDesc: "L'historique reste sur votre appareil sans compte obligatoire. Cartes en ligne, sauvegarde Drive, Amis et suivi live sont réglables dans les paramètres et n'envoient que le strict nécessaire.",
      privB1Title: "Historique stocké sur l'appareil",
      privB1Desc: "Conservez vos sorties et réglages sur votre téléphone. Vous seul décidez quand les exporter ou les partager.",
      privB2Title: "Sauvegarde privée sur Google Drive",
      privB2Desc: "Synchronisez et restaurez vos parcours, journal et photos dans le dossier caché (appDataFolder) de votre Google Drive personnel, sans serveur tiers.",
      privB4Title: "Amis et suivi live facultatifs",
      privB4Desc: "Amis utilise un @username public sans dévoiler votre e-mail et stocke les parcours partagés sur votre Drive (drive.file) ; le suivi live chiffre la position en AES-GCM sur votre mobile.",
      privB3Title: "Zéro cookie, zéro pistage",
      privB3Desc: "Ni ce site ni l'application n'intègrent Google Analytics, pixel Facebook ou régies publicitaires.",
      privBtn: "Lire la politique de confidentialité complète",

      faqNum: "06 / QUESTIONS FRÉQUENTES",
      faqTitle: "Tout ce que vous devez savoir.",
      faqDesc: "Réponses transparentes sur les licences, le fonctionnement hors-ligne, la confidentialité et la compatibilité Android.",
      q1: "Traccialto est-elle vraiment entièrement gratuite ?",
      a1: "Oui. Il n'y a aucun abonnement mensuel, aucune fonction 'pro' payante et aucune bannière publicitaire. Traccialto est un projet indépendant dédié à la marche, la course, le vélo et la montagne avec un outil clair et transparent.",
      q2: "L'application fonctionne-t-elle hors-ligne sans réseau mobile ?",
      a2: "Vous pouvez enregistrer vos traces GPS et suivre un parcours sauvegardé sans connexion. Téléchargez au préalable les cartes disponibles pour votre itinéraire et vérifiez leur présence. La recherche de lieux, les nouveaux itinéraires et les contenus non téléchargés requièrent internet. La précision GPS dépend des conditions.",
      q3: "Puis-je importer mes propres fichiers GPX et KML ?",
      a3: "Oui, vous pouvez importer des fichiers GPX et KML compatibles, les afficher et les suivre. La disponibilité des altitudes dépend du fichier et des données cartographiques. Utilisez des traces dont vous disposez des droits.",
      q4: "Comment fonctionne la sauvegarde de mes parcours ?",
      a4: "Vous pouvez connecter facultativement votre compte Google pour sauvegarder et synchroniser vos parcours, sorties, journal et photos dans le dossier privé (appDataFolder) de votre Google Drive, avec restauration en arrière-plan.",
      q5: "Quelles versions d'Android sont supportées ?",
      a5: "L'application nécessite Android 8 ou version ultérieure. Les performances 3D, la réception GPS et l'enregistrement en arrière-plan dépendent de l'appareil. Certaines fonctions requièrent une version d'Android plus récente.",
      q6: "Comment fonctionne l'espace Amis et est-il obligatoire ?",
      a6: "Il est entièrement facultatif : toute la cartographie et l'enregistrement GPS fonctionnent sans compte. Si vous activez Amis, connectez-vous avec Google, choisissez un @username unique et partagez les itinéraires voulus via un fichier dédié sur votre Google Drive (portée limitée drive.file), avec notifications réglables, suppression unitaire ou globale et suppression du profil à tout moment.",

      closingTag: "Prêt pour la prochaine sortie",
      closingTitle: "Emportez juste l'essentiel.",
      closingDesc: "Disponible sur Google Play Store. Téléchargez l'application gratuite et explorez selon vos 4 activités.",
      closingBtn: "Télécharger gratuit sur Google Play",
      qrTitle: "Sur ordinateur ?",
      qrDesc: "Scannez le QR avec votre téléphone",
      closingFoot: "Android 8+ · Gratuit · Sans publicité",

      footerCopy: "© 2026 Traccialto. Projet indépendant pour randonnée, vélo, course et marche. Zéro publicité. Consultez la politique de confidentialité."
    },

    es: {
      pageTitle: "Traccialto — Senderismo, Bici, Carrera y Caminata Offline",
      pageDesc: "Una sola app para caminar, correr, pedalear y hacer montaña offline: rutas y métricas propias, ferratas opcionales, zonas 1–50 km, GPX/KML, ocaso offline y Replay 3D. Gratis y sin anuncios.",
      skipToContent: "Ir al contenido",
      brandAria: "Traccialto inicio",
      navAria: "Menú principal",
      langAria: "Idioma",
      modesGalleryAria: "Explora las 4 actividades outdoor",
      trekImgAlt: "Senderismo en montaña junto a un lago alpino",
      bikeImgAlt: "Bicicleta gravel en un puerto de montaña",
      runImgAlt: "Carrera junto a senda peatonal y río",
      walkImgAlt: "Caminata por paseo arbolado junto al lago",
      feat1TopoAria: "Ilustración vectorial del relieve topográfico",
      feat3BoxAria: "Vista previa del modo AMOLED y cálculo de ocaso offline",
      qrAlt: "Código QR para abrir Traccialto en Google Play",
      footerPrivacyLink: "Política de privacidad",

      navActivities: "Modos",
      navFeatures: "Funciones",
      navPrivacy: "Privacidad",
      navFaq: "Preguntas",
      btnAvailability: "Descargar en Google Play",
      btnAvailabilityShort: "Google Play",

      heroBadge: "Senderismo · Bicicleta · Carrera · Caminata",
      heroTitle: "Una sola app para caminar, correr,<br>pedalear y salir a la montaña.",
      heroLead: "Elige cómo te mueves y Traccialto adapta mapa, cálculo de rutas, puntos útiles y métricas: senderos T1–T6 y ferratas opcionales, ciclovías, ritmo por km al correr o paseos esenciales. Zonas 1–50 km offline y GPX/KML libres.",
      btnHeroDownload: "Descargar gratis en Google Play",
      btnHeroExplore: "Comparar los 4 modos",

      spec1Val: "4 actividades",
      spec1Lbl: "Rutas y POI dedicados",
      spec2Val: "1–50 km",
      spec2Lbl: "Zonas offline en un toque",
      spec3Val: "GPX · KML",
      spec3Lbl: "Import y export HTML 3D",
      spec4Val: "0 € · Sin ads",
      spec4Lbl: "Sin cuenta obligatoria",

      mTrekShort: "Senderismo",
      mTrekHint: "Senderos, T1–T6 y ferrata",
      mBikeShort: "Bicicleta",
      mBikeHint: "Ciclovías y manillar",
      mRunShort: "Carrera",
      mRunHint: "Ritmo /km y circulares",
      mWalkShort: "Caminata",
      mWalkHint: "Parques y mapa limpio",
      tabTrek: "01 · Senderismo",
      tabBike: "02 · Bicicleta",
      tabRun: "03 · Carrera",
      tabWalk: "04 · Caminata",

      discIntroNum: "01 / MODOS DEDICADOS",
      discIntroTitle: "Cuatro actividades reales, no un perfil genérico adaptado.",
      discIntroDesc: "Traccialto no aplica una fórmula genérica a todos los deportes. Cada modo utiliza motores de cálculo, puntos útiles en el mapa, ritmos estimados y métricas para senderismo, bicicleta, carrera o caminata.",

      trekTag: "01 · Montaña",
      trekTitle: "Senderismo & Montaña",
      trekDesc: "Planifica excursiones y rutas circulares priorizando senderos e incluyendo bajo petición vías ferratas cartografiadas (con aviso de equipo y condiciones). Compara altitudes, ascensos y tiempos antes de salir.",
      trekF1: "<strong>Dificultad de senderos T1–T6 en Italia</strong> donde conste en los datos; los tramos sin clasificar siguen indicados",
      trekF2: "<strong>Tiempos según tu ritmo real</strong> ajustados a pendiente DEM, T1–T6 e historial",
      trekF3: "<strong>Voz en giros, alerta fuera de ruta y +500 m D+</strong> más ocaso calculado offline",
      trekF4: "<strong>Brújula orientada</strong> en cartografía topográfica con refugios y vivacs",
      trekPill: "Compatible con rutas GPX oficiales y regionales",

      bikeTag: "02 · Dos ruedas",
      bikeTitle: "Bicicleta",
      bikeDesc: "Algoritmo de cálculo adaptado a ciclovías, pistas de tierra compacta y vías de poco tráfico. Pantalla de alto contraste diseñada para leerse al instante en el manillar.",
      bikeF1: "<strong>Rutas ciclistas dedicadas</strong> con prioridad a vías ciclistas y pistas firmes",
      bikeF2: "<strong>Guía de voz en giros y fuera de ruta</strong> más hora del ocaso visible en ruta",
      bikeF3: "<strong>Distancia, velocidad y altitud</strong> en alto contraste en tu manillar",
      bikeF4: "<strong>Grabación continua</strong> y zonas descargables offline de hasta 50 km",
      bikePill: "Comprueba el firme y la accesibilidad para tu bicicleta",

      runTag: "03 · Ritmo",
      runTitle: "Carrera",
      runDesc: "Para salidas en parques y vías peatonales: ritmo reciente y medio por kilómetro, pausa automática y rutas circulares por distancia o tiempo.",
      runF1: "<strong>Rutas circulares a medida</strong> por distancia o tiempo, con límite D+ opcional",
      runF2: "<strong>Avisos de voz esenciales</strong> solo en los giros reales, ritmo por km y pausa auto",
      runF3: "<strong>Fuentes de agua y puntos favoritos</strong> seleccionables en tu mapa de carrera",
      runF4: "<strong>Zonas offline de hasta 50 km:</strong> descarga tu zona con antelación",
      runPill: "Ritmo reciente y medio por km en directo, sin distracciones",

      walkTag: "04 · Cotidiano",
      walkTitle: "Caminata",
      walkDesc: "Pensada para paseos urbanos, parques y senderos suaves sin elementos de alta montaña: ritmo tranquilo y mapa centrado en lo esencial.",
      walkF1: "<strong>Mapa esencial para caminar:</strong> muestra puntos de agua y tus lugares favoritos",
      walkF2: "<strong>Rutas circulares flexibles</strong> según la distancia o el tiempo libre",
      walkF3: "<strong>Función Trip Trim</strong> para limpiar esperas accidentales al inicio y final",
      walkF4: "<strong>Diario con fotos y estadísticas</strong> guardado en tu archivo local",
      walkPill: "Ideal para paseos, parques y caminatas suaves",

      startNum: "02 / DE LA IDEA A LA SALIDA",
      startTitle: "Menos preparativos. Más tiempo al aire libre.",
      s1Title: "Elige la actividad",
      s1Desc: "Senderismo, bicicleta, carrera o caminata: métricas, puntos en el mapa y rutas adaptadas a ti.",
      s2Title: "Prepara tu salida",
      s2Desc: "Añade paradas, importa un track o genera una ruta circular. Descarga los mapas disponibles.",
      s3Title: "Ponte en marcha y sigue tu progreso",
      s3Desc: "Sigue la ruta o graba con libertad. Al regresar encontrarás mapa, tiempos y perfil en tu historial.",

      showNum: "03 / DENTRO DE LA APP (GOOGLE PLAY)",
      showTitle: "Diseñada para leerse bien en cada salida al aire libre.",
      showDesc: "Vista previa de pantallas incluidas gratis en Android: navegación dedicada para las 4 actividades, circulares a medida y zonas 1–50 km, Replay 3D e Historias con fotos.",
      show1Title: "Mapa topo, T1–T6 y ocaso offline",
      show1Desc: "Indicaciones de voz en giros, alerta fuera de ruta y luz solar sin cobertura.",
      show2Title: "Bici, Carrera y Caminata con rutas a medida",
      show2Desc: "Rutas ciclistas, ritmo por km al correr, mapa limpio para caminar y zonas 1–50 km.",
      show3Title: "Replay 3D, Historias y export HTML",
      show3Desc: "Revive tu track en 3D, crea una Historia con fotos o exporta una web autónoma.",
      ui1Chip1: "T3 · Sendero alpino",
      ui1Chip2: "☀ Ocaso 18:14 · 3h 20m luz",
      ui1M1: "Altitud",
      ui1M3: "Tu ritmo",
      ui2Chip1: "Circular Bici",
      ui2Chip2: "Ciclovías y pistas",
      ui2CardTitle: "Circular ciclista · Vista manillar",
      ui2CardDesc: "Prioridad a ciclovías y tierra compacta; métricas de alto contraste y ocaso en vivo.",
      ui2M1: "Distancia",
      ui2M2: "D+ Máx",
      ui2M3: "Zona offline",
      ui3Chip1: "Replay 3D listo",
      ui3Chip2: "HTML interactivo",
      ui3CardTitle: "Vuelta al Lago · Historia",
      ui3M1: "Ruta",
      ui3M2: "Subida",
      ui3M3: "Exportar",

      featNum: "04 / HERRAMIENTAS DE TERRENO",
      featIntroTitle: "Herramientas creadas para el terreno real.",
      featIntroDesc: "Prepara el itinerario, estudia el terreno y elige qué métricas mantener a la vista.",

      feat1Tag: "Morfología & Mapas Offline",
      feat1Title: "Relieve 3D DEM, zonas 1–50 km y Replay 3D",
      feat1Desc: "El modelo DEM de alta resolución muestra laderas y crestas en 3D, y el Replay 3D revive cada ruta al volver. Descarga zonas enteras (1–50 km) buscando cualquier lugar sin tener aún una ruta lista.",
      feat1Badge: "Cima • 2.814 m",

      feat2Tag: "Rutas Circulares",
      feat2Title: "Una ruta circular a tu medida",
      feat2Desc: "Elige distancia o duración y añade si quieres un límite de desnivel. Compara alternativas sobre la red disponible para tu actividad. Distancia y tiempo son estimaciones; algunos tramos pueden repetirse. El cálculo requiere internet.",
      feat2Dist: "Distancia",
      feat2Gain: "Desnivel",
      feat2Est: "Estimación",

      feat3Tag: "Eficiencia y Luz Solar",
      feat3Title: "Pantalla AMOLED y ocaso offline",
      feat3Desc: "Vista en negro puro con grabación a pantalla apagada y cálculo solar sin red del ocaso y luz restante, con aviso si llegas tras anochecer (Senderismo y Bici).",
      feat3Header: "MODO AMOLED ACTIVO",
      feat3Gps: "GPS: EXACTO",
      feat3Altitude: "Altitud actual",
      feat3Gain: "Desnivel D+",
      feat3Dist: "Distancia",
      feat3Battery: "Tiempo activo",
      feat3SunsetLeft: "☀ Ocaso hoy 18:14",
      feat3SunsetRight: "3h 20m de luz · cálculo offline",

      feat4Tag: "Recuerdos y Seguridad",
      feat4Title: "Replay 3D, Historias y SOS offline",
      feat4Desc: "Revive la ruta en Replay 3D, crea una historia con fotos o exporta una página HTML (interactiva en navegadores compatibles; vista guardada y perfil en iPhone).",
      feat4P1: "Archivo HTML independiente con mapa interactivo y perfil de elevación",
      feat4P2: "Pantalla SOS con acceso al 112, coordenadas GPS y linterna óptica en código Morse",
      feat4P3: "Herramienta Trip Trim para recortar esperas al inicio y final",
      feat4P4: "Disponible en italiano, inglés, francés y español",

      feat5Tag: "Sección Amigos Opcional",
      feat5Title: "Comparte rutas con tus amigos",
      feat5Desc: "La aplicación base sigue funcionando sin cuenta. Si activas Amigos, inicia sesión opcionalmente con Google, elige un @username único y comparte tus rutas desde tu archivo en Google Drive (permiso limitado drive.file), con control total de permisos y borrado.",
      feat5P1: "Búsqueda por @username exacto, sin mostrar tu correo ni nombre de Google",
      feat5P2: "Elimina rutas compartidas una a una o vacía todo el archivo con un toque",
      feat5P3: "Archivo compartido separado de la copia privada (appDataFolder) en Drive",
      feat5P4: "Notificaciones locales de solicitudes de amistad configurables en Ajustes",

      feat6Tag: "Guía de Voz y Directo",
      feat6Title: "Voz en giros, fuera de ruta y Directo cifrado",
      feat6Desc: "Indicaciones de voz en giros reales y alarma fuera de ruta, seguimiento opcional cifrado AES-GCM en tu móvil (hasta 8 horas), puntos por deporte y tema oscuro legible.",
      feat6P1: "Voz enfocada en giros, avisos cada 500 m D+ y fuera de ruta",
      feat6P2: "Fuentes y favoritos activables en el mapa; refugios y vivacs en Senderismo",
      feat6P3: "Seguimiento en vivo opcional cifrado AES-GCM en el teléfono (máximo 8 h)",
      feat6P4: "Tema oscuro de alto contraste, pausa auto y panel de Notificaciones",

      privNum: "05 / PRIVACIDAD Y CONTROL",
      privTitle: "Tus rutas solo te pertenecen a ti.",
      privDesc: "El historial se conserva en tu dispositivo sin cuenta obligatoria. Mapas online, copia en Drive, Amigos y directo cifrado pueden gestionarse desde Ajustes y solo envían los datos estrictamente necesarios.",
      privB1Title: "Historial en el dispositivo",
      privB1Desc: "Conserva tus rutas y ajustes en tu teléfono. Solo tú decides cuándo exportarlos o compartirlos.",
      privB2Title: "Copia privada en Google Drive",
      privB2Desc: "Sincroniza y restaura rutas, diario y fotos en la carpeta oculta (appDataFolder) de tu Google Drive personal, sin servidores externos.",
      privB4Title: "Amigos y seguimiento en vivo opcionales",
      privB4Desc: "En Amigos usas un @username público sin revelar tu correo a otros usuarios y guardas las rutas compartidas en tu Drive (drive.file); el directo cifra tu posición con AES-GCM en el móvil.",
      privB3Title: "Cero cookies y cero rastreadores",
      privB3Desc: "Ni esta web ni la app incluyen Google Analytics, píxel de Facebook ni redes publicitarias.",
      privBtn: "Leer política de privacidad completa",

      faqNum: "06 / PREGUNTAS FRECUENTES",
      faqTitle: "Todo lo que necesitas saber.",
      faqDesc: "Respuestas claras sobre licencias, funcionamiento offline, privacidad y compatibilidad con Android.",
      q1: "¿Traccialto es realmente gratuita?",
      a1: "Sí. No hay cuotas mensuales, no existen opciones de pago 'pro' ni anuncios publicitarios. Traccialto es un proyecto independiente para caminar, correr, pedalear y disfrutar de la montaña con una herramienta limpia y transparente.",
      q2: "¿Funciona sin conexión donde no hay cobertura móvil?",
      a2: "Puedes registrar con GPS y seguir una ruta guardada sin conexión. Descarga antes los mapas disponibles para el recorrido y verifica que estén presentes. La búsqueda de lugares, nuevas rutas y contenidos no descargados requieren internet. La precisión GPS depende de las condiciones.",
      q3: "¿Puedo importar mis rutas GPX y KML existentes?",
      a3: "Sí, puedes importar archivos GPX y KML compatibles, visualizarlos y seguir el camino. La disponibilidad de altitudes depende del archivo y de los datos cartográficos. Usa rutas sobre las que tengas derecho de uso.",
      q4: "¿Cómo funciona la copia de seguridad?",
      a4: "Puedes conectar opcionalmente tu cuenta de Google para guardar y sincronizar de forma incremental tus rutas, caminatas, diario y fotos en la carpeta privada (appDataFolder) de tu Google Drive, con restauración en segundo plano.",
      q5: "¿Qué versiones de Android son compatibles?",
      a5: "La aplicación requiere Android 8 o superior. El rendimiento 3D, la recepción GPS y la grabación en segundo plano dependen del dispositivo. Algunas funciones requieren versiones más recientes de Android.",
      q6: "¿Cómo funciona la sección Amigos y es obligatoria?",
      a6: "Es totalmente opcional: toda la cartografía, planificación y grabación GPS funcionan sin cuenta. Si activas Amigos, inicias sesión con Google, eliges un @username único y compartes las rutas que quieras en un archivo dedicado de tu Google Drive (alcance limitado drive.file), con notificaciones configurables, borrado individual o total y eliminación de perfil en cualquier momento.",

      closingTag: "Listo para la próxima salida",
      closingTitle: "Lleva solo lo imprescindible.",
      closingDesc: "Disponible en Google Play Store. Descarga la aplicación gratuita y explora tus 4 actividades.",
      closingBtn: "Descargar gratis en Google Play",
      qrTitle: "¿En el ordenador?",
      qrDesc: "Escanea el QR con tu móvil para instalar",
      closingFoot: "Android 8+ · Gratis · Sin publicidad",

      footerCopy: "© 2026 Traccialto. Proyecto independiente para senderismo, bicicleta, carrera y caminata. Sin publicidad. Consulta la política de privacidad."
    }
  };

  const MODE_INSPECTOR = {
    trek: {
      it: { title: "Trekking & Montagna", desc: "Escursioni su sentieri con difficoltà T1–T6 in Italia, vie ferrate attivabili su scelta, passo calibrato e rifugi.", tags: ["T1–T6 Italia", "Vie ferrate opt-in", "Rifugi & bivacchi", "Tramonto offline"] },
      en: { title: "Trekking & Mountains", desc: "Trail routes with Italian T1–T6 grades, opt-in via ferratas, calibrated pace, and alpine huts.", tags: ["T1–T6 trails", "Opt-in via ferrata", "Huts & bivouacs", "Offline sunset"] },
      fr: { title: "Randonnée & Montagne", desc: "Sentiers classés T1–T6 en Italie, via ferrata sur choix explicite, allure calibrée et refuges.", tags: ["Sentiers T1–T6", "Via ferrata option", "Refuges & bivouacs", "Coucher hors-ligne"] },
      es: { title: "Senderismo & Montaña", desc: "Senderos T1–T6 en Italia, vías ferratas opcionales, ritmo calibrado y refugios alpinos.", tags: ["Grados T1–T6", "Ferrata opcional", "Refugios y vivacs", "Ocaso offline"] }
    },
    bike: {
      it: { title: "Bicicletta", desc: "Routing per ciclovie e strade bianche, schermata ad alto contrasto per manubrio con velocità, quota e tramonto dal vivo.", tags: ["Ciclovie & sterrati", "Vista manubrio", "Voce svolte", "Zone 1–50 km"] },
      en: { title: "Cycling", desc: "Routing calibrated for cycleways and compact gravel, high-contrast handlebar view with speed, altitude, and live sunset.", tags: ["Cycleways & gravel", "Handlebar UI", "Turn voice prompts", "1–50 km zones"] },
      fr: { title: "Vélo & Cyclisme", desc: "Routage pour pistes cyclables et chemins stables, vue guidon haute lisibilité avec vitesse, altitude et heure du coucher.", tags: ["Pistes cyclables", "Vue guidon", "Guidage vocal", "Zones 1–50 km"] },
      es: { title: "Bicicleta", desc: "Rutas para ciclovías y pistas firmes, pantalla de alto contraste en el manillar con velocidad, altitud y ocaso en vivo.", tags: ["Ciclovías y pistas", "Vista manillar", "Guía de voz", "Zonas 1–50 km"] }
    },
    run: {
      it: { title: "Corsa", desc: "Per parchi, argini e percorsi pedonali: passo recente e medio al km, pausa automatica e anelli su distanza o durata.", tags: ["Passo recente & medio /km", "Pausa automatica", "Anelli km o durata", "Fontane & preferiti"] },
      en: { title: "Running", desc: "For parks, riversides, and pedestrian paths: recent & average km pace, auto-pause, and loops by distance or time.", tags: ["Recent & avg pace /km", "Auto-pause", "Time/km loops", "Water fountains"] },
      fr: { title: "Course à pied", desc: "Parcs, berges et voies piétonnes : allure récente et moyenne au km, pause auto et boucles sur distance ou durée.", tags: ["Allure récente & moy. /km", "Pause auto", "Boucles km/durée", "Fontaines & favoris"] },
      es: { title: "Carrera", desc: "Parques y paseos peatonales: ritmo reciente y medio por km, pausa automática y circulares por distancia o tiempo.", tags: ["Ritmo reciente y medio /km", "Pausa auto", "Circulares km/tiempo", "Fuentes y favoritos"] }
    },
    walk: {
      it: { title: "Camminata", desc: "Passeggiate urbane, parchi e sentieri dolci su mappa ripulita dagli elementi superflui, con Trip Trim e diario fotografico.", tags: ["Mappa essenziale", "Punti acqua", "Trip Trim", "Diario foto locale"] },
      en: { title: "Walking", desc: "City walks, parks, and gentle paths on an uncluttered map, with Trip Trim and private photo diary.", tags: ["Clean map", "Water points", "Trip Trim", "Local photo diary"] },
      fr: { title: "Marche", desc: "Balades en ville, parcs et sentiers doux sur carte épurée, avec Trip Trim et journal photo local.", tags: ["Carte épurée", "Points d'eau", "Trip Trim", "Journal photo local"] },
      es: { title: "Caminata", desc: "Paseos urbanos, parques y caminos suaves en mapa esencial, con Trip Trim y diario de fotos local.", tags: ["Mapa esencial", "Puntos de agua", "Trip Trim", "Diario local"] }
    }
  };

  let activeLang = "it";
  let activeMode = "trek";

  function detectLang() {
    const s = localStorage.getItem("traccialto_lang");
    if (s && I18N[s]) return s;
    const n = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (n.startsWith("it")) return "it";
    if (n.startsWith("fr")) return "fr";
    if (n.startsWith("es")) return "es";
    return "en";
  }

  function renderInspector() {
    const pack = MODE_INSPECTOR[activeMode] && MODE_INSPECTOR[activeMode][activeLang];
    if (!pack) return;
    const titleEl = document.getElementById("insTitle");
    const descEl = document.getElementById("insDesc");
    const tagsEl = document.getElementById("insTags");
    if (titleEl) titleEl.textContent = pack.title;
    if (descEl) descEl.textContent = pack.desc;
    if (tagsEl) {
      tagsEl.textContent = "";
      pack.tags.forEach(function (tag) {
        const span = document.createElement("span");
        span.className = "spec-chip";
        span.textContent = tag;
        tagsEl.appendChild(span);
      });
    }
    document.querySelectorAll(".mode-strip, .mode-pill-tab").forEach(function (el) {
      const on = el.getAttribute("data-mode") === activeMode;
      el.classList.toggle("is-active", on);
      if (el.hasAttribute("aria-selected")) {
        el.setAttribute("aria-selected", on ? "true" : "false");
      }
    });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) lang = "en";
    activeLang = lang;
    localStorage.setItem("traccialto_lang", lang);
    document.documentElement.lang = lang;

    const dict = I18N[lang];
    if (dict.pageTitle) document.title = dict.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.pageDesc) metaDesc.setAttribute("content", dict.pageDesc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll(".site-lang-pill button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-l") === lang);
    });

    renderInspector();
  }

  window.setSiteLanguage = setLanguage;

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(detectLang());

    document.querySelectorAll(".site-lang-pill button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const l = this.getAttribute("data-l");
        if (l) setLanguage(l);
      });
    });

    document.querySelectorAll(".mode-strip, .mode-pill-tab").forEach(function (el) {
      el.addEventListener("click", function () {
        const m = this.getAttribute("data-mode");
        if (m && MODE_INSPECTOR[m]) {
          activeMode = m;
          renderInspector();
        }
      });
    });
  });
})();

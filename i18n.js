(function () {
  "use strict";

  const I18N = {
    it: {
      navActivities: "Attività",
      navFeatures: "Funzioni",
      navPrivacy: "Privacy",
      navFaq: "Domande",
      btnAvailability: "Disponibilità Android",
      btnAvailabilityShort: "Disponibilità",

      heroBadge: "Trekking · Bicicletta · Corsa e camminata",
      heroTitle: "La tua prossima uscita<br><span class=\"serif-accent\">comincia da qui.</span>",
      heroLead: "Scegli come vuoi muoverti. Prepara un percorso, guarda i rilievi in 3D e ritrova ogni uscita nel tuo archivio personale. Gratis, senza account e senza pubblicità.",
      btnHeroExplore: "Esplora le funzioni",
      btnHeroDisciplines: "Le 3 discipline",
      trustFree: "Gratis",
      trustNoAccount: "Nessun account",
      trustNoAds: "Zero pubblicità",
      trustOfflineMaps: "Mappe scaricabili",

      cardElevationValue: "+833 m D+",
      cardElevationDesc: "Dislivello reale su modello DEM",
      cardLoopTitle: "Esempio di anello · 12,4 km",
      cardLoopDesc: "Imposta un obiettivo. Confronta le alternative.",

      discIntroBadge: "Attività & Discipline Outdoor",
      discIntroTitle: "Tre modi di vivere la natura<br><span class=\"serif-accent\">con strumenti dedicati.</span>",
      discIntroDesc: "Traccialto non applica una formula generica a tutti gli sport. Ogni modalità adotta motori di calcolo, scale di difficoltà e metriche pensate per le esigenze specifiche di chi cammina, pedala o corre.",

      trekTag: "Montagna",
      trekTitle: "Trekking & Montagna",
      trekQuote: "«Un passo alla volta.»",
      trekDesc: "Prepara escursioni e cammini con una pianificazione che privilegia i sentieri. Confronta quote, salita e durata stimata prima di partire.",
      trekF1: "<strong>Difficoltà T1–T6 in Italia</strong> dove presenti nei dati; i tratti non classificati restano indicati",
      trekF2: "<strong>Profilo altimetrico</strong> e salita stimati dalla cartografia",
      trekF3: "<strong>Avvisi vocali di quota</strong> ogni 500 m D+ per gestire le energie",
      trekF4: "<strong>Bussola orientata</strong> sulla cartografia topografica con curve di livello",
      trekPill: "Compatibile con tracce GPX ufficiali CAI e regionali",

      bikeTag: "Due Ruote",
      bikeTitle: "Bicicletta",
      bikeQuote: "«Una pedalata alla volta.»",
      bikeDesc: "Algoritmo di routing calibrato per ciclovie, strade bianche e viabilità a basso scorrimento. Schermata ad alto contrasto concepita per essere letta all'istante dal supporto da manubrio.",
      bikeF1: "<strong>Routing ciclistico dedicato</strong> con priorità a piste ciclabili e sterrati compatti",
      bikeF2: "<strong>Display ad alto contrasto</strong> con dati essenziali in evidenza",
      bikeF3: "<strong>Distanza, velocità e quota</strong> a vista durante la pedalata",
      bikeF4: "<strong>Registrazione continua</strong> della traccia senza consumo eccessivo di batteria",
      bikePill: "Verifica fondo e accessibilità per la tua bicicletta",

      runTag: "Velocità",
      runTitle: "Corsa & Camminata",
      runQuote: "«Il tuo ritmo, ovunque.»",
      runDesc: "Per le uscite nei parchi e sulle vie pedonali: pianificazione dedicata, passo al chilometro e tempo in movimento. Prepara un anello oppure registra liberamente.",
      runF1: "<strong>Anelli personalizzabili</strong> per distanza o durata, con limite D+ facoltativo",
      runF2: "<strong>Passo medio, distanza e tempo</strong> in movimento aggiornati ogni secondo",
      runF3: "<strong>Funzione Trip Trim</strong> per ripulire code o soste accidentali a fine uscita",
      runF4: "<strong>Registrazione GPS offline:</strong> scarica prima la cartografia che ti serve",
      runPill: "Nessuna distrazione: solo passo, distanza e sentiero",

      startTag: "Dall’idea al sentiero",
      startTitle: "Meno preparativi.<br><span class=\"serif-accent\">Più tempo fuori.</span>",
      s1Title: "Scegli l’attività",
      s1Desc: "Trekking, bicicletta o corsa e camminata: metriche e pianificazione seguono la tua scelta.",
      s2Title: "Prepara la tua uscita",
      s2Desc: "Crea tappe, importa una traccia o cerca un anello. Controlla il percorso e scarica le mappe disponibili.",
      s3Title: "Parti e ritrova i tuoi progressi",
      s3Desc: "Segui il percorso o registra liberamente. Al ritorno trovi mappa, tempi e profilo nel tuo storico.",

      featIntroBadge: "Tecnologia Cartografica",
      featIntroTitle: "Strumenti costruiti<br><span class=\"serif-accent\">per il terreno reale.</span>",
      featIntroDesc: "Prepara l’itinerario, osserva il terreno e scegli quali dati tenere a vista durante l’uscita.",

      feat1Tag: "Morfologia del Territorio",
      feat1Title: "Rilievi 3D e curve di livello DEM",
      feat1Desc: "Il modello digitale del terreno ad alta risoluzione trasforma la mappa in una vista tridimensionale naturale. Osserva versanti, creste e canaloni prima di imboccarli per valutare l'esposizione al sole e la ripidezza del percorso.",
      feat1Badge: "Vetta • 2.814 m",

      feat2Tag: "Itinerari Circolari",
      feat2Title: "Un anello, come lo vuoi tu",
      feat2Desc: "Scegli distanza oppure durata e, se vuoi, un limite alla salita totale. Confronta le alternative sulla rete disponibile per la tua modalità. Distanza e tempo sono stime; alcuni tratti possono ripetersi. Il calcolo richiede internet.",
      feat2Dist: "Distanza",
      feat2Gain: "Dislivello",
      feat2Est: "Stima",

      feat3Tag: "Efficienza Energetica",
      feat3Title: "Display AMOLED ad alto contrasto",
      feat3Desc: "Una vista nera con le metriche essenziali, per consultare l’attività con meno elementi sullo schermo. La registrazione continua anche a schermo spento; autonomia e leggibilità dipendono dal telefono e dalle impostazioni.",
      feat3Header: "MODALITÀ AMOLED ATTIVA",
      feat3Gps: "GPS: PRECISO",
      feat3Altitude: "Quota Attuale",
      feat3Gain: "Dislivello D+",
      feat3Dist: "Distanza",
      feat3Battery: "Autonomia",

      feat4Tag: "Ricordi da portare con te",
      feat4Title: "Il tuo percorso, da condividere",
      feat4Desc: "Crea una storia con foto, traccia e dati, oppure esporta una pagina HTML. Nei browser compatibili la mappa è interattiva; nelle anteprime iPhone rimangono visibili la vista salvata e il profilo altimetrico.",
      feat4P1: "File HTML standalone con mappa interattiva e profilo dislivello",
      feat4P2: "Torcia ottica e avvisatore acustico con segnale SOS in codice Morse",
      feat4P3: "Strumento Trip Trim per rimuovere tempi morti all'inizio e alla fine",
      feat4P4: "Disponibile in italiano, inglese, francese e spagnolo",

      privTag: "Privacy, con chiarezza",
      privTitle: "I tuoi sentieri<br><span style=\"color: #9fe8b4; font-family: var(--font-serif); font-style: italic; font-weight: 400;\">appartengono solo a te.</span>",
      privDesc: "Lo storico rimane nel tuo archivio sul telefono, senza un account Traccialto. Le funzioni online, come mappe, ricerca e calcolo dei percorsi, contattano fornitori esterni e inviano i dati necessari alla richiesta. Puoi gestire i servizi online nelle impostazioni.",
      privB1Title: "Il tuo storico sul dispositivo",
      privB1Desc: "Conserva attività e impostazioni sul telefono. Scegli tu quando esportarle o condividerle.",
      privB2Title: "Backup privato su Google Drive",
      privB2Desc: "Sincronizza e ripristina percorsi, diario e foto nella cartella nascosta (appDataFolder) del tuo Google Drive personale, senza server esterni.",
      privB3Title: "Zero cookie e zero tracciamento",
      privB3Desc: "Né questo sito né l'app includono Google Analytics, Facebook Pixel o reti pubblicitarie di monetizzazione.",
      privBtn: "Leggi l'informativa completa sulla privacy",
      privSideTitle: "Il tuo cloud, solo tuo",
      privSideDesc: "Puoi attivare il backup incrementale automatico nello spazio privato del tuo Google Drive: Traccialto non vede gli altri tuoi file e non usa server propri.",

      faqTag: "FAQ & Chiarezza",
      faqTitle: "Tutto quello che<br><span class=\"serif-accent\">c'è da sapere.</span>",
      faqDesc: "Risposte semplici e trasparenti su licenza, funzionamento offline, privacy e compatibilità con i tuoi dispositivi Android.",
      q1: "Traccialto è davvero completamente gratuita?",
      a1: "Sì. Non ci sono canoni mensili, non esistono funzioni 'pro' a pagamento e non ci sono banner pubblicitari. Traccialto nasce come progetto indipendente e artigianale dedicato a chi ama camminare e pedalare in natura con uno strumento pulito e trasparente.",
      q2: "Funziona in alta quota dove non c'è campo telefonico?",
      a2: "Puoi registrare con il GPS e seguire una traccia salvata senza connessione. Scarica prima le mappe disponibili per il percorso e verifica che siano presenti. Ricerca dei luoghi, nuovi itinerari e contenuti non scaricati richiedono internet. La precisione GPS dipende dalle condizioni.",
      q3: "Posso importare i miei percorsi e tracce GPX esistenti?",
      a3: "Puoi importare file GPX e KML compatibili, visualizzarli e seguirli. La disponibilità delle quote dipende dal file e dai dati cartografici. Usa tracce di cui hai il diritto di disporre.",
      q4: "Come funziona il backup dei miei percorsi?",
      a4: "Puoi collegare facoltativamente il tuo account Google per salvare e sincronizzare in modo incrementale percorsi, camminate, diario e foto nella cartella privata dell'app (appDataFolder) sul tuo Google Drive, con ripristino anche in background quando cambi telefono.",
      q5: "Quali versioni di Android sono supportate?",
      a5: "L’app richiede Android 8 o successivo. Prestazioni del 3D, ricezione GPS e registrazione in background dipendono dal dispositivo. Alcune funzioni richiedono versioni Android più recenti.",

      closingTag: "Pronto per la prossima uscita",
      closingTitle: "La natura ti aspetta.<br><span class=\"serif-accent\">Portati solo l'essenziale.</span>",
      closingDesc: "Disponibile su Google Play Store. Scarica l'applicazione gratuita e inizia a esplorare.",
      closingBtn: "Disponibile su Google Play",
      closingFoot: "Android 8+ · Gratis · Senza pubblicità",

      footerCopy: "© 2026 Traccialto. Progetto indipendente di cartografia e navigazione per il territorio. Senza strumenti pubblicitari. Consulta l’informativa privacy."
    },

    en: {
      navActivities: "Activities",
      navFeatures: "Features",
      navPrivacy: "Privacy",
      navFaq: "FAQ",
      btnAvailability: "Android Availability",
      btnAvailabilityShort: "Availability",

      heroBadge: "Hiking · Cycling · Running & Walking",
      heroTitle: "Your next outdoor journey<br><span class=\"serif-accent\">begins right here.</span>",
      heroLead: "Choose how you want to move. Plan a route, view terrain in 3D, and keep every trip in your private on-device archive. Free, no account, zero ads.",
      btnHeroExplore: "Explore features",
      btnHeroDisciplines: "The 3 disciplines",
      trustFree: "Free",
      trustNoAccount: "No account required",
      trustNoAds: "Zero ads",
      trustOfflineMaps: "Downloadable maps",

      cardElevationValue: "+833 m D+",
      cardElevationDesc: "Real elevation gain on DEM terrain model",
      cardLoopTitle: "Loop route preview · 12.4 km",
      cardLoopDesc: "Set a goal. Compare alternatives.",

      discIntroBadge: "Outdoor Activities & Disciplines",
      discIntroTitle: "Three ways to experience nature<br><span class=\"serif-accent\">with dedicated tools.</span>",
      discIntroDesc: "Traccialto doesn't apply a generic formula to all sports. Each mode uses routing algorithms, difficulty scales, and metrics tailored specifically for walking, biking, or running.",

      trekTag: "Mountains",
      trekTitle: "Trekking & Hiking",
      trekQuote: "«One step at a time.»",
      trekDesc: "Plan hikes and mountain treks with routing that prioritizes footpaths. Compare altitudes, climbs, and estimated times before heading out.",
      trekF1: "<strong>Trail difficulty T1–T6 in Italy</strong> where present; unclassified segments remain clearly marked",
      trekF2: "<strong>Elevation profile</strong> and climbs estimated from topography",
      trekF3: "<strong>Voice altitude alerts</strong> every 500 m D+ to manage your pace",
      trekF4: "<strong>Oriented compass</strong> on topographic maps with contour lines",
      trekPill: "Compatible with official regional and CAI GPX tracks",

      bikeTag: "Two Wheels",
      bikeTitle: "Cycling",
      bikeQuote: "«One pedal stroke at a time.»",
      bikeDesc: "Routing algorithm calibrated for cycle paths, gravel roads, and low-traffic routes. High-contrast screen designed for instant reading from your handlebar mount.",
      bikeF1: "<strong>Dedicated bicycle routing</strong> prioritizing bike lanes and packed gravel",
      bikeF2: "<strong>High-contrast display</strong> highlighting vital metrics",
      bikeF3: "<strong>Distance, speed, and altitude</strong> visible while riding",
      bikeF4: "<strong>Continuous tracking</strong> with battery-saving optimization",
      bikePill: "Check surface conditions and accessibility for your bike",

      runTag: "Pace",
      runTitle: "Running & Walking",
      runQuote: "«Your rhythm, anywhere.»",
      runDesc: "For runs in parks and urban pedestrian paths: dedicated planning, pace per kilometer, and active moving time. Generate loop courses or record freely.",
      runF1: "<strong>Customizable loops</strong> by distance or duration, with optional D+ limits",
      runF2: "<strong>Average pace, distance, and moving time</strong> updated every second",
      runF3: "<strong>Trip Trim tool</strong> to clean up accidental start/end delays",
      runF4: "<strong>Offline GPS recording:</strong> download the maps you need ahead of time",
      runPill: "No distractions: just pace, distance, and the trail",

      startTag: "From idea to trail",
      startTitle: "Less preparation.<br><span class=\"serif-accent\">More time outdoors.</span>",
      s1Title: "Choose your activity",
      s1Desc: "Hiking, cycling, or running and walking: metrics and planning follow your choice.",
      s2Title: "Prepare your outing",
      s2Desc: "Create stops, import a GPX track, or generate a loop. Review the route and download maps.",
      s3Title: "Head out and track your progress",
      s3Desc: "Follow the track or record freely. Find map, times, and elevation profile in your history upon return.",

      featIntroBadge: "Mapping Technology",
      featIntroTitle: "Tools built<br><span class=\"serif-accent\">for real terrain.</span>",
      featIntroDesc: "Plan your route, inspect the terrain, and choose which metrics stay visible on screen.",

      feat1Tag: "Terrain Morphology",
      feat1Title: "3D terrain relief and DEM contour lines",
      feat1Desc: "High-resolution digital elevation models transform the map into a natural 3D view. Inspect slopes, ridges, and valleys before taking them on to evaluate sun exposure and trail steepness.",
      feat1Badge: "Summit • 2,814 m",

      feat2Tag: "Circular Routes",
      feat2Title: "A loop route, just how you want it",
      feat2Desc: "Choose distance or duration and, if desired, a limit on total climb. Compare alternatives on your chosen network. Calculations require an internet connection.",
      feat2Dist: "Distance",
      feat2Gain: "Elevation",
      feat2Est: "Estimate",

      feat3Tag: "Energy Efficiency",
      feat3Title: "High-contrast AMOLED display",
      feat3Desc: "A pure black view with essential metrics, reducing visual clutter. Recording continues with the screen turned off; battery life depends on device settings.",
      feat3Header: "AMOLED MODE ACTIVE",
      feat3Gps: "GPS: ACCURATE",
      feat3Altitude: "Current Alt.",
      feat3Gain: "Elevation D+",
      feat3Dist: "Distance",
      feat3Battery: "Battery time",

      feat4Tag: "Memories to carry with you",
      feat4Title: "Your journey, ready to share",
      feat4Desc: "Create a story with photos, track, and stats, or export a standalone HTML page. Maps remain interactive in compatible browsers, showing your route and elevation profile.",
      feat4P1: "Standalone HTML file with interactive map and elevation profile",
      feat4P2: "Visual flashlight and audio buzzer with SOS Morse code signal",
      feat4P3: "Trip Trim tool to remove waiting times at start and finish",
      feat4P4: "Available in Italian, English, French, and Spanish",

      privTag: "Privacy, with clarity",
      privTitle: "Your trails<br><span style=\"color: #9fe8b4; font-family: var(--font-serif); font-style: italic; font-weight: 400;\">belong only to you.</span>",
      privDesc: "Your activity history remains stored on your phone without a Traccialto account. Online features (maps, search, and route calculation) contact external providers only for requested data. You can manage online services in settings.",
      privB1Title: "History stored on device",
      privB1Desc: "Keep your activities and settings on your phone. You choose when to export or share them.",
      privB2Title: "Private Google Drive backup",
      privB2Desc: "Sync and restore your routes, diary, and photos inside the hidden app folder (appDataFolder) of your personal Google Drive, with no third-party servers.",
      privB3Title: "Zero cookies, zero trackers",
      privB3Desc: "Neither this website nor the app include Google Analytics, Facebook Pixel, or monetization ad networks.",
      privBtn: "Read full privacy policy",
      privSideTitle: "Your cloud, only yours",
      privSideDesc: "Enable automatic incremental backup in your private Google Drive app space: Traccialto cannot see your other Drive files and uses no proprietary servers.",

      faqTag: "FAQ & Clarity",
      faqTitle: "Everything<br><span class=\"serif-accent\">you need to know.</span>",
      faqDesc: "Clear and honest answers regarding licenses, offline functionality, privacy, and Android compatibility.",
      q1: "Is Traccialto truly completely free?",
      a1: "Yes. There are no monthly subscriptions, no paid 'pro' tiers, and no advertising banners. Traccialto was created as an independent, crafted tool for outdoor enthusiasts who appreciate a clean and honest experience.",
      q2: "Does it work at high altitude without cellular coverage?",
      a2: "You can record GPS tracks and follow saved routes completely offline. Download available maps before departure. Place search and initial routing require an internet connection.",
      q3: "Can I import my existing GPX / KML tracks?",
      a3: "Yes, you can import compatible GPX and KML files, view them, and navigate along them.",
      q4: "How does track backup work?",
      a4: "You can optionally connect your Google account to incrementally back up and sync routes, recorded walks, diary notes, and photos into the private app folder (appDataFolder) of your Google Drive, with background restore when switching phones.",
      q5: "Which Android versions are supported?",
      a5: "The app requires Android 8 or newer. 3D performance and background GPS tracking depend on your device.",

      closingTag: "Ready for your next trip",
      closingTitle: "Nature is waiting.<br><span class=\"serif-accent\">Bring only what matters.</span>",
      closingDesc: "Available on Google Play Store. Download the free app and start exploring.",
      closingBtn: "Get it on Google Play",
      closingFoot: "Android 8+ · Free · Zero Ads",

      footerCopy: "© 2026 Traccialto. Independent outdoor cartography and navigation project. Zero ads. See privacy policy."
    },

    fr: {
      navActivities: "Activités",
      navFeatures: "Fonctions",
      navPrivacy: "Confidentialité",
      navFaq: "FAQ",
      btnAvailability: "Disponibilité Android",
      btnAvailabilityShort: "Disponibilité",

      heroBadge: "Randonnée · Vélo · Course et marche",
      heroTitle: "Votre prochaine sortie<br><span class=\"serif-accent\">commence ici.</span>",
      heroLead: "Choisissez votre pratique. Préparez un itinéraire, visualisez le relief en 3D et retrouvez chaque sortie dans vos archives personnelles. Gratuit, sans compte et sans publicité.",
      btnHeroExplore: "Explorer les fonctions",
      btnHeroDisciplines: "Les 3 disciplines",
      trustFree: "Gratuit",
      trustNoAccount: "Aucun compte requis",
      trustNoAds: "Zéro publicité",
      trustOfflineMaps: "Cartes téléchargeables",

      cardElevationValue: "+833 m D+",
      cardElevationDesc: "Dénivelé réel sur modèle DEM",
      cardLoopTitle: "Exemple de boucle · 12,4 km",
      cardLoopDesc: "Fixez un objectif. Comparez les alternatives.",

      discIntroBadge: "Activités & Disciplines Outdoor",
      discIntroTitle: "Trois façons de vivre la nature<br><span class=\"serif-accent\">avec des outils dédiés.</span>",
      discIntroDesc: "Traccialto n'applique pas une formule générique à tous les sports. Chaque modalité intègre des moteurs de calcul, échelles de difficulté et métriques adaptés aux marcheurs, cyclistes et coureurs.",

      trekTag: "Montagne",
      trekTitle: "Randonnée & Montagne",
      trekQuote: "« Un pas après l'autre. »",
      trekDesc: "Préparez vos randonnées avec un calcul privilégiant les sentiers pédestres. Comparez altitudes, montées et durées estimées avant de partir.",
      trekF1: "<strong>Difficulté T1–T6</strong> répertoriée là où présente dans les données topographiques",
      trekF2: "<strong>Profil altimétrique</strong> et montées estimés d'après la cartographie",
      trekF3: "<strong>Alertes vocales d'altitude</strong> tous les 500 m D+ pour doser votre effort",
      trekF4: "<strong>Boussole orientée</strong> sur cartographie topographique avec courbes de niveau",
      trekPill: "Compatible avec les traces GPX officielles et régionales",

      bikeTag: "Deux Roues",
      bikeTitle: "Vélo & Cyclisme",
      bikeQuote: "« Un coup de pédale après l'autre. »",
      bikeDesc: "Algorithme de calcul adapté aux voies vertes, chemins carrossables et routes secondaires. Écran à haut contraste pensé pour être lu instantanément sur guidon.",
      bikeF1: "<strong>Routage vélo spécifique</strong> priorisant pistes cyclables et pistes en terre battue",
      bikeF2: "<strong>Affichage haut contraste</strong> avec données clés en évidence",
      bikeF3: "<strong>Distance, vitesse et altitude</strong> visibles pendant la sortie",
      bikeF4: "<strong>Enregistrement continu</strong> sans surconsommation de batterie",
      bikePill: "Vérifiez le revêtement et l'accessibilité selon votre vélo",

      runTag: "Vitesse",
      runTitle: "Course & Marche",
      runQuote: "« Votre rythme, partout. »",
      runDesc: "Pour les sorties en parcs et zones piétonnes : planification sur mesure, allure au kilomètre et temps en mouvement. Créez des boucles ou enregistrez librement.",
      runF1: "<strong>Boucles personnalisables</strong> selon distance ou durée, avec limite D+ optionnelle",
      runF2: "<strong>Allure moyenne, distance et temps</strong> actualisés chaque seconde",
      runF3: "<strong>Fonction Trip Trim</strong> pour effacer les temps d'arrêt au départ ou à l'arrivée",
      runF4: "<strong>Enregistrement GPS hors-ligne :</strong> téléchargez la carte à l'avance",
      runPill: "Aucune distraction : seulement l'allure, la distance et le sentier",

      startTag: "De l'idée au sentier",
      startTitle: "Moins de préparatifs.<br><span class=\"serif-accent\">Plus de temps dehors.</span>",
      s1Title: "Choisissez l'activité",
      s1Desc: "Randonnée, vélo ou course et marche : métriques et calculs s'adaptent à votre choix.",
      s2Title: "Préparez votre sortie",
      s2Desc: "Créez des étapes, importez une trace GPX ou générez une boucle. Téléchargez les cartes nécessaires.",
      s3Title: "Partez et suivez vos progrès",
      s3Desc: "Suivez la trace ou enregistrez librement. Retrouvez carte, temps et profil dans votre historique.",

      featIntroBadge: "Technologie Cartographique",
      featIntroTitle: "Des outils conçus<br><span class=\"serif-accent\">pour le terrain réel.</span>",
      featIntroDesc: "Préparez l'itinéraire, observez le relief et choisissez les données à garder sous les yeux.",

      feat1Tag: "Morphologie du Relief",
      feat1Title: "Relief 3D et courbes de niveau DEM",
      feat1Desc: "Le modèle numérique de terrain haute résolution transforme la carte en vue 3D naturelle. Observez versants, crêtes et combes pour évaluer l'ensoleillement et la pente.",
      feat1Badge: "Sommet • 2 814 m",

      feat2Tag: "Itinéraires Circulaires",
      feat2Title: "Une boucle selon vos envies",
      feat2Desc: "Définissez une distance ou une durée, avec une limite optionnelle de dénivelé. Comparez les variantes. Le calcul initial requiert internet.",
      feat2Dist: "Distance",
      feat2Gain: "Dénivelé",
      feat2Est: "Estimation",

      feat3Tag: "Efficacité Énergétique",
      feat3Title: "Écran AMOLED à haut contraste",
      feat3Desc: "Un affichage noir épuré avec vos métriques essentielles. L'enregistrement se poursuit écran éteint ; l'autonomie dépend de votre appareil.",
      feat3Header: "MODE AMOLED ACTIF",
      feat3Gps: "GPS : PRÉCIS",
      feat3Altitude: "Altitude actuelle",
      feat3Gain: "Dénivelé D+",
      feat3Dist: "Distance",
      feat3Battery: "Autonomie",

      feat4Tag: "Souvenirs à partager",
      feat4Title: "Votre parcours, facile à partager",
      feat4Desc: "Créez une story avec photos et données, ou exportez une page web HTML autonome. La carte reste interactive dans les navigateurs compatibles.",
      feat4P1: "Fichier HTML autonome avec carte interactive et profil de dénivelé",
      feat4P2: "Lampe torche et avertisseur sonore avec signal SOS en code Morse",
      feat4P3: "Outil Trip Trim pour nettoyer les temps morts au début et à la fin",
      feat4P4: "Disponible en italien, anglais, français et espagnol",

      privTag: "Confidentialité & Clarté",
      privTitle: "Vos sentiers<br><span style=\"color: #9fe8b4; font-family: var(--font-serif); font-style: italic; font-weight: 400;\">n'appartiennent qu'à vous.</span>",
      privDesc: "L'historique est conservé localement sur votre téléphone, sans aucun compte Traccialto. Les fonctionnalités en ligne (cartes, recherche, calcul d'itinéraires) n'envoient que les données strictement nécessaires à la requête.",
      privB1Title: "Historique stocké sur l'appareil",
      privB1Desc: "Conservez vos sorties et réglages sur votre téléphone. Vous seul décidez quand les exporter ou les partager.",
      privB2Title: "Sauvegarde privée sur Google Drive",
      privB2Desc: "Synchronisez et restaurez vos parcours, journal et photos dans le dossier caché (appDataFolder) de votre Google Drive personnel, sans serveur tiers.",
      privB3Title: "Zéro cookie, zéro pistage",
      privB3Desc: "Ni ce site ni l'application n'intègrent Google Analytics, pixel Facebook ou régies publicitaires.",
      privBtn: "Lire la politique de confidentialité complète",
      privSideTitle: "Votre cloud, rien qu'à vous",
      privSideDesc: "Activez la sauvegarde incrémentielle automatique dans l'espace privé de votre Google Drive : Traccialto n'a accès à aucun autre fichier de votre Drive.",

      faqTag: "FAQ & Clarté",
      faqTitle: "Tout ce que<br><span class=\"serif-accent\">vous devez savoir.</span>",
      faqDesc: "Réponses transparentes sur les licences, le fonctionnement hors-ligne, la confidentialité et la compatibilité Android.",
      q1: "Traccialto est-elle vraiment entièrement gratuite ?",
      a1: "Oui. Il n'y a aucun abonnement mensuel, aucune fonction 'pro' payante et aucune bannière publicitaire. Traccialto est un projet indépendant dédié aux amoureux de nature.",
      q2: "L'application fonctionne-t-elle en altitude sans réseau mobile ?",
      a2: "Vous pouvez enregistrer vos traces GPS et suivre un parcours sauvegardé sans aucune connexion. Téléchargez simplement la carte de la zone au préalable.",
      q3: "Puis-je importer mes propres fichiers GPX et KML ?",
      a3: "Oui, vous pouvez importer des fichiers GPX et KML compatibles, les afficher et les suivre.",
      q4: "Comment fonctionne la sauvegarde de mes parcours ?",
      a4: "Vous pouvez connecter facultativement votre compte Google pour sauvegarder et synchroniser vos parcours, sorties, journal et photos dans le dossier privé (appDataFolder) de votre Google Drive, avec restauration en arrière-plan.",
      q5: "Quelles versions d'Android sont supportées ?",
      a5: "L'application nécessite Android 8 ou version ultérieure.",

      closingTag: "Prêt pour la prochaine sortie",
      closingTitle: "La nature vous attend.<br><span class=\"serif-accent\">Emportez juste l'essentiel.</span>",
      closingDesc: "Disponible sur Google Play Store. Téléchargez l'application gratuite et partez à l'aventure.",
      closingBtn: "Disponible sur Google Play",
      closingFoot: "Android 8+ · Gratuit · Sans publicité",

      footerCopy: "© 2026 Traccialto. Projet indépendant de cartographie et de navigation outdoor. Zéro publicité. Consultez la politique de confidentialité."
    },

    es: {
      navActivities: "Actividades",
      navFeatures: "Funciones",
      navPrivacy: "Privacidad",
      navFaq: "Preguntas",
      btnAvailability: "Disponibilidad Android",
      btnAvailabilityShort: "Disponibilidad",

      heroBadge: "Senderismo · Bicicleta · Carrera y caminata",
      heroTitle: "Tu próxima aventura<br><span class=\"serif-accent\">comienza aquí.</span>",
      heroLead: "Elige cómo quieres moverte. Prepara una ruta, contempla el relieve en 3D y conserva cada salida en tu archivo personal. Gratis, sin cuenta y sin anuncios.",
      btnHeroExplore: "Explorar funciones",
      btnHeroDisciplines: "Las 3 disciplinas",
      trustFree: "Gratis",
      trustNoAccount: "Sin cuenta requerida",
      trustNoAds: "Cero anuncios",
      trustOfflineMaps: "Mapas descargables",

      cardElevationValue: "+833 m D+",
      cardElevationDesc: "Desnivel real en modelo DEM",
      cardLoopTitle: "Ejemplo de ruta circular · 12,4 km",
      cardLoopDesc: "Fija un objetivo. Compara alternativas.",

      discIntroBadge: "Actividades & Deportes Outdoor",
      discIntroTitle: "Tres formas de vivir la naturaleza<br><span class=\"serif-accent\">con herramientas dedicadas.</span>",
      discIntroDesc: "Traccialto no aplica una fórmula genérica a todos los deportes. Cada modo utiliza motores de cálculo, escalas de dificultad y métricas diseñadas para senderistas, ciclistas o corredores.",

      trekTag: "Montaña",
      trekTitle: "Senderismo & Montaña",
      trekQuote: "«Un paso a la vez.»",
      trekDesc: "Planifica excursiones con un trazado que prioriza los senderos. Compara altitudes, ascensos y tiempos estimados antes de salir.",
      trekF1: "<strong>Dificultad de senderos T1–T6</strong> indicada donde esté disponible en los datos",
      trekF2: "<strong>Perfil de elevación</strong> y desniveles calculados a partir de la topografía",
      trekF3: "<strong>Avisos de voz de altitud</strong> cada 500 m D+ para gestionar tu energía",
      trekF4: "<strong>Brújula orientada</strong> en cartografía topográfica con curvas de nivel",
      trekPill: "Compatible con rutas GPX oficiales y regionales",

      bikeTag: "Dos Ruedas",
      bikeTitle: "Bicicleta",
      bikeQuote: "«Una pedalada a la vez.»",
      bikeDesc: "Algoritmo de cálculo adaptado a ciclovías, pistas de tierra compacta y vías de poco tráfico. Pantalla de alto contraste diseñada para leerse al instante en el manillar.",
      bikeF1: "<strong>Rutas ciclistas dedicadas</strong> con prioridad a vías ciclistas y pistas firmes",
      bikeF2: "<strong>Pantalla de alto contraste</strong> con datos esenciales siempre a la vista",
      bikeF3: "<strong>Distancia, velocidad y altitud</strong> visibles mientras pedaleas",
      bikeF4: "<strong>Grabación continua</strong> con optimización del consumo de batería",
      bikePill: "Comprueba el firme y la accesibilidad para tu bicicleta",

      runTag: "Ritmo",
      runTitle: "Carrera & Caminata",
      runQuote: "«Tu ritmo, en cualquier lugar.»",
      runDesc: "Para salidas en parques y zonas peatonales: planificación dedicada, ritmo por kilómetro y tiempo en movimiento. Diseña una ruta circular o graba libremente.",
      runF1: "<strong>Rutas circulares a medida</strong> por distancia o tiempo, con límite D+ opcional",
      runF2: "<strong>Ritmo medio, distancia y tiempo</strong> en movimiento actualizados al segundo",
      runF3: "<strong>Función Trip Trim</strong> para eliminar pausas accidentales al inicio y final",
      runF4: "<strong>Grabación GPS offline:</strong> descarga los mapas con antelación",
      runPill: "Sin distracciones: solo ritmo, distancia y camino",

      startTag: "De la idea al sendero",
      startTitle: "Menos preparativos.<br><span class=\"serif-accent\">Más tiempo al aire libre.</span>",
      s1Title: "Elige la actividad",
      s1Desc: "Senderismo, bicicleta o carrera y caminata: métricas y rutas adaptadas a ti.",
      s2Title: "Prepara tu salida",
      s2Desc: "Añade paradas, importa un track o genera una ruta circular. Descarga los mapas disponibles.",
      s3Title: "Ponte en marcha",
      s3Desc: "Sigue la ruta o graba con libertad. Al regresar encontrarás mapa, tiempos y perfil en tu historial.",

      featIntroBadge: "Tecnología Cartográfica",
      featIntroTitle: "Herramientas creadas<br><span class=\"serif-accent\">para el terreno real.</span>",
      featIntroDesc: "Prepara el itinerario, estudia el terreno y elige qué métricas mantener a la vista.",

      feat1Tag: "Morfología del Terreno",
      feat1Title: "Relieve 3D y curvas de nivel DEM",
      feat1Desc: "El modelo digital de elevación de alta resolución transforma el mapa en una vista tridimensional natural. Observa laderas, crestas y vaguadas para evaluar la inclinación.",
      feat1Badge: "Cima • 2.814 m",

      feat2Tag: "Rutas Circulares",
      feat2Title: "Una ruta circular a tu medida",
      feat2Desc: "Elige distancia o duración y añade si quieres un límite de desnivel. Compara alternativas. El cálculo inicial requiere internet.",
      feat2Dist: "Distancia",
      feat2Gain: "Desnivel",
      feat2Est: "Estimación",

      feat3Tag: "Eficiencia Energética",
      feat3Title: "Pantalla AMOLED de alto contraste",
      feat3Desc: "Una vista en negro puro con tus métricas esenciales. La grabación continúa con la pantalla apagada; la autonomía depende de tu dispositivo.",
      feat3Header: "MODO AMOLED ACTIVO",
      feat3Gps: "GPS: EXACTO",
      feat3Altitude: "Altitud actual",
      feat3Gain: "Desnivel D+",
      feat3Dist: "Distancia",
      feat3Battery: "Autonomía",

      feat4Tag: "Recuerdos para llevar contigo",
      feat4Title: "Tu ruta, lista para compartir",
      feat4Desc: "Crea una historia con fotos y estadísticas, o exporta una página web HTML independiente. El mapa sigue siendo interactivo en navegadores compatibles.",
      feat4P1: "Archivo HTML independiente con mapa interactivo y perfil de elevación",
      feat4P2: "Linterna óptica y avisador acústico con señal SOS en código Morse",
      feat4P3: "Herramienta Trip Trim para recortar esperas al inicio y final",
      feat4P4: "Disponible en italiano, inglés, francés y español",

      privTag: "Privacidad y Claridad",
      privTitle: "Tus senderos<br><span style=\"color: #9fe8b4; font-family: var(--font-serif); font-style: italic; font-weight: 400;\">solo te pertenecen a ti.</span>",
      privDesc: "El historial se conserva en tu teléfono sin necesidad de cuenta en Traccialto. Las funciones online (mapas, búsqueda, cálculo de rutas) solo envían los datos estrictamente necesarios para la consulta.",
      privB1Title: "Historial en el dispositivo",
      privB1Desc: "Conserva tus rutas y ajustes en tu teléfono. Solo tú decides cuándo exportarlos o compartirlos.",
      privB2Title: "Copia privada en Google Drive",
      privB2Desc: "Sincroniza y restaura rutas, diario y fotos en la carpeta oculta (appDataFolder) de tu Google Drive personal, sin servidores externos.",
      privB3Title: "Cero cookies y cero rastreadores",
      privB3Desc: "Ni esta web ni la app incluyen Google Analytics, píxel de Facebook ni redes publicitarias.",
      privBtn: "Leer política de privacidad completa",
      privSideTitle: "Tu nube, solo tuya",
      privSideDesc: "Activa la copia incremental automática en el espacio privado de tu Google Drive: Traccialto no ve tus demás archivos ni usa servidores propios.",

      faqTag: "FAQ y Claridad",
      faqTitle: "Todo lo que<br><span class=\"serif-accent\">necesitas saber.</span>",
      faqDesc: "Respuestas claras sobre licencias, funcionamiento offline, privacidad y compatibilidad con Android.",
      q1: "¿Traccialto es realmente gratuita?",
      a1: "Sí. No hay cuotas mensuales, no existen opciones de pago 'pro' ni anuncios publicitarios. Traccialto es un proyecto independiente y artesanal para los amantes del deporte y la naturaleza.",
      q2: "¿Funciona en alta montaña sin cobertura móvil?",
      a2: "Puedes registrar con GPS y seguir una ruta guardada sin conexión alguna. Descarga los mapas disponibles de la zona antes de salir.",
      q3: "¿Puedo importar mis rutas GPX y KML existentes?",
      a3: "Sí, puedes importar archivos GPX y KML compatibles, visualizarlos y seguir el camino.",
      q4: "¿Cómo funciona la copia de seguridad?",
      a4: "Puedes conectar opcionalmente tu cuenta de Google para guardar y sincronizar de forma incremental tus rutas, caminatas, diario y fotos en la carpeta privada (appDataFolder) de tu Google Drive, con restauración en segundo plano.",
      q5: "¿Qué versiones de Android son compatibles?",
      a5: "La aplicación requiere Android 8 o superior.",

      closingTag: "Listo para la próxima salida",
      closingTitle: "La naturaleza te espera.<br><span class=\"serif-accent\">Lleva solo lo imprescindible.</span>",
      closingDesc: "Disponible en Google Play Store. Descarga la aplicación gratuita y empieza a explorar.",
      closingBtn: "Disponible en Google Play",
      closingFoot: "Android 8+ · Gratis · Sin publicidad",

      footerCopy: "© 2026 Traccialto. Proyecto independiente de cartografía y navegación para el territorio. Sin publicidad. Consulta la política de privacidad."
    }
  };

  function detectLang() {
    const s = localStorage.getItem("traccialto_lang");
    if (s && I18N[s]) return s;
    const n = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (n.startsWith("it")) return "it";
    if (n.startsWith("fr")) return "fr";
    if (n.startsWith("es")) return "es";
    return "en";
  }

  function setLanguage(lang) {
    if (!I18N[lang]) lang = "en";
    localStorage.setItem("traccialto_lang", lang);
    document.documentElement.lang = lang;

    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".site-lang-pill button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-l") === lang);
    });
  }

  window.setSiteLanguage = setLanguage;

  document.addEventListener("DOMContentLoaded", function () {
    const current = detectLang();
    setLanguage(current);

    document.querySelectorAll(".site-lang-pill button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const l = this.getAttribute("data-l");
        if (l) setLanguage(l);
      });
    });
  });
})();

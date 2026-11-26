(function () {
  "use strict";

  let originalIt = null;

  const UI = {
    it: {
      title: "Informativa Privacy — Traccialto",
      desc: "Informativa sulla privacy di Traccialto per la navigazione outdoor e la gestione dei dati personali.",
      navHome: "Home",
      navPrivacy: "Informativa Privacy",
      langAria: "Lingua",
      footerCopy: "© 2026 Traccialto. Tutti i diritti riservati.",
      footerHome: "Torna alla Home",
      footerContact: "Contatto Privacy"
    },
    en: {
      title: "Privacy Notice — Traccialto",
      desc: "Traccialto privacy notice for outdoor navigation and personal data handling.",
      navHome: "Home",
      navPrivacy: "Privacy Notice",
      langAria: "Language",
      footerCopy: "© 2026 Traccialto. All rights reserved.",
      footerHome: "Back to Home",
      footerContact: "Privacy Contact"
    },
    fr: {
      title: "Politique de confidentialité — Traccialto",
      desc: "Politique de confidentialité de Traccialto pour la navigation outdoor et la gestion des données.",
      navHome: "Accueil",
      navPrivacy: "Confidentialité",
      langAria: "Langue",
      footerCopy: "© 2026 Traccialto. Tous droits réservés.",
      footerHome: "Retour à l’accueil",
      footerContact: "Contact Confidentialité"
    },
    es: {
      title: "Política de privacidad — Traccialto",
      desc: "Política de privacidad de Traccialto para la navegación outdoor y la gestión de datos.",
      navHome: "Inicio",
      navPrivacy: "Privacidad",
      langAria: "Idioma",
      footerCopy: "© 2026 Traccialto. Todos los derechos reservados.",
      footerHome: "Volver al inicio",
      footerContact: "Contacto Privacidad"
    }
  };

  const LEGAL_HTML = {
    en: `
      <h1>Traccialto privacy notice</h1>
      <p>Updated: 26 November 2026. Controller: <strong>Traccialto</strong>. Contact: <a href="mailto:traccialto.app@gmail.com">traccialto.app@gmail.com</a>. Public version: <a href="https://traccialto.github.io/privacy.html">https://traccialto.github.io/privacy.html</a>.</p>

      <h2>What the app does</h2>
      <p>Traccialto lets you create, import and follow routes, record walks and keep photos and descriptions. It requires no mandatory account, contains no ads and includes no advertising analytics. Recordings remain local on your phone; you can optionally choose to sync them to the private application folder (<code>appDataFolder</code>) of your personal Google Drive. Only when you enable the Friends feature or live sharing do the dedicated Google Firebase services and, for Friends, authorized Google Drive storage (<code>drive.file</code>) receive the data described in the respective sections below.</p>

      <h2>Location and recording</h2>
      <p>With Android permission, location centres the map, provides navigation and records the walk you start. Active recording continues with the screen off through a notification service; you can pause or stop it in the app or notification. Revoke permission in Android settings. Precise location improves accuracy; without permission you can still view and import routes.</p>

      <h2>Optional online services</h2>
      <p>Online services are enabled by default and may contact providers when the app opens. You can disable them in settings. Live sharing requires separate confirmation. Change this in Settings → Privacy and online services. Without them, GPS recording, local tracks and downloaded maps remain available; search, calculation and new map data require Internet.</p>
      <p>HTTPS requests send providers your IP address and necessary parameters. A map tile identifies an area and zoom level; the area may derive from GPS and update while walking, including recording with the screen off. Routing may send precise waypoint coordinates. Weather and useful places use rounded areas, not precise live coordinates. Rounding does not necessarily make location anonymous.</p>

      <table>
        <thead>
          <tr><th>Provider</th><th>Purpose and data</th></tr>
        </thead>
        <tbody>
          <tr><td>OpenStreetMap Foundation and OpenTopoMap</td><td>Map tiles and thumbnails of the displayed area.</td></tr>
          <tr><td>OpenFreeMap</td><td>Vector tiles for offline maps and snapping recordings to trails.</td></tr>
          <tr><td>EOX IT Services GmbH</td><td>Sentinel-2 satellite imagery for maps, 3D and exports.</td></tr>
          <tr><td>Regione autonoma Valle d’Aosta, swisstopo, IGN/Géoplateforme, City of Vienna and Austrian authorities (basemap.at), Provincia autonoma di Bolzano, Spain’s IGN/CNIG (PNOA), USGS (The National Map, USA), Provincia autonoma di Trento, Regione Toscana, Regione Emilia-Romagna, PDOK/Beeldmateriaal Nederland, ČÚZK (Czech Republic), AGEA (Italy)</td><td>Detailed orthophotos in covered areas for maps, 3D and exports. They receive IP, requested area and zoom when online services are enabled. Near boundaries, multiple sources may be queried to check coverage. The route file is not sent.</td></tr>
          <tr><td>Mapterhorn</td><td>Elevation tiles for altitudes, profiles and 3D terrain.</td></tr>
          <tr><td>Photon/Komoot</td><td>Text entered in place searches; we do not send GPS to this search.</td></tr>
          <tr><td>Valhalla/FOSSGIS</td><td>Waypoint coordinates and parameters needed to calculate routes. Only after specific confirmation, route geometry is also sent to retrieve SAC difficulty; consent applies to that track. When you select your GPS position as a waypoint and calculate online, its coordinates are sent to the service without an additional confirmation.</td></tr>
          <tr><td>Overpass API and private.coffee</td><td>Useful place categories and approximate map tile centre. Enabling difficulty colours also requests trails within 0.1-degree map cells crossed by the route; comparison with the exact track happens on the phone.</td></tr>
          <tr><td>Open-Meteo</td><td>Destination area rounded to 0.02 degrees for forecasts.</td></tr>
        </tbody>
      </table>

      <h2>Basis of processing and user choice</h2>
      <p>Data needed for requested functions is processed to provide those functions; online services are enabled by default and can be disabled for future requests. Live sharing starts only after your confirmation. Android permissions control sensor access and do not replace this notice.</p>

      <h2>Photos, files and sharing</h2>
      <p>Import GPX/KML and photos through the system picker: the app does not request general access to all files. Photos, descriptions and routes remain in private app storage. Exports, backups and sharing of messages, images or GIFs happen at your request to your chosen destination. These files may reveal visited places and times. Recipient apps apply their own privacy policies and are not controlled by Traccialto.</p>

      <h2>Retention and deletion</h2>
      <p>Routes and diaries remain on the device until you delete them. Trips in the bin are recoverable until permanently deleted. Map and preview caches may remain until cleared, replaced or limited by storage; they do not publish your routes. Manage storage in Settings. Clearing Android app data or uninstalling removes private app data on the phone, but not copies already exported, shared or saved to your personal Google Drive via optional backup.</p>
      <p>Online providers may retain technical logs under their policies; we do not promise immediate deletion of all requests. Open-Meteo states logs may include coordinates and be retained up to 90 days. Mapterhorn states technical logs, including IP and requested path, may be retained up to 30 days. Other providers’ policies linked below apply and should be checked periodically.</p>

      <h2>Security, system services and transfers</h2>
      <p>App connections use HTTPS; local data is protected by Android app isolation. Sharing uses temporary file permissions. Device encryption and locking depend on its settings; exported files are not automatically encrypted by Traccialto. The speech engine and device location services come from the system or manufacturer and may process data independently. Requests reach the listed providers, whose infrastructure may also be outside the European Economic Area. Their linked privacy notices describe their processing. You can disable new online requests in settings.</p>

      <h2>Rights and contacts</h2>
      <p>You may request information, access, rectification, deletion, restriction, portability and objection where applicable, using the contact above. The controller cannot remotely read or delete archives stored only on your phone. For data held by providers, their roles and channels also matter. Revoke online choices and permissions without retroactive effect on earlier processing. You may complain to the competent authority, in Italy the Garante per la protezione dei dati personali.</p>

      <h2>Service privacy policies</h2>
      <ul>
        <li><a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">OpenStreetMap</a> · <a href="https://opentopomap.org/about" target="_blank" rel="noopener">OpenTopoMap</a></li>
        <li><a href="https://openfreemap.org/privacy/" target="_blank" rel="noopener">OpenFreeMap</a> · <a href="https://eox.at/privacy-policy/" target="_blank" rel="noopener">EOX</a> · <a href="https://mapterhorn.com/privacy-policy/" target="_blank" rel="noopener">Mapterhorn</a></li>
        <li><a href="https://www.komoot.com/privacy" target="_blank" rel="noopener">Komoot</a> · <a href="https://routing.openstreetmap.de/about.html" target="_blank" rel="noopener">FOSSGIS</a></li>
        <li><a href="https://overpass-api.de/" target="_blank" rel="noopener">Overpass API</a> · <a href="https://private.coffee/privacy.html" target="_blank" rel="noopener">private.coffee</a> · <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">Open-Meteo</a></li>
      </ul>
      <p>Changes to functions or providers may require a new notice and a new choice in the app.</p>
      <p>Useful places (water, alpine huts, bivouacs and shelters) are also extracted from worldwide OpenFreeMap/OpenMapTiles vector tiles based on OpenStreetMap. The provider receives tile indices for the viewed area, not the complete track. Extracted places remain in a local cache limited to 16 MB and are refreshed after seven days. Coverage depends on mapped data; missing results do not guarantee that no places exist. Water potability is not inferred when the data is unavailable.</p>

      <h2>SOS, battery and local exports</h2>
      <p>The SOS light uses only the phone torch through Android system services, without requesting Camera permission and without capturing images or video. The signal stops when turned off or when leaving the SOS screen. Opening battery optimization settings directs you to Android system settings and cannot guarantee protection against manufacturer restrictions. AMOLED mode keeps recording with key metrics on a black background; actual savings depend on the device. Voice milestones use filtered GPS ascent estimates and respect mute. The backup reminder is local. Shared HTML files contain the track, available elevations and a copy of the map for offline viewing. SAC GPX extensions include only available classifications; software support varies.</p>

      <h2>Shared HTML files</h2>
      <p>The file embeds a satellite view and elevation profile, readable offline without sending the track. iPhone shows this static view. On compatible Android and desktop browsers, the interactive view contacts EOX (imagery), Mapterhorn (terrain), OpenFreeMap (streets) and unpkg (MapLibre library). Providers receive the IP address and technical information; map providers also receive the viewed areas. Privacy settings on the exporting phone do not control the recipient browser. EOX 2024 imagery and adaptations are subject to CC BY-NC-SA 4.0: attribution, non-commercial use and ShareAlike.</p>
      <p><a href="https://cloudless.eox.at/license-non-commercial" target="_blank" rel="noopener">EOX</a> · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> · <a href="https://unpkg.com" target="_blank" rel="noopener">unpkg</a></p>

      <h2>Private Google Drive backup (optional)</h2>
      <p>If you choose to connect your Google account in Settings → Backup and restore, the app uses Google Sign-In and the restricted scope <code>https://www.googleapis.com/auth/drive.appdata</code> to incrementally save and sync your routes, recorded walks, diary notes, photos, favourite places and preferences exclusively inside the hidden application folder (<code>appDataFolder</code>) of your personal Google Drive. Your Google account email address is read and displayed only on your device to identify the connected account. Traccialto cannot read, modify or view any other files or folders in your Google Drive. Transfers occur directly over HTTPS between your phone and Google Drive (including via a foreground service with a progress notification during backup or restore), without passing through any server operated by the controller; no executable files or external ZIP archives are uploaded. After the first confirmed backup or restore, changes are synced automatically to your <code>appDataFolder</code> space (with an option to restrict uploads to Wi‑Fi). You can disconnect your account at any time in the app settings or delete the saved backup data in Google Drive settings (Settings → Manage Apps). Use and transfer to any other app of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a>, including the Limited Use requirements. Google privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>

      <h2>Optional Friends section and shared routes on Google Drive</h2>
      <p>The Friends section is entirely optional: without enabling it, all offline and online mapping, planning and recording features of Traccialto continue working without an account. If you enable it, you sign in via Google Sign-In (Credential Manager) and Firebase Authentication on a dedicated instance (<code>traccialto-friends</code>) separate from anonymous live sharing. Calls to backend Cloud Functions (<code>friendsApi</code> and <code>friendsArchiveApi</code>, <code>europe-west1</code>, Belgium) are verified with Firebase App Check (Play Integrity in distributed builds).</p>
      <p>Firebase Realtime Database (<code>friendsV1</code>, server-only access via Cloud Functions and closed to direct client reads or writes) stores your chosen unique and immutable <code>@username</code> (3 to 24 characters among lowercase letters, digits and <code>_</code>), Firebase UID, profile status (active, deleting or deleted), friend requests (automatic 7-day expiry), active or blocked friendships, temporary anti-abuse counters (rate limits up to 20 actions/minute and 200/day), and Drive archive technical references (Drive file ID and Google email used to reconcile Drive permissions). Exact <code>@username</code> searches, friend lists and incoming or outgoing requests <strong>never</strong> expose your email, Google display name or internal UID to other users.</p>
      <p>To share routes with approved friends, you optionally grant the restricted Google Drive scope <code>https://www.googleapis.com/auth/drive.file</code>, separate from private <code>appDataFolder</code> backup: the app accesses only your XML archive created for friends (<code>schema="1"</code>, up to 16 MiB, 1,000 routes and 200,000 points, containing minimal GPX geometry, title, chosen notes, activity mode, distance and ascent) and files selected via Google Picker when first opening a friend’s archive, without access to your other Drive files. File <code>reader</code> permissions are granted and revoked per approved friend via server-side reconciliation. You can remove any single route, clear your shared archive, remove or block a friend, sign out (<em>Sign out of Friends</em>), or delete your profile (<em>Delete Friends profile</em>: revokes Drive readers, clears archive metadata, removes existing links and keeps the <code>@username</code> retired as deleted against impersonation; copies already saved locally by friends or the file in your personal Google Drive remain under their respective control).</p>
      <p>If you enable friend-request notifications (configurable in <em>Settings → Notifications</em>), a local job scheduled via Android <code>JobScheduler</code> checks roughly every 30 minutes (when online services and the Friends account are active) for incoming requests and shows a local device notification, without sending push tokens to third-party servers. Google API usage adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a> (including Limited Use). Provider policies: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy</a>.</p>

      <h2>Optional live sharing</h2>
      <p>Only after confirmation, filtered GPS position, altitude, ascent, speed, distance, times, activity mode and any planned route are encrypted on the phone with AES-GCM and sent to Google Firebase Realtime Database (europe-west1, Belgium). Position and stats update at most every 5 seconds; the planned route is sent when it changes. Firebase Authentication creates an anonymous identity without asking for a name or email; the phone token stays in private storage excluded from backups. Google receives technical identifiers, IP addresses, timing and ciphertext. The key remains in the link and is not sent to the database: anyone holding the link can read and retain the data. Sessions last up to 8 hours per start and 8 hours per calendar day without automatic restart. On online closure, position and route are replaced with an encrypted end message expiring after 5 minutes. Rules deny reads after expiry; a job every 15 minutes removes expired sessions, subject to service failures. This does not delete recipient copies, technical logs or authentication identifiers, governed by Google terms; contact the controller for data requests. The viewer uses GitHub Pages: GitHub receives technical access metadata; OpenStreetMap, EOX and Mapterhorn receive map tile requests for the chosen view. Removing the URL fragment does not remove chat copies or all history. The map uses filtered recording points, including recent corrections and pauses. When recording without a planned route, each update may include up to 150 recent points of the ongoing track, including points before the page was opened; the full activity history is not uploaded. Internet and GPS are required: this is not an emergency service. Provider details: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">https://firebase.google.com/support/privacy</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>
      <p>Live sharing: when following a planned route, the link also lets the viewer see the simplified planned geometry and progress percentage. This data is encrypted together with position. If the viewer chooses satellite or 3D, the browser requests imagery from EOX and terrain from Mapterhorn: these providers receive IP address and viewed area, never the session key. EOX satellite imagery is used for this free, non-commercial application.</p>

      <h2>Optional smartwatch app (Garmin Connect IQ)</h2>
      <p>If you choose to install the optional Traccialto app on a compatible Garmin Connect IQ watch, sensor data collected during your activity (GPS position, elevation, ascent and wrist heart rate) is processed locally on the watch and, when Companion mode or post-activity sync is active, transmitted exclusively over direct local Bluetooth to the Traccialto app on your phone. No external third-party cloud servers or Garmin Cloud/Health APIs are used to collect or transmit your activity or health data; standalone activities remain saved natively on your watch and inside your phone’s local history under your full control.</p>
    `,
    fr: `
      <h1>Politique de confidentialité de Traccialto</h1>
      <p>Mise à jour : 26 novembre 2026. Responsable : <strong>Traccialto</strong>. Contact : <a href="mailto:traccialto.app@gmail.com">traccialto.app@gmail.com</a>. Version publique : <a href="https://traccialto.github.io/privacy.html">https://traccialto.github.io/privacy.html</a>.</p>

      <h2>Fonctions de l’app</h2>
      <p>Traccialto permet de créer, importer et suivre des itinéraires, enregistrer des marches et conserver photos et descriptions. Aucun compte obligatoire, publicité ou outil d’analyse publicitaire. Les enregistrements restent locaux sur votre téléphone ; vous pouvez facultativement les synchroniser dans le dossier privé de l’application (<code>appDataFolder</code>) de votre Google Drive personnel. Uniquement si vous activez l’espace Amis ou le partage en direct, les services Google Firebase dédiés et, pour Amis, l’espace Google Drive autorisé (<code>drive.file</code>) reçoivent les données décrites dans les sections correspondantes ci-dessous.</p>

      <h2>Localisation et enregistrement</h2>
      <p>Avec l’autorisation Android, la position centre la carte, affiche la navigation et enregistre la marche que vous démarrez. Un enregistrement actif continue écran éteint grâce à un service avec notification ; vous pouvez le mettre en pause ou l’arrêter dans l’app ou la notification. Révoquez l’autorisation dans les réglages Android. La position précise améliore l’exactitude ; sans autorisation vous pouvez consulter et importer des itinéraires.</p>

      <h2>Services en ligne facultatifs</h2>
      <p>Les services en ligne sont activés par défaut et peuvent contacter les fournisseurs dès l’ouverture de l’app. Vous pouvez les désactiver dans les réglages. Le partage en direct exige une confirmation distincte. Modifiez ce choix dans Réglages → Confidentialité et services en ligne. Sans eux, enregistrement GPS, traces locales et cartes téléchargées restent disponibles ; recherche, calcul et nouvelles données cartographiques nécessitent Internet.</p>
      <p>Les requêtes HTTPS communiquent aux fournisseurs l’adresse IP et les paramètres nécessaires. Une tuile identifie une zone et un zoom ; la zone peut provenir du GPS et évoluer pendant la marche, même lors d’un enregistrement écran éteint. Le calcul peut envoyer les coordonnées précises des étapes. Météo et points utiles utilisent des zones arrondies, pas de coordonnées précises en direct. L’arrondi ne rend pas nécessairement la position anonyme.</p>

      <table>
        <thead>
          <tr><th>Fournisseur</th><th>Finalité et données</th></tr>
        </thead>
        <tbody>
          <tr><td>OpenStreetMap Foundation et OpenTopoMap</td><td>Tuiles et miniatures de la zone affichée.</td></tr>
          <tr><td>OpenFreeMap</td><td>Tuiles vectorielles pour cartes hors ligne et rattachement des enregistrements aux sentiers.</td></tr>
          <tr><td>EOX IT Services GmbH</td><td>Images satellite Sentinel-2 pour cartes, 3D et exports.</td></tr>
          <tr><td>Regione autonoma Valle d’Aosta, swisstopo, IGN/Géoplateforme, Ville de Vienne et administrations autrichiennes (basemap.at), Provincia autonoma di Bolzano, IGN/CNIG espagnol (PNOA), USGS (The National Map, États-Unis), Provincia autonoma di Trento, Regione Toscana, Regione Emilia-Romagna, PDOK/Beeldmateriaal Nederland, ČÚZK (Tchéquie), AGEA (Italie)</td><td>Orthophotos détaillées dans les zones couvertes pour cartes, 3D et exports. Elles reçoivent IP, zone demandée et zoom si les services en ligne sont activés. Près des limites, plusieurs sources peuvent être interrogées pour vérifier la couverture. Le fichier d’itinéraire n’est pas envoyé.</td></tr>
          <tr><td>Mapterhorn</td><td>Tuiles altimétriques pour altitudes, profils et terrain 3D.</td></tr>
          <tr><td>Photon/Komoot</td><td>Texte saisi pour rechercher des lieux ; nous n’envoyons pas le GPS à cette recherche.</td></tr>
          <tr><td>Valhalla/FOSSGIS</td><td>Coordonnées des étapes et paramètres nécessaires au calcul. Après confirmation spécifique uniquement, la géométrie est aussi envoyée pour obtenir les difficultés SAC ; le consentement concerne cette trace. Lorsque vous choisissez votre position GPS comme étape et lancez un calcul en ligne, ses coordonnées sont envoyées au service sans confirmation supplémentaire.</td></tr>
          <tr><td>Overpass API et private.coffee</td><td>Catégories de points utiles et centre approximatif de la tuile cartographique. L’activation des couleurs de difficulté demande aussi les sentiers des cellules de 0,1 degré traversées par l’itinéraire ; la comparaison avec la trace exacte se fait sur le téléphone.</td></tr>
          <tr><td>Open-Meteo</td><td>Zone de destination arrondie à 0,02 degré pour les prévisions.</td></tr>
        </tbody>
      </table>

      <h2>Base du traitement et choix de l’utilisateur</h2>
      <p>Les données nécessaires aux fonctions demandées sont traitées pour les fournir ; les services en ligne sont activés par défaut et peuvent être désactivés pour les requêtes futures. Le partage en direct commence uniquement après votre confirmation. Les autorisations Android régissent l’accès aux capteurs et ne remplacent pas cette politique.</p>

      <h2>Photos, fichiers et partages</h2>
      <p>Importez GPX/KML et photos avec le sélecteur système : l’app ne demande pas l’accès général à tous les fichiers. Photos, descriptions et itinéraires restent dans son espace privé. Exports, sauvegardes et partage de messages, images ou GIF se font à votre demande vers la destination choisie. Ces fichiers peuvent révéler lieux visités et horaires. Les apps destinataires appliquent leurs propres politiques et ne sont pas contrôlées par Traccialto.</p>

      <h2>Conservation et suppression</h2>
      <p>Itinéraires et journaux restent sur l’appareil jusqu’à suppression. Les sorties dans la corbeille sont récupérables jusqu’à leur suppression définitive. Les caches cartographiques et d’aperçus peuvent rester jusqu’au nettoyage, remplacement ou limites d’espace ; ils ne publient pas vos itinéraires. Gérez l’espace dans les Réglages. Effacer les données Android ou désinstaller supprime les données privées de l’app sur le téléphone, mais pas les copies exportées, partagées ou enregistrées sur votre Google Drive personnel via la sauvegarde facultative.</p>
      <p>Les fournisseurs peuvent conserver des journaux techniques selon leurs politiques ; nous ne promettons pas la suppression immédiate de toutes les requêtes. Open-Meteo indique des journaux pouvant inclure des coordonnées, conservés jusqu’à 90 jours. Mapterhorn indique des journaux techniques, dont IP et chemin demandé, jusqu’à 30 jours. Les politiques des autres fournisseurs liées ci-dessous s’appliquent et doivent être vérifiées périodiquement.</p>

      <h2>Sécurité, services système et transferts</h2>
      <p>Les connexions utilisent HTTPS ; les données locales sont protégées par l’isolation Android. Le partage utilise des autorisations temporaires sur les fichiers. Chiffrement et verrouillage dépendent des réglages du dispositif ; Traccialto ne chiffre pas automatiquement les exports. Le moteur vocal et la localisation sont fournis par le système ou fabricant et peuvent avoir leurs propres traitements. Les requêtes atteignent les fournisseurs indiqués, dont les infrastructures peuvent être hors de l’Espace économique européen. Leurs politiques liées décrivent leurs traitements. Vous pouvez désactiver les nouvelles requêtes en ligne dans les réglages.</p>

      <h2>Droits et contacts</h2>
      <p>Vous pouvez demander information, accès, rectification, suppression, limitation, portabilité et opposition dans les cas prévus, au contact ci-dessus. Le responsable ne peut lire ou effacer à distance des archives stockées uniquement sur votre téléphone. Pour les données détenues par les fournisseurs, leurs rôles et canaux comptent aussi. Révoquez les choix en ligne et autorisations sans effet rétroactif. Vous pouvez saisir l’autorité compétente, en Italie le Garante per la protezione dei dati personali.</p>

      <h2>Politiques des services</h2>
      <ul>
        <li><a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">OpenStreetMap</a> · <a href="https://opentopomap.org/about" target="_blank" rel="noopener">OpenTopoMap</a></li>
        <li><a href="https://openfreemap.org/privacy/" target="_blank" rel="noopener">OpenFreeMap</a> · <a href="https://eox.at/privacy-policy/" target="_blank" rel="noopener">EOX</a> · <a href="https://mapterhorn.com/privacy-policy/" target="_blank" rel="noopener">Mapterhorn</a></li>
        <li><a href="https://www.komoot.com/privacy" target="_blank" rel="noopener">Komoot</a> · <a href="https://routing.openstreetmap.de/about.html" target="_blank" rel="noopener">FOSSGIS</a></li>
        <li><a href="https://overpass-api.de/" target="_blank" rel="noopener">Overpass API</a> · <a href="https://private.coffee/privacy.html" target="_blank" rel="noopener">private.coffee</a> · <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">Open-Meteo</a></li>
      </ul>
      <p>Un changement de fonctions ou fournisseurs peut nécessiter une nouvelle politique et un nouveau choix dans l’app.</p>
      <p>Les lieux utiles (eau, refuges alpins, bivouacs et abris) sont également extraits des tuiles vectorielles mondiales OpenFreeMap/OpenMapTiles basées sur OpenStreetMap. Le fournisseur reçoit les indices des tuiles de la zone affichée, pas la trace complète. Les lieux sont conservés dans un cache local limité à 16 Mo et actualisés après sept jours. La couverture dépend des données ; une absence de résultats ne garantit pas une absence de lieux. La potabilité de l’eau n’est pas déduite si la donnée manque.</p>

      <h2>SOS, batterie et exports locaux</h2>
      <p>Le signal lumineux SOS utilise uniquement le flash du téléphone via le système Android, sans demander l’autorisation Appareil photo et sans prise de photo ni de vidéo. Le signal s’arrête lorsqu’il est éteint ou lorsque vous quittez l’écran SOS. L’ouverture des réglages de batterie affiche les paramètres Android et ne garantit pas l’absence de restrictions du fabricant. Le mode AMOLED poursuit l’enregistrement avec les mesures essentielles sur fond noir ; l’économie dépend du téléphone. Les annonces de dénivelé utilisent une estimation GPS filtrée et respectent le mode silencieux. Le rappel de sauvegarde est local. Les fichiers HTML partagés contiennent la trace, les altitudes disponibles et une copie de la carte pour consultation hors ligne. Les extensions SAC GPX ne contiennent que les classifications disponibles ; leur prise en charge dépend du logiciel.</p>

      <h2>Fichiers HTML partagés</h2>
      <p>Le fichier contient une vue satellite et un profil altimétrique consultables hors ligne sans envoyer le parcours. Sur iPhone, cette vue statique est affichée. Sur les navigateurs Android et ordinateur compatibles, la vue interactive contacte EOX (images), Mapterhorn (relief), OpenFreeMap (rues) et unpkg (bibliothèque MapLibre). Ils reçoivent l’adresse IP et des informations techniques ; les fournisseurs cartographiques reçoivent aussi les zones affichées. Les préférences du téléphone exportateur ne contrôlent pas le navigateur du destinataire. Les images EOX 2024 et leurs adaptations sont soumises à CC BY-NC-SA 4.0 : attribution, usage non commercial et partage dans les mêmes conditions.</p>
      <p><a href="https://cloudless.eox.at/license-non-commercial" target="_blank" rel="noopener">EOX</a> · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> · <a href="https://unpkg.com" target="_blank" rel="noopener">unpkg</a></p>

      <h2>Sauvegarde privée sur Google Drive (facultative)</h2>
      <p>Si vous choisissez de connecter votre compte Google dans Réglages → Sauvegarde et restauration, l’application utilise Google Sign-In et l’autorisation restreinte <code>https://www.googleapis.com/auth/drive.appdata</code> pour sauvegarder et synchroniser de manière incrémentielle vos itinéraires, marches enregistrées, notes de journal, photos, lieux favoris et préférences exclusivement dans le dossier caché de l’application (<code>appDataFolder</code>) de votre Google Drive personnel. L’adresse e-mail du compte connecté est lue et affichée uniquement sur l’appareil pour indiquer quel compte est actif. Traccialto ne peut lire, modifier ni voir aucun autre fichier ou dossier de votre Google Drive. Le transfert s’effectue directement en HTTPS entre votre téléphone et Google Drive (y compris via un service de premier plan avec notification de progression lors de la sauvegarde ou de la restauration), sans transiter par des serveurs du responsable ; aucun fichier exécutable ni archive ZIP externe n’est téléversé. Après la première sauvegarde ou restauration confirmée, les modifications sont synchronisées automatiquement dans votre espace <code>appDataFolder</code> (avec possibilité de limiter l’envoi au Wi‑Fi uniquement). Vous pouvez déconnecter votre compte à tout moment dans les réglages de l’application ou supprimer les données sauvegardées depuis les paramètres de Google Drive (Paramètres → Gérer les applications). L’utilisation et le transfert des informations reçues des API Google respectent la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a>, y compris les exigences d’utilisation limitée (Limited Use). Politique Google : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>

      <h2>Espace Amis et parcours partagés sur Google Drive (facultatif)</h2>
      <p>L’espace Amis est entièrement facultatif : sans l’activer, toutes les fonctions cartographiques, de planification et d’enregistrement hors ligne et en ligne de Traccialto continuent de fonctionner sans compte. Si vous l’activez, vous vous connectez via Google Sign-In (Credential Manager) et Firebase Authentication sur une instance dédiée (<code>traccialto-friends</code>) séparée du partage en direct anonyme. Les requêtes vers les Cloud Functions (<code>friendsApi</code> et <code>friendsArchiveApi</code>, région <code>europe-west1</code>, Belgique) sont vérifiées par Firebase App Check (Play Integrity dans les builds distribuées).</p>
      <p>Firebase Realtime Database (<code>friendsV1</code>, accès réservé au serveur via Cloud Functions et interdit en lecture/écriture directe client) conserve le <code>@username</code> unique et immuable choisi (de 3 à 24 caractères parmi lettres minuscules, chiffres et <code>_</code>), l’UID technique Firebase, l’état du profil (actif, suppression ou supprimé), les demandes d’amis (expiration 7 jours), relations et blocages, compteurs anti-abus (jusqu’à 20 actions/min et 200/jour) et références techniques de l’archive Drive (ID du fichier et e-mail Google utilisé pour réconcilier les droits Drive). Les recherches exactes par <code>@username</code>, listes d’amis et demandes n’exposent <strong>jamais</strong> votre e-mail, nom Google ou UID aux autres utilisateurs.</p>
      <p>Pour partager des parcours avec vos amis approuvés, vous accordez facultativement le champ limité <code>https://www.googleapis.com/auth/drive.file</code> (distinct d’<code>appDataFolder</code>) : l’app n’accède qu’à votre archive XML partagée (<code>schema="1"</code>, max 16 MiB, 1 000 parcours et 200 000 points, géométrie GPX essentielle, titre, notes choisies, mode d’activité, distance et dénivelé) et aux fichiers sélectionnés via Google Picker lors de la première ouverture d’une archive d’un ami, sans accès à vos autres fichiers Drive. Les droits <code>reader</code> sont accordés et révoqués côté serveur pour chaque ami approuvé. Vous pouvez retirer un parcours ou vider l’archive, vous déconnecter (<em>Quitter Amis</em>) ou supprimer le profil à tout moment (révocation des lecteurs Drive, suppression des métadonnées/liens et maintien réservé du <code>@username</code> comme supprimé contre l’usurpation ; les traces déjà copiées localement par les amis ou le fichier restant sur votre Drive restent sous leur contrôle respectif).</p>
      <p>Si vous activez les notifications de demandes d’amis (dans <em>Paramètres → Notifications</em>), un travail local <code>JobScheduler</code> vérifie environ toutes les 30 minutes (lorsque services en ligne et compte Amis sont actifs) les nouvelles demandes sans envoyer de jeton push à des serveurs tiers. L’usage des API Google respecte la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a> (Limited Use). Politiques : <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy</a>.</p>

      <h2>Partage en direct facultatif</h2>
      <p>Après confirmation uniquement, position GPS filtrée, altitude, dénivelé, vitesse, distance, durées, mode d’activité et itinéraire prévu éventuel sont chiffrés sur le téléphone avec AES-GCM et envoyés à Google Firebase Realtime Database (europe-west1, Belgique). Position et statistiques sont envoyées au maximum toutes les 5 secondes ; le tracé prévu seulement quand il change. Firebase Authentication crée une identité anonyme sans demander de nom ni d’e-mail ; le jeton du téléphone reste dans un stockage privé exclu des sauvegardes. Google reçoit identifiants techniques, IP, horaires et contenus chiffrés. La clé reste dans le lien et n’est pas envoyée à la base de données : toute personne possédant le lien peut lire et conserver les données. La session dure au maximum 8 heures par lancement et 8 heures par jour sans reprise automatique. À la fermeture en ligne, position et tracé sont remplacés par un message chiffré de fin expirant après 5 minutes. Les règles refusent les lectures après expiration ; une tâche toutes les 15 minutes supprime les sessions expirées, sauf panne du service. Cela ne supprime pas les copies des destinataires, journaux techniques ou identifiants d’authentification soumis aux conditions Google ; contactez le responsable pour toute demande sur vos données. Le destinataire utilise GitHub Pages : GitHub reçoit des données techniques d’accès ; OpenStreetMap, EOX et Mapterhorn reçoivent les requêtes cartographiques de la vue choisie. Retirer le fragment URL ne supprime pas les copies dans les discussions ni tout l’historique. La carte utilise les points filtrés de l’enregistrement, avec corrections récentes et pauses. Lorsque vous enregistrez sans itinéraire prévu, chaque mise à jour peut inclure jusqu’à 150 points récents du trajet en cours, y compris avant l’ouverture de la page ; l’historique complet n’est pas envoyé. Internet et GPS sont nécessaires : ce n’est pas un service d’urgence. Fournisseurs : <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">https://firebase.google.com/support/privacy</a> et <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>
      <p>Partage en direct : lorsque vous suivez un itinéraire prévu, le lien permet également d’afficher la géométrie simplifiée du trajet prévu et le pourcentage de progression. Ces données sont chiffrées avec la position. Si le destinataire choisit satellite ou 3D, le navigateur demande les images à EOX et les reliefs à Mapterhorn : ces fournisseurs reçoivent adresse IP et zone affichée, jamais la clé de la session. Le satellite EOX est utilisé pour cette application gratuite et non commerciale.</p>

      <h2>Application montre facultative (Garmin Connect IQ)</h2>
      <p>Si vous installez l’application facultative Traccialto sur une montre Garmin Connect IQ compatible, les données de capteurs recueillies pendant votre sortie (position GPS, altitude, dénivelé et fréquence cardiaque au poignet) sont traitées localement sur la montre et, lorsque le mode Compagnon ou la synchronisation de fin de sortie est actif, transmises uniquement par liaison Bluetooth locale directe vers l’application Traccialto sur votre téléphone. Aucun serveur cloud tiers ni API Garmin Cloud/Health n’est utilisé pour collecter ou transférer vos données d’activité ou de santé ; les sorties autonomes restent enregistrées nativement sur la montre et dans l’historique local du téléphone sous votre contrôle complet.</p>
    `,
    es: `
      <h1>Política de privacidad de Traccialto</h1>
      <p>Actualización: 26 de noviembre de 2026. Responsable: <strong>Traccialto</strong>. Contacto: <a href="mailto:traccialto.app@gmail.com">traccialto.app@gmail.com</a>. Versión pública: <a href="https://traccialto.github.io/privacy.html">https://traccialto.github.io/privacy.html</a>.</p>

      <h2>Qué hace la app</h2>
      <p>Traccialto permite crear, importar y seguir rutas, grabar caminatas y conservar fotos y descripciones. No requiere cuenta obligatoria, no contiene publicidad ni análisis publicitarios. Las grabaciones permanecen locales en tu teléfono; opcionalmente puedes sincronizarlas en la carpeta privada de la aplicación (<code>appDataFolder</code>) de tu Google Drive personal. Solo al activar la sección Amigos o compartir en directo, los servicios dedicados de Google Firebase y, para Amigos, el espacio autorizado en Google Drive (<code>drive.file</code>) reciben los datos descritos en las respectivas secciones abajo.</p>

      <h2>Ubicación y grabación</h2>
      <p>Con el permiso de Android, la ubicación centra el mapa, muestra la navegación y graba la caminata que inicias. La grabación activa continúa con la pantalla apagada mediante un servicio con notificación; puedes pausarla o terminarla desde la app o la notificación. Puedes revocar el permiso en los ajustes de Android. La ubicación precisa mejora la exactitud; sin permiso puedes consultar e importar rutas.</p>

      <h2>Servicios en línea opcionales</h2>
      <p>Los servicios en línea están activados por defecto y pueden contactar con proveedores al abrir la app. Puedes desactivarlos en ajustes. Compartir en directo requiere una confirmación separada. Puedes cambiarlo en Ajustes → Privacidad y servicios en línea. Sin ellos siguen disponibles grabación GPS, trazados locales y mapas descargados; búsqueda, cálculo y nuevos datos cartográficos requieren Internet.</p>
      <p>Las solicitudes HTTPS envían a los proveedores tu dirección IP y los parámetros necesarios. Una tesela identifica zona y zoom; la zona puede proceder del GPS y actualizarse mientras caminas, incluso grabando con la pantalla apagada. El cálculo puede enviar coordenadas precisas de las etapas. El tiempo y los puntos útiles usan zonas redondeadas, no coordenadas precisas en directo. Redondear no hace necesariamente anónima la ubicación.</p>

      <table>
        <thead>
          <tr><th>Proveedor</th><th>Finalidad y datos</th></tr>
        </thead>
        <tbody>
          <tr><td>OpenStreetMap Foundation y OpenTopoMap</td><td>Teselas y miniaturas de la zona mostrada.</td></tr>
          <tr><td>OpenFreeMap</td><td>Teselas vectoriales para mapas sin conexión y ajuste de la grabación a senderos.</td></tr>
          <tr><td>EOX IT Services GmbH</td><td>Imágenes satelitales Sentinel-2 para mapas, 3D y exportaciones.</td></tr>
          <tr><td>Regione autonoma Valle d’Aosta, swisstopo, IGN/Géoplateforme, Ciudad de Viena y administraciones austriacas (basemap.at), Provincia autonoma di Bolzano, IGN/CNIG de España (PNOA), USGS (The National Map, EE. UU.), Provincia autonoma di Trento, Regione Toscana, Regione Emilia-Romagna, PDOK/Beeldmateriaal Nederland, ČÚZK (Chequia), AGEA (Italia)</td><td>Ortofotos detalladas en zonas cubiertas para mapas, 3D y exportaciones. Reciben IP, zona solicitada y zoom al activar servicios en línea. Cerca de límites pueden consultarse varias fuentes para verificar cobertura. No se envía el archivo de la ruta.</td></tr>
          <tr><td>Mapterhorn</td><td>Teselas altimétricas para altitudes, perfiles y terreno 3D.</td></tr>
          <tr><td>Photon/Komoot</td><td>Texto introducido al buscar lugares; no enviamos el GPS a esta búsqueda.</td></tr>
          <tr><td>Valhalla/FOSSGIS</td><td>Coordenadas de las etapas y parámetros necesarios para calcular rutas. Solo tras confirmación específica se envía también la geometría para obtener dificultades SAC; el consentimiento corresponde a ese trazado. Al elegir tu posición GPS como etapa y calcular en línea, sus coordenadas se envían al servicio sin una confirmación adicional.</td></tr>
          <tr><td>Overpass API y private.coffee</td><td>Categorías de puntos útiles y centro aproximado de la tesela cartográfica. Al activar colores de dificultad, se solicitan también senderos de celdas de 0,1 grados atravesadas por la ruta; la comparación con el trazado exacto se realiza en el teléfono.</td></tr>
          <tr><td>Open-Meteo</td><td>Zona del destino redondeada a 0,02 grados para previsiones.</td></tr>
        </tbody>
      </table>

      <h2>Base del tratamiento y elección del usuario</h2>
      <p>Los datos necesarios para las funciones solicitadas se tratan para prestarlas; los servicios en línea están activados por defecto y pueden desactivarse para solicitudes futuras. Compartir en directo solo se inicia tras tu confirmación. Los permisos Android regulan sensores y no sustituyen esta política.</p>

      <h2>Fotos, archivos y contenidos compartidos</h2>
      <p>Importas GPX/KML y fotos con el selector del sistema: la app no solicita acceso general a todos los archivos. Fotos, descripciones y rutas permanecen en su espacio privado. Exportaciones, copias y mensajes, imágenes o GIF compartidos se realizan a petición tuya al destino elegido. Estos archivos pueden revelar lugares visitados y horarios. Las apps receptoras aplican sus propias políticas y no están controladas por Traccialto.</p>

      <h2>Conservación y eliminación</h2>
      <p>Rutas y diarios permanecen en el dispositivo hasta que los eliminas. Los recorridos en la papelera se recuperan hasta su eliminación definitiva. Las cachés de mapas y vistas previas pueden permanecer hasta su limpieza, sustitución o límites de espacio; no publican tus rutas. Gestiona el espacio en Ajustes. Borrar datos Android o desinstalar elimina datos privados de la app en el teléfono, pero no copias exportadas, compartidas o guardadas en tu Google Drive personal mediante la copia de seguridad opcional.</p>
      <p>Los proveedores pueden conservar registros técnicos según sus políticas; no prometemos borrar inmediatamente todas las solicitudes. Open-Meteo declara registros que pueden incluir coordenadas y conservación de hasta 90 días. Mapterhorn declara registros técnicos, incluida IP y ruta solicitada, de hasta 30 días. Para otros proveedores se aplican las políticas enlazadas, que deben revisarse periódicamente.</p>

      <h2>Seguridad, servicios del sistema y transferencias</h2>
      <p>Las conexiones usan HTTPS; los datos locales están protegidos por el aislamiento Android. Compartir usa permisos temporales de archivos. Cifrado y bloqueo dependen del dispositivo; Traccialto no cifra automáticamente los archivos exportados. El motor de voz y servicios de ubicación son del sistema o fabricante y pueden tratar datos independientemente. Las solicitudes llegan a los proveedores indicados, cuya infraestructura puede estar fuera del Espacio Económico Europeo. Sus políticas enlazadas describen sus tratamientos. Puedes desactivar nuevas solicitudes en línea en Ajustes.</p>

      <h2>Derechos y contactos</h2>
      <p>Puedes solicitar información, acceso, rectificación, eliminación, limitación, portabilidad y oposición cuando corresponda, mediante el contacto anterior. El responsable no puede leer ni borrar a distancia archivos conservados solo en tu teléfono. Para datos en poder de proveedores importan también sus funciones y canales. Puedes revocar servicios y permisos sin efecto retroactivo. Puedes reclamar ante la autoridad competente, en Italia el Garante per la protezione dei dati personali.</p>

      <h2>Políticas de los servicios</h2>
      <ul>
        <li><a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">OpenStreetMap</a> · <a href="https://opentopomap.org/about" target="_blank" rel="noopener">OpenTopoMap</a></li>
        <li><a href="https://openfreemap.org/privacy/" target="_blank" rel="noopener">OpenFreeMap</a> · <a href="https://eox.at/privacy-policy/" target="_blank" rel="noopener">EOX</a> · <a href="https://mapterhorn.com/privacy-policy/" target="_blank" rel="noopener">Mapterhorn</a></li>
        <li><a href="https://www.komoot.com/privacy" target="_blank" rel="noopener">Komoot</a> · <a href="https://routing.openstreetmap.de/about.html" target="_blank" rel="noopener">FOSSGIS</a></li>
        <li><a href="https://overpass-api.de/" target="_blank" rel="noopener">Overpass API</a> · <a href="https://private.coffee/privacy.html" target="_blank" rel="noopener">private.coffee</a> · <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">Open-Meteo</a></li>
      </ul>
      <p>Los cambios de funciones o proveedores pueden requerir nueva política y nueva elección en la app.</p>
      <p>Los puntos útiles (agua, refugios alpinos, vivacs y cobertizos) también se extraen de teselas vectoriales mundiales OpenFreeMap/OpenMapTiles basadas en OpenStreetMap. El proveedor recibe índices de teselas de la zona visualizada, no el recorrido completo. Los puntos se guardan en una caché local limitada a 16 MB y se actualizan después de siete días. La cobertura depende de los datos disponibles; la falta de resultados no garantiza que no existan puntos. No se deduce la potabilidad del agua cuando falta el dato.</p>

      <h2>SOS, batería y exportaciones locales</h2>
      <p>La luz SOS utiliza únicamente la linterna del teléfono mediante el sistema Android, sin solicitar el permiso Cámara y sin capturar imágenes ni vídeos. La señal se detiene al apagarla o al salir de la pantalla SOS. El ajuste de batería abre las opciones del sistema Android y no garantiza protección frente a restricciones del fabricante. El modo AMOLED mantiene la grabación con datos esenciales sobre fondo negro; el ahorro depende del dispositivo. Los avisos de desnivel usan estimaciones GPS filtradas y respetan el silencio. El recordatorio de copia de seguridad es local. Los archivos HTML compartidos incluyen la ruta, las alturas disponibles y una copia del mapa para consulta sin conexión. Las extensiones SAC de GPX solo incluyen clasificaciones disponibles; su compatibilidad depende del programa.</p>

      <h2>Archivos HTML compartidos</h2>
      <p>El archivo incorpora una vista satelital y un perfil altimétrico que pueden leerse sin Internet y sin enviar la ruta. En iPhone se muestra esta vista estática. En navegadores compatibles de Android y ordenador, la vista interactiva contacta con EOX (imágenes), Mapterhorn (relieve), OpenFreeMap (calles) y unpkg (biblioteca MapLibre). Reciben la dirección IP e información técnica; los proveedores cartográficos también reciben las zonas visualizadas. Las preferencias del teléfono que exporta no controlan el navegador del destinatario. Las imágenes EOX 2024 y sus adaptaciones están sujetas a CC BY-NC-SA 4.0: atribución, uso no comercial y compartir bajo las mismas condiciones.</p>
      <p><a href="https://cloudless.eox.at/license-non-commercial" target="_blank" rel="noopener">EOX</a> · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> · <a href="https://unpkg.com" target="_blank" rel="noopener">unpkg</a></p>

      <h2>Copia de seguridad privada en Google Drive (opcional)</h2>
      <p>Si decides conectar tu cuenta de Google en Ajustes → Copia de seguridad y restauración, la app utiliza Google Sign-In y el permiso restringido <code>https://www.googleapis.com/auth/drive.appdata</code> para guardar y sincronizar de forma incremental tus rutas, caminatas grabadas, notas del diario, fotos, lugares favoritos y preferencias exclusivamente en la carpeta oculta de la aplicación (<code>appDataFolder</code>) de tu Google Drive personal. La dirección de correo electrónico conectada se lee y muestra únicamente en el dispositivo para indicar qué cuenta está activa. Traccialto no puede leer, modificar ni ver ningún otro archivo o carpeta de tu Google Drive. La transferencia se realiza directamente mediante HTTPS entre tu teléfono y Google Drive (también mediante un servicio en primer plano con notificación de progreso durante la copia o restauración), sin pasar por servidores del responsable; no se suben archivos ejecutables ni archivos ZIP externos. Tras la primera copia o restauración confirmada, los cambios se sincronizan automáticamente en tu espacio <code>appDataFolder</code> (con opción de limitar la subida solo a Wi‑Fi). Puedes desconectar tu cuenta en cualquier momento desde los ajustes de la app o eliminar los datos guardados en los ajustes de Google Drive (Configuración → Gestionar aplicaciones). El uso y la transferencia de la información recibida de las API de Google cumplen con la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a>, incluidos los requisitos de uso limitado (Limited Use). Política de Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>

      <h2>Sección Amigos y rutas compartidas en Google Drive (opcional)</h2>
      <p>La sección Amigos es totalmente opcional: sin activarla, todas las funciones cartográficas, de planificación y grabación offline y online de Traccialto siguen funcionando sin cuenta. Si la activas, inicias sesión mediante Google Sign-In (Credential Manager) y Firebase Authentication en una instancia dedicada (<code>traccialto-friends</code>) separada de compartir en directo anónimo. Las llamadas a Cloud Functions (<code>friendsApi</code> y <code>friendsArchiveApi</code>, región <code>europe-west1</code>, Bélgica) están protegidas por Firebase App Check (Play Integrity en las compilaciones distribuidas).</p>
      <p>Firebase Realtime Database (<code>friendsV1</code>, acceso exclusivo desde servidor mediante Cloud Functions y cerrado a lecturas o escrituras directas de clientes) almacena el <code>@username</code> único e inmutable elegido (de 3 a 24 caracteres entre minúsculas, números y <code>_</code>), el UID técnico de Firebase, el estado del perfil (activo, en eliminación o eliminado), solicitudes de amistad (caducidad automática de 7 días), amistades activas o bloqueadas, contadores anti-abuso temporales (hasta 20 acciones/minuto y 200/día) y referencias técnicas de tu archivo compartido en Drive (ID de archivo y correo usado para reconciliar permisos en Drive). En las búsquedas por <code>@username</code> exacto, listas de amigos y solicitudes <strong>nunca</strong> se muestran a otros usuarios ni tu correo, ni tu nombre de Google ni tu UID interno.</p>
      <p>Para compartir rutas con amigos aprobados, autorizas opcionalmente el alcance limitado <code>https://www.googleapis.com/auth/drive.file</code> (distinto de <code>appDataFolder</code>): la app accede únicamente a tu archivo XML creado para amigos (<code>schema="1"</code>, máx. 16 MiB, hasta 1.000 rutas y 200.000 puntos, con geometría GPX mínima, título, notas elegidas, modalidad, distancia y desnivel) y a los archivos seleccionados mediante Google Picker al abrir por primera vez el archivo de un amigo, sin acceso a tus demás archivos de Drive. Los permisos de lectura (<code>reader</code>) se conceden y revocan mediante reconciliación en servidor. Puedes quitar rutas sueltas, vaciar el archivo, bloquear o quitar un amigo, cerrar sesión (<em>Salir de Amigos</em>) o eliminar el perfil en cualquier momento (revocando lectores de Drive, eliminando metadatos y enlaces y conservando retirado el <code>@username</code> como eliminado contra suplantación; las rutas ya copiadas localmente por amigos o el archivo en tu Google Drive personal quedan bajo el respectivo control).</p>
      <p>Si activas las notificaciones de solicitudes de amistad (configurables en <em>Ajustes → Notificaciones</em>), un proceso local programado con <code>JobScheduler</code> comprueba aproximadamente cada 30 minutos (cuando los servicios en línea y la cuenta Amigos están activos) si hay nuevas solicitudes, sin enviar tokens push a terceros. El uso de las API de Google cumple la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener">Google API Services User Data Policy</a> (Limited Use). Políticas: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy</a>.</p>

      <h2>Compartir en directo, opcional</h2>
      <p>Solo tras confirmar, posición GPS filtrada, altitud, desnivel, velocidad, distancia, tiempos, modalidad de actividad y ruta prevista eventual se cifran en el teléfono con AES-GCM y se envían a Google Firebase Realtime Database (europe-west1, Bélgica). Posición y estadísticas se actualizan como máximo cada 5 segundos; la ruta prevista se envía cuando cambia. Firebase Authentication crea una identidad anónima sin pedir nombre ni correo; en el teléfono el token queda en almacenamiento privado excluido del backup. Google recibe identificadores técnicos, IP, horarios y contenido cifrado. La clave permanece en el enlace y no se envía a la base de datos: quien tenga el enlace puede leer y conservar los datos. La sesión dura hasta 8 horas por inicio y 8 horas al día, sin reinicio automático. Al cerrar con conexión, posición y ruta se sustituyen por un mensaje cifrado de fin que caduca en 5 minutos. Las reglas impiden lecturas tras la caducidad; una tarea cada 15 minutos borra las sesiones caducadas, salvo fallos del servicio. No elimina copias de destinatarios, registros técnicos o identificadores de autenticación sujetos a las condiciones de Google; contacta con el responsable para solicitudes sobre los datos. El destinatario usa GitHub Pages: GitHub recibe datos técnicos de acceso; OpenStreetMap, EOX y Mapterhorn reciben las solicitudes cartográficas de la vista elegida. Quitar el fragmento URL no borra copias en chats ni todo el historial. El mapa usa puntos filtrados de la grabación, incluidas correcciones recientes y pausas. Cuando grabas sin una ruta planificada, cada actualización puede incluir hasta 150 puntos recientes de la ruta en curso, incluso anteriores a abrir la página; no se carga todo el historial. Requiere internet y GPS: no es un servicio de emergencia. Proveedores: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">https://firebase.google.com/support/privacy</a> y <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.</p>
      <p>Compartir en directo: cuando sigues una ruta prevista, el enlace también permite ver la geometría simplificada del recorrido previsto y el porcentaje de avance. Estos datos se cifran junto con la posición. Si el destinatario selecciona satélite o 3D, el navegador solicita las imágenes a EOX y los relieves a Mapterhorn: estos proveedores reciben dirección IP y zona visualizada, nunca la clave de la sesión. El satélite EOX se utiliza para esta aplicación gratuita y no comercial.</p>

      <h2>App opcional para relojes Garmin Connect IQ</h2>
      <p>Si decides instalar la app opcional de Traccialto en un reloj Garmin Connect IQ compatible, los datos de sensores recogidos durante la actividad (posición GPS, altitud, desnivel y frecuencia cardíaca en la muñeca) se procesan localmente en el reloj y, cuando el modo Companion o la sincronización al finalizar está activa, se transfieren únicamente mediante conexión Bluetooth local directa a la app Traccialto en tu teléfono. No se utilizan servidores en la nube de terceros ni APIs Garmin Cloud/Health para recopilar o transmitir tus datos de actividad o salud; las salidas autónomas se guardan de forma nativa en el reloj y en el historial local del teléfono bajo tu control total.</p>
    `
  };

  function detectLang() {
    const s = localStorage.getItem("traccialto_lang");
    if (s && UI[s]) return s;
    const n = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (n.startsWith("it")) return "it";
    if (n.startsWith("fr")) return "fr";
    if (n.startsWith("es")) return "es";
    return "en";
  }

  function applyPrivacyLang(lang) {
    if (!UI[lang]) lang = "en";
    localStorage.setItem("traccialto_lang", lang);
    document.documentElement.lang = lang;

    const u = UI[lang];
    document.title = u.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", u.desc);

    document.querySelectorAll("[data-p]").forEach(function (el) {
      const k = el.getAttribute("data-p");
      if (u[k] !== undefined) el.textContent = u[k];
    });
    const langGroup = document.querySelector(".site-lang-pill");
    if (langGroup) langGroup.setAttribute("aria-label", u.langAria);

    const legal = document.querySelector(".legal-content");
    if (legal) {
      if (lang === "it" && originalIt !== null) legal.innerHTML = originalIt;
      else if (LEGAL_HTML[lang]) legal.innerHTML = LEGAL_HTML[lang];
    }

    document.querySelectorAll(".site-lang-pill button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-l") === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const legal = document.querySelector(".legal-content");
    if (legal) originalIt = legal.innerHTML;

    applyPrivacyLang(detectLang());

    document.querySelectorAll(".site-lang-pill button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const l = this.getAttribute("data-l");
        if (l) applyPrivacyLang(l);
      });
    });
  });
})();

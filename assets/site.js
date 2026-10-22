/* ==========================================================================
   MANLY The Office — lógica compartida (index.html y menu.html)
   ========================================================================== */
(function () {
  'use strict';

  /* ===== Datos del local (única fuente de verdad) ===== */
  var BIZ = {
    timeZone: 'Europe/Rome',
    phone: '+390559062024',
    whatsapp: '390559062024',
    instagram: 'manly_the_office_florence',
    address: 'Via Pisana 48R, 50143 Firenze',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('MANLY The Office, Via Pisana 48R, 50143 Firenze'),
    // Índice = día de la semana (0 = domingo … 6 = sábado). null = cerrado.
    hours: [
      ['08:00', '15:00'], // domenica
      null,               // lunedì
      ['08:00', '15:00'], // martedì
      ['08:00', '15:00'], // mercoledì
      ['08:00', '15:00'], // giovedì
      ['08:00', '15:00'], // venerdì
      ['08:00', '15:00']  // sabato
    ],
    kitchen: ['08:30', '14:30'],
    closingSoonMinutes: 30
  };

  /* ===== Textos ===== */
  var I18N = {
    it: {
      'meta.home.title': 'MANLY The Office — Specialty coffee & brunch, Firenze',
      'meta.home.desc': 'Caffè di specialità di scuola australiana e brunch a San Frediano, Firenze. Via Pisana 48R.',
      'meta.menu.title': 'Il menu — MANLY The Office, Firenze',
      'meta.menu.desc': 'Caffetteria, brunch, dolci e bar di MANLY The Office, Via Pisana 48R, Firenze.',
      'skip': 'Vai al contenuto',
      'lang.label': 'Lingua',
      'nav.label': 'Navigazione principale',
      'nav.open': 'Menu',
      'nav.close': 'Chiudi',
      'nav.shop': 'L’Australiano',
      'nav.shopNote': 'Shop',
      'nav.menu': 'Il menu',
      'nav.visit': 'Orari e indirizzo',
      'nav.story': 'La nostra storia',
      'info.visit': 'Vieni a trovarci',
      'info.hours': 'Orari',
      'info.contact': 'Contatti',
      'summary.week': 'Martedì–domenica, 8:00–15:00',
      'summary.monday': 'Lunedì chiuso',
      'summary.kitchen': 'Cucina 8:30–14:30',

      'days': ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
      'status.closesAt': 'Aperto · chiude alle {t}',
      'status.kitchenFrom': 'Aperto · cucina dalle {t}',
      'status.kitchenClosed': 'Aperto · cucina chiusa',
      'status.closingIn': 'Chiude tra {n} min',
      'status.opensToday': 'Chiuso · apre oggi alle {t}',
      'status.opensTomorrow': 'Chiuso · apre domani alle {t}',
      'status.opensOn': 'Chiuso · apre {d} alle {t}',

      'hero.eyebrow': 'Specialty coffee & brunch · Dal 2023',
      'hero.lead': 'Caffè di specialità di scuola australiana e brunch, nel cuore di San Frediano.',
      'hero.menu': 'Il menu',
      'hero.directions': 'Come arrivare',
      'hero.rating': '4,9 su Google · oltre 660 recensioni',
      'hero.alt': 'Illustrazione ad acquerello della vetrina di MANLY The Office in Via Pisana',
      'hero.credit': 'Illustrazione',
      'hero.artLink': 'Illustrazione di @qualali_studio: apri il suo Instagram',

      'shop.eyebrow': 'Shop · Il nostro caffè',
      'shop.tag': 'In esclusiva per MANLY',
      'shop.by': 'Miscela della casa · Tostata da D612 Coffee Roasters, Firenze',
      'shop.lead': 'La miscela che D612, torrefazione fiorentina, tosta in esclusiva per noi. La stessa che usiamo al banco, da preparare a casa.',
      'shop.blend': 'Blend',
      'shop.process': 'Processo',
      'shop.notes': 'Note',
      'shop.notesVal': 'Cioccolato, nocciola, frutti tropicali',
      'shop.grindNote': 'Per ora disponibile solo in grani.',
      'shop.size': 'Formato',
      'shop.grind': 'Macinatura',
      'shop.qty': 'Quantità',
      'shop.less': 'Meno',
      'shop.more': 'Più',
      'shop.total': 'Totale',
      'shop.cta': 'Ordina su WhatsApp',
      'shop.preview': 'Messaggio:',
      'shop.fine': 'Ritiro in negozio, Via Pisana 48R. Nessun pagamento online: l’ordine si conferma su WhatsApp.',
      'shop.message': 'Ciao! Vorrei ordinare {qty} x {product} {size} {grind}, con ritiro in negozio. Mi dite come fare?',
      'shop.imgAlt': 'Etichetta di L’Australiano, la miscela di MANLY The Office',

      'marquee': 'Specialty coffee · Brunch · San Frediano · Firenze ·',
      'nav.coffees': 'I nostri caffè',
      'ig.title': 'Dal nostro Instagram',
      'ig.follow': 'Seguici su Instagram',
      'ig.view': 'Guarda su Instagram',
      'coffees.eyebrow': 'Al banco · D612 Coffee Roasters',
      'coffees.title': 'I nostri caffè',
      'coffees.lead': 'Tre caffè, tutti tostati a Firenze da D612. La miscela della casa resta sempre; singola origine e filtro cambiano spesso.',
      'coffees.always': 'Sempre',
      'coffees.rotating': 'Cambia spesso',
      'coffees.ask': 'Chiedi al banco quale abbiamo oggi.',
      'coffees.origin': 'Origine',
      'coffees.producer': 'Produttore',
      'coffees.process': 'Processo',
      'coffees.variety': 'Varietà',
      'coffees.altitude': 'Altitudine',
      'coffees.notes': 'Note',
      'coffees.roaster': 'Tostato da',
      'coffees.buy': 'Portalo a casa',
      'coffees.australiano.use': 'Espresso · miscela della casa',
      'coffees.singola_origine.use': 'Specialty singolo e doppio',
      'coffees.singola_origine.title': 'Singola origine',
      'coffees.filtro.use': 'Batch brew',
      'coffees.filtro.title': 'Filtro',

      'offer.eyebrow': 'Al banco',
      'offer.title': 'Caffè e brunch, tutti i giorni tranne il lunedì.',
      'offer.lead': 'Una carta corta e curata: caffetteria di specialità, brunch fino alle 14:30 e dolci in vetrina.',
      'offer.c1.title': 'Caffetteria',
      'offer.c1.meta': 'Espresso · Filtro',
      'offer.c1.text': 'Espresso, flat white, long black, batch brew e cold brew di stagione. Latte d’avena disponibile.',
      'offer.c1.alt': 'Cappuccino con latte art',
      'offer.c2.title': 'Brunch',
      'offer.c2.text': 'Bagel, avocado toast, pancake e banana bread. Opzioni senza glutine e vegane.',
      'offer.c2.alt': 'Avocado toast con salmone affumicato, feta e semi misti',
      'offer.more': 'Vedi il menu completo',
      'offer.c1.gallery': 'Foto della caffetteria',
      'offer.c2.gallery': 'Foto del brunch',
      'slider.prev': 'Foto precedente',
      'slider.next': 'Foto successiva',
      'wa.button': 'Scrivici su WhatsApp',
      'wa.title': 'Ciao! Possiamo aiutarti?',
      'wa.text': 'Scrivici su WhatsApp per domande o per ordinare L’Australiano.',
      'wa.close': 'Chiudi messaggio',
      'wa.prefill': 'Ciao! Ho una domanda.',

      'visit.eyebrow': 'Orari e indirizzo',
      'visit.title': 'Vieni a trovarci',
      'orari.today': 'Oggi',
      'orari.closed': 'Chiuso',
      'orari.kitchen': 'Cucina e brunch',
      'dove.openMaps': 'Apri in Google Maps',
      'dove.call': 'Chiama',
      'dove.mapTitle': 'Mappa: MANLY The Office, Via Pisana 48R, Firenze',

      'storia.eyebrow': 'La nostra storia',
      'storia.title': 'Da Manly a San Frediano',
      'storia.lead': 'Manly è un quartiere sul mare a nord di Sydney. The Office è il posto, su quella spiaggia, dove si guarda il tramonto. Da lì viene il nostro nome.',
      'storia.introAlt': 'Maykol e Alice al banco di MANLY The Office',
      'storia.c1.when': 'Firenze',
      'storia.c1.title': 'Dal bancone al caffè',
      'storia.c1.p1': 'Maykol nasce a Firenze e comincia a lavorare come barman, muovendo i primi passi al Mercato Centrale. Poi arriva il caffè, e diventa una passione.',
      'storia.c1.p2': 'Si forma con Simone Guidi, formatore e fondatore della torrefazione La Sosta, e impara la latte art: disegnare versando il latte nella tazza.',
      'storia.c1.alt': 'Preparazione di un espresso al banco',
      'storia.c2.when': '2016 · Australia',
      'storia.c2.title': 'Ricominciare dalle basi',
      'storia.c2.p1': 'Nel 2016 parte per l’Australia con la sua compagna. Non parla inglese, ma è sicuro delle sue capacità da barista. Pensa che basti.',
      'storia.c2.p2': 'Non basta: in Australia si lavora e si fa il caffè in un modo completamente diverso. Riparte dalle basi e per quattro anni lavora nelle caffetterie australiane, dove la cultura del caffè è molto più avanti.',
      'storia.c3.when': 'Ritorno a Firenze',
      'storia.c3.title': 'Un sogno in pausa',
      'storia.c3.p1': 'Torna a casa con un’idea chiara: aprire un posto suo. Poi arriva il Covid, e il sogno deve aspettare.',
      'storia.c4.when': '12 luglio 2023',
      'storia.c4.title': 'Si apre, a San Frediano',
      'storia.c4.p1': 'Maykol e sua moglie Alice, che lavora anche in cucina, aprono MANLY The Office in Via Pisana.',
      'storia.c4.p2': 'Lo spazio è piccolo, e si fa il massimo con quello che c’è.',
      'storia.welcomeQuote': '«Come stai?»',
      'storia.welcome': 'È la prima cosa che ti chiede Maykol, appena varchi la soglia.',
      'essenza.p1.title': 'Il caffè al centro',
      'essenza.p1.text': 'Espresso e filtro con L’Australiano di D612. Il caffè resta la vera passione di Maykol, e il centro di tutto.',
      'essenza.p2.title': 'L’ospitalità ha un valore',
      'essenza.p2.text': 'Scegliere prodotti di qualità è fondamentale. Ma la parte più difficile, e più importante, è far sentire le persone accolte e condividere con loro quello che facciamo.',
      'essenza.p3.title': 'Un brunch per tutti',
      'essenza.p3.text': 'Pancake, banana bread fatto in casa senza glutine, bagel e avocado toast. Proviamo ad accontentare ogni esigenza alimentare, nei limiti del possibile.',
      'press.url': 'https://www.gamberorosso.it/notizie/storie/manly-the-office-firenze/',
      'press.kicker': 'Gambero Rosso',
      'press.title': 'Il sogno australiano di un barista toscano',
      'press.meta': 'Michela Becchi · 19 gennaio 2024',

      'footer.visit': 'Indirizzo',
      'footer.hours': 'Orari',
      'footer.contact': 'Contatti',
      'footer.seat': 'Sede legale',
      'footer.art': 'Illustrazione della vetrina',

      'menu.eyebrow': 'Caffetteria & brunch',
      'menu.title': 'Il menu',
      'menu.options': 'Opzioni senza glutine e vegane, latte d’avena.',
      'menu.allergies': 'Per allergie o intolleranze rivolgersi al personale.',
      'menu.legend': 'Legenda allergeni',
      'menu.navLabel': 'Sezioni del menu',
      'menu.allergensLabel': 'Allergeni',
      'menu.extras': 'Extra',
      'menu.shopTitle': 'L’Australiano, a casa tua',
      'menu.shopCta': 'Ordina il caffè',
      'allergens': ['Glutine', 'Crostacei', 'Uova', 'Pesce', 'Arachidi', 'Soia', 'Latte e latticini',
        'Frutta a guscio', 'Sedano', 'Senape', 'Sesamo', 'Solfiti', 'Lupini', 'Molluschi']
    },
    en: {
      'meta.home.title': 'MANLY The Office — Specialty coffee & brunch, Florence',
      'meta.home.desc': 'Australian-style specialty coffee and brunch in San Frediano, Florence. Via Pisana 48R.',
      'meta.menu.title': 'Menu — MANLY The Office, Florence',
      'meta.menu.desc': 'Coffee, brunch, sweets and drinks at MANLY The Office, Via Pisana 48R, Florence.',
      'skip': 'Skip to content',
      'lang.label': 'Language',
      'nav.label': 'Main navigation',
      'nav.open': 'Menu',
      'nav.close': 'Close',
      'nav.shop': 'L’Australiano',
      'nav.shopNote': 'Shop',
      'nav.menu': 'Menu',
      'nav.visit': 'Hours & location',
      'nav.story': 'Our story',
      'info.visit': 'Visit us',
      'info.hours': 'Hours',
      'info.contact': 'Contact',
      'summary.week': 'Tuesday–Sunday, 8:00–15:00',
      'summary.monday': 'Closed on Mondays',
      'summary.kitchen': 'Kitchen 8:30–14:30',

      'days': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'status.closesAt': 'Open · closes at {t}',
      'status.kitchenFrom': 'Open · kitchen from {t}',
      'status.kitchenClosed': 'Open · kitchen closed',
      'status.closingIn': 'Closes in {n} min',
      'status.opensToday': 'Closed · opens today at {t}',
      'status.opensTomorrow': 'Closed · opens tomorrow at {t}',
      'status.opensOn': 'Closed · opens {d} at {t}',

      'hero.eyebrow': 'Specialty coffee & brunch · Since 2023',
      'hero.lead': 'Australian-style specialty coffee and brunch, in the heart of San Frediano.',
      'hero.menu': 'Menu',
      'hero.directions': 'Directions',
      'hero.rating': '4.9 on Google · 660+ reviews',
      'hero.alt': 'Watercolour illustration of the MANLY The Office shopfront on Via Pisana',
      'hero.credit': 'Illustration',
      'hero.artLink': 'Illustration by @qualali_studio: open her Instagram',

      'shop.eyebrow': 'Shop · Our coffee',
      'shop.tag': 'Exclusive to MANLY',
      'shop.by': 'House blend · Roasted by D612 Coffee Roasters, Florence',
      'shop.lead': 'The blend D612, a Florentine roastery, roasts exclusively for us. The same one we use behind the counter, to brew at home.',
      'shop.blend': 'Blend',
      'shop.process': 'Process',
      'shop.notes': 'Notes',
      'shop.notesVal': 'Chocolate, hazelnut, tropical fruits',
      'shop.grindNote': 'Whole beans only, for now.',
      'shop.size': 'Size',
      'shop.grind': 'Grind',
      'shop.qty': 'Quantity',
      'shop.less': 'Less',
      'shop.more': 'More',
      'shop.total': 'Total',
      'shop.cta': 'Order on WhatsApp',
      'shop.preview': 'Message:',
      'shop.fine': 'Pick up in store, Via Pisana 48R. No online payment: the order is confirmed on WhatsApp.',
      'shop.message': 'Hi! I’d like to order {qty} x {product} {size} {grind}, for pickup in store. How can I do it?',
      'shop.imgAlt': 'L’Australiano label, the MANLY The Office blend',

      'marquee': 'Specialty coffee · Brunch · San Frediano · Florence ·',
      'nav.coffees': 'Our coffees',
      'ig.title': 'From our Instagram',
      'ig.follow': 'Follow us on Instagram',
      'ig.view': 'View on Instagram',
      'coffees.eyebrow': 'At the counter · D612 Coffee Roasters',
      'coffees.title': 'Our coffees',
      'coffees.lead': 'Three coffees, all roasted in Florence by D612. The house blend never changes; single origin and filter rotate often.',
      'coffees.always': 'Always',
      'coffees.rotating': 'Rotating',
      'coffees.ask': 'Ask at the counter which one we have today.',
      'coffees.origin': 'Origin',
      'coffees.producer': 'Producer',
      'coffees.process': 'Process',
      'coffees.variety': 'Variety',
      'coffees.altitude': 'Altitude',
      'coffees.notes': 'Notes',
      'coffees.roaster': 'Roasted by',
      'coffees.buy': 'Take it home',
      'coffees.australiano.use': 'Espresso · house blend',
      'coffees.singola_origine.use': 'Specialty single and double shot',
      'coffees.singola_origine.title': 'Single origin',
      'coffees.filtro.use': 'Batch brew',
      'coffees.filtro.title': 'Filter',

      'offer.eyebrow': 'At the counter',
      'offer.title': 'Coffee and brunch, every day except Monday.',
      'offer.lead': 'A short, considered menu: specialty coffee, brunch until 14:30 and treats in the display.',
      'offer.c1.title': 'Coffee',
      'offer.c1.meta': 'Espresso · Filter',
      'offer.c1.text': 'Espresso, flat white, long black, batch brew and seasonal cold brew. Oat milk available.',
      'offer.c1.alt': 'Cappuccino with latte art',
      'offer.c2.title': 'Brunch',
      'offer.c2.text': 'Bagels, avocado toast, pancakes and banana bread. Gluten-free and vegan options.',
      'offer.c2.alt': 'Avocado toast with smoked salmon, feta and mixed seeds',
      'offer.more': 'See the full menu',
      'offer.c1.gallery': 'Coffee photos',
      'offer.c2.gallery': 'Brunch photos',
      'slider.prev': 'Previous photo',
      'slider.next': 'Next photo',
      'wa.button': 'Message us on WhatsApp',
      'wa.title': 'Hi! Can we help?',
      'wa.text': 'Message us on WhatsApp with questions or to order L’Australiano.',
      'wa.close': 'Close message',
      'wa.prefill': 'Hi! I have a question.',

      'visit.eyebrow': 'Hours & location',
      'visit.title': 'Come and see us',
      'orari.today': 'Today',
      'orari.closed': 'Closed',
      'orari.kitchen': 'Kitchen & brunch',
      'dove.openMaps': 'Open in Google Maps',
      'dove.call': 'Call',
      'dove.mapTitle': 'Map: MANLY The Office, Via Pisana 48R, Florence',

      'storia.eyebrow': 'Our story',
      'storia.title': 'From Manly to San Frediano',
      'storia.lead': 'Manly is a beachside suburb north of Sydney. The Office is the spot on that beach where people watch the sunset. That’s where our name comes from.',
      'storia.introAlt': 'Maykol and Alice at the counter of MANLY The Office',
      'storia.c1.when': 'Florence',
      'storia.c1.title': 'From the bar to coffee',
      'storia.c1.p1': 'Maykol is born in Florence and starts out as a bartender, taking his first steps at the Mercato Centrale. Then coffee comes along, and it becomes a passion.',
      'storia.c1.p2': 'He trains with Simone Guidi, coffee trainer and founder of the La Sosta roastery, and masters latte art: drawing patterns as the milk is poured into the cup.',
      'storia.c1.alt': 'Pulling an espresso at the bar',
      'storia.c2.when': '2016 · Australia',
      'storia.c2.title': 'Back to basics',
      'storia.c2.p1': 'In 2016 he moves to Australia with his partner. He doesn’t speak English, but he’s confident in his barista skills. He thinks that will be enough.',
      'storia.c2.p2': 'It isn’t: Australians work and make coffee in a completely different way. He starts again from the basics and spends four years in Australian cafés, where coffee culture is far ahead.',
      'storia.c3.when': 'Back in Florence',
      'storia.c3.title': 'A dream on hold',
      'storia.c3.p1': 'He comes home with one clear idea: to open his own place. Then Covid hits, and the dream has to wait.',
      'storia.c4.when': '12 July 2023',
      'storia.c4.title': 'Opening in San Frediano',
      'storia.c4.p1': 'Maykol and his wife Alice, who also works in the kitchen, open MANLY The Office on Via Pisana.',
      'storia.c4.p2': 'The space is small, and they make the most of what they have.',
      'storia.welcomeQuote': '“Hey, how are you? Welcome!”',
      'storia.welcome': 'The first thing you hear when you walk in.',
      'essenza.p1.title': 'Coffee first',
      'essenza.p1.text': 'Espresso and filter with L’Australiano by D612. Coffee is still Maykol’s true passion, and the heart of everything.',
      'essenza.p2.title': 'Hospitality matters',
      'essenza.p2.text': 'Choosing quality products is essential. But the hardest and most important part is making people feel welcome, and sharing with them what we do.',
      'essenza.p3.title': 'Brunch for everyone',
      'essenza.p3.text': 'Pancakes, homemade gluten-free banana bread, bagels and avocado toast. We try to meet every dietary need, within reason.',
      'press.url': 'https://www.gamberorossointernational.com/news/the-australian-dream-of-a-tuscan-barista-in-florence-theres-a-new-and-young-specialty-coffee-shop-to-try/',
      'press.kicker': 'Gambero Rosso',
      'press.title': 'The Australian dream of a Tuscan barista',
      'press.meta': 'Michela Becchi · 19 January 2024',

      'footer.visit': 'Address',
      'footer.hours': 'Hours',
      'footer.contact': 'Contact',
      'footer.seat': 'Registered office',
      'footer.art': 'Shopfront illustration',

      'menu.eyebrow': 'Coffee & brunch',
      'menu.title': 'Menu',
      'menu.options': 'Gluten-free and vegan options, oat milk.',
      'menu.allergies': 'Please let our staff know about any allergies.',
      'menu.legend': 'Allergen key',
      'menu.navLabel': 'Menu sections',
      'menu.allergensLabel': 'Allergens',
      'menu.extras': 'Extras',
      'menu.shopTitle': 'L’Australiano, at home',
      'menu.shopCta': 'Order the coffee',
      'allergens': ['Gluten', 'Crustaceans', 'Eggs', 'Fish', 'Peanuts', 'Soy', 'Milk',
        'Tree nuts', 'Celery', 'Mustard', 'Sesame', 'Sulphites', 'Lupin', 'Molluscs']
    }
  };

  var LANGS = ['it', 'en'];
  var STORAGE_KEY = 'manly-lang';
  var page = document.body.getAttribute('data-page') || 'home';

  /* ===== Utilidades ===== */
  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'it'; }
  function t(key) {
    var dict = I18N[lang()];
    return dict[key] != null ? dict[key] : key;
  }
  function tr(v) { return v && typeof v === 'object' && !Array.isArray(v) ? v[lang()] : v; }
  function fmt(str, vars) {
    return String(str).replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ''; });
  }
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function showTime(hhmm) { return hhmm.replace(/^0/, ''); }
  function toMinutes(hhmm) {
    var p = hhmm.split(':');
    return Number(p[0]) * 60 + Number(p[1]);
  }
  function range(pair) { return showTime(pair[0]) + '–' + showTime(pair[1]); }
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // 1.5 -> "1,50 €" (IT) / "€1.50" (EN); enteros sin decimales
  function formatPrice(value) {
    var whole = value % 1 === 0;
    return new Intl.NumberFormat(lang() === 'it' ? 'it-IT' : 'en-GB', {
      style: 'currency', currency: 'EUR',
      minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2
    }).format(value);
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== Idioma ===== */
  function readStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storeLang(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* modo privado */ }
  }
  // Italiano si el teléfono está en italiano; inglés en cualquier otro caso.
  function detectLang() {
    var stored = readStoredLang();
    if (LANGS.indexOf(stored) !== -1) return stored;
    var prefs = navigator.languages || [navigator.language || 'it'];
    return /^it\b/i.test(prefs[0] || '') ? 'it' : 'en';
  }

  function applyLang(value) {
    document.documentElement.lang = value;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    // data-i18n-attr="atributo:clave; otro:clave"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    // Fotos con texto alternativo en los dos idiomas
    document.querySelectorAll('[data-alt-' + value + ']').forEach(function (img) {
      img.alt = img.getAttribute('data-alt-' + value);
    });

    document.title = t('meta.' + page + '.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.' + page + '.desc'));

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === value));
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: value } }));
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang]');
    if (!btn) return;
    storeLang(btn.getAttribute('data-lang'));
    applyLang(btn.getAttribute('data-lang'));
  });

  /* ===== Enlaces comunes ===== */
  var LINKS = {
    maps: BIZ.mapsUrl,
    tel: 'tel:' + BIZ.phone,
    instagram: 'https://www.instagram.com/' + BIZ.instagram + '/'
  };
  function fillLinks() {
    document.querySelectorAll('[data-href]').forEach(function (a) {
      a.href = LINKS[a.getAttribute('data-href')];
    });
    document.querySelectorAll('[data-kitchen]').forEach(function (el) {
      el.textContent = range(BIZ.kitchen);
    });
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ===== Hora de Florencia ===== */
  // Para probar estados: ?giorno=2&ora=14:40  (giorno: 0 = domenica … 6 = sabato)
  var demo = (function () {
    var q = new URLSearchParams(location.search);
    var day = q.get('giorno'), time = q.get('ora');
    if (day === null || !/^\d{1,2}:\d{2}$/.test(time || '')) return null;
    return { day: Number(day) % 7, minutes: toMinutes(time) };
  })();

  var WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  var romeClock = new Intl.DateTimeFormat('en-US', {
    timeZone: BIZ.timeZone, weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
  });

  // Siempre la hora del local, aunque el teléfono del turista esté en otra zona horaria.
  function nowInFlorence() {
    if (demo) return demo;
    var parts = {};
    romeClock.formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    return { day: WEEKDAYS[parts.weekday], minutes: (Number(parts.hour) % 24) * 60 + Number(parts.minute) };
  }

  /* ===== Estado abierto / cerrado ===== */
  function getStatus(now) {
    var today = BIZ.hours[now.day];
    var m = now.minutes;

    if (today && m >= toMinutes(today[0]) && m < toMinutes(today[1])) {
      var left = toMinutes(today[1]) - m;
      if (left <= BIZ.closingSoonMinutes) return { state: 'closing', text: fmt(t('status.closingIn'), { n: left }) };
      if (m < toMinutes(BIZ.kitchen[0])) return { state: 'open', text: fmt(t('status.kitchenFrom'), { t: showTime(BIZ.kitchen[0]) }) };
      if (m >= toMinutes(BIZ.kitchen[1])) return { state: 'open', text: t('status.kitchenClosed') };
      return { state: 'open', text: fmt(t('status.closesAt'), { t: showTime(today[1]) }) };
    }

    // Cerrado: buscar la próxima apertura
    for (var i = 0; i < 8; i++) {
      var day = (now.day + i) % 7;
      var h = BIZ.hours[day];
      if (!h || (i === 0 && m >= toMinutes(h[0]))) continue;
      if (i === 0) return { state: 'closed', text: fmt(t('status.opensToday'), { t: showTime(h[0]) }) };
      if (i === 1) return { state: 'closed', text: fmt(t('status.opensTomorrow'), { t: showTime(h[0]) }) };
      return { state: 'closed', text: fmt(t('status.opensOn'), { d: t('days')[day], t: showTime(h[0]) }) };
    }
    return { state: 'closed', text: '' };
  }

  function renderStatus() {
    var s = getStatus(nowInFlorence());
    document.querySelectorAll('[data-status]').forEach(function (el) {
      el.setAttribute('data-state', s.state);
      el.querySelector('.status__text').textContent = s.text;
    });
  }

  /* ===== Orari ===== */
  var WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0]; // lunes primero, como se usa en Italia

  function renderHours() {
    var list = document.getElementById('hours-list');
    if (!list) return;
    var today = nowInFlorence().day;
    list.innerHTML = WEEK_ORDER.map(function (day) {
      var h = BIZ.hours[day];
      var cls = (h ? '' : 'is-closed') + (day === today ? ' is-today' : '');
      return '<li class="' + cls.trim() + '"' + (day === today ? ' aria-current="date"' : '') + '>' +
        '<span class="hours__day"' + (day === today ? ' data-today="' + esc(t('orari.today')) + '"' : '') + '>' +
        esc(capitalize(t('days')[day])) + '</span>' +
        '<span class="hours__time">' + (h ? range(h) : esc(t('orari.closed'))) + '</span></li>';
    }).join('');
  }

  function tick() { renderStatus(); renderHours(); }
  document.addEventListener('langchange', tick);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) tick(); });

  /* ===== Menú hamburguesa ===== */
  function setupDrawer() {
    var burger = document.querySelector('.burger');
    var drawer = document.getElementById('drawer');
    if (!burger || !drawer) return;
    var label = burger.querySelector('.burger__label');

    function setOpen(open) {
      burger.setAttribute('aria-expanded', String(open));
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      if ('inert' in drawer) drawer.inert = !open;
      document.body.classList.toggle('is-locked', open);
      var key = open ? 'nav.close' : 'nav.open';
      label.setAttribute('data-i18n', key);
      label.textContent = t(key);
      burger.setAttribute('aria-label', t(key));
      if (open) {
        var first = drawer.querySelector('a');
        if (first) first.focus({ preventScroll: true });
      }
    }

    setOpen(false);
    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        setOpen(false);
        burger.focus();
      }
    });
  }

  /* ===== Shop =====
     Flujo: selección -> objeto `order` -> CHECKOUT.start(order).
     Hoy CHECKOUT abre WhatsApp. Para una pasarela real basta con agregar otro
     proveedor en CHECKOUT_PROVIDERS y apuntar CHECKOUT a él: la interfaz no cambia. */
  var PRODUCT = {
    id: 'australiano',
    name: 'L’Australiano',
    // [PENDIENTE: precios definitivos] 25 € / 100 € son orientativos
    sizes: [
      { id: '250g', label: '250 g', msg: '250g', price: 25 },
      { id: '1kg', label: '1 kg', msg: '1kg', price: 100 }
    ],
    grinds: [
      { id: 'grani', label: { it: 'In grani', en: 'Whole beans' }, msg: { it: 'in grani', en: 'whole beans' } },
      // Por ahora solo se vende en grano: poner available: true para volver a ofrecerlo
      { id: 'macinato', label: { it: 'Macinato', en: 'Ground' }, msg: { it: 'macinato', en: 'ground' }, available: false }
    ],
    qty: { min: 1, max: 10 },
    fulfilment: 'pickup'
  };

  var shopState = { size: PRODUCT.sizes[0].id, grind: PRODUCT.grinds[0].id, qty: 1 };

  function findById(list, id) { return list.filter(function (x) { return x.id === id; })[0]; }

  // Pedido independiente de la interfaz y del medio de pago
  function buildOrder() {
    var size = findById(PRODUCT.sizes, shopState.size);
    var grind = findById(PRODUCT.grinds, shopState.grind);
    return {
      productId: PRODUCT.id,
      productName: PRODUCT.name,
      sku: PRODUCT.id + '-' + size.id + '-' + grind.id,
      size: size,
      grind: grind,
      qty: shopState.qty,
      unitPrice: size.price,
      total: size.price * shopState.qty,
      currency: 'EUR',
      fulfilment: PRODUCT.fulfilment,
      lang: lang()
    };
  }

  function orderMessage(order) {
    return fmt(t('shop.message'), {
      qty: order.qty, product: order.productName, size: order.size.msg, grind: tr(order.grind.msg)
    });
  }

  var CHECKOUT_PROVIDERS = {
    whatsapp: {
      start: function (order) {
        var url = 'https://wa.me/' + BIZ.whatsapp + '?text=' + encodeURIComponent(orderMessage(order));
        var win = window.open(url, '_blank');
        if (win) win.opener = null;
        else location.href = url;
      }
    }
    // Ejemplo futuro:
    // stripe: { start: function (order) { /* POST order al backend -> redirigir a la sesión de pago */ } }
  };
  var CHECKOUT = CHECKOUT_PROVIDERS.whatsapp;

  function setupShop() {
    var form = document.getElementById('shop-form');
    if (!form) return;

    function optionHtml(name, opt, sub) {
      var checked = shopState[name] === opt.id ? ' checked' : '';
      return '<label class="opt"><input type="radio" name="' + name + '" value="' + opt.id + '"' + checked + '>' +
        '<span class="opt__box"><span class="opt__main">' + esc(tr(opt.label)) + '</span>' +
        (sub ? '<span class="opt__sub">' + sub + '</span>' : '') + '</span></label>';
    }

    function renderSummary() {
      var order = buildOrder();
      var totalEl = document.getElementById('shop-total');
      var next = formatPrice(order.total);
      if (totalEl.textContent && totalEl.textContent !== next && !reduceMotion) {
        totalEl.classList.remove('bump');
        void totalEl.offsetWidth; // reinicia la animación
        totalEl.classList.add('bump');
      }
      totalEl.textContent = next;
      document.getElementById('qty').textContent = order.qty;
      document.getElementById('shop-message').textContent = orderMessage(order);
      form.querySelector('[data-qty="-1"]').disabled = order.qty <= PRODUCT.qty.min;
      form.querySelector('[data-qty="1"]').disabled = order.qty >= PRODUCT.qty.max;
    }

    function renderOptions() {
      document.getElementById('opt-size').innerHTML = PRODUCT.sizes.map(function (s) {
        return optionHtml('size', s, formatPrice(s.price));
      }).join('');
      var grinds = PRODUCT.grinds.filter(function (g) { return g.available !== false; });
      document.getElementById('opt-grind').innerHTML = grinds.map(function (g) {
        return optionHtml('grind', g);
      }).join('');
      // Con una sola opción, se muestra como dato fijo y una nota
      document.getElementById('opt-grind').classList.toggle('is-single', grinds.length === 1);
      document.getElementById('grind-note').hidden = grinds.length !== 1;
      renderSummary();
    }

    form.addEventListener('change', function (e) {
      if (e.target.name in shopState) {
        shopState[e.target.name] = e.target.value;
        renderSummary();
      }
    });
    form.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-qty]');
      if (!btn) return;
      var next = shopState.qty + Number(btn.getAttribute('data-qty'));
      shopState.qty = Math.min(PRODUCT.qty.max, Math.max(PRODUCT.qty.min, next));
      renderSummary();
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      CHECKOUT.start(buildOrder());
    });
    document.addEventListener('langchange', renderOptions);
  }

  /* ===== Animaciones =====
     IntersectionObserver para las apariciones; un listener de scroll con rAF
     muestra lo que quedó por encima tras un salto con un enlace. */
  var pendingReveal = [];
  var revealObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { if (entry.isIntersecting) showNow(entry.target); });
  }, { rootMargin: '0px 0px -10% 0px' }) : null;

  function showNow(el) {
    el.classList.add('is-in');
    if (revealObserver) revealObserver.unobserve(el);
    var i = pendingReveal.indexOf(el);
    if (i !== -1) pendingReveal.splice(i, 1);
  }

  function reveal(el, cls, delay) {
    if (el.classList.contains(cls)) return;
    el.classList.add(cls);
    if (delay) el.style.setProperty('--delay', delay + 's');
    if (revealObserver && !reduceMotion) {
      pendingReveal.push(el);
      revealObserver.observe(el);
    } else {
      el.classList.add('is-in');
    }
  }

  var REVEAL = [
    '.section__head > *', '.product__info > *', '.card__body', '.offer__more', '.coffee',
    '.hours', '.hours__kitchen', '.place', '.place__actions', '.story__intro-text > *',
    '.chapter__body', '.welcome', '.pillar', '.press', '.footer__col',
    '.menu-head__grid > *'
  ];
  var REVEAL_MEDIA = ['.product__media', '.card__media', '.map', '.story__intro-media', '.chapter__media'];

  function setupReveal(root) {
    root = root || document;
    REVEAL.forEach(function (sel) {
      root.querySelectorAll(sel).forEach(function (el) {
        var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.matches(sel); });
        var idx = siblings.indexOf(el);
        reveal(el, 'reveal', idx > 0 ? Math.min(idx, 5) * 0.08 : 0);
      });
    });
    REVEAL_MEDIA.forEach(function (sel) {
      root.querySelectorAll(sel).forEach(function (el) { reveal(el, 'reveal-media'); });
    });
  }

  var revealTicking = false;
  window.addEventListener('scroll', function () {
    if (revealTicking || !pendingReveal.length) return;
    revealTicking = true;
    requestAnimationFrame(function () {
      revealTicking = false;
      pendingReveal.slice().forEach(function (el) {
        if (el.getBoundingClientRect().bottom < 0) showNow(el);
      });
    });
  }, { passive: true });

  // Hero: entrada suave de la ilustración y del texto
  function setupHero() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add('is-loaded'); });
    });
  }

  // Videos: se reproducen solo mientras están en pantalla
  function setupVideos() {
    document.querySelectorAll('video[data-autoplay]').forEach(function (video) {
      if (reduceMotion || !('IntersectionObserver' in window)) {
        video.controls = true;
        return;
      }
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var playing = video.play();
            if (playing && playing.catch) playing.catch(function () { video.controls = true; });
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.25 }).observe(video);
    });
  }

  /* ===== Carruseles =====
     Deslizables con el dedo; flechas y contador. Avanzan solos cada 5 s solo
     mientras se ven en pantalla, y dejan de hacerlo cuando alguien los toca. */
  function setupSliders() {
    document.querySelectorAll('[data-slider]').forEach(function (slider) {
      var track = slider.querySelector('.slider__track');
      var slides = track.children;
      var prev = slider.querySelector('[data-slider-prev]');
      var next = slider.querySelector('[data-slider-next]');
      var current = slider.querySelector('[data-slider-current]');
      var index = 0, timer = null, visible = false, touched = false;

      function showCount() { current.textContent = String(index + 1).padStart(2, '0'); }

      function goTo(i) {
        index = (i + slides.length) % slides.length;
        showCount();
        track.scrollTo({ left: slides[index].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
      }

      // Al deslizar con el dedo, el contador sigue a la foto visible
      function update() {
        index = Math.round(track.scrollLeft / track.clientWidth);
        showCount();
      }

      var scrollTick = false;
      track.addEventListener('scroll', function () {
        if (scrollTick) return;
        scrollTick = true;
        requestAnimationFrame(function () { scrollTick = false; update(); });
      }, { passive: true });

      function stopAuto() { touched = true; clearInterval(timer); timer = null; }
      prev.addEventListener('click', function () { stopAuto(); goTo(index - 1); });
      next.addEventListener('click', function () { stopAuto(); goTo(index + 1); });
      track.addEventListener('pointerdown', stopAuto, { passive: true });
      track.addEventListener('touchstart', stopAuto, { passive: true });

      if (reduceMotion || !('IntersectionObserver' in window)) return;
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && !touched && !timer) {
          timer = setInterval(function () { if (visible && !document.hidden) goTo(index + 1); }, 5000);
        } else if (!visible && timer) {
          clearInterval(timer);
          timer = null;
        }
      }, { threshold: 0.6 }).observe(slider);
    });
  }

  /* ===== Botón flotante de WhatsApp =====
     Siempre abajo a la izquierda. El mensaje aparece a los 6 s, se queda 10 s
     y vuelve cada 45 s (máximo 3 veces por visita). Si se cierra con la X,
     no vuelve a aparecer por 24 h. */
  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';
  var WA_DISMISS_KEY = 'manly-wa-dismissed';
  var WA_DISMISS_MS = 24 * 60 * 60 * 1000;

  function waUrl() {
    return 'https://wa.me/' + BIZ.whatsapp + '?text=' + encodeURIComponent(t('wa.prefill'));
  }

  function setupWhatsApp() {
    var root = document.createElement('div');
    root.className = 'wa';
    root.innerHTML =
      '<div class="wa__bubble" id="wa-bubble" hidden>' +
        '<a class="wa__msg" target="_blank" rel="noopener">' +
          '<strong data-i18n="wa.title">' + esc(t('wa.title')) + '</strong>' +
          '<span data-i18n="wa.text">' + esc(t('wa.text')) + '</span>' +
        '</a>' +
        '<button type="button" class="wa__close" data-i18n-attr="aria-label:wa.close" aria-label="' + esc(t('wa.close')) + '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
      '</div>' +
      '<a class="wa__button" target="_blank" rel="noopener" data-i18n-attr="aria-label:wa.button" aria-label="' + esc(t('wa.button')) + '">' + WA_ICON + '</a>';
    document.body.appendChild(root);

    var bubble = root.querySelector('.wa__bubble');
    var links = root.querySelectorAll('a');
    function setLinks() { links.forEach(function (a) { a.href = waUrl(); }); }
    setLinks();
    document.addEventListener('langchange', setLinks);

    // En celular aparece apenas se baja un poco, para no tapar los botones del hero
    var hero = document.querySelector('.hero__actions');
    var mobile = window.matchMedia('(max-width: 899px)');
    function checkVisible() {
      var hide = hero && mobile.matches && hero.getBoundingClientRect().bottom > window.innerHeight - 80;
      root.classList.toggle('is-hidden', !!hide);
    }
    window.addEventListener('scroll', checkVisible, { passive: true });
    window.addEventListener('resize', checkVisible);
    checkVisible();

    // Mensaje periódico
    var dismissedAt = 0;
    try { dismissedAt = Number(localStorage.getItem(WA_DISMISS_KEY)) || 0; } catch (e) { /* modo privado */ }
    if (Date.now() - dismissedAt < WA_DISMISS_MS) return;

    var shows = 0, hideTimer, nextTimer, stopped = false;
    function showBubble() {
      if (stopped) return;
      if (root.classList.contains('is-hidden') || document.hidden || document.body.classList.contains('is-locked')) {
        nextTimer = setTimeout(showBubble, 5000); // reintenta cuando el botón esté a la vista
        return;
      }
      shows++;
      bubble.hidden = false;
      requestAnimationFrame(function () { bubble.classList.add('is-open'); });
      hideTimer = setTimeout(hideBubble, 10000);
    }
    function hideBubble() {
      bubble.classList.remove('is-open');
      setTimeout(function () { bubble.hidden = true; }, 300);
      if (shows < 3 && !stopped) nextTimer = setTimeout(showBubble, 45000);
    }
    root.querySelector('.wa__close').addEventListener('click', function () {
      stopped = true;
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
      bubble.classList.remove('is-open');
      bubble.hidden = true;
      try { localStorage.setItem(WA_DISMISS_KEY, String(Date.now())); } catch (e) { /* modo privado */ }
    });
    nextTimer = setTimeout(showBubble, 6000);
  }

  /* ===== CSV (compartido con menu.js) =====
     Comillas, comas y saltos de línea dentro de los campos. */
  function parseCSV(text) {
    var rows = [], row = [], field = '', quoted = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (quoted) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') quoted = false;
        else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); rows.push(row); row = []; field = '';
      } else field += c;
    }
    if (field !== '' || row.length) { row.push(field); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (v) { return v.trim() !== ''; }); });
  }

  // Filas del CSV como objetos con claves normalizadas ("Nome del caffè" -> "nome_del_caffe")
  function csvObjects(text) {
    var rows = parseCSV(text);
    var head = rows.shift().map(function (h) {
      return h.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/€/g, 'eur').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    });
    return rows.map(function (r) {
      var o = {};
      head.forEach(function (h, i) { o[h] = (r[i] || '').trim(); });
      return o;
    });
  }

  /* ===== I nostri caffè =====
     L'Australiano es fijo; singola origine y filtro cambian y se cargan en la
     pestaña «Caffè» de la planilla. Sin datos, se muestra «Chiedi al banco». */
  var COFFEES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA0xWKycQPswGf7j60kCZ9JPYe1pP0UtaJ1ofHLSO5VSt8z2kT6oCFlmZ8zO8MjqE--grRjph0Nmay/pub?gid=3001&single=true&output=csv';

  var COFFEES = [
    { codice: 'australiano', nome_del_caffe: 'L’Australiano', produttore_fattoria: '80% Daniel Caldeira + 20% Mutovu',
      processo: 'Natural', note_it: 'Cioccolato, nocciola, frutti tropicali', note_en: 'Chocolate, hazelnut, tropical fruits',
      torrefazione: 'D612 Coffee Roasters', mostrare: 'si' },
    { codice: 'singola_origine', nome_del_caffe: 'Hambela', paese: 'Etiopia', zona: 'Hambela, Guji',
      produttore_fattoria: 'Hambela Station', varieta: 'Heirloom', processo: 'Anaerobic natural', altitudine: '2000 m',
      note_it: 'Pesca, bubble gum', note_en: 'Peach, bubblegum', torrefazione: 'D612 Coffee Roasters', mostrare: 'si' },
    { codice: 'filtro', nome_del_caffe: 'Kiandu AB', paese: 'Kenya', zona: 'Tetu, Nyeri',
      produttore_fattoria: 'Mutheka Farmers', varieta: 'SL28, SL34', processo: 'Washed', altitudine: '1650 m',
      note_it: 'Pompelmo, pesca', note_en: 'Grapefruit, peach', torrefazione: 'D612 Coffee Roasters', mostrare: 'si' }
  ];

  function coffeeSpec(label, value) {
    return value ? '<div><dt>' + esc(t(label)) + '</dt><dd>' + esc(value) + '</dd></div>' : '';
  }

  function renderCoffees() {
    var list = document.getElementById('coffees-list');
    if (!list) return;
    list.innerHTML = COFFEES.filter(function (c) { return !/^no$/i.test(c.mostrare || ''); }).map(function (c, i) {
      var fixed = c.codice === 'australiano';
      var title = c.nome_del_caffe || t('coffees.' + c.codice + '.title');
      var notes = lang() === 'en' ? (c.note_en || c.note_it) : (c.note_it || c.note_en);
      var known = !!c.nome_del_caffe;
      return '<article class="coffee">' +
        '<p class="coffee__top"><span class="coffee__num">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span class="coffee__badge' + (fixed ? ' is-fixed' : '') + '">' + esc(t(fixed ? 'coffees.always' : 'coffees.rotating')) + '</span></p>' +
        '<p class="coffee__use">' + esc(t('coffees.' + c.codice + '.use')) + '</p>' +
        '<h3 class="coffee__name">' + esc(title) + '</h3>' +
        (known
          ? '<dl class="coffee__specs">' +
              coffeeSpec('coffees.origin', [c.paese, c.zona].filter(Boolean).join(' · ')) +
              coffeeSpec('coffees.producer', c.produttore_fattoria) +
              coffeeSpec('coffees.variety', c.varieta) +
              coffeeSpec('coffees.process', c.processo) +
              coffeeSpec('coffees.altitude', c.altitudine) +
              coffeeSpec('coffees.notes', notes) +
              coffeeSpec('coffees.roaster', c.torrefazione) +
            '</dl>'
          : '<p class="coffee__ask">' + esc(t('coffees.ask')) + '</p>' +
            '<dl class="coffee__specs">' + coffeeSpec('coffees.roaster', c.torrefazione) + '</dl>') +
        (fixed ? '<a class="link-arrow" href="#shop"><span>' + esc(t('coffees.buy')) + '</span><svg aria-hidden="true"><use href="#i-arrow"/></svg></a>' : '') +
        '</article>';
    }).join('');
    setupReveal(list);
  }

  function loadCoffees() {
    if (!document.getElementById('coffees-list')) return;
    renderCoffees();
    document.addEventListener('langchange', renderCoffees);
    if (!COFFEES_CSV_URL || !window.fetch) return;
    fetch(COFFEES_CSV_URL, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
      .then(function (text) {
        var rows = csvObjects(text).filter(function (r) { return r.codice; });
        if (!rows.length) throw new Error('vacía');
        // Solo los tres códigos conocidos, en su orden
        COFFEES = COFFEES.map(function (base) {
          var row = rows.filter(function (r) { return r.codice === base.codice; })[0];
          return row || base;
        });
        renderCoffees();
      })
      .catch(function (err) {
        if (window.console) console.warn('Caffè: no se pudo leer Google Sheets (' + err.message + '), uso los datos incluidos.');
      });
  }

  /* ===== Instagram =====
     El script oficial de Instagram (que pone cookies) se carga solo cuando la
     sección está por entrar en pantalla, para no frenar la carga inicial. */
  function setupInstagram() {
    var grid = document.querySelector('[data-ig]');
    if (!grid) return;
    function load() {
      if (window.instgrm) { window.instgrm.Embeds.process(); return; }
      var s = document.createElement('script');
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      document.body.appendChild(s);
    }
    if (!('IntersectionObserver' in window)) { load(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); load(); }
    }, { rootMargin: '600px 0px' });
    io.observe(grid);
  }

  function setupHeader() {
    var header = document.querySelector('.header');
    if (!header) return;
    function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== API para menu.js ===== */
  window.MANLY = {
    BIZ: BIZ, t: t, tr: tr, esc: esc, lang: lang, range: range, parseCSV: parseCSV,
    formatPrice: formatPrice, setupReveal: setupReveal, getStatus: getStatus, applyLang: applyLang
  };

  /* ===== Arranque =====
     Los scripts con defer se ejecutan antes de DOMContentLoaded: menu.js
     alcanza a registrar sus listeners de 'langchange' antes del primer render. */
  document.addEventListener('DOMContentLoaded', function () {
    fillLinks();
    setupWhatsApp();
    setupDrawer();
    setupShop();
    setupHeader();
    applyLang(detectLang());
    setupHero();
    setupVideos();
    setupSliders();
    loadCoffees();
    setupInstagram();
    setupReveal();
    setInterval(tick, 30 * 1000);
  });
})();

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
    email: 'australiaitalia2023@libero.it',
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
    kitchen: ['08:30', '14:00'],
    closingSoonMinutes: 30
  };

  /* ===== Textos ===== */
  var I18N = {
    it: {
      'meta.home.title': 'MANLY The Office — Specialty coffee & brunch, Firenze',
      'meta.home.desc': 'Specialty coffee in stile australiano e brunch a San Frediano, Firenze. Via Pisana 48R.',
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
      'summary.kitchen': 'Cucina 8:30–14:00',

      'days': ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
      'status.closesAt': 'Aperto · chiude alle {t}',
      'status.kitchenFrom': 'Aperto · cucina dalle {t}',
      'status.kitchenClosed': 'Aperto · cucina chiusa',
      'status.closingIn': 'Chiude tra {n} min',
      'status.opensToday': 'Chiuso · apre oggi alle {t}',
      'status.opensTomorrow': 'Chiuso · apre domani alle {t}',
      'status.opensOn': 'Chiuso · apre {d} alle {t}',
      'status.closedFor': 'Chiuso ({r})',
      'closure.day': 'Chiuso {d}',
      'closure.range': 'Chiuso dal {a} al {b}',

      'hero.eyebrow': 'Specialty coffee & brunch · Dal 2023',
      'hero.lead': 'Specialty coffee in stile australiano e brunch, nel cuore di San Frediano.',
      'hero.menu': 'Il menu',
      'hero.directions': 'Come arrivare',
      'hero.rating': '{r} su Google · oltre {n} recensioni',
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
      'shop.cta': 'Ordina su Instagram',
      'shop.preview': 'Messaggio:',
      'shop.fine': 'Ritiro in negozio, Via Pisana 48R. Nessun pagamento online: l’ordine si conferma su Instagram.',
      'shop.copied': 'Messaggio copiato: incollalo nella chat di Instagram e invialo.',
      'shop.copyFail': 'Copia questo messaggio e invialo su Instagram:',
      'shop.message': 'Ciao! Vorrei ordinare {qty} x {product} {size} {grind}, con ritiro in negozio. Mi dite come fare?',
      'shop.imgAlt': 'Etichetta di L’Australiano, la miscela di MANLY The Office',

      'marquee': 'Specialty coffee · Brunch · San Frediano · Firenze ·',
      'nav.coffees': 'I nostri caffè',
      'consent.text': 'Usiamo solo cookie tecnici. La mappa di Google e i post di Instagram usano cookie di terze parti: li carichiamo solo se accetti.',
      'consent.accept': 'Accetta',
      'consent.reject': 'Rifiuta',
      'consent.more': 'Privacy',
      'consent.label': 'Preferenze cookie',
      'consent.mapText': 'La mappa è fornita da Google Maps, che usa cookie di terze parti.',
      'consent.mapLoad': 'Mostra la mappa',
      'consent.igText': 'I post sono caricati da Instagram, che usa cookie di terze parti.',
      'consent.igLoad': 'Mostra i post',
      'footer.privacy': 'Privacy e cookie',
      'footer.cookies': 'Preferenze cookie',
      'meta.privacy.title': 'Privacy e cookie — MANLY The Office',
      'meta.privacy.desc': 'Informativa sulla privacy e sui cookie del sito di MANLY The Office.',
      'nav.hours': 'Orari',
      'nav.storyShort': 'Storia',
      'topbar.announce': 'L’Australiano, la nostra miscela · Ordina su Instagram',
      'statement.text': 'Specialty coffee, ospitalità australiana. A San Frediano, dal 2023.',
      'coffees.d612': 'Acquista da D612',
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
      'offer.lead': 'Una carta corta e curata: specialty coffee, brunch fino alle 14:00 e dolci in vetrina.',
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
      'wa.button': 'Scrivici su Instagram',
      'wa.title': 'Ciao! Possiamo aiutarti?',
      'wa.text': 'Scrivici su Instagram per domande o per ordinare L’Australiano.',
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
      'storia.c4.p1': 'Maykol e la sua fidanzata Alice, che lavora anche in cucina, aprono MANLY The Office in Via Pisana.',
      'storia.c4.p2': 'Lo spazio è piccolo, e si fa il massimo con quello che c’è.',
      'storia.welcomeQuote': '«Come stai?»',
      'storia.welcome': 'È la prima cosa che ti chiede Maykol, appena varchi la soglia.',
      'essenza.p1.title': 'Il caffè al centro',
      'essenza.p1.text': 'L’Australiano per l’espresso, singola origine e filtro che cambiano spesso: tutti tostati da D612. Il caffè resta la vera passione di Maykol, e il centro di tutto.',
      'essenza.p2.title': 'L’ospitalità ha un valore',
      'essenza.p2.text': 'Scegliere prodotti di qualità è fondamentale. Ma la parte più difficile, e più importante, è far sentire le persone accolte e condividere con loro quello che facciamo.',
      'essenza.p3.title': 'Un brunch per tutti',
      'essenza.p3.text': 'Pancake, banana bread fatto in casa senza glutine, bagel e avocado toast. Proviamo ad accontentare ogni esigenza alimentare, nei limiti del possibile.',
      'press.url': 'https://www.gamberorosso.it/notizie/storie/manly-the-office-firenze/',
      'press.title': 'Il sogno australiano di un barista toscano',
      'press.meta': 'Michela Becchi · 19 gennaio 2024',

      'footer.visit': 'Indirizzo',
      'footer.hours': 'Orari',
      'footer.contact': 'Contatti',
      'nav.contact': 'Contatti',
      'contact.eyebrow': 'Contatti',
      'contact.title': 'Scrivici',
      'contact.lead': 'Per informazioni, eventi e collaborazioni o per ordinare L’Australiano. Ti rispondiamo appena possibile.',
      'contact.phone': 'Telefono',
      'contact.copy': 'Copia indirizzo',
      'contact.copied': 'Indirizzo copiato',
      'contact.name': 'Nome',
      'contact.topic': 'Argomento',
      'contact.topic.info': 'Informazioni',
      'contact.topic.shop': 'Ordine di L’Australiano',
      'contact.topic.events': 'Eventi e collaborazioni',
      'contact.topic.other': 'Altro',
      'contact.message': 'Messaggio',
      'contact.error': 'Scrivi il messaggio prima di continuare.',
      'contact.send': 'Prepara l’email',
      'contact.fine': 'Si apre la tua app di posta con il messaggio già scritto: sei tu a inviarlo. Il sito non salva né invia nulla.',
      'contact.opened': 'Se non si è aperta nessuna app di posta, scrivici direttamente a',
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
      'summary.kitchen': 'Kitchen 8:30–14:00',

      'days': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'status.closesAt': 'Open · closes at {t}',
      'status.kitchenFrom': 'Open · kitchen from {t}',
      'status.kitchenClosed': 'Open · kitchen closed',
      'status.closingIn': 'Closes in {n} min',
      'status.opensToday': 'Closed · opens today at {t}',
      'status.opensTomorrow': 'Closed · opens tomorrow at {t}',
      'status.opensOn': 'Closed · opens {d} at {t}',
      'status.closedFor': 'Closed ({r})',
      'closure.day': 'Closed on {d}',
      'closure.range': 'Closed from {a} to {b}',

      'hero.eyebrow': 'Specialty coffee & brunch · Since 2023',
      'hero.lead': 'Australian-style specialty coffee and brunch, in the heart of San Frediano.',
      'hero.menu': 'Menu',
      'hero.directions': 'Directions',
      'hero.rating': '{r} on Google · {n}+ reviews',
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
      'shop.cta': 'Order on Instagram',
      'shop.preview': 'Message:',
      'shop.fine': 'Pick up in store, Via Pisana 48R. No online payment: the order is confirmed on Instagram.',
      'shop.copied': 'Message copied: paste it in the Instagram chat and send it.',
      'shop.copyFail': 'Copy this message and send it on Instagram:',
      'shop.message': 'Hi! I’d like to order {qty} x {product} {size} {grind}, for pickup in store. How can I do it?',
      'shop.imgAlt': 'L’Australiano label, the MANLY The Office blend',

      'marquee': 'Specialty coffee · Brunch · San Frediano · Florence ·',
      'nav.coffees': 'Our coffees',
      'consent.text': 'We only use technical cookies. The Google map and Instagram posts use third-party cookies: we load them only if you accept.',
      'consent.accept': 'Accept',
      'consent.reject': 'Decline',
      'consent.more': 'Privacy',
      'consent.label': 'Cookie preferences',
      'consent.mapText': 'The map is provided by Google Maps, which uses third-party cookies.',
      'consent.mapLoad': 'Show the map',
      'consent.igText': 'Posts are loaded from Instagram, which uses third-party cookies.',
      'consent.igLoad': 'Show posts',
      'footer.privacy': 'Privacy & cookies',
      'footer.cookies': 'Cookie preferences',
      'meta.privacy.title': 'Privacy & cookies — MANLY The Office',
      'meta.privacy.desc': 'Privacy and cookie policy for the MANLY The Office website.',
      'nav.hours': 'Hours',
      'nav.storyShort': 'Story',
      'topbar.announce': 'L’Australiano, our house blend · Order on Instagram',
      'statement.text': 'Specialty coffee, Australian hospitality. In San Frediano, since 2023.',
      'coffees.d612': 'Buy from D612',
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
      'offer.lead': 'A short, considered menu: specialty coffee, brunch until 14:00 and treats in the display.',
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
      'wa.button': 'Message us on Instagram',
      'wa.title': 'Hi! Can we help?',
      'wa.text': 'Message us on Instagram with questions or to order L’Australiano.',
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
      'storia.c4.p1': 'Maykol and his partner Alice, who also works in the kitchen, open MANLY The Office on Via Pisana.',
      'storia.c4.p2': 'The space is small, and they make the most of what they have.',
      'storia.welcomeQuote': '“Hey, how are you? Welcome!”',
      'storia.welcome': 'The first thing you hear when you walk in.',
      'essenza.p1.title': 'Coffee first',
      'essenza.p1.text': 'L’Australiano for espresso, plus a rotating single origin and filter: all roasted by D612. Coffee is still Maykol’s true passion, and the heart of everything.',
      'essenza.p2.title': 'Hospitality matters',
      'essenza.p2.text': 'Choosing quality products is essential. But the hardest and most important part is making people feel welcome, and sharing with them what we do.',
      'essenza.p3.title': 'Brunch for everyone',
      'essenza.p3.text': 'Pancakes, homemade gluten-free banana bread, bagels and avocado toast. We try to meet every dietary need, within reason.',
      'press.url': 'https://www.gamberorossointernational.com/news/the-australian-dream-of-a-tuscan-barista-in-florence-theres-a-new-and-young-specialty-coffee-shop-to-try/',
      'press.title': 'The Australian dream of a Tuscan barista',
      'press.meta': 'Michela Becchi · 19 January 2024',

      'footer.visit': 'Address',
      'footer.hours': 'Hours',
      'footer.contact': 'Contact',
      'nav.contact': 'Contact',
      'contact.eyebrow': 'Contact',
      'contact.title': 'Write to us',
      'contact.lead': 'For information, events and collaborations, or to order L’Australiano. We’ll get back to you as soon as we can.',
      'contact.phone': 'Phone',
      'contact.copy': 'Copy address',
      'contact.copied': 'Address copied',
      'contact.name': 'Name',
      'contact.topic': 'Subject',
      'contact.topic.info': 'Information',
      'contact.topic.shop': 'L’Australiano order',
      'contact.topic.events': 'Events and collaborations',
      'contact.topic.other': 'Other',
      'contact.message': 'Message',
      'contact.error': 'Please write your message first.',
      'contact.send': 'Prepare the email',
      'contact.fine': 'Your mail app opens with the message ready: you send it yourself. The website stores and sends nothing.',
      'contact.opened': 'If no mail app opened, write to us directly at',
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
    document.querySelectorAll('[data-text-' + value + ']').forEach(function (el) {
      el.textContent = el.getAttribute('data-text-' + value);
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
    email: 'mailto:' + BIZ.email,
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
  // Para probar estados: ?giorno=2&ora=14:40 (0 = domenica … 6 = sabato) o ?data=2026-08-12&ora=10:00
  var demo = (function () {
    var q = new URLSearchParams(location.search);
    var time = q.get('ora'), day = q.get('giorno'), date = q.get('data');
    if (!/^\d{1,2}:\d{2}$/.test(time || '')) return null;
    if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return { date: date, day: new Date(date + 'T12:00:00Z').getUTCDay(), minutes: toMinutes(time) };
    }
    if (day === null) return null;
    var d = new Date(); d.setUTCDate(d.getUTCDate() + ((Number(day) % 7) - d.getUTCDay() + 7) % 7);
    return { date: d.toISOString().slice(0, 10), day: Number(day) % 7, minutes: toMinutes(time) };
  })();

  var WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  var romeClock = new Intl.DateTimeFormat('en-US', {
    timeZone: BIZ.timeZone, weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  });

  // Siempre la hora del local, aunque el teléfono del turista esté en otra zona horaria.
  function nowInFlorence() {
    if (demo) return demo;
    var parts = {};
    romeClock.formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    return {
      date: parts.year + '-' + parts.month + '-' + parts.day,
      day: WEEKDAYS[parts.weekday],
      minutes: (Number(parts.hour) % 24) * 60 + Number(parts.minute)
    };
  }

  function addDays(iso, n) {
    var d = new Date(iso + 'T12:00:00Z');
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }

  function formatDate(iso, withWeekday) {
    return new Intl.DateTimeFormat(lang() === 'it' ? 'it-IT' : 'en-GB', {
      timeZone: 'UTC', day: 'numeric', month: 'long', weekday: withWeekday ? 'long' : undefined
    }).format(new Date(iso + 'T12:00:00Z'));
  }

  /* ===== Cierres especiales (pestaña «Chiusure» de la planilla) ===== */
  var CLOSURES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA0xWKycQPswGf7j60kCZ9JPYe1pP0UtaJ1ofHLSO5VSt8z2kT6oCFlmZ8zO8MjqE--grRjph0Nmay/pub?gid=5001&single=true&output=csv';
  // Respaldo en el código: { from: '2026-08-10', to: '2026-08-24', it: 'Ferie estive', en: 'Summer holidays' }
  var CLOSURES = [];

  // "10/08/2026" o "2026-08-10" -> "2026-08-10"
  function parseDate(v) {
    v = (v || '').trim();
    var m = v.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/);
    if (m) return m[3] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[1]).slice(-2);
    return /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : null;
  }

  function closureOn(iso) {
    return CLOSURES.filter(function (c) { return iso >= c.from && iso <= c.to; })[0] || null;
  }

  function closureReason(c) {
    return c ? (lang() === 'en' ? (c.en || c.it) : (c.it || c.en)) || '' : '';
  }

  /* ===== Estado abierto / cerrado ===== */
  function getStatus(now) {
    var today = closureOn(now.date) ? null : BIZ.hours[now.day];
    var m = now.minutes;

    if (today && m >= toMinutes(today[0]) && m < toMinutes(today[1])) {
      var left = toMinutes(today[1]) - m;
      if (left <= BIZ.closingSoonMinutes) return { state: 'closing', text: fmt(t('status.closingIn'), { n: left }) };
      if (m < toMinutes(BIZ.kitchen[0])) return { state: 'open', text: fmt(t('status.kitchenFrom'), { t: showTime(BIZ.kitchen[0]) }) };
      if (m >= toMinutes(BIZ.kitchen[1])) return { state: 'open', text: t('status.kitchenClosed') };
      return { state: 'open', text: fmt(t('status.closesAt'), { t: showTime(today[1]) }) };
    }

    // Cerrado: buscar la próxima apertura, saltando los cierres especiales
    var closure = closureOn(now.date);
    var prefix = closure ? t('status.closedFor').replace('{r}', closureReason(closure)).replace(' ()', '') : '';
    for (var i = 0; i < 120; i++) {
      var iso = addDays(now.date, i);
      var day = (now.day + i) % 7;
      var h = closureOn(iso) ? null : BIZ.hours[day];
      if (!h || (i === 0 && m >= toMinutes(h[0]))) continue;
      var text;
      if (i === 0) text = fmt(t('status.opensToday'), { t: showTime(h[0]) });
      else if (i === 1) text = fmt(t('status.opensTomorrow'), { t: showTime(h[0]) });
      else if (i < 7) text = fmt(t('status.opensOn'), { d: t('days')[day], t: showTime(h[0]) });
      else text = fmt(t('status.opensOn'), { d: formatDate(iso, true), t: showTime(h[0]) });
      return { state: 'closed', text: prefix ? prefix + ' · ' + text.replace(/^[^·]+·\s*/, '') : text };
    }
    return { state: 'closed', text: t('orari.closed') };
  }

  // Aviso en «Orari» si hay un cierre hoy o en los próximos 14 días
  function renderClosureNote() {
    var el = document.getElementById('closure-note');
    if (!el) return;
    var now = nowInFlorence();
    var limit = addDays(now.date, 14);
    var next = CLOSURES.filter(function (c) { return c.to >= now.date && c.from <= limit; })
      .sort(function (a, b) { return a.from < b.from ? -1 : 1; })[0];
    if (!next) { el.hidden = true; return; }
    var reason = closureReason(next);
    var span = next.from === next.to
      ? fmt(t('closure.day'), { d: formatDate(next.from, true) })
      : fmt(t('closure.range'), { a: formatDate(next.from), b: formatDate(next.to) });
    el.textContent = span + (reason ? ' · ' + reason : '');
    el.hidden = false;
  }

  function loadClosures() {
    if (!CLOSURES_CSV_URL || !window.fetch) return;
    fetch(CLOSURES_CSV_URL, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
      .then(function (text) {
        CLOSURES = csvObjects(text).map(function (r) {
          var from = parseDate(r.dal), to = parseDate(r.al) || from;
          return from ? { from: from, to: to < from ? from : to, it: r.motivo_it || '', en: r.motivo_en || '' } : null;
        }).filter(Boolean);
        tick();
      })
      .catch(function (err) {
        if (window.console) console.warn('Chiusure: no se pudo leer Google Sheets (' + err.message + ').');
      });
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
    var now = nowInFlorence();
    var today = now.day;
    list.innerHTML = WEEK_ORDER.map(function (day) {
      var h = BIZ.hours[day];
      if (h && closureOn(addDays(now.date, (day - today + 7) % 7))) h = null;
      var cls = (h ? '' : 'is-closed') + (day === today ? ' is-today' : '');
      return '<li class="' + cls.trim() + '"' + (day === today ? ' aria-current="date"' : '') + '>' +
        '<span class="hours__day"' + (day === today ? ' data-today="' + esc(t('orari.today')) + '"' : '') + '>' +
        esc(capitalize(t('days')[day])) + '</span>' +
        '<span class="hours__time">' + (h ? range(h) : esc(t('orari.closed'))) + '</span></li>';
    }).join('');
  }

  function tick() { renderStatus(); renderHours(); renderClosureNote(); }
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
     Hoy CHECKOUT abre el chat de Instagram. Para una pasarela real basta con agregar otro
     proveedor en CHECKOUT_PROVIDERS y apuntar CHECKOUT a él: la interfaz no cambia. */
  var PRODUCT = {
    id: 'australiano',
    name: 'L’Australiano',
    // Solo se vende la bolsa de 250 g (precio confirmado por Mike)
    sizes: [
      { id: '250g', label: '250 g', msg: '250g', price: 15 }
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

  // Chat de Instagram de MANLY (ig.me abre la app o el navegador en los mensajes directos)
  var IG_DM_URL = 'https://ig.me/m/' + BIZ.instagram;

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }
  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  }

  function showShopNotice(copied, text) {
    var el = document.getElementById('shop-notice');
    if (!el) return;
    el.hidden = false;
    el.className = 'shop-notice' + (copied ? ' is-ok' : '');
    el.textContent = copied ? t('shop.copied') : t('shop.copyFail') + ' ' + text;
  }

  var CHECKOUT_PROVIDERS = {
    // Instagram no permite dejar el mensaje escrito: se copia al portapapeles y se abre el chat
    instagram: {
      start: function (order) {
        var text = orderMessage(order);
        var win = window.open(IG_DM_URL, '_blank');
        if (win) win.opener = null;
        copyText(text).then(function (ok) {
          showShopNotice(ok, text);
          if (!win) location.href = IG_DM_URL;
        });
      }
    },
    // Alternativa si en el futuro tienen WhatsApp Business
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
  var CHECKOUT = CHECKOUT_PROVIDERS.instagram;

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
      document.getElementById('opt-size').classList.toggle('is-single', PRODUCT.sizes.length === 1);
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

  /* ===== Botón flotante de contacto (Instagram) =====
     Siempre abajo a la izquierda. El mensaje aparece a los 6 s, se queda 10 s
     y vuelve cada 45 s (máximo 3 veces por visita). Si se cierra con la X,
     no vuelve a aparecer por 24 h. */
  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></g></svg>';
  var WA_DISMISS_KEY = 'manly-wa-dismissed';
  var WA_DISMISS_MS = 24 * 60 * 60 * 1000;

  // Instagram no acepta texto prellenado: el botón abre directo el chat
  function waUrl() { return IG_DM_URL; }

  function setupContactButton() {
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
      note_it: 'Pesca, bubble gum', note_en: 'Peach, bubblegum', torrefazione: 'D612 Coffee Roasters', mostrare: 'si',
      link: 'https://www.d612coffeeroasters.com/products/hambela-ethiopia' },
    { codice: 'filtro', nome_del_caffe: 'Kiandu AB', paese: 'Kenya', zona: 'Tetu, Nyeri',
      produttore_fattoria: 'Mutheka Farmers', varieta: 'SL28, SL34', processo: 'Washed', altitudine: '1650 m',
      note_it: 'Pompelmo, pesca', note_en: 'Grapefruit, peach', torrefazione: 'D612 Coffee Roasters', mostrare: 'si',
      link: 'https://www.d612coffeeroasters.com/products/kiandu-ab-kenya' }
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
      var link = c.link_d612 || c.link || '';
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
        (!fixed && known && /^https:\/\//.test(link)
          ? '<a class="link-arrow" href="' + esc(link) + '" target="_blank" rel="noopener"><span>' + esc(t('coffees.d612')) + '</span><svg aria-hidden="true" class="is-out"><use href="#i-arrow"/></svg></a>'
          : '') +
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
  /* ===== Consentimiento de cookies =====
     La web solo usa almacenamiento técnico (idioma, preferencias). El mapa de
     Google y los posts de Instagram ponen cookies de terceros: se cargan solo
     con «Accetta» o tocando «Mostra» en cada uno. */
  var CONSENT_KEY = 'manly-consent';
  var MAP_SRC = 'https://www.google.com/maps?output=embed&q=' +
    encodeURIComponent('MANLY The Office, Via Pisana 48R, 50143 Firenze');

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(CONSENT_KEY, v); } catch (e) { /* modo privado */ }
  }

  var EMBEDS = {
    map: function () {
      var box = document.querySelector('[data-embed="map"]');
      if (!box || box.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = MAP_SRC + '&hl=' + lang();
      f.title = t('dove.mapTitle');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(f);
    },
    instagram: function () {
      var gate = document.querySelector('[data-ig-gate]');
      if (gate) gate.hidden = true;
      setupInstagram();
    }
  };

  function loadEmbeds() { Object.keys(EMBEDS).forEach(function (k) { EMBEDS[k](); }); }

  function setupConsent() {
    document.addEventListener('click', function (e) {
      var one = e.target.closest('[data-embed-load]');
      if (one) { EMBEDS[one.getAttribute('data-embed-load')](); return; }
      if (e.target.closest('[data-consent-open]')) showBanner();
    });

    var bar;
    function hideBanner() { if (bar) { bar.hidden = true; document.body.classList.remove('has-consent-bar'); } }
    function showBanner() {
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'consent';
        bar.setAttribute('role', 'dialog');
        bar.setAttribute('aria-live', 'polite');
        bar.setAttribute('data-i18n-attr', 'aria-label:consent.label');
        bar.innerHTML =
          '<div class="wrap consent__inner">' +
            '<p><span data-i18n="consent.text"></span> <a href="privacy.html" data-i18n="consent.more"></a></p>' +
            '<div class="consent__actions">' +
              '<button type="button" class="btn btn--outline" data-consent="essential" data-i18n="consent.reject"></button>' +
              '<button type="button" class="btn" data-consent="all" data-i18n="consent.accept"></button>' +
            '</div>' +
          '</div>';
        document.body.appendChild(bar);
        bar.addEventListener('click', function (e) {
          var b = e.target.closest('[data-consent]');
          if (!b) return;
          var v = b.getAttribute('data-consent');
          setConsent(v);
          hideBanner();
          if (v === 'all') loadEmbeds();
        });
        applyLang(lang());
      }
      bar.hidden = false;
      document.body.classList.add('has-consent-bar');
    }

    if (getConsent() === 'all') loadEmbeds();
    else if (!getConsent()) showBanner();
  }

  function setupInstagram() {
    var grid = document.querySelector('[data-ig]');
    if (!grid || grid.getAttribute('data-ig-ready')) return;
    grid.setAttribute('data-ig-ready', '1');
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

  /* ===== Reseñas de Google =====
     Nota y cantidad desde la pestaña «Info» de la planilla. La cantidad se
     redondea hacia abajo a la decena, así el texto sigue siendo cierto aunque
     no se actualice enseguida. */
  var INFO_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA0xWKycQPswGf7j60kCZ9JPYe1pP0UtaJ1ofHLSO5VSt8z2kT6oCFlmZ8zO8MjqE--grRjph0Nmay/pub?gid=4001&single=true&output=csv';
  var RATING = { valutazione: 4.9, recensioni: 670 };

  function renderRating() {
    var r = new Intl.NumberFormat(lang() === 'it' ? 'it-IT' : 'en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(RATING.valutazione);
    var n = Math.floor(RATING.recensioni / 10) * 10;
    document.querySelectorAll('[data-rating]').forEach(function (el) {
      el.textContent = fmt(t('hero.rating'), { r: r, n: n });
    });
  }

  function loadRating() {
    if (!document.querySelector('[data-rating]')) return;
    renderRating();
    document.addEventListener('langchange', renderRating);
    if (!INFO_CSV_URL || !window.fetch) return;
    fetch(INFO_CSV_URL, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
      .then(function (text) {
        csvObjects(text).forEach(function (row) {
          var v = Number((row.valore || '').replace(',', '.'));
          if (row.codice in RATING && v > 0) RATING[row.codice] = v;
        });
        renderRating();
      })
      .catch(function (err) {
        if (window.console) console.warn('Info: no se pudo leer Google Sheets (' + err.message + '), uso los datos incluidos.');
      });
  }

  /* ===== Contatti: el formulario solo arma un email (mailto) en la app del visitante =====
     No hay backend: nada se envía ni se guarda desde la web. */
  function setupContactForm() {
    document.querySelectorAll('[data-copy-email]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        copyText(BIZ.email).then(function (ok) {
          if (!ok) return;
          btn.textContent = t('contact.copied') + ' ✓';
          setTimeout(function () { btn.textContent = t('contact.copy'); }, 2500);
        });
      });
    });

    var form = document.getElementById('contact-form');
    if (!form) return;
    var msg = form.elements.message;
    var err = document.getElementById('cf-error');
    var notice = document.getElementById('contact-notice');

    function setInvalid(bad) {
      err.hidden = !bad;
      if (bad) msg.setAttribute('aria-invalid', 'true');
      else msg.removeAttribute('aria-invalid');
    }
    msg.addEventListener('input', function () { if (msg.value.trim()) setInvalid(false); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = msg.value.trim();
      if (!body) { setInvalid(true); msg.focus(); return; }
      setInvalid(false);
      var name = form.elements.name.value.trim();
      var topic = form.elements.topic;
      var subject = 'MANLY · ' + topic.options[topic.selectedIndex].text + (name ? ' · ' + name : '');
      location.href = 'mailto:' + BIZ.email +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body + (name ? '\n\n' + name : ''));
      notice.hidden = false;
      notice.textContent = t('contact.opened') + ' ' + BIZ.email;
    });
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
    setClosures: function (list) { CLOSURES = list; tick(); }, // para pruebas
    formatPrice: formatPrice, setupReveal: setupReveal, getStatus: getStatus, applyLang: applyLang
  };

  /* ===== Arranque =====
     Los scripts con defer se ejecutan antes de DOMContentLoaded: menu.js
     alcanza a registrar sus listeners de 'langchange' antes del primer render. */
  document.addEventListener('DOMContentLoaded', function () {
    fillLinks();
    setupContactButton();
    setupDrawer();
    setupShop();
    setupContactForm();
    setupHeader();
    applyLang(detectLang());
    setupHero();
    setupVideos();
    setupSliders();
    loadCoffees();
    loadClosures();
    loadRating();
    setupConsent();
    setupReveal();
    setInterval(tick, 30 * 1000);
  });
})();

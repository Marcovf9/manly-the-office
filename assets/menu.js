/* ==========================================================================
   MANLY The Office — carta (solo menu.html). Depende de assets/site.js.
   Fuentes: carta oficial "MENU INGLESE 2026" (EN) y carta impresa en italiano (IT).
   - name / desc: string si es igual en los dos idiomas, o { it, en }.
   - a: alérgenos (numeración UE 1–14). Solo donde la carta los indica.
   - price: número, o [min, max] para rangos.
   ========================================================================== */
(function () {
  'use strict';

  var M = window.MANLY;
  var t = M.t, tr = M.tr, esc = M.esc;

  var MENU = [
    {
      id: 'caffetteria', title: { it: 'Caffetteria', en: 'Coffee' },
      groups: [{
        items: [
          { name: 'Espresso', price: 1.5 },
          { name: 'Specialty singolo', price: 2 },
          { name: 'Specialty doppio', price: 4 },
          { name: 'Macchiato', price: 1.6 },
          { name: { it: 'Espresso doppio', en: 'Espresso dbl' }, price: 3 },
          { name: 'Doppio macchiato', price: 3.5 },
          { name: 'Piccolo', price: 2 },
          { name: 'Cortado', price: 3.5 },
          { name: 'Cappuccino', price: 2 },
          { name: 'Latte macchiato', price: 2 },
          { name: 'Flat white', price: 3.5 },
          { name: 'Americano', price: 2 },
          { name: 'Long Black', price: 3.5 },
          { name: 'Mocha', price: 3 },
          { name: { it: 'Decaffeinato', en: 'Decaf' }, price: 1.6 }
        ],
        extras: [
          { name: { it: 'Extra shot espresso', en: 'Extra espresso shot' }, price: 1.5 },
          { name: { it: 'Latte d’avena', en: 'Oat milk' }, price: 0.5 },
          { name: 'Large size', price: 1 }
        ]
      }]
    },
    {
      id: 'filtro-freddi', title: { it: 'Filtro e freddi', en: 'Filter & iced' },
      groups: [{
        items: [
          { name: 'Batch Brew', price: 4.5 },
          { name: 'Iced coffee', price: 4 },
          { name: 'Iced latte', price: 4.5 },
          { name: 'Iced Mocha', price: 5.5 },
          { name: 'Cold brew', price: 6, desc: { it: 'Stagionale', en: 'Seasonal' } }
        ],
        extras: [
          { name: { it: 'Extra avena', en: 'Extra oat milk' }, price: 1 }
        ]
      }]
    },
    {
      id: 'special', title: { it: 'Special latte e tè', en: 'Special lattes & tea' },
      groups: [{
        items: [
          { name: 'Matcha latte', price: 4.5 },
          { name: 'Chai latte', price: 4.5 },
          { name: 'Hot chocolate', price: 4.5 },
          { name: { it: 'Selezione tè caldo', en: 'Selection hot teas' }, price: 4 }
        ],
        extras: [
          { name: { it: 'Latte d’avena', en: 'Oat milk' }, price: 1 },
          { name: 'Iced', price: 0.5 }
        ]
      }]
    },
    {
      id: 'brunch', title: { it: 'Brunch', en: 'Brunch' }, kitchenNote: true,
      groups: [
        {
          items: [
            { name: 'Farmer bagel', price: 13, a: [1, 7, 8],
              desc: { it: 'pollo, insalata, pomodoro, cetriolini sottaceto, bacon, formaggio cheddar, maionese piccante',
                      en: 'chicken, salad, tomato, pickles, bacon, cheddar cheese, spicy mayo' } },
            { name: 'Bacon & cheese pancake', price: 10, a: [1, 3, 5, 7, 8],
              desc: { it: 'bacon e formaggio', en: 'bacon and melted cheese' },
              adds: [{ name: { it: 'sciroppo d’acero', en: 'maple syrup' }, price: 1 }] },
            { name: 'Salmon bagel', price: 11, a: [1, 7, 8, 9, 11],
              desc: { it: 'salmone, cipolla marinata, cetriolo, formaggio spalmabile con erba cipollina',
                      en: 'smoked salmon, cucumber, marinated onions, cream cheese and chives' } },
            { name: 'BLT Bagel', price: 9.5, a: [1, 6, 7, 8, 9, 11],
              desc: { it: 'bacon, insalata, pomodoro e maionese', en: 'bacon, lettuce, tomato and mayo' } },
            { name: 'ALT Bagel', price: 9.5, a: [1, 6, 7, 8, 9, 11],
              desc: { it: 'avocado, insalata, pomodoro e maionese', en: 'avocado, lettuce, tomato and mayo' } },
            { name: 'Avocado toast 2.0', price: 16, a: [1, 4, 5, 6, 7, 8, 11],
              desc: { it: 'pane 5 cereali, hummus di barbabietola fatto in casa, salmone affumicato, avocado, semi misti, feta, melograno (secondo stagionalità)',
                      en: 'multigrain bread, beetroot hummus, smoked salmon, avocado, mixed seeds, feta cheese, pomegranate (seasonal)' } },
            { name: 'Avocado toast', price: 10, a: [1, 7, 8, 11],
              desc: { it: 'pane 5 cereali, avocado, semi misti, feta, melograno (secondo stagionalità)',
                      en: 'multigrain bread, avocado, mixed seeds, feta cheese, pomegranate (seasonal)' } }
          ]
        },
        {
          title: { it: 'Da condividere', en: 'To share' },
          items: [
            { name: { it: 'Patate dolci', en: 'Sweet potato fries' }, price: 4.5, tags: ['unavailable'] }
          ],
          extras: [
            { name: { it: 'Avocado', en: 'Avocado' }, price: 2.5 },
            { name: { it: 'Hummus di barbabietola', en: 'Beetroot hummus' }, price: 2.5, tags: ['vg'] },
            { name: { it: 'Salmone', en: 'Smoked salmon' }, price: 3.5 },
            { name: { it: 'Bacon', en: 'Bacon' }, price: 3 },
            { name: { it: 'Pane senza glutine', en: 'Gluten-free bread' }, price: 2.5, tags: ['gf'] }
          ],
          extrasTitle: { it: 'Aggiunte', en: 'Add-ons' }
        }
      ]
    },
    {
      id: 'dolce', title: { it: 'Dolce', en: 'Sweet' },
      groups: [
        {
          items: [
            { name: 'Nocciolotto Pancakes', price: 10,
              desc: { it: 'crema di nocciola, frutta fresca', en: 'hazelnut cream, fresh fruit' } },
            { name: 'Maple Pancakes', price: 11,
              desc: { it: 'sciroppo d’acero, frutta fresca', en: 'maple syrup, fresh fruit' } },
            { name: 'Yoyo Pancakes', price: 10, a: [1, 3, 5, 6, 7, 8],
              desc: { it: 'yogurt greco, frutta fresca, miele', en: 'greek yogurt, fresh fruit, honey' } },
            { name: 'New York BB', price: 9, a: [3, 5, 6, 7, 8],
              desc: { it: 'banana bread, bacon, sciroppo d’acero', en: 'banana bread, bacon, maple syrup' },
              adds: [
                { name: { it: 'burro di arachidi', en: 'peanut butter' }, price: 1.5 },
                { name: { it: 'yogurt greco', en: 'greek yogurt' }, price: 1.5 }
              ] },
            { name: 'Peanut BB', price: 10, a: [3, 5, 6, 7, 8],
              desc: { it: 'banana bread, yogurt greco, burro di arachidi, miele, frutta fresca',
                      en: 'banana bread, greek yogurt, peanut butter, honey, fresh fruit' } },
            { name: 'Granola bowl', price: 8, a: [1, 5, 6, 7, 8],
              desc: { it: 'yogurt, granola, miele, frutta fresca', en: 'yogurt, granola, honey, fresh fruit' } }
          ]
        },
        {
          title: { it: 'Torte del giorno in vetrina', en: 'Treats of the day, in the display' },
          items: [
            { name: { it: 'Cheesecake fatta in casa', en: 'Homemade cheesecake' }, price: 5, a: [1, 3, 5, 6, 7, 8] },
            { name: 'Banana bread', price: 4.5, a: [3, 5, 6, 7, 8] },
            { name: { it: 'Carrot cake con frosting all’arancia', en: 'Carrot cake with orange frosting' }, price: 5, a: [1, 3, 5, 7, 8] }
          ]
        }
      ]
    },
    {
      id: 'succhi', title: { it: 'Succhi', en: 'Juices' },
      groups: [
        {
          title: { it: 'Freschi', en: 'Fresh' },
          items: [
            { name: 'Detox', price: 6, desc: { it: 'mela, zenzero', en: 'apple, ginger' } },
            { name: 'Booster', price: 6, desc: { it: 'arancia, carota, zenzero', en: 'orange, carrot, ginger' } },
            { name: 'OJ', price: 5, desc: { it: 'succo di arancia', en: 'orange juice' } }
          ]
        },
        {
          title: { it: 'Bio', en: 'Organic' },
          items: [
            { name: { it: 'Melograno BIO', en: 'Pomegranate BIO' }, price: 4 },
            { name: { it: 'Pesca BIO', en: 'Peach BIO' }, price: 4 },
            { name: { it: 'Ananas BIO', en: 'Pineapple BIO' }, price: 4 }
          ]
        }
      ]
    },
    {
      id: 'bibite', title: { it: 'Bibite', en: 'Soft drinks' },
      groups: [{
        items: [
          { name: { it: 'Tè limone BIO', en: 'Lemon Tea BIO' }, price: 4 },
          { name: { it: 'Tè pesca BIO', en: 'Peach Tea BIO' }, price: 4 },
          { name: { it: 'Limonata', en: 'Lemonade' }, price: 4 },
          { name: { it: 'Tonica', en: 'Tonic Water' }, price: 4 },
          { name: 'Molecola', price: 3 },
          { name: 'Molecola zero', price: 3 },
          { name: 'Ginger beer', price: 5 },
          { name: 'Kombucha', price: 5 }
        ]
      }]
    },
    {
      id: 'bar', title: { it: 'Bar', en: 'Drinks' },
      groups: [
        {
          items: [
            { name: { it: 'Birre artigianali', en: 'Craft beer' }, price: 6, tags: ['gfAvailable'] }
          ]
        },
        {
          title: { it: 'Vini (selezione)', en: 'Wine (selection)' },
          items: [
            { name: { it: 'Vino rosso, bianco', en: 'Red or white wine' }, price: 7, desc: { it: 'calice', en: 'by the glass' } },
            { name: 'Prosecco', price: 5, desc: { it: 'flute', en: 'flute' } },
            { name: { it: 'Bottiglia', en: 'Bottle' }, price: 18 }
          ]
        },
        {
          title: { it: 'Spritzando', en: 'Spritzando' },
          items: [
            { name: 'Spritz', price: 7, desc: { it: 'Orange, Bitter Rosso, Select', en: 'Orange, Bitter Rosso, Select' } },
            { name: 'Americano, Negroni', price: 8 },
            { name: 'Gin selection', price: [8, 12] }
          ]
        }
      ]
    }
  ];

  /* ===== Carta desde Google Sheets =====
     Si SHEET_CSV_URL tiene la URL de la planilla publicada como CSV
     (Archivo → Compartir → Publicar en la web → CSV), la carta se lee de ahí.
     Si está vacía, o Google no responde, se usa MENU (arriba) como respaldo.
     Plantilla con todas las columnas: docs/carta-google-sheets.csv */
  var SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA0xWKycQPswGf7j60kCZ9JPYe1pP0UtaJ1ofHLSO5VSt8z2kT6oCFlmZ8zO8MjqE--grRjph0Nmay/pub?gid=1890421613&single=true&output=csv';

  // CSV con comillas, comas y saltos de línea dentro de los campos
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

  var SHEET_TAGS = { vegan: 'vg', senza_glutine: 'gf', anche_senza_glutine: 'gfAvailable', non_disponibile: 'unavailable' };

  function both(itText, enText) {
    itText = (itText || '').trim(); enText = (enText || '').trim();
    if (!itText && !enText) return null;
    if (!enText || itText === enText) return itText || enText;
    return { it: itText || enText, en: enText };
  }
  // "4,5" / "4.5" / "8-12" / "8–12"
  function parsePrice(v) {
    v = (v || '').replace(/€/g, '').replace(/\s/g, '').replace(/,/g, '.');
    var r = v.split(/[-–]/);
    if (r.length === 2 && r[0] && r[1]) return [Number(r[0]), Number(r[1])];
    var n = Number(v);
    return isNaN(n) ? null : n;
  }
  function parseList(v, map) {
    return (v || '').split(/[,;\s]+/).map(function (x) { return x.trim(); }).filter(Boolean)
      .map(function (x) { return map ? map[x.toLowerCase()] : Number(x); })
      .filter(function (x) { return x != null && x !== '' && !(typeof x === 'number' && isNaN(x)); });
  }

  function menuFromCsv(text) {
    var rows = parseCSV(text);
    // Encabezados legibles ("Nome (IT)", "Prezzo (€)", "Codice sezione") o técnicos ("nome_it")
    var HEAD_ALIASES = { codice_sezione: 'sezione_id', prezzo_eur: 'prezzo' };
    var head = rows.shift().map(function (h) {
      var k = h.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/€/g, 'eur').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
      return HEAD_ALIASES[k] || k;
    });
    var col = function (r, name) { var i = head.indexOf(name); return i === -1 ? '' : (r[i] || '').trim(); };
    // Las filas se suman a su sección y grupo aunque estén desordenadas en la planilla
    var sections = [], byId = {}, section = null, group = null, lastItem = null;

    rows.forEach(function (r) {
      var sid = col(r, 'sezione_id');
      var nome = both(col(r, 'nome_it'), col(r, 'nome_en'));
      var price = parsePrice(col(r, 'prezzo'));
      if (!sid || !nome || price === null) return; // fila incompleta: se ignora

      if (!byId[sid]) {
        byId[sid] = { id: sid, title: both(col(r, 'sezione_it'), col(r, 'sezione_en')) || sid, groups: [], _groups: {} };
        sections.push(byId[sid]);
      }
      if (section !== byId[sid]) lastItem = null;
      section = byId[sid];
      if (/^s[iì]$/i.test(col(r, 'orario_cucina'))) section.kitchenNote = true;

      var key = col(r, 'gruppo_it') + '|' + col(r, 'gruppo_en');
      if (!section._groups[key]) {
        var g = { items: [] };
        var gt = both(col(r, 'gruppo_it'), col(r, 'gruppo_en'));
        if (gt) g.title = gt;
        section._groups[key] = g;
        section.groups.push(g);
      }
      if (group !== section._groups[key]) lastItem = null;
      group = section._groups[key];

      var tags = parseList(col(r, 'etichette'), SHEET_TAGS);
      var tipo = col(r, 'tipo').toLowerCase();
      var entry = { name: nome, price: price };
      if (tags.length) entry.tags = tags;

      if (tipo === 'extra') {
        (group.extras = group.extras || []).push(entry);
        var et = both(col(r, 'titolo_extra_it'), col(r, 'titolo_extra_en'));
        if (et && !group.extrasTitle) group.extrasTitle = et;
      } else if (tipo === 'aggiunta' && lastItem) {
        (lastItem.adds = lastItem.adds || []).push(entry);
      } else {
        var desc = both(col(r, 'descrizione_it'), col(r, 'descrizione_en'));
        if (desc) entry.desc = desc;
        var a = parseList(col(r, 'allergeni'));
        if (a.length) entry.a = a;
        group.items.push(entry);
        lastItem = entry;
      }
    });

    // Grupos que quedaron sin platos (solo extras sueltos) no se muestran
    sections.forEach(function (s) {
      delete s._groups;
      s.groups = s.groups.filter(function (g) { return g.items.length || (g.extras && g.extras.length); });
    });
    return sections.filter(function (s) { return s.groups.length; });
  }

  function loadSheet() {
    if (!SHEET_CSV_URL || !window.fetch) return;
    fetch(SHEET_CSV_URL, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
      .then(function (text) {
        var data = menuFromCsv(text);
        if (!data.length) throw new Error('planilla vacía');
        MENU = data;
        render();
      })
      .catch(function (err) {
        // Se queda con la carta incluida en el código
        if (window.console) console.warn('Carta: no se pudo leer Google Sheets (' + err.message + '), uso la versión incluida.');
      });
  }

  M.menuFromCsv = menuFromCsv; // para pruebas

  var TAGS = {
    vg: { it: 'Vegan', en: 'Vegan' },
    gf: { it: 'Senza glutine', en: 'Gluten free' },
    gfAvailable: { it: 'Anche senza glutine', en: 'Gluten-free available' },
    unavailable: { it: 'Non disponibile', en: 'Currently unavailable' }
  };

  function priceText(p) {
    if (!Array.isArray(p)) return M.formatPrice(p);
    return M.lang() === 'it' ? p[0] + '–' + p[1] + ' €' : '€' + p[0] + '–' + p[1];
  }

  function tagsHtml(tags) {
    return (tags || []).map(function (k) { return '<span class="badge">' + esc(tr(TAGS[k])) + '</span>'; }).join('');
  }

  function allergensHtml(list) {
    if (!list || !list.length) return '';
    var names = t('allergens');
    var label = t('menu.allergensLabel') + ': ' + list.map(function (n) { return names[n - 1]; }).join(', ');
    return '<span class="allergens" role="img" aria-label="' + esc(label) + '">' +
      '<span aria-hidden="true">' + esc(t('menu.allergensLabel')) + ' ' + list.join(' · ') + '</span></span>';
  }

  function itemHtml(it) {
    var meta = tagsHtml(it.tags) + allergensHtml(it.a);
    var adds = (it.adds || []).map(function (x) { return '+ ' + esc(tr(x.name)) + ' ' + priceText(x.price); }).join(' · ');
    return '<li class="item">' +
      '<span class="item__name">' + esc(tr(it.name)) + '</span>' +
      '<span class="item__price">' + priceText(it.price) + '</span>' +
      (it.desc ? '<span class="item__desc">' + esc(tr(it.desc)) + '</span>' : '') +
      (adds ? '<span class="item__adds">' + adds + '</span>' : '') +
      (meta ? '<span class="item__meta">' + meta + '</span>' : '') +
      '</li>';
  }

  function extrasHtml(group) {
    if (!group.extras) return '';
    return '<div class="extras"><p class="extras__title">' + esc(tr(group.extrasTitle) || t('menu.extras')) + '</p><ul>' +
      group.extras.map(function (x) {
        return '<li><span>+ ' + esc(tr(x.name)) + ' ' + tagsHtml(x.tags) + '</span><span>' + priceText(x.price) + '</span></li>';
      }).join('') + '</ul></div>';
  }

  var rendered = false;
  function render() {
    var list = document.getElementById('menu-list');
    if (!list) return;

    document.getElementById('allergen-legend').innerHTML = t('allergens').map(function (n) {
      return '<li>' + esc(n) + '</li>';
    }).join('');

    document.getElementById('menu-nav').innerHTML = MENU.map(function (cat) {
      return '<li><a href="#m-' + cat.id + '">' + esc(tr(cat.title)) + '</a></li>';
    }).join('');

    list.innerHTML = MENU.map(function (cat) {
      return '<section class="menu-cat" id="m-' + cat.id + '" aria-labelledby="m-' + cat.id + '-t">' +
        '<div class="menu-cat__head"><h2 class="menu-cat__title" id="m-' + cat.id + '-t">' + esc(tr(cat.title)) + '</h2>' +
        (cat.kitchenNote ? '<span class="menu-cat__note">' + M.range(M.BIZ.kitchen) + '</span>' : '') + '</div>' +
        cat.groups.map(function (g) {
          return (g.title ? '<h3 class="menu-group__title">' + esc(tr(g.title)) + '</h3>' : '') +
            '<ul class="items">' + g.items.map(itemHtml).join('') + '</ul>' + extrasHtml(g);
        }).join('') +
        '</section>';
    }).join('');

    // Solo se anima la primera vez; al cambiar de idioma se muestra directo
    if (!rendered) M.setupReveal(list);
    else list.querySelectorAll('.menu-cat').forEach(function (el) { el.classList.add('reveal', 'is-in'); });
    rendered = true;
    observe();
  }
  document.addEventListener('langchange', render);
  document.addEventListener('DOMContentLoaded', loadSheet);

  // Resalta la sección visible (solo en una columna; en dos columnas se ven varias a la vez)
  var observer;
  var columns = window.matchMedia('(min-width: 900px)');
  function observe() {
    if (!('IntersectionObserver' in window)) return;
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      if (columns.matches) return;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('#menu-nav a').forEach(function (a) {
          var active = a.getAttribute('href') === '#' + entry.target.id;
          a.setAttribute('aria-current', String(active));
          if (active) {
            var nav = a.closest('ul');
            nav.scrollTo({ left: a.offsetLeft - nav.offsetLeft - 20, behavior: 'smooth' });
          }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('.menu-cat').forEach(function (el) { observer.observe(el); });
  }
})();

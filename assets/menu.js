/* ==========================================================================
   MANLY The Office — carta (solo menu.html). Depende de assets/site.js.
   Fuente: carta oficial "MENU INGLESE 2026".
   - Nombres de platos: como en la carta (versión en italiano pendiente).
   - Descripciones IT: traducción provisoria, revisar con la carta en italiano.
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
            { name: 'Espresso dbl', price: 3 },
            { name: 'Doppio macchiato', price: 3.5 },
            { name: 'Piccolo', price: 2 },
            { name: 'Cortado', price: 3.5 },
            { name: 'Cappuccino', price: 2 },
            { name: 'Latte macchiato', price: 2 },
            { name: 'Flat white', price: 3.5 },
            { name: 'Americano', price: 2 },
            { name: 'Long Black', price: 3.5 },
            { name: 'Mocha', price: 3 },
            { name: 'Decaf', price: 1.6 }
          ],
          extras: [
            { name: { it: 'Shot extra di espresso', en: 'Extra espresso shot' }, price: 1.5 },
            { name: { it: 'Latte d’avena', en: 'Oat milk' }, price: 0.5 },
            { name: { it: 'Formato grande', en: 'Large size' }, price: 1 }
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
            { name: 'Cold brew', price: 6, desc: { it: 'Di stagione', en: 'Seasonal' } }
          ],
          extras: [
            { name: { it: 'Latte d’avena', en: 'Oat milk' }, price: 1 }
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
            { name: 'Selection hot teas', price: 4 }
          ],
          extras: [
            { name: { it: 'Latte d’avena', en: 'Oat milk' }, price: 1 },
            { name: { it: 'Versione iced', en: 'Iced' }, price: 0.5 }
          ]
        }]
      },
      {
        id: 'brunch', title: { it: 'Brunch', en: 'Brunch' }, kitchenNote: true,
        groups: [
          {
            items: [
              { name: 'Farmer bagel', price: 13, a: [1, 7, 8],
                desc: { it: 'pollo, insalata, pomodoro, sottaceti, bacon, cheddar, maionese piccante',
                        en: 'chicken, salad, tomato, pickles, bacon, cheddar cheese, spicy mayo' } },
              { name: 'Bacon & cheese pancake', price: 10, a: [1, 3, 5, 7, 8],
                desc: { it: 'bacon e formaggio fuso', en: 'bacon and melted cheese' },
                adds: [{ name: { it: 'sciroppo d’acero', en: 'maple syrup' }, price: 1 }] },
              { name: 'Salmon bagel', price: 11, a: [1, 7, 8, 9, 11],
                desc: { it: 'salmone affumicato, cetriolo, cipolle marinate, formaggio spalmabile ed erba cipollina',
                        en: 'smoked salmon, cucumber, marinated onions, cream cheese and chives' } },
              { name: 'BLT Bagel', price: 9.5, a: [1, 6, 7, 8, 9, 11],
                desc: { it: 'bacon, lattuga, pomodoro e maionese', en: 'bacon, lettuce, tomato and mayo' } },
              { name: 'ALT Bagel', price: 9.5, a: [1, 6, 7, 8, 9, 11],
                desc: { it: 'avocado, lattuga, pomodoro e maionese', en: 'avocado, lettuce, tomato and mayo' } },
              { name: 'Avocado toast 2.0', price: 16, a: [1, 4, 5, 6, 7, 8, 11],
                desc: { it: 'pane multicereali, hummus di barbabietola, salmone affumicato, avocado, semi misti, feta, melograno (di stagione)',
                        en: 'multigrain bread, beetroot hummus, smoked salmon, avocado, mixed seeds, feta cheese, pomegranate (seasonal)' } },
              { name: 'Avocado toast', price: 10, a: [1, 7, 8, 11],
                desc: { it: 'pane multicereali, avocado, semi misti, feta, melograno (di stagione)',
                        en: 'multigrain bread, avocado, mixed seeds, feta cheese, pomegranate (seasonal)' } }
            ]
          },
          {
            title: { it: 'Da condividere', en: 'To share' },
            items: [
              { name: 'Sweet potato fries', price: 4.5 }
            ],
            extras: [
              { name: { it: 'Avocado', en: 'Avocado' }, price: 3 },
              { name: { it: 'Hummus di barbabietola', en: 'Beetroot hummus' }, price: 2.5, tags: ['vg'] },
              { name: { it: 'Salmone affumicato', en: 'Smoked salmon' }, price: 3.5 },
              { name: { it: 'Bacon', en: 'Bacon' }, price: 3 },
              { name: { it: 'Pane senza glutine', en: 'Gluten-free bread' }, price: 3, tags: ['gf'] }
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
                desc: { it: 'crema di nocciole, frutta fresca', en: 'hazelnut cream, fresh fruit' } },
              { name: 'Maple Pancakes', price: 11,
                desc: { it: 'sciroppo d’acero, frutta fresca', en: 'maple syrup, fresh fruit' } },
              { name: 'Yoyo Pancakes', price: 10, a: [1, 3, 5, 6, 7, 8],
                desc: { it: 'yogurt greco, frutta fresca, miele', en: 'greek yogurt, fresh fruit, honey' } },
              { name: 'New York BB', price: 9.5, a: [3, 5, 6, 7, 8],
                desc: { it: 'banana bread, bacon, sciroppo d’acero', en: 'banana bread, bacon, maple syrup' },
                adds: [
                  { name: { it: 'yogurt greco', en: 'greek yogurt' }, price: 1.5 },
                  { name: { it: 'burro di arachidi', en: 'peanut butter' }, price: 1.5 }
                ] },
              { name: 'Peanut BB', price: 10, a: [3, 5, 6, 7, 8],
                desc: { it: 'banana bread, yogurt greco, burro di arachidi, miele, frutta fresca',
                        en: 'banana bread, greek yogurt, peanut butter, honey, fresh fruit' } },
              { name: 'Granola bowl', price: 8, a: [1, 5, 6, 7, 8],
                desc: { it: 'yogurt, granola, miele, frutta fresca', en: 'yogurt, granola, honey, fresh fruit' } }
            ]
          },
          {
            title: { it: 'In vetrina, ogni giorno', en: 'Treats of the day, in the display' },
            items: [
              { name: 'Homemade cheesecake', price: 5, a: [1, 3, 5, 6, 7, 8] },
              { name: 'Banana bread', price: 4.5, a: [3, 5, 6, 7, 8] },
              { name: 'Carrot cake with orange frosting', price: 5, a: [1, 3, 5, 7, 8] }
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
              { name: 'OJ', price: 5, desc: { it: 'spremuta d’arancia', en: 'orange juice' } }
            ]
          },
          {
            title: { it: 'Bio', en: 'Organic' },
            items: [
              { name: 'Pomegranate BIO', price: 4 },
              { name: 'Peach BIO', price: 4 },
              { name: 'Pineapple BIO', price: 4 }
            ]
          }
        ]
      },
      {
        id: 'bibite', title: { it: 'Bibite', en: 'Soft drinks' },
        groups: [{
          items: [
            { name: 'Lemon Tea BIO', price: 4 },
            { name: 'Peach Tea BIO', price: 4 },
            { name: 'Lemonade', price: 4 },
            { name: 'Tonic Water', price: 4 },
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
              { name: 'Craft beer', price: 6, tags: ['gfAvailable'] }
            ]
          },
          {
            title: { it: 'Vini (selezione)', en: 'Wine (selection)' },
            items: [
              { name: { it: 'Vino rosso o bianco', en: 'Red or white wine' }, price: 7,
                desc: { it: 'al calice', en: 'by the glass' } },
              { name: 'Prosecco', price: 5, desc: { it: 'flûte', en: 'flute' } },
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

  var TAGS = {
    vg: { it: 'Vegan', en: 'Vegan' },
    gf: { it: 'Senza glutine', en: 'Gluten free' },
    gfAvailable: { it: 'Anche senza glutine', en: 'Gluten-free available' }
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

# MANLY The Office — sitio web (boceto)

Sitio mobile first, bilingüe IT/EN para **MANLY The Office**, specialty coffee & brunch en San Frediano, Firenze.
Sin frameworks ni dependencias, salvo Google Fonts (Jost + DM Mono).

## Estructura

```
index.html         → inicio: vidriera, shop de L'Australiano, adelanto del menú, orari, historia
menu.html          → carta completa
assets/site.css    → estilos compartidos
assets/site.js     → lógica compartida: idioma, horario en vivo, menú hamburguesa, shop, animaciones
assets/menu.js     → datos y render de la carta (solo menu.html)
img/               → fotos y video del local
docs/              → material de referencia (logo)
```

## Dónde se editan los datos

| Qué                                  | Dónde                              |
|--------------------------------------|------------------------------------|
| Horario, teléfono, email, IG         | `BIZ` en `assets/site.js`          |
| Textos IT / EN                       | `I18N` en `assets/site.js`         |
| Producto del shop y precios          | `PRODUCT` en `assets/site.js`      |
| Medio de pedido / pago               | `CHECKOUT_PROVIDERS` en `assets/site.js` |
| Carta (platos, precios, alérgenos)   | `MENU` en `assets/menu.js`         |
| Colores y tipografía                 | `:root` en `assets/site.css`       |

### Shop: de WhatsApp a pasarela de pago

La selección genera un objeto `order` (`buildOrder()`) que se pasa a `CHECKOUT.start(order)`.
Hoy el proveedor es WhatsApp. Para una pasarela real se agrega otro proveedor en
`CHECKOUT_PROVIDERS` y se apunta `CHECKOUT` a él; la interfaz no cambia.

## Carta editable desde Google Sheets

La carta (`menu.html`) puede leerse de una planilla de Google, así Maykol cambia precios o platos sin tocar código.
Si la planilla no está configurada o Google no responde, se muestra la carta incluida en `assets/menu.js`.

**Planilla:** [MANLY The Office — Carta del sito](https://docs.google.com/spreadsheets/d/1wTb5QEdet-uMQH8-8eo1VwHeKGCkPNCQtkUHUb727j8/edit)
(pestaña «Carta» con los datos, pestaña «Istruzioni» con la guía en italiano para Maykol). Celdas en formato texto,
desplegables en Tipo / Etichette / Orario cucina, y una nota en cada encabezado.

**Conectada:** la pestaña «Carta» está publicada como CSV y su URL está en `SHEET_CSV_URL` (`assets/menu.js`).
Si Google no responde, la web muestra la carta incluida en el código.

**Columnas:**

| Columna (encabezado en la planilla) | Qué va |
|---|---|
| `sezione_id` | identificador sin espacios (`caffetteria`, `brunch`…). Define el orden de las secciones |
| `sezione_it` / `sezione_en` | nombre de la sección |
| `orario_cucina` | `si` para mostrar el horario de cocina junto al título (brunch) |
| `gruppo_it` / `gruppo_en` | subtítulo opcional dentro de la sección (`Da condividere`, `Bio`…) |
| `tipo` | `piatto`, `extra` (lista al pie del grupo) o `aggiunta` (+ al plato de arriba) |
| `nome_it` / `nome_en` | nombre; si es igual en los dos idiomas, completar solo uno |
| `descrizione_it` / `descrizione_en` | descripción opcional |
| `prezzo` | `4,5` · `4.5` · `8-12` |
| `allergeni` | números UE separados por coma: `1,7,8` |
| `etichette` | `vegan`, `senza_glutine`, `anche_senza_glutine`, `non_disponibile` |
| `titolo_extra_it` / `titolo_extra_en` | título de la lista de extras (por defecto "Extra") |

Las filas incompletas (sin sección, nombre o precio) se ignoran. Los cambios en la planilla tardan unos minutos en verse (caché de Google).

### Pestaña «Caffè»

Tres filas fijas (`australiano`, `singola_origine`, `filtro`): Maykol completa nombre, país, productor, proceso y notas
del singola origine y del filtro de turno. Si están vacíos, la web muestra «Chiedi al banco quale abbiamo oggi».
URL en `COFFEES_CSV_URL` (`assets/site.js`). La columna «Link D612» agrega «Acquista da D612» en la tarjeta. Requiere que la pestaña esté publicada (Publicar en la web).

## Instagram

Sección «Dal nostro Instagram» en `index.html` con los 6 últimos reels (código oficial de Instagram).
Para cambiarlos, reemplazar el ID de cada reel (`/reel/ID/`) en los `blockquote`. El script de Instagram se carga
solo cuando la sección está cerca de la pantalla.

### Pestaña «Info»

Valoración y cantidad de reseñas de Google (`valutazione`, `recensioni`). La web redondea la cantidad hacia abajo a la
decena (671 → «oltre 670»). URL en `INFO_CSV_URL` (`assets/site.js`); requiere que la pestaña esté publicada.

### Pestaña «Chiusure»

Una fila por cierre: `Dal`, `Al` (gg/mm/aaaa) y motivo opcional en IT/EN. En esos días el estado dice
«Chiuso (motivo) · apre …», la lista de horarios marca el día como cerrado y en «Orari» aparece un aviso desde
14 días antes. URL en `CLOSURES_CSV_URL` (`assets/site.js`). Probar con `?data=2026-08-12&ora=10:00`.

## Pedidos y contacto por Instagram

El botón «Ordina su Instagram» copia el pedido al portapapeles y abre el chat de Instagram de MANLY
(`https://ig.me/m/manly_the_office_florence`), porque Instagram no permite dejar el mensaje escrito.
El botón flotante abajo a la izquierda abre el mismo chat. El proveedor de WhatsApp sigue en el código
(`CHECKOUT_PROVIDERS.whatsapp`) por si en el futuro tienen WhatsApp Business.

## Sección «Contatti» y email

`#contatti`, al final del inicio: email, teléfono, Instagram y dirección, más un formulario «Scrivici».
El formulario no envía nada desde la web (no hay backend): arma un `mailto:` con asunto y mensaje y abre
la app de correo del visitante. El email está en HTML (funciona sin JavaScript) y en `BIZ.email`;
si cambia, hay que actualizar los dos y el JSON-LD de `index.html`.

## Privacidad y cookies

- Aviso con «Accetta» / «Rifiuta» (`manly-consent` en el navegador). Sin aceptar, el mapa de Google y los posts
  de Instagram no se cargan: muestran un botón para abrirlos uno por uno.
- `privacy.html` (IT/EN) con titular, datos, cookies y derechos. **Conviene que la revise un profesional antes de publicar.**
- Tipografías alojadas en `assets/fonts/` (sin Google Fonts).

## Google y vista previa al compartir

- **Ficha para Google**: bloque `application/ld+json` (tipo `CafeOrCoffeeShop`) en el `<head>` de cada página,
  con dirección, teléfono, horario, menú e Instagram. Verificable en https://search.google.com/test/rich-results
- **Vista previa** al compartir el link (WhatsApp, Instagram, Facebook): etiquetas `og:` + `img/og-manly.jpg` (1200×630).
- **sitemap.xml** con las dos páginas, para enviarlo en Google Search Console.

Las URLs son absolutas a `https://marcovf9.github.io/manly-the-office/`. Con dominio propio hay que reemplazarlas
en `index.html`, `menu.html` y `sitemap.xml` (buscar `marcovf9.github.io`).

## Lista de fotos

| Dónde | Archivos |
|---|---|
| Inicio | `acquerello-vidriera.jpg` (acuarela de @qualali_studio) |
| Shop | `australiano-etichetta.jpg` (etiqueta de L’Australiano) |
| Al banco · Caffetteria | `caffe-01…13.jpg` (carrusel) |
| Al banco · Brunch | `brunch-01…06.jpg`, en el orden del menú y con el nombre del plato: Farmer bagel, Avocado toast 2.0, Avocado toast, Pancakes, Cheesecake, Carrot cake |
| Storia · intro | `maykol-alice.jpg` |
| Storia 01 · Firenze | video `en-la-barra.mp4` |
| Storia 02 · Australia | `storia-australia.jpg` |
| Storia 03 · Pandemia | `storia-pandemia.jpg` |
| Storia 04 · Apertura | `storia-apertura.jpg` |

Fotos en `img/`, cada una en dos tamaños: `nombre.jpg` (hasta 1080 px de ancho) y `nombre-640.jpg` (para celular).
El navegador elige solo con `srcset`/`sizes`. Video en H.264 sin audio, 540×816 (los iPhone graban en HEVC, que Chrome no reproduce).

Para agregar una foto nueva (macOS, sin instalar nada):

```bash
sips -s format jpeg -s formatOptions 56 --resampleWidth 1080 original.jpg --out img/nombre.jpg
sips -s format jpeg -s formatOptions 66 --resampleWidth 640 original.jpg --out img/nombre-640.jpg
```


`img/gambero-rosso.png`: logo oficial de Gambero Rosso (tomado de la cabecera de gamberorosso.it), usado sin modificar en el link a la nota.
## Probar estados del horario

El indicador usa siempre la hora de Florencia. Para ver otros estados:

```
index.html?giorno=2&ora=14:40
```

`giorno`: 0 = domenica … 6 = sabato.

## Caché

`index.html` y `menu.html` cargan `assets/*.css|js?v=AAAAMMDDhhmm`. Al publicar cambios en `assets/`, actualizar ese
número para que los navegadores descarguen la versión nueva:

```bash
V=$(date +%Y%m%d%H%M); sed -i '' -E "s#(assets/[a-z]+\.(css|js))(\?v=[0-9]+)?\"#\1?v=$V\"#g" index.html menu.html
```

## Auditoría (Lighthouse, móvil)

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Inicio | 96 | 100 | 100 | 100 |
| Menu | 99 | 100 | 100 | 100 |
| Privacy | 99 | 100 | 100 | — (noindex a propósito) |

`404.html` usa `<base href="/manly-the-office/">`: con dominio propio, cambiarlo a `<base href="/">`.

## Ramas

| Rama         | Uso                                                  |
|--------------|------------------------------------------------------|
| `feat/*`     | una tarea por rama, sale de `develop`                |
| `develop`    | integración de tareas terminadas                     |
| `main`       | versión estable y aprobada                           |
| `produccion` | lo que se publica (GitHub Pages)                     |

Flujo: `feat/*` → `develop` → `main` → `produccion`. Merges con `--no-ff`.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `style:`, `docs:`, `refactor:`, `chore:`.

## Pendientes

- [ ] Publicar en la web las pestañas «Info» y «Chiusure»
- [ ] Revisión de `privacy.html` por un profesional
- [ ] Confirmar con la cocina los alérgenos base de los pancakes (hoy Nocciolotto solo tiene 8 y Maple ninguno)

- [ ] Publicar en la web la pestaña «Info» (Archivo → Compartir → Publicar en la web)

- [x] Pestaña «Caffè» publicada (Hambela en singola origine, Kiandu AB en filtro)
- [x] Aviso de cookies y página de privacidad

- [x] Planilla de Google Sheets conectada
- [ ] Revisar con Maykol los alérgenos de la carta impresa (ver notas abajo)
- [ ] Dar de alta el sitio en Google Search Console y enviar `sitemap.xml`

- [x] Nombres y descripciones de la carta en italiano (de la carta impresa)
- [x] Precios: se usan los de la carta italiana (avocado y pane senza glutine 2,5 €, New York BB 9 €)
- [x] Horario de cocina y brunch: 8:30–14:00
- [ ] Volver a ofrecer molido: `available: true` en `PRODUCT.grinds` (assets/site.js)
- [ ] Alérgenos que faltan en la carta (Nocciolotto, Maple Pancakes, fries, bebidas)
- [ ] Fotos que faltan o son provisorias (ver *Lista de fotos*)
- [x] Crédito y enlace a la autora de la acuarela (@qualali_studio)
- [x] Permiso de @qualali_studio para usar la acuarela
- [ ] Logo en alta resolución (hoy redibujado en SVG desde captura)
- [ ] Confirmar WhatsApp Business en el +39 055 906 2024
- [ ] Revisión de textos por un nativo (IT / EN)
- [ ] Envío a domicilio en el shop (hoy solo ritiro in negozio)

### Notas sobre alérgenos (carta impresa)

La web reproduce exactamente los alérgenos de la carta. Puntos a confirmar con la cocina:

- **Salmon bagel** (1,7,8,9,11): lleva salmón ahumado pero no figura el 4 (pesce); el Avocado toast 2.0 sí lo tiene.
- **Farmer bagel, BLT y ALT**: llevan mayonesa y no figura el 3 (uova).
- **Nocciolotto y Maple Pancakes**: sin alérgenos en la carta; la crema de avellanas suele llevar 8 (frutta a guscio).
- **Vinos y spritz**: suelen contener 12 (solfiti), no figura.
- Bebidas, extras y patate dolci no tienen alérgenos indicados.

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
| Horario, teléfono, WhatsApp, IG      | `BIZ` en `assets/site.js`          |
| Textos IT / EN                       | `I18N` en `assets/site.js`         |
| Producto del shop y precios          | `PRODUCT` en `assets/site.js`      |
| Medio de pedido / pago               | `CHECKOUT_PROVIDERS` en `assets/site.js` |
| Carta (platos, precios, alérgenos)   | `MENU` en `assets/menu.js`         |
| Colores y tipografía                 | `:root` en `assets/site.css`       |

### Shop: de WhatsApp a pasarela de pago

La selección genera un objeto `order` (`buildOrder()`) que se pasa a `CHECKOUT.start(order)`.
Hoy el proveedor es WhatsApp. Para una pasarela real se agrega otro proveedor en
`CHECKOUT_PROVIDERS` y se apunta `CHECKOUT` a él; la interfaz no cambia.

## Google y vista previa al compartir

- **Ficha para Google**: bloque `application/ld+json` (tipo `CafeOrCoffeeShop`) en el `<head>` de cada página,
  con dirección, teléfono, horario, menú e Instagram. Verificable en https://search.google.com/test/rich-results
- **Vista previa** al compartir el link (WhatsApp, Instagram, Facebook): etiquetas `og:` + `img/og-manly.jpg` (1200×630).
- **sitemap.xml** con las dos páginas, para enviarlo en Google Search Console.

Las URLs son absolutas a `https://marcovf9.github.io/manly-the-office/`. Con dominio propio hay que reemplazarlas
en `index.html`, `menu.html` y `sitemap.xml` (buscar `marcovf9.github.io`).

## Lista de fotos

| # | Dónde | Foto definitiva | Estado |
|---|-------|-----------------|--------|
| 1 | Inicio | La vidriera de Via Pisana | ✅ `acquerello-vidriera.jpg` (acuarela) |
| 2 | Shop | La bolsa de L’Australiano sobre la barra, fondo limpio, luz natural | Etiqueta nueva `australiano-etichetta.jpg` (sirve hasta tener foto de la bolsa) |
| 3 | Al banco · Caffetteria | Carrusel de 10 fotos | ✅ `caffe-01…10.jpg` + `latte-art.jpg` |
| 4 | Al banco · Brunch | Carrusel de 4 fotos | ✅ `avocado-toast.jpg`, `brunch-02…04.jpg` |
| 5 | Storia · apertura | Maykol y Alice detrás de la barra | ✅ `maykol-alice.jpg` |
| 6 | Storia 01 · Firenze | Maykol haciendo latte art | ✅ Video `en-la-barra.mp4` |
| 7 | Storia 02 · Australia (opcional) | Maykol en Australia (archivo) | Sin foto: capítulo solo texto |

Fotos en `img/`, cada una en dos tamaños: `nombre.jpg` (hasta 1080 px de ancho) y `nombre-640.jpg` (para celular).
El navegador elige solo con `srcset`/`sizes`. Video en H.264 sin audio, 540×816 (los iPhone graban en HEVC, que Chrome no reproduce).

Para agregar una foto nueva (macOS, sin instalar nada):

```bash
sips -s format jpeg -s formatOptions 56 --resampleWidth 1080 original.jpg --out img/nombre.jpg
sips -s format jpeg -s formatOptions 66 --resampleWidth 640 original.jpg --out img/nombre-640.jpg
```

## Probar estados del horario

El indicador usa siempre la hora de Florencia. Para ver otros estados:

```
index.html?giorno=2&ora=14:40
```

`giorno`: 0 = domenica … 6 = sabato.

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

- [ ] Precios definitivos de L'Australiano (hoy 25 € / 100 € orientativos)
- [x] Nombres y descripciones de la carta en italiano (de la carta impresa)
- [x] Precios: se usan los de la carta italiana (avocado y pane senza glutine 2,5 €, New York BB 9 €)
- [x] Horario de brunch confirmado: 8:30–14:30
- [ ] Volver a ofrecer molido: `available: true` en `PRODUCT.grinds` (assets/site.js)
- [ ] Alérgenos que faltan en la carta (Nocciolotto, Maple Pancakes, fries, bebidas)
- [ ] Fotos que faltan o son provisorias (ver *Lista de fotos*)
- [x] Crédito y enlace a la autora de la acuarela (@qualali_studio)
- [x] Permiso de @qualali_studio para usar la acuarela
- [ ] Logo en alta resolución (hoy redibujado en SVG desde captura)
- [ ] Confirmar WhatsApp Business en el +39 055 906 2024
- [ ] Revisión de textos por un nativo (IT / EN)
- [ ] Envío a domicilio en el shop (hoy solo ritiro in negozio)

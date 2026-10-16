# MANLY The Office — sitio web (boceto)

Página única, mobile first, bilingüe IT/EN para **MANLY The Office**, specialty coffee & brunch en San Frediano, Firenze.

Todo vive en `index.html` (HTML + CSS + JS). Sin frameworks ni dependencias, salvo Google Fonts (Fraunces + Barlow).

## Estructura

```
index.html   → todo el sitio
img/         → fotos del local (pendientes)
docs/        → material de referencia (logo)
```

Secciones: Hero · Orari · Il menu · Il nostro caffè · Shop · La nostra storia · Dove siamo · Footer.

## Dónde se editan los datos

Todo está en el `<script>` al final de `index.html`:

| Qué                              | Dónde                    |
|----------------------------------|--------------------------|
| Horario, teléfono, WhatsApp, IG  | `BIZ`                    |
| Textos IT / EN                   | `I18N`                   |
| Carta (platos, precios, alérgenos) | `MENU`                 |
| Producto del shop y precios      | `PRODUCT`                |
| Medio de pedido / pago           | `CHECKOUT_PROVIDERS`     |

### Shop: de WhatsApp a pasarela de pago

La selección genera un objeto `order` (`buildOrder()`) que se pasa a `CHECKOUT.start(order)`.
Hoy el proveedor es WhatsApp. Para una pasarela real se agrega otro proveedor en
`CHECKOUT_PROVIDERS` y se apunta `CHECKOUT` a él; la interfaz no cambia.

### Fotos

Cada hueco `.ph` tiene la sugerencia de toma. Para reemplazarlo:

```html
<img src="img/hero.jpg" alt="Descripción" width="1200" height="1500" loading="lazy">
```

En el hero usar `fetchpriority="high"` en lugar de `loading="lazy"`.

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
- [ ] Nombres de la carta en italiano y revisión de las descripciones IT
- [ ] Alérgenos que faltan en la carta (Nocciolotto, Maple Pancakes, fries, bebidas)
- [ ] Fotos del local (hero, café, shop, storia)
- [ ] Logo en alta resolución (hoy redibujado en SVG desde captura)
- [ ] Confirmar WhatsApp Business en el +39 055 906 2024
- [ ] Revisión de textos por un nativo (IT / EN)
- [ ] Envío a domicilio en el shop (hoy solo ritiro in negozio)

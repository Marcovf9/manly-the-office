# MANLY The Office — sitio web (boceto)

Página única, mobile first, bilingüe IT/EN para **MANLY The Office**, specialty coffee & brunch en San Frediano, Firenze.

## Estructura

```
index.html   → todo el sitio (HTML + CSS + JS)
img/         → fotos del local
docs/        → material de referencia (logo, notas)
```

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

- Precios definitivos de L'Australiano (250 g / 1 kg)
- Nombres de la carta en italiano
- Fotos del local
- Logo en alta resolución (PNG/SVG)

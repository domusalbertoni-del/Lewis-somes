# Lewis Somes — Landing

Landing oficial de **Lewis Somes** (Drums Kit Reggaeton Chileno Vol. 1 + Beats + Merch). Producción y venta del pack se procesan vía [Toliv](https://www.toliv.com).

🔗 Producción: [https://lewissomes.com](https://lewissomes.com) — alias: `lewissomes.toliv.com`

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Framer Motion** para animaciones de entrada
- ESLint 10 con `eslint-plugin-react-hooks` y `react-refresh`

## Estructura

```
src/
  components/
    Hero.jsx              — Portada, CTA "Comprar Librería" -> #comprar
    PackShowcase.jsx      — Vitrina del pack (sección 01)
    VideoReel.jsx         — Reel de videos/fotos
    SoundCategories.jsx   — Categorías de sonidos (Kicks, Snares, FX, Loops, Melodías)
    DawCompatibility.jsx  — DAWs compatibles
    Merch.jsx             — LS Merch Oficial (link a tienda Toliv merch-ls-7692)
    BuySection.jsx        — Compra del pack + acceso a BeatStars
    Contact.jsx           — Teléfono + email
    Navbar.jsx            — Navegación (Contacto, Grandes Éxitos en Spotify)
    Footer.jsx            — Redes sociales
  lib/
    checkout.js           — Builder de URL de checkout Toliv con payload prefilled
  App.jsx
  main.jsx
public/
  assets/                 — imágenes, videos, fuentes locales
```

## Variables de entorno

Crear `.env.local` (o configurar en el host) para sobreescribir defaults:

```bash
VITE_CHECKOUT_URL=https://www.toliv.com/checkout
VITE_BEATSTARS_LINK=https://lewissomes.beatstars.com
VITE_MERCH_LINK=https://www.toliv.com/store/merch-ls-7692
```

## Flujo de compra

El botón **"Comprar Ahora"** abre el checkout de Toliv con el pedido del pack ya precargado. El payload (orders + branch_office) se serializa con `encodePrefill()` en `src/lib/checkout.js` y se envía como **hash fragment** (`#prefill=...`) para evitar el límite de URL del ALB.

El checkout de Toliv (`/checkout`) lee el hash, decodifica el payload base64 (UTF-8 preservado vía `TextDecoder`), hidrata `localStorage` (`orders`, `branchOffice`, `checkoutPrefillCustomer`, `prefillCameFromExternal`) y muestra el formulario listo para pagar — para Tienda Digital se oculta la sección de despacho.

Producto actual del pack:
- `branch_office_id`: 7691 (`LIBRERÍA LEWIS SOMES`)
- `product_id`: 144591 / `branch_offices_products_list.id`: 26260
- precio: $25.000 CLP (de $50.000)

## Scripts

```bash
npm run dev        # Vite dev server (HMR)
npm run build      # build de producción a dist/
npm run preview    # servir el build
npm run lint       # eslint
```

## Deploy

Hosteado en **AWS Amplify** con dominio custom:

- `lewissomes.com` (apex) — registrado por el cliente, **debe** apuntar con CNAMEs reales (no Frame Forward; el frame forward rompe layout responsive en mobile)
- `lewissomes.toliv.com` — alias bajo `toliv.com`

Cualquier push a `main` puede dispararse manualmente al app de Amplify (zip → `create-deployment` → presigned URL → `start-deployment`). La distribución CloudFront se actualiza automáticamente.

## SEO / Mobile meta

`index.html` incluye:
- Open Graph (og:title/description/image/url)
- Twitter Card summary_large_image
- `theme-color`, `apple-touch-icon`, `apple-mobile-web-app-*`
- `viewport-fit=cover` para safe-area en iOS
- `canonical` apuntando a `https://lewissomes.toliv.com/`

## Contacto

- **Lewis Somes** — `lewissomes@gmail.com` / `+56 9 4220 5167`
- **Toliv** — soporte de checkout y plataforma

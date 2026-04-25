# Portafolio · Elian Fragozo

Portafolio personal construido con **Astro + React + Tailwind CSS + Framer Motion**.
Diseño moderno con estética oscura y acentos neón, optimizado para clientes no-técnicos
(pequeños negocios, emprendedores, empresas medianas).

## Stack

- **Astro 4** — framework principal (renderizado estático)
- **React 18** — componentes interactivos puntuales
- **Tailwind CSS 3** — sistema de diseño
- **Framer Motion** — animaciones
- **Lucide React** — iconos

## Estructura

```
Portafolio/
├── public/
│   ├── images/
│   │   ├── elian-foto.jpg          # Foto de perfil
│   │   └── projects/                # Thumbnails SVG de proyectos
│   ├── favicon.svg
│   ├── og-image.svg                 # Imagen para compartir en redes
│   └── CV_Elian_Fragozo_2026.pdf    # CV descargable (agregar manualmente)
├── src/
│   ├── components/
│   │   ├── Hero.astro               # Header con CTA y descarga de CV
│   │   ├── About.astro
│   │   ├── Services.astro           # Servicios para clientes no-tech
│   │   ├── Experience.astro         # Timeline laboral
│   │   ├── Projects.astro           # 4 proyectos con repos reales
│   │   ├── Skills.astro             # Stack técnico (badges)
│   │   ├── Contact.astro            # Form con mailto fallback
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── *.tsx                    # Efectos React (partículas, etc.)
│   ├── layouts/Layout.astro         # SEO, OG tags, fuentes
│   ├── pages/index.astro            # Página principal
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # genera ./dist
npm run preview      # previsualiza el build
```

## Antes de desplegar

Hay un par de cosas que faltan que conviene resolver antes de publicar:

**1. Agregar el CV en PDF.** El botón "Descargar CV" del Hero apunta a
`/CV_Elian_Fragozo_2026.pdf`. Copia el archivo PDF al folder `public/` con
ese nombre exacto (o ajusta la ruta en `src/components/Hero.astro`).

**2. Reemplazar la foto de perfil si quieres.** Está en
`public/images/elian-foto.jpg`. Cualquier imagen 800x1000 px (o similar
proporción 4:5) funciona.

**3. Configurar dominio en Layout.astro.** En `src/layouts/Layout.astro`
está hardcodeado `siteUrl = 'https://elianfragozo.dev'`. Cámbialo a tu
dominio real antes de deploy (afecta canonical URL y OG tags).

**4. Opcional — formulario de contacto que envíe directo.**
El form actual abre el cliente de correo del usuario con el mensaje
prellenado (mailto). Funciona bien y no requiere backend. Si quieres
que llegue directo a tu inbox sin abrir nada, integra
[Formspree](https://formspree.io) o [EmailJS](https://www.emailjs.com)
y reemplaza el bloque `mailtoUrl` en `src/components/Contact.astro`.

## Deploy

Recomendado: **Vercel** o **Netlify** (ambos detectan Astro automáticamente).

```bash
# Vercel
vercel deploy

# Netlify
netlify deploy --prod
```

GitHub Pages también funciona — necesita ajustar `astro.config.mjs` con
`site` y `base`.

## Personalización rápida

| Qué quieres cambiar | Dónde |
|---|---|
| Texto del Hero / slogan | `src/components/Hero.astro` |
| Servicios ofrecidos | `src/components/Services.astro` |
| Proyectos | `src/components/Projects.astro` |
| Stack técnico (badges) | `src/components/Skills.astro` |
| Datos de contacto | `src/components/Contact.astro` |
| Colores del tema | `tailwind.config.js` (primary, accent) |
| SEO / meta tags | `src/layouts/Layout.astro` |

## Licencia

MIT

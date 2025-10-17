# 🎨 Portafolio Personal - Desarrollador

Un portafolio moderno y minimalista creado con React, Vite, Tailwind CSS y Framer Motion.

## ✨ Características

- 🎭 **Diseño Minimalista**: Interfaz limpia y moderna
- 🌈 **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- 🎨 **Colores Atractivos**: Paleta de colores moderna con gradientes
- 📱 **Responsive**: Perfectamente adaptado a todos los dispositivos
- ⚡ **Rápido**: Construido con Vite para un rendimiento óptimo
- 🎯 **Secciones Completas**: Hero, About, Projects, Skills, Contact

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 16+ instalado
- npm o yarn

### Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:3000`

### Construcción para Producción

```bash
npm run build
```

Los archivos de producción estarán en la carpeta `dist/`.

## 🎨 Personalización

### Colores

Edita `tailwind.config.js` para cambiar los colores del tema:

```js
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Contenido

Actualiza el contenido en cada componente:
- **Hero.jsx**: Tu nombre, título, descripción
- **About.jsx**: Tu historia y características
- **Projects.jsx**: Tus proyectos con imágenes y enlaces
- **Skills.jsx**: Tus habilidades y niveles
- **Contact.jsx**: Tu información de contacto
- **Footer.jsx**: Links de redes sociales

### Imágenes de Proyectos

Reemplaza las URLs de Unsplash en `Projects.jsx` con tus propias imágenes.

## 📦 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📝 Estructura del Proyecto

```
Portafolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Próximos Pasos

- [ ] Personaliza el contenido con tu información
- [ ] Añade tus propios proyectos e imágenes
- [ ] Conecta el formulario de contacto con EmailJS o similar
- [ ] Añade tu favicon personalizado
- [ ] Configura el SEO (meta tags, og:image, etc.)
- [ ] Despliega en Vercel, Netlify o GitHub Pages

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

¡Hecho con ❤️ y mucho ☕!


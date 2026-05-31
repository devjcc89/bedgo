# BedGo - Setup Next.js

## Estructura del Proyecto

```
bedgo/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── RoleSelector.tsx
│   │   ├── PricingBox.tsx
│   │   ├── BenefitsGrid.tsx
│   │   ├── ProfileCards.tsx
│   │   ├── RoomGrid.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── tenant/
│   │   └── page.tsx         # Página inquilinos
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx             # Página propietarios (inicio)
├── public/
│   └── assets/              # Logo y recursos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## Instalación Local

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy en Netlify

### 1. Conectar repositorio Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repo>
git push -u origin main
```

### 2. Configuración Netlify

En Netlify Dashboard:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18.17 (o superior)

O usar `netlify.toml`:

```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Configurar Formularios Netlify

Los formularios están listos. Solo necesitas:

1. Ir a **Netlify Site Settings** → **Forms**
2. Habilitar la captura de forms
3. Los formularios se enviarán automáticamente a tu email de Netlify

## Stack Tecnológico

- **Next.js 14** - Framework React
- **React 18** - UI library
- **Tailwind CSS 3** - Styling
- **Framer Motion 10** - Animaciones
- **TypeScript** - Type safety
- **Netlify Forms** - Gestión de contactos

## Características

✅ Dos páginas totalmente funcionales (propietarios e inquilinos)
✅ Navbar responsivo con navegación fluida
✅ Componentes reutilizables
✅ Animaciones con Framer Motion
✅ Formularios Netlify integrados
✅ Diseño responsive (mobile-first)
✅ Performance optimizado
✅ Accesibilidad (A11y)
✅ SEO-friendly

## Variables de Entorno (opcional)

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://bedgo.es
```

## Próximos Pasos

1. Actualizar contenido (precios, ubicaciones, etc.)
2. Agregar imágenes reales de propiedades
3. Integrar Google Analytics
4. Setup de email automático con Netlify Functions
5. Crear panel de admin para gestionar propiedades

## Contacto y Soporte

- Email: hola@bedgo.es
- Phone: +34 600-123-456

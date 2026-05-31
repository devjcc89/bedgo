# 🏠 BedGo - Next.js Web Application

**Carpeta dedicada al proyecto web Next.js**

## Estructura

```
web/
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
│   └── page.tsx             # Página propietarios (/)
├── public/                  # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .gitignore
├── .env.example
└── netlify.toml             # Config para Netlify
```

## Quick Start

```bash
cd web
npm install
npm run dev
# Abre http://localhost:3000
```

## Deploy a Netlify

```bash
cd web
npm install -g netlify-cli
netlify deploy --prod
```

El archivo `netlify.toml` contiene toda la configuración automática.

## Páginas

- `/` → Landing para propietarios
- `/tenant` → Landing para inquilinos

## Componentes

Todos los componentes están en `app/components/` y son reutilizables entre páginas.

## Configuración

- **Tailwind:** `tailwind.config.ts`
- **Next.js:** `next.config.js`
- **Netlify:** `netlify.toml`
- **Formularios:** Netlify Forms (automático)

## Variables de Entorno

Copiar `.env.example` a `.env.local` si necesitas variables custom.

## Documentación

Para más detalles, ver los documentos fuera de esta carpeta:
- `QUICK_START.md`
- `README_NEXTJS.md`
- `DEPLOY_NETLIFY.md`

---

**Status:** Production Ready ✅

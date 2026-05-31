# 📐 Estructura Visual del Proyecto Next.js

## 🏗️ Arquitectura General

```
┌─────────────────────────────────────┐
│         HEADER / NAV                │
│  BedGo! | Propietarios | Inquilinos │
│         (Sticky Top)                 │
└─────────────────────────────────────┘
                    │
        ┌───────────┴────────────┐
        │                        │
        ▼                        ▼
   /               /tenant
┌──────────┐    ┌──────────┐
│Propietario│  │Inquilino  │
│Landing    │  │Landing    │
└──────────┘    └──────────┘
```

---

## 📄 Página "/" (Propietarios)

```
┌────────────────────────────────────────┐
│  HEADER (Navbar)                       │
├────────────────────────────────────────┤
│  HERO SECTION                          │
│  "Tu Piso Genera Ingresos"             │
│  [Propietario] [Inquilino]             │
├────────────────────────────────────────┤
│  PROPIETARIOS SECTION                  │
│  ┌──────────────────────────────────┐  │
│  │ Pricing Box (Comparativa €)      │  │
│  │ Alt: €950   vs   BedGo: €1200    │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │ Benefits Grid (6 tarjetas)       │  │
│  │ 1. Reforma  2. Pago  3. Esfuerzo │  │
│  │ 4. Garantía 5. Ocupación 6. Flex │  │
│  └──────────────────────────────────┘  │
├────────────────────────────────────────┤
│  STATS SECTION (Fondo Azul)            │
│  €1020 | 25+ | 100% | 0 días          │
├────────────────────────────────────────┤
│  CONTACT FORM                          │
│  ┌──────────────────────────────────┐  │
│  │ Formulario Propietarios          │  │
│  │ [Nombre] [Teléfono]              │  │
│  │ [Email]  [Zona]                  │  │
│  │ [Tipo Vivienda] [Habitaciones]   │  │
│  │ [¿Alquilado?] [Renta actual]     │  │
│  │ [Mensaje]                        │  │
│  │ [ENVIAR]                         │  │
│  └──────────────────────────────────┘  │
├────────────────────────────────────────┤
│  FOOTER                                │
│  BedGo! | Contacto | Links Rápidos    │
└────────────────────────────────────────┘
```

---

## 📄 Página "/tenant" (Inquilinos)

```
┌────────────────────────────────────────┐
│  HEADER (Navbar - diferente rol)      │
├────────────────────────────────────────┤
│  HERO SECTION                          │
│  "Buscas Vivienda en Madrid"           │
│  €350-850/mes | Todo incluido          │
├────────────────────────────────────────┤
│  PROFILES SECTION                      │
│  ┌─────────────┐ ┌──────────────┐     │
│  │ 👨‍🎓 Estudiante│ │💼 Profesional │     │
│  │ €350-450/mes│ │€450-650/mes  │     │
│  │ Shared room │ │Individual    │     │
│  └─────────────┘ └──────────────┘     │
│  ┌──────────────────┐                 │
│  │🌍 Temporal       │                 │
│  │€500-850/mes      │                 │
│  │Flexible 1-12m    │                 │
│  └──────────────────┘                 │
├────────────────────────────────────────┤
│  ROOMS GRID (3 habitaciones)           │
│  ┌──────────┐ ┌──────────┐            │
│  │ 🛏️ Centro│ │🛏️ Malasaña│           │
│  │ €550/mes │ │€400/mes  │           │
│  │ 15m²     │ │18m²      │           │
│  │ Baño Priv│ │Baño Comp │           │
│  └──────────┘ └──────────┘           │
│  ┌──────────┐                        │
│  │🛏️ Chueca│                        │
│  │€480/mes  │                        │
│  │12m²      │                        │
│  │Baño Priv │                        │
│  └──────────┘                        │
├────────────────────────────────────────┤
│  STATS SECTION (Fondo Azul)           │
│  €1020 | 100% | Madrid | 24h          │
├────────────────────────────────────────┤
│  CONTACT FORM                         │
│  ┌──────────────────────────────────┐ │
│  │ Formulario Inquilinos            │ │
│  │ [Nombre] [Teléfono]              │ │
│  │ [Email]  [Edad]                  │ │
│  │ [Perfil: Est/Prof/Temp]          │ │
│  │ [Presupuesto] [Zona Preferida]   │ │
│  │ [Fecha Inicio]                   │ │
│  │ [Mensaje]                        │ │
│  │ [ENVIAR]                         │ │
│  └──────────────────────────────────┘ │
├────────────────────────────────────────┤
│  FOOTER                               │
│  BedGo! | Contacto | Links Rápidos   │
└────────────────────────────────────────┘
```

---

## 🧩 Componentes y Su Uso

```
HEADER (app/components/Header.tsx)
├─ Usado en: / y /tenant
├─ Props: ninguna
└─ Funcionalidad: Navbar sticky, navegación, switch roles

HERO (app/components/Hero.tsx)
├─ Usado en: / y /tenant
├─ Props: title, subtitle, highlight?, ctas[]
└─ Funcionalidad: Sección hero con gradient, botones

ROLESELECTOR (app/components/RoleSelector.tsx)
├─ Usado en: / (en Hero)
├─ Props: cards[] (icon, title, description, cta, onClick)
└─ Funcionalidad: Tarjetas animadas para seleccionar rol

PRICINGBOX (app/components/PricingBox.tsx)
├─ Usado en: /
├─ Props: rows[], summary?
└─ Funcionalidad: Comparativa de precios

BENEFITSGRID (app/components/BenefitsGrid.tsx)
├─ Usado en: /
├─ Props: benefits[] (number, title, description)
└─ Funcionalidad: Grid de beneficios (6 tarjetas)

PROFILECARDS (app/components/ProfileCards.tsx)
├─ Usado en: /tenant
├─ Props: profiles[] (icon, title, price, features[])
└─ Funcionalidad: Tarjetas de tipos de inquilinos

ROOMGRID (app/components/RoomGrid.tsx)
├─ Usado en: /tenant
├─ Props: rooms[], title?
└─ Funcionalidad: Grid de habitaciones disponibles

STATSSECTION (app/components/StatsSection.tsx)
├─ Usado en: / y /tenant
├─ Props: stats[] (number, label), title?
└─ Funcionalidad: Sección fondo azul con estadísticas

CONTACTFORM (app/components/ContactForm.tsx)
├─ Usado en: / y /tenant
├─ Props: title, subtitle, formName, fields[]
└─ Funcionalidad: Formulario Netlify reutilizable

FOOTER (app/components/Footer.tsx)
├─ Usado en: / y /tenant
├─ Props: ninguna
└─ Funcionalidad: Footer con contacto y links
```

---

## 🔄 Flujo de Datos (Data Flow)

```
Usuario entra en bedgo.es
         │
         ▼
      HEADER
    (Lee pathname)
      │   │
  Si "/" │  Si "/tenant"
      │   │
      ▼   ▼
    HOME  TENANT PAGE
      │      │
    HERO    HERO
    ROLE    PROFILES
    SELECTOR   │
      │      ROOMS
      ▼      │
    Props    ▼
    (onClick) CONTACTFORM
      │          │
      ▼          ▼
    PRICINGBOX   Netlify
    BENEFITS    Forms
    STATS
    FORM
      │
      ▼
   Netlify Forms
   (Email notification)
```

---

## 🎨 Componentes Visuales (Tailwind Classes)

### Colors
```
primary:     #484894  (tw-primary — púrpura)
secondary:   #F46CA8  (tw-secondary — rosa)
accent:      #F0C800  (tw-accent — amarillo)
gray-light:  #F5F5F5  (tw-gray-light)
gray-muted:  #A8A8A8  (tw-gray-muted)
gray-dark:   #757575  (tw-gray-dark)
```

### Animaciones Framer Motion
```
Hero:          Fade in + Stagger
Cards:         Slide in + Hover lift
Benefits:      Stagger + Scale on hover
RoomGrid:      Scale in + Hover shadow
Stats:         Pulse + Zoom on hover
Form:          Fade in on scroll
```

### Responsive Breakpoints
```
Mobile:   < 640px (sm)   - Stack vertical
Tablet:   640px-1024px (md/lg) - 2-3 columns
Desktop:  > 1024px (xl) - 4+ columns
```

---

## 📊 Component Hierarchy

```
<RootLayout>
  │
  ├─ "/" (page.tsx)
  │  ├─ <Header />
  │  ├─ <Hero title="..." ctas={}>
  │  │  └─ <RoleSelector cards={} />
  │  ├─ PROPIETARIOS section
  │  │  ├─ <PricingBox rows={} />
  │  │  └─ <BenefitsGrid benefits={} />
  │  ├─ <StatsSection stats={} />
  │  ├─ <ContactForm formName="contacto-propietarios" />
  │  └─ <Footer />
  │
  └─ "/tenant" (page.tsx)
     ├─ <Header />
     ├─ <Hero title="..." ctas={}>
     ├─ PROFILES section
     │  └─ <ProfileCards profiles={} />
     ├─ ROOMS section
     │  └─ <RoomGrid rooms={} />
     ├─ <StatsSection stats={} />
     ├─ <ContactForm formName="contacto-inquilinos" />
     └─ <Footer />
```

---

## 🔄 Navegación (Navigation Flow)

```
          bedgo.es/
              │
    ┌─────────┼─────────┐
    │         │         │
Logo Click  Nav Links   Button
    │         │         │
    ▼         ▼         ▼
  Home    Scroll to  RoleSelector
(reload)  section      (onClick)
              │
              ├─ Propietarios → Scroll to Form
              └─ Inquilinos → Go to /tenant


/tenant
    │
    ├─ Header: "Inquilinos"
    ├─ PropietarioButton → Go to "/"
    └─ Scroll links → Sections internas
```

---

## 📝 Formularios (Form Flow)

```
PROPIETARIOS (/)
Form name: "contacto-propietarios"
  ├─ Nombre (text)
  ├─ Teléfono (tel)
  ├─ Email (email)
  ├─ Zona (text)
  ├─ Tipo Vivienda (select)
  ├─ Habitaciones (number)
  ├─ ¿Alquilado? (select)
  ├─ Renta Actual (text)
  ├─ Mensaje (textarea)
  └─ [SUBMIT]
       │
       ▼
   Netlify Forms
       │
       ▼
   Email Notification


INQUILINOS (/tenant)
Form name: "contacto-inquilinos"
  ├─ Nombre (text)
  ├─ Teléfono (tel)
  ├─ Email (email)
  ├─ Edad (number)
  ├─ Perfil (select: est/prof/temp)
  ├─ Presupuesto (number)
  ├─ Zona Preferida (text)
  ├─ Fecha Inicio (select)
  ├─ Mensaje (textarea)
  └─ [SUBMIT]
       │
       ▼
   Netlify Forms
       │
       ▼
   Email Notification
```

---

## 🚀 Build & Deploy Process

```
Código fuente (Next.js + React + Tailwind)
              │
              ▼
        npm run build
              │
              ▼
      .next/ (Optimizado)
              │
              ▼
          Netlify
    (Build + Deploy)
              │
              ▼
     bedgo.netlify.app
     (o tu dominio custom)
```

---

## 📱 Responsive Design

```
Mobile (< 640px)
┌──────────────┐
│  Hero        │
│  (Stack)     │
├──────────────┤
│  Card 1      │  100% width
├──────────────┤
│  Card 2      │  100% width
├──────────────┤
│  Form        │  1 column
└──────────────┘

Tablet (640-1024px)
┌──────────────────────┐
│  Hero                │
│  (2 cards side)      │
├──────────┬───────────┤
│ Card 1   │  Card 2   │  50% width
├──────────┼───────────┤
│  Form    (2 columns) │
└──────────┴───────────┘

Desktop (> 1024px)
┌────────────────────────┐
│  Hero                  │
│  (2 cards full)        │
├────────────────────────┤
│  Benefits (3 per row)  │
├────┬────┬────┐        │
│    │    │    │ 33% w  │
├────┼────┼────┤        │
│  Form (2 columns)      │
└────┴────┴────┘        │
```

---

**Última actualización:** Mayo 2026
**Versión:** 1.0.0
**Status:** Production Ready ✅

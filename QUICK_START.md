# ⚡ Quick Start - BedGo Next.js

## 30 segundos para tener el proyecto corriendo

```bash
npm install
npm run dev
# Abre http://localhost:3000
```

## Archivos Importantes

| Archivo | Propósito | Editar? |
|---------|-----------|---------|
| `app/page.tsx` | Landing propietarios | ✅ Contenido |
| `app/tenant/page.tsx` | Landing inquilinos | ✅ Contenido |
| `app/components/` | Componentes reutilizables | ✅ Estilos |
| `tailwind.config.ts` | Colores y temas | ✅ Colores |
| `netlify.toml` | Deploy config | ⚠️ Solo si cambias estructura |
| `package.json` | Dependencias | ⚠️ Solo si necesitas librerías |

## Cambios Comunes

### Cambiar colores
```ts
// tailwind.config.ts
colors: {
  primary: '#484894',    // Púrpura — identidad
  secondary: '#F46CA8',  // Rosa — CTAs
  accent: '#F0C800',     // Amarillo — destacados
}
```

### Cambiar contenido propietarios
```tsx
// app/page.tsx, línea ~40
const ownerBenefits = [
  { number: 1, title: 'Tu título', description: 'Tu descripción' }
  // ← Editar aquí
]
```

### Cambiar contenido inquilinos
```tsx
// app/tenant/page.tsx, línea ~25
const profiles = [
  { icon: '👨‍🎓', title: 'Estudiante', price: '€350-450/mes', features: [...] }
  // ← Editar aquí
]
```

### Agregar más formularios
Copiar `ContactForm.tsx` y cambiar `formName`:
```tsx
<ContactForm
  formName="mi-nuevo-formulario"  // ← Diferente nombre
  title="Mi Formulario"
  fields={misCampos}
/>
```

## Deploy a Netlify

### Opción más rápida (Recomendado)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Opción GitHub (Sin CLI)
1. Push a GitHub
2. Conectar en https://app.netlify.com
3. Auto-deploy en cada push

### Opción Manual (Drag & Drop)
```bash
npm run build
```
Luego arrastra `.next` en Netlify Dashboard

**Tiempo total:** ~5 minutos

## Después de Deployar

1. ✅ Verificar que carga: https://bedgo.netlify.app
2. ✅ Probar formularios
3. ✅ Revisar en mobile
4. ✅ Configurable dominio custom (Settings → Domain)
5. ✅ Habilitar formularios en Netlify (Forms → Setup)

## Estructura en 1 Minuto

```
/ → Página Propietarios
  ├─ Hero (2 tarjetas: "Propietario" vs "Inquilino")
  ├─ Pricing Box (€950 vs €1200)
  ├─ 6 Benefits
  ├─ Stats (€1020, 25+, 100%, 0 días)
  ├─ Formulario Propietarios
  └─ Footer

/tenant → Página Inquilinos
  ├─ Hero
  ├─ 3 Profiles (Est/Prof/Temp)
  ├─ 3 Rooms (Centro, Malasaña, Chueca)
  ├─ Stats (€1020, 100%, Madrid, 24h)
  ├─ Formulario Inquilinos
  └─ Footer
```

## Agregar Nueva Página

```tsx
// app/nueva-pagina/page.tsx
'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NuevaPage() {
  return (
    <main>
      <Header />
      {/* Tu contenido */}
      <Footer />
    </main>
  )
}
```

Accede en: `/nueva-pagina`

## Deshabilitar una Sección

```tsx
// En app/page.tsx, simplemente comenta o elimina:
{/* <StatsSection stats={stats} /> */}
```

## Cambiar Animaciones

```tsx
// En cualquier componente:
<motion.div
  initial={{ opacity: 0 }}           // ← Cambiar aquí
  whileInView={{ opacity: 1 }}       // ← O aquí
  transition={{ duration: 0.6 }}     // ← O aquí
>
  {children}
</motion.div>
```

Opciones:
- `opacity` - Transparencia
- `scale` - Tamaño
- `y` - Movimiento vertical
- `x` - Movimiento horizontal
- `rotate` - Rotación

## Problemas Comunes

**"npm install" falla**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"npm run build" falla**
```bash
npm run build -- --debug
# Ver errores en consola
```

**Formularios no se envían**
1. Verifica `form name=` en HTML
2. Re-deploy: `netlify deploy --prod`
3. Ve a Netlify Forms y revisa "Submissions"

**Estilos no cargan**
```bash
npm run build
# El archivo .next debe tener los estilos compilados
```

## Documentación

📖 Lee estos en orden:
1. `PROYECTO_COMPLETADO.md` - Resumen general
2. `ESTRUCTURA_VISUAL.md` - Componentes visuales
3. `README_NEXTJS.md` - Guía técnica completa
4. `DEPLOY_NETLIFY.md` - Deploy paso a paso

## Contacto

📧 hola@bedgo.es
📱 +34 600-123-456
🌐 bedgo.es

---

**Próximo paso:** `npm install && npm run dev` 🚀

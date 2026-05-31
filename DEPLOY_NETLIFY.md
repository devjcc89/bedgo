# Deploy BedGo en Netlify

## Paso 1: Preparar el proyecto

```bash
# Asegúrate que todo está limpio
npm run build

# Verifica que no hay errores
npm run lint
```

## Paso 2: Push a GitHub

```bash
git init
git add .
git commit -m "BedGo Next.js v1.0"
git remote add origin https://github.com/tu-usuario/bedgo.git
git push -u origin main
```

## Paso 3: Conectar Netlify

### Opción A: Dashboard (Recomendado)

1. Ir a https://app.netlify.com
2. Click en "Add new site"
3. Seleccionar "Import an existing project"
4. Conectar GitHub
5. Seleccionar repo `bedgo`
6. Configurar (Netlify detecta Next.js automáticamente si existe `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (o dejar vacío; el plugin `@netlify/plugin-nextjs` lo gestiona)
   - **Node version:** 20 (en Build & Deploy → Environment, o vía `netlify.toml`)
   - **Importante:** no uses el directorio raíz ni `public` como publish. El antiguo `index.html` estático ya no existe.

7. Deploy!

### Opción B: CLI

```bash
npm install -g netlify-cli
netlify login
netlify init

# Cuando pregunte:
# Build command: npm run build
# Publish directory: .next
# Deploy as production: yes
```

## Paso 4: Configurar Formularios Netlify

### 4.1 Habilitar Capture de Forms

1. En Netlify Dashboard → **Site Settings**
2. → **Forms**
3. Habilitar "Spam filters"
4. Las formas se capturarán automáticamente

### 4.2 Notificaciones por Email

1. **Site Settings** → **Forms**
2. Click en **Form notifications**
3. Crear notificación:
   - **Event:** Form submission
   - **To:** tu-email@bedgo.es
   - **From:** noreply@netlify.com

### 4.3 (Opcional) Webhook a tu backend

Si quieres procesar los datos en tu backend:

1. **Site Settings** → **Build & Deploy** → **Deploy notifications**
2. Agregar webhook:
   - **Form submission:** `https://tu-backend.com/api/forms`

## Paso 5: Configurar Dominio

1. **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Agregar: `bedgo.es`
4. Configurar DNS:
   ```
   CNAME: bedgo.netlify.com
   ```
   O usar Netlify DNS:
   - Cambiar nameservers en tu registrador (GoDaddy, Namecheap, etc)

## Paso 6: SSL/HTTPS

✅ Netlify automaticamente genera certificado Let's Encrypt

**Verificar:**
1. Site settings → **Domain management**
2. Debería mostrar "SSL certificate is valid"

## Paso 7: Validar Deploy

```bash
# Check build logs
netlify deploy --prod --dir=.next

# O en Netlify Dashboard → Deploys → Ver logs
```

**Checklist:**

- [ ] Build exitoso (sin errores)
- [ ] Página carga en https://bedgo.netlify.app
- [ ] Hero section visible
- [ ] Navbar funciona
- [ ] Links de navegación funcionan
- [ ] Formularios se envían (revisar en Forms → Submissions)
- [ ] Email de notificación llega
- [ ] Responsive en mobile (Chrome DevTools)

## Paso 8: Configuración Avanzada (Opcional)

### Configurar Redirects

Ya está en `netlify.toml`, pero puedes verificar:

**Site Settings** → **Redirects and rewrites**

### Analytics

Agregar a `.env`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Luego en componentes:
```jsx
// Implementar Google Analytics script en layout.tsx
```

### Email automático desde formularios

Opción 1: Usar Zapier
- Conectar Netlify Form → Gmail
- Cada submit envía email automático

Opción 2: Usar Netlify Functions (pago)
- Crear función serverless que procesa formulario

## Troubleshooting

### Problema: Build falla
```bash
# Limpia cache y rebuilda
npm clean-install
npm run build
```

### Problema: Formularios no se envían
1. Verifica que form name = `name` attribute en `<form>`
2. Verifica `netlify.toml` existe
3. Re-deploy: `netlify deploy --prod`

### Problema: Dominio no funciona
1. Verifica DNS propagación: https://dnschecker.org
2. Espera 24-48 horas si es nuevo dominio
3. Revisa nameservers en registrador

### Problema: Estilos no cargan
1. Build next.js en local: `npm run build`
2. Verifica que `.next` folder existe
3. Revisa `tailwind.config.ts`

## Variables de Entorno en Netlify

En **Site Settings** → **Build & Deploy** → **Environment**:

```
NEXT_PUBLIC_SITE_URL = https://bedgo.es
NODE_VERSION = 18.17.0
```

## Monitoreo Post-Deploy

1. **Netlify Analytics** → Dashboard
2. **Formularios** → Revisar submissions
3. **Deploys** → Ver deploy history
4. **Build** → Duración y logs

## Próximo Paso: Marketing

Una vez deployado:
- [ ] Compartir URL en redes
- [ ] Google Search Console
- [ ] Agregar a Google Business
- [ ] Email a propietarios potenciales
- [ ] LinkedIn post

---

**Tiempo total:** ~15 minutos
**Costo:** $0 (Netlify free tier)

¿Problemas? Contactar: hola@bedgo.es

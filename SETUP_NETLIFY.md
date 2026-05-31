# BedGo! - Setup Netlify (15 minutos)
## Desploy de Web + Formularios Automáticos

**Estado:** Ready to deploy  
**Tiempo:** 15 minutos  
**Costo:** Gratis (Netlify free tier)

---

## 🚀 PASO 1: Preparar Archivos (2 minutos)

### Opción A: Reemplazar archivo existente
```
Tu carpeta actual:
└── BedGo Servicios Inmobiliarios S.L/
    ├── index.html (VIEJO)
    └── index-mejorado.html (NUEVO - Con formularios)

HACER:
1. Renombra "index.html" a "index-backup.html"
2. Renombra "index-mejorado.html" a "index.html"
```

### Opción B: Crea carpeta nueva para deploy
```
Mi Proyecto BedGo/
└── web/
    ├── index.html (el mejorado)
    └── README.md (opcional, pero útil)
```

---

## 🌐 PASO 2: Crear Cuenta Netlify (3 minutos)

### 2.1 Abre Netlify
```
https://www.netlify.com
```

### 2.2 Sign Up
```
Click "Sign up" (arriba derecha)
Elige: "Sign up with GitHub" (más fácil después)
│
├─ Si no tienes GitHub: Crea uno gratis (5 min)
│  https://github.com/signup
│  Nombre usuario: bedgo-jj (o tu preferencia)
│  Email: jose.jorge.cifuentes@gmail.com
│  Password: contraseña fuerte
│
└─ Ya lo tienes: Conecta directamente
```

### 2.3 Confirma Email Netlify
```
Netlify te envía email de confirmación
Click en enlace "Confirm your email"
✓ Cuenta Netlify lista
```

---

## 📁 PASO 3: Opción Más Rápida (Drag & Drop)

**Sin GitHub, sin complicaciones - 2 minutos**

### 3.1 Accede a Netlify Dashboard
```
Después de confirmar email, vas a:
https://app.netlify.com
```

### 3.2 Deploy por Drag & Drop
```
1. En dashboard, busca "Drag and drop your site folder here"
2. O click en "New site from Git" → pero la opción drag es más rápida
3. Abre tu carpeta con el index.html
4. Arrastra carpeta a la zona de drop en Netlify
```

**¿No ves zona drag&drop?**
```
Click en: "Create a new site"
→ "Deploy manually"
→ Arrastra archivos
```

### 3.3 Espera Deploy (30 segundos)
```
Netlify automáticamente:
✓ Sube archivos
✓ Genera URL pública (algo como: loving-name-abc123.netlify.app)
✓ Tu web está LIVE
```

---

## 📧 PASO 4: Configurar Formularios Netlify (5 minutos)

### 4.1 Los formularios ya están listos
```
El HTML que te proporcioné ya tiene:
<form name="contacto-propietarios" method="POST" data-netlify="true">
<form name="contacto-inquilinos" method="POST" data-netlify="true">

data-netlify="true" = MAGIA 🎩
Netlify automáticamente detecta estos formularios
```

### 4.2 Verifica Formularios en Netlify Dashboard
```
1. Abre tu site en Netlify (en dashboard)
2. Click en el sitio (ej: "loving-name-abc123")
3. Menú superior: "Forms"
4. Deberías ver:
   ✓ contacto-propietarios
   ✓ contacto-inquilinos
   
Si NO aparecen:
└─ Redeploy: Arrastra carpeta de nuevo
```

### 4.3 Configura Email de Notificaciones
```
1. En el mismo sitio Netlify
2. Settings → Form notifications
3. Click "Add notification"
4. Elige: "Email notification"
5. Email destino: hola@bedgo.es
6. Trigger: "New form submission"
7. Save

Ahora recibir emails cuando alguien rellene formulario:
```

### 4.4 Prueba Formulario
```
1. Abre tu web: https://[nombre-sitio].netlify.app
2. Click "Solicitar Propuesta" (propietarios o inquilinos)
3. Rellena formulario
4. Haz Submit
5. Deberías ver: ✓ "¡Solicitud enviada!"
6. Revisa email (hola@bedgo.es) en 30 segundos
```

---

## 🔧 PASO 5: Configuraciones Opcionales

### Cambiar Dominio (De random a tu dominio)
```
Actual: loving-name-abc123.netlify.app
Deseado: bedgo.es (si tienes dominio propio)

CÓMO:
1. Settings → Domain management
2. Click "Add custom domain"
3. Escribe tu dominio (bedgo.es)
4. Sigue instrucciones DNS

Si NO tienes dominio:
└─ Puedes comprar en Namecheap, Godaddy, etc (~€1-5/año)
```

### Cambiar Nombre del Sitio
```
De: loving-name-abc123
A: bedgo (o lo que prefieras)

CÓMO:
1. Settings → General → Site name
2. Edita nombre
3. Tu URL: bedgo.netlify.app
```

---

## 📊 PASO 6: Ver Formularios Recibidos

### Acceder a Submissions
```
Dashboard Netlify → Tu sitio → Forms → Elige formulario
│
├─ "contacto-propietarios" → Ves todas solicitudes propietarios
└─ "contacto-inquilinos" → Ves todas solicitudes inquilinos
```

### Información Capturada
```
Para propietarios:
✓ Nombre, Teléfono, Email
✓ Zona/Barrio
✓ Tipo vivienda, nº habitaciones
✓ ¿Alquilado? Renta actual
✓ Mensaje adicional

Para inquilinos:
✓ Nombre, Teléfono, Email, Edad
✓ Perfil (estudiante/profesional/temporal)
✓ Presupuesto, zona preferida
✓ Fecha necesaria
✓ Mensaje adicional
```

### Exportar Datos
```
1. En Forms → Submissions
2. Click "Download as CSV"
3. Archivo Excel con todos datos
4. Úsalo en Google Sheets / Excel para tracking
```

---

## 🎯 CHECKLIST FINAL

```
✓ Archivo index.html mejorado en carpeta
✓ Cuenta Netlify creada y email confirmado
✓ Deploy: Drag & drop archivos a Netlify
✓ URL pública obtenida (bedgo.netlify.app)
✓ Formularios detectados en Netlify Forms
✓ Email notificaciones configurado: hola@bedgo.es
✓ Probaste formulario (propietarios + inquilinos)
✓ Recibiste email de prueba
✓ Dashboard Netlify accesible para ver submissions
```

---

## 🚨 TROUBLESHOOTING

### "No aparecen formularios en Netlify"
```
1. Verifica archivo HTML tiene:
   <form name="contacto-propietarios" method="POST" data-netlify="true">
2. Redeploy: Arrastra carpeta de nuevo
3. Espera 2 minutos
4. Recarga página Netlify Forms
```

### "No recibo emails de formularios"
```
1. Verifica email notificación: Settings → Form notifications
2. Email debe estar confirmado en Netlify
3. Revisa spam/junk mail
4. Prueba rellenando formulario de nuevo
```

### "URL muy larga/fea"
```
1. Settings → Site name
2. Cambia a nombre corto
3. Tu URL: nuevo-nombre.netlify.app
```

### "Quiero mi dominio propio (bedgo.es)"
```
1. Compra dominio (Namecheap, Godaddy, etc)
2. Netlify → Settings → Domain management
3. Add custom domain → bedgo.es
4. Sigue instrucciones DNS (apunta dominio a Netlify)
5. Espera 24h para propagación
```

---

## 📱 DESPUÉS: Usando en Vivo

### Propietarios rellenan formulario
```
1. Llegan a tu web (cualquiera de estas URLs):
   - https://bedgo.netlify.app
   - https://bedgo.es (si usas dominio propio)

2. Click "Propietarios" → "Solicitar Propuesta"

3. Completan:
   - Nombre, teléfono, email
   - Zona, tipo vivienda
   - Renta actual (si está alquilado)

4. Submit → Email automático a hola@bedgo.es
             + Datos en Dashboard Netlify
```

### Tú (acciones):
```
1. Revisar email cada día (o Netlify dashboard)
2. Ver datos completos: Forms → contacto-propietarios
3. Contactar propietario por teléfono/email
4. Enviar PROPUESTA_VALOR.pdf (que ya tienes documentado)
5. Cerrar contrato
6. Usar MODELOS_CONTRATO.md para contrato oficial
```

### Para inquilinos (igual flujo):
```
1. Rellenan formulario con presupuesto, zona, fecha
2. Submit → Email a hola@bedgo.es
3. Tú contactas con disponibilidad
4. Envía PLANTILLAS_EMAIL.md para onboarding
```

---

## 🔐 Seguridad Básica

```
✓ Formularios en HTTPS (automático Netlify)
✓ Datos capturados en servidor Netlify (seguro)
✓ Puedes ver en dashboard o exportar CSV
✓ NO expongas contraseñas en formularios
✓ Verifique email propietarios/inquilinos antes de firmar
```

---

## 📞 Si Algo Falla

```
Netlify Support:
- https://support.netlify.com
- Chat en app.netlify.com (arriba derecha)
- Suelen responder en 2-4 horas

Para el HTML/formularios:
- Avisame y puedo revisar/ajustar
- Email: jose.jorge.cifuentes@gmail.com
```

---

## ✅ Resultado Final

```
En 15 minutos tienes:
✓ Web profesional con propuestas de valor
✓ Formularios automáticos para propietarios e inquilinos
✓ Emails de notificación automáticos (hola@bedgo.es)
✓ Dashboard para ver todas solicitudes
✓ URL pública funcional 24/7

Mañana puedes:
✓ Contactar propietarios con enlace a web
✓ Recibir solicitudes automáticamente
✓ Responder con PLANTILLAS_EMAIL.md
✓ Convertir contactos a clientes
```

---

**¿Necesitas ayuda en algún paso?**

Avísame y lo resolvemos.

Documento creado: 24-05-2026

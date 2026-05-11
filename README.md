# VA Food S.R.L. — Sitio Web Institucional

Sitio web institucional de **VA Food S.R.L.** (CUIT 30-71560964-5), construido con React + TypeScript + Vite + Tailwind CSS.

---

## 🚀 Stack tecnológico

- **React 18** + **TypeScript**
- **Vite 5** (bundler)
- **Tailwind CSS 3** (estilos)
- **React Router 6** (navegación SPA)
- **Lucide React** (iconos)
- Deploy: **Netlify** con SPA redirect

---

## 📁 Estructura del proyecto

```
vafood/
├── public/
│   ├── favicon.svg
│   └── _redirects          # Netlify SPA redirects
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── PageHero.tsx
│   │   └── WhatsAppButton.tsx
│   ├── config/
│   │   └── company.ts      # ⚠️ EDITAR AQUÍ los datos de la empresa
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Cookies.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── netlify.toml
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Configuración inicial

### 1. Editar datos de la empresa

Abrí el archivo **`src/config/company.ts`** y completá todos los campos:

```ts
export const COMPANY = {
  razonSocial: "VA Food S.R.L.",
  nombreComercial: "VA Food",
  cuit: "30-71560964-5",
  dominio: "https://www.vafood.com.ar",   // ← tu dominio real
  email: "info@vafood.com.ar",            // ← email con dominio propio
  telefono: "+54 351 000-0000",
  whatsapp: "5493510000000",              // sin +, con código de país
  whatsappDisplay: "+54 9 351 000-0000",
  direccion: "Elpidio González 1100, Parque Pyme",
  ciudad: "Villa Allende",
  provincia: "Córdoba",
  pais: "Argentina",
  horario: "Lunes a Viernes de 8:00 a 18:00 hs.",
};
```

### 2. Actualizar metadata en `index.html`

Reemplazá las URLs `https://www.vafood.com.ar` por tu dominio real en las meta tags `og:url`, `og:image` y `link canonical`.

---

## 💻 Desarrollo local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/vafood-website.git
cd vafood-website

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
# → Abre http://localhost:5173

# 4. Build de producción
npm run build

# 5. Preview del build
npm run preview
```

---

## 🐙 Subir a GitHub desde VS Code

1. Abrí VS Code en la carpeta del proyecto
2. Abrí el **Source Control** (ícono de rama o `Ctrl+Shift+G`)
3. Hacé clic en **"Initialize Repository"**
4. Escribí un mensaje de commit (ej: `Initial commit`) y hacé clic en **✓ Commit**
5. Hacé clic en **"Publish Branch"**
6. Elegí **Public** o **Private** según prefieras
7. VS Code crea el repositorio en GitHub automáticamente

**O por terminal:**
```bash
git init
git add .
git commit -m "Initial commit: VA Food website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vafood-website.git
git push -u origin main
```

---

## 🌐 Deploy en Netlify

### Método A — Desde Netlify (recomendado)

1. Entrá a [app.netlify.com](https://app.netlify.com) y logueate
2. Hacé clic en **"Add new site" → "Import an existing project"**
3. Elegí **GitHub** y autorizá el acceso
4. Seleccioná el repositorio `vafood-website`
5. Configuración de build (ya viene en `netlify.toml`, no hace falta tocar nada):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Hacé clic en **"Deploy site"**

El deploy tarda ~2 minutos. Netlify te da una URL temporal como `https://random-name.netlify.app`.

### Método B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 🔗 Vincular dominio propio

1. En Netlify → **Site configuration → Domain management → Add domain**
2. Ingresá tu dominio (ej: `vafood.com.ar`)
3. Netlify te indica los DNS a configurar:
   - **Opción A (recomendada):** Cambiar los nameservers de tu dominio a los de Netlify
   - **Opción B:** Agregar un registro CNAME en tu registrar de dominios
4. Netlify activa HTTPS automáticamente con Let's Encrypt

---

## ✅ Checklist antes de presentar el dominio en Meta Business Suite

### Datos legales visibles
- [ ] Razón social en footer
- [ ] CUIT en footer y página de Contacto
- [ ] Dirección física en footer y Contacto
- [ ] Email corporativo con dominio propio (no Gmail/Hotmail)
- [ ] Teléfono de contacto visible

### Páginas requeridas
- [ ] /politica-de-privacidad — con razón social, CUIT y email
- [ ] /terminos-y-condiciones — con jurisdicción Argentina
- [ ] /politica-de-cookies
- [ ] /contacto — con formulario funcional
- [ ] /sobre-nosotros

### SEO y metadata
- [ ] `<title>` con nombre de empresa en todas las páginas
- [ ] `meta description` relevante
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Schema.org JSON-LD en `index.html`
- [ ] Favicon visible

### Técnico
- [ ] HTTPS activo (Netlify lo genera automáticamente)
- [ ] Dominio propio configurado (no subdominio de netlify.app)
- [ ] No hay links rotos (verificar con https://validator.w3.org/checklink)
- [ ] Formulario de contacto funcional
- [ ] Sitio responsive en mobile

### Para Meta específicamente
- [ ] El dominio del email corporativo coincide con el dominio del sitio
- [ ] La dirección legal es consistente en todo el sitio
- [ ] El sitio carga en menos de 5 segundos
- [ ] No hay contenido que infrinja las políticas de Meta

---

## 📧 Activar formulario de contacto en Netlify (opcional)

Para recibir los mensajes del formulario por email sin backend:

1. En `Contact.tsx`, agregá `data-netlify="true"` y `name="contact"` al `<form>`
2. Hacé un deploy
3. En Netlify → **Forms** → verás los submissions
4. Podés configurar notificaciones por email en **Site settings → Forms → Form notifications**

---

## 🛠️ Mantenimiento

- Los datos de la empresa se centralizan en `src/config/company.ts`
- Las páginas legales tienen texto real, no placeholder
- Los textos de servicios se editan en `src/pages/Services.tsx`
- Para agregar imágenes reales, colocarlas en `public/` y referenciarlas con `/nombre-imagen.jpg`

---

## 📞 Soporte

Sitio desarrollado para **VA Food S.R.L.** · CUIT 30-71560964-5  
Villa Allende, Córdoba, Argentina

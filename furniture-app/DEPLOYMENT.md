# 🚀 Guía de Deployment - Paso a Paso

Esta guía te llevará desde cero hasta tener tu catálogo en producción.

## 📋 Pre-requisitos

- [ ] Cuenta de GitHub (gratis)
- [ ] Cuenta de Supabase (gratis)
- [ ] Cuenta de Cloudinary (gratis)
- [ ] Cuenta de Vercel (gratis)

---

## Paso 1: Configurar Supabase (Backend) 🗄️

### 1.1 Crear Proyecto

1. Ve a [supabase.com](https://supabase.com)
2. Click en **Start your project**
3. Inicia sesión o crea cuenta
4. Click en **New Project**
5. Llena:
   - **Name**: furniture-catalog
   - **Database Password**: (guárdala en lugar seguro)
   - **Region**: South America (más cercano)
   - **Plan**: Free
6. Click en **Create new project**
7. Espera 2-3 minutos mientras se configura

### 1.2 Crear Tablas

1. En el dashboard, ve a **SQL Editor**
2. Click en **New query**
3. Abre el archivo `supabase-schema.sql` de este proyecto
4. Copia TODO el contenido
5. Pégalo en el SQL Editor de Supabase
6. Click en **Run** (abajo derecha)
7. Deberías ver: ✅ Success. No rows returned

### 1.3 Obtener Credenciales

1. Ve a **Settings** (⚙️ en la barra lateral)
2. Click en **API**
3. Copia y guarda:
   - **Project URL** → Esta es tu `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → Esta es tu `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Paso 2: Configurar Cloudinary (Imágenes) 🖼️

### 2.1 Crear Cuenta

1. Ve a [cloudinary.com](https://cloudinary.com)
2. Click en **Sign Up for Free**
3. Completa el registro

### 2.2 Obtener Cloud Name

1. En el Dashboard de Cloudinary
2. Verás **Cloud name** en la parte superior
3. Cópialo → Este es tu `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

### 2.3 Subir Imágenes

1. Ve a **Media Library**
2. Click en **Upload**
3. Sube todas las fotos de tus muebles
4. Organiza en carpetas (opcional):
   - `furniture/salas/`
   - `furniture/comedores/`
   - etc.

### 2.4 Copiar URLs

Para cada imagen:
1. Click en la imagen
2. Click en el icono de **link** 🔗
3. Copia la URL
4. La URL se verá así: `https://res.cloudinary.com/tu-cloud-name/image/upload/v1234567890/nombre-imagen.jpg`

---

## Paso 3: Agregar Productos a Supabase 📦

### Opción A: Desde el Dashboard (Recomendado para empezar)

1. En Supabase Dashboard, ve a **Table Editor**
2. Selecciona la tabla **products**
3. Click en **Insert row** → **Insert a new row**

4. Llena los campos (ejemplo):

```
name: Sofá Modular Oslo
slug: sofa-modular-oslo
description: Elegante sofá modular de diseño escandinavo. Perfecto para salas modernas.
category: sala
materials: ["Tela", "Madera", "Espuma alta densidad"]
colors: ["Gris", "Beige"]
features: ["Modular", "Reversible", "Fácil limpieza"]
dimensions: {"width": 250, "height": 85, "depth": 95, "unit": "cm"}
stock_status: in_stock
is_featured: true
```

5. Click en **Save**

6. Ahora ve a la tabla **product_images**
7. Click en **Insert row**

```
product_id: [Selecciona el producto que acabas de crear]
url: [Pega la URL de Cloudinary]
cloudinary_id: [Nombre del archivo sin extensión]
alt_text: Sofá modular Oslo vista frontal
is_primary: true
order: 1
```

8. Repite para cada imagen del producto (orden: 1, 2, 3, etc.)

### Opción B: Import CSV (Para muchos productos)

1. Prepara un archivo CSV con tus productos
2. En Table Editor → products → **⋮** (tres puntos) → **Import data via CSV**
3. Sube tu archivo CSV

---

## Paso 4: Configurar el Código Localmente 💻

### 4.1 Clonar Repositorio

```bash
cd /ruta/donde/quieres/el/proyecto
git clone <tu-repositorio>
cd furniture-app
```

### 4.2 Instalar Dependencias

```bash
npm install
```

### 4.3 Configurar Variables de Entorno

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJ...tu-key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
NEXT_PUBLIC_WHATSAPP_PHONE=573144766493
NEXT_PUBLIC_SITE_NAME="Muebles Sarmiento Sanchez"
```

### 4.4 Probar Localmente

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

Si ves productos, ✅ ¡Funciona!

---

## Paso 5: Deploy en Vercel 🌐

### 5.1 Subir a GitHub

```bash
# Inicializa git si no lo has hecho
git init
git add .
git commit -m "Initial commit - Furniture catalog"

# Crea repositorio en GitHub y luego:
git remote add origin https://github.com/tu-usuario/tu-repo.git
git branch -M main
git push -u origin main
```

### 5.2 Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en **Sign Up** o **Login**
3. Elige **Continue with GitHub**
4. Autoriza Vercel
5. Click en **New Project**
6. **Import** tu repositorio
7. Click en **Import**

### 5.3 Configurar Proyecto en Vercel

1. **Project Name**: furniture-catalog (o el que quieras)
2. **Framework Preset**: Next.js (auto-detectado)
3. **Root Directory**: `./furniture-app` (si está en subcarpeta) o `.` (si está en raíz)
4. **Build Command**: Dejar default
5. **Output Directory**: Dejar default

### 5.4 Agregar Variables de Entorno

En la sección **Environment Variables**:

Agrega una por una:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | https://tu-proyecto.supabase.co |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | eyJhbG... |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | tu-cloud-name |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | 573144766493 |
| `NEXT_PUBLIC_SITE_URL` | (déjalo vacío por ahora) |

### 5.5 Deploy

1. Click en **Deploy**
2. Espera 2-5 minutos
3. Verás: 🎉 **Congratulations!**
4. Tu sitio estará en: `https://tu-proyecto.vercel.app`

### 5.6 Configurar Dominio (Opcional)

Si tienes un dominio propio:

1. En Vercel Dashboard → tu proyecto
2. Ve a **Settings** → **Domains**
3. Agrega tu dominio
4. Sigue las instrucciones para configurar DNS

---

## Paso 6: Actualizar SITE_URL

1. Copia la URL de Vercel: `https://tu-proyecto.vercel.app`
2. En Vercel Dashboard → tu proyecto → **Settings** → **Environment Variables**
3. Edita `NEXT_PUBLIC_SITE_URL` y pega la URL
4. Click en **Save**
5. Ve a **Deployments** → click en **⋮** del último deployment → **Redeploy**

---

## ✅ Checklist Final

Antes de compartir con clientes, verifica:

- [ ] Todos los productos tienen imágenes
- [ ] Las imágenes cargan correctamente
- [ ] El botón de WhatsApp funciona
- [ ] La paginación funciona
- [ ] Probaste en móvil
- [ ] Los links de categorías funcionan
- [ ] La búsqueda funciona (si la implementaste)
- [ ] Los metadatos SEO están correctos

---

## 🔄 Actualizaciones Futuras

### Agregar Nuevo Producto

1. Sube imágenes a Cloudinary
2. Ve a Supabase → Table Editor → products
3. Insert row con los datos
4. Agrega imágenes en product_images
5. Los cambios se reflejan automáticamente (gracias a Supabase)

### Modificar Diseño

1. Edita el código localmente
2. Haz commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Actualización de diseño"
   git push
   ```
3. Vercel deployará automáticamente en ~2 minutos

---

## 🆘 Troubleshooting

### Error: "Cannot connect to Supabase"

- Verifica que las variables de entorno estén correctas
- Revisa que no haya espacios extras en las URLs
- Asegúrate de que las RLS policies están activas

### Imágenes no cargan

- Verifica que la URL de Cloudinary sea pública
- Revisa que `next.config.ts` tenga el dominio de Cloudinary
- Limpia caché de Next.js: `rm -rf .next && npm run dev`

### Deploy falla en Vercel

- Revisa los logs en Vercel Dashboard → Deployments
- Asegúrate de que `npm run build` funcione localmente
- Verifica que todas las variables de entorno estén configuradas

---

## 📞 Contacto

Si necesitas ayuda:
- 💬 WhatsApp: [tu-número]
- 📧 Email: [tu-email]

---

¡Listo! 🎉 Tu catálogo está en producción.

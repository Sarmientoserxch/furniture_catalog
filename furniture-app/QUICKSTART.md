# 🚀 Quick Start - Catálogo de Muebles

## ⚡ Inicio Rápido (5 minutos)

### 1. Instalar dependencias
```bash
cd furniture-app
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales de Supabase y Cloudinary.

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

Abre http://localhost:3000

---

## 📊 Agregar tu primer producto

### Desde Supabase Dashboard:

1. Ve a **Table Editor** → **products**
2. Click **Insert row**
3. Llena:

```json
{
  "name": "Sofá Modular Contemporáneo",
  "slug": "sofa-modular-contemporaneo",
  "description": "Elegante sofá modular de diseño contemporáneo, perfecto para salas modernas.",
  "category": "sala",
  "materials": ["Tela", "Madera maciza", "Espuma alta densidad"],
  "colors": ["Gris", "Beige", "Azul marino"],
  "features": ["Modular", "Reversible", "Cojines removibles", "Patas de madera"],
  "is_featured": true,
  "stock_status": "in_stock",
  "dimensions": {
    "width": 280,
    "height": 85,
    "depth": 95,
    "unit": "cm"
  }
}
```

4. Guarda
5. Ve a **product_images** y agrega imágenes vinculadas al producto

---

## 🎨 Personalización

### Cambiar colores
Edita `app/globals.css`:

```css
--color-primary-900: #TU_COLOR;
--color-warm-600: #TU_COLOR;
```

### Cambiar nombre de la empresa
Edita `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME="Tu Empresa"
```

### Cambiar número de WhatsApp
Edita `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=57XXXXXXXXXX
```

---

## 📦 Deploy

```bash
# Build de prueba local
npm run build
npm start

# Deploy en Vercel (recomendado)
npm install -g vercel
vercel
```

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para guía completa.

---

## 🛠️ Comandos útiles

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Verificar código
```

---

## 📖 Documentación completa

- **[README.md](./README.md)** - Información general
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guía paso a paso de deployment
- **[supabase-schema.sql](./supabase-schema.sql)** - Schema de base de datos

---

## 🆘 Problemas comunes

### "Cannot connect to Supabase"
→ Verifica que las variables en `.env.local` sean correctas

### "Images not loading"
→ Asegúrate de que las URLs de Cloudinary sean públicas
→ Verifica que `next.config.ts` tenga el dominio de Cloudinary

### "Build failed"
→ Ejecuta `npm run lint` para ver errores
→ Verifica que todas las dependencias estén instaladas

---

¡Listo para crear tu catálogo! 🎉

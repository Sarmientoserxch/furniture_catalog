# 🛋️ Catálogo de Muebles - Muebles Sarmiento Sanchez

Aplicación profesional de catálogo virtual de muebles construida con **Next.js 15**, **TypeScript**, **Supabase** y **Tailwind CSS v4**.

## ✨ Características

- 🎨 **Diseño moderno y responsivo** con Tailwind CSS v4
- ⚡ **Next.js 15** con App Router y Server Components
- 🗄️ **Supabase** como backend completo (gratuito)
- 🖼️ **Cloudinary** para optimización de imágenes
- 📱 **WhatsApp** integración directa
- 🔍 **Paginación y filtrado** desde backend
- 🎭 **Animaciones suaves** con Framer Motion
- 📊 **TypeScript** para seguridad de tipos
- 🚀 **Optimizado para Vercel** (deploy gratuito)

## 📁 Estructura del Proyecto

```
furniture-app/
├── app/                          # App Router de Next.js
│   ├── categoria/[category]/    # Páginas dinámicas de categorías
│   ├── productos/[slug]/        # Páginas de detalles de producto
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Estilos globales con Tailwind
├── components/                   # Componentes React
│   ├── layout/                  # Navbar, Footer
│   └── ui/                      # ProductCard, Gallery, WhatsApp, etc.
├── lib/                         # Lógica de negocio
│   ├── supabase.ts             # Cliente de Supabase
│   ├── products.ts             # Funciones de productos
│   └── utils.ts                # Utilidades generales
├── types/                       # Tipos TypeScript
│   └── index.ts                # Interfaces y tipos
├── public/                      # Archivos estáticos
├── supabase-schema.sql         # Schema de base de datos
├── .env.example                # Variables de entorno ejemplo
└── package.json                # Dependencias
```

## 🚀 Ver guía completa en [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Desarrollado con ❤️ usando Next.js 15 + Supabase + Tailwind CSS**

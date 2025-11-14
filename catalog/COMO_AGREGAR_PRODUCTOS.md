# 🛋️ Cómo Agregar Productos al Catálogo

## 📂 Archivos JSON Que Debes Editar

### 1. **Productos del Catálogo Principal**
📍 Archivo: `catalog/public/data/products.json`

### 2. **Productos del Banner/Slider** 
📍 Archivo: `catalog/public/data/banner-products.json`

---

## 🔧 Estructura de Producto (Catálogo Principal)

```json
{
  "id": NÚMERO_ÚNICO,
  "name": "Nombre del Producto",
  "category": "Salas|Comedores|Alcobas|Decoración",
  "image": "URL_DE_LA_IMAGEN",
  "description": "Descripción detallada del producto...",
  "features": ["Característica 1", "Característica 2", "Etc"]
}
```

### 📝 **Ejemplo Completo:**
```json
{
  "id": 14,
  "name": "Sofá Esquinero L Moderno",
  "category": "Salas",
  "image": "https://res.cloudinary.com/dx9eu0yh1/image/upload/v1757513042/sofa_l_moderno.png",
  "description": "Sofá esquinero en forma de L con tapicería en tela de alta calidad. Ideal para salas amplias y modernas.",
  "features": ["Tela Premium", "Estructura Maciza", "Cojines Extraíbles", "Esquinero L"]
}
```

---

## 🎨 Estructura de Producto (Banner)

```json
{
  "id": NÚMERO_ÚNICO,
  "title": "Título Corto",
  "subtitle": "Subtítulo Descriptivo",
  "image": "URL_DE_LA_IMAGEN_GRANDE",
  "category": "Salas|Comedores|Alcobas|Decoración"
}
```

### 📝 **Ejemplo Completo:**
```json
{
  "id": 7,
  "title": "Sofá Esquinero L",
  "subtitle": "Modernidad y Comodidad",
  "image": "https://res.cloudinary.com/dx9eu0yh1/image/upload/c_fill,w_1920,h_1080,q_auto:best,f_auto/v1757513042/sofa_l_moderno.png",
  "category": "Salas"
}
```

---

## 📋 **Categorías Disponibles:**

- **"Salas"** - Sofás, sillones, poltronas
- **"Comedores"** - Mesas, sillas, juegos de comedor  
- **"Alcobas"** - Camas, armarios, mesas de noche
- **"Decoración"** - Espejos, lámparas, cuadros, accesorios

---

## 🔄 **Pasos Para Agregar Productos:**

### 1. **Preparar la Imagen**
- Sube tu imagen a Cloudinary (recomendado) o usa URLs de imágenes
- **Para catálogo:** Tamaño recomendado 500x400px
- **Para banner:** Tamaño recomendado 1920x1080px

### 2. **Editar products.json**
```bash
# Abre el archivo
catalog/public/data/products.json

# Agrega tu producto al final del array (antes del ]})
# ¡IMPORTANTE! No olvides la coma después del producto anterior
```

### 3. **Editar banner-products.json (Opcional)**
```bash
# Solo si quieres que aparezca en el slider principal
catalog/public/data/banner-products.json
```

### 4. **Verificar el Resultado**
- La página se actualiza automáticamente
- Ve a la categoría correspondiente para ver tu producto

---

## ✨ **Ejemplos de Productos por Categoría:**

### 🛋️ **SALAS**
```json
{
  "id": 15,
  "name": "Poltrona Reclinable Premium",
  "category": "Salas", 
  "image": "https://ejemplo.com/poltrona.jpg",
  "description": "Poltrona reclinable con masajeador integrado y sistema de calefacción.",
  "features": ["Masajeador", "Calefacción", "Reclinable 180°", "Control Remoto"]
}
```

### 🍽️ **COMEDORES**
```json
{
  "id": 16,
  "name": "Juego Mesa + 8 Sillas Modernas",
  "category": "Comedores",
  "image": "https://ejemplo.com/mesa-8-sillas.jpg", 
  "description": "Mesa extensible en madera maciza con 8 sillas tapizadas en cuero sintético.",
  "features": ["Mesa Extensible", "8 Sillas", "Madera Maciza", "Cuero Sintético"]
}
```

### 🛏️ **ALCOBAS**
```json
{
  "id": 17,
  "name": "Cama King Size + Armario",
  "category": "Alcobas",
  "image": "https://ejemplo.com/cama-king.jpg",
  "description": "Set completo con cama King Size, 2 mesas de noche y armario de 6 puertas.",
  "features": ["Cama King Size", "2 Mesas de Noche", "Armario 6 Puertas", "Madera Roble"]
}
```

### 🎨 **DECORACIÓN**
```json
{
  "id": 18,
  "name": "Espejo Vintage Dorado",
  "category": "Decoración",
  "image": "https://ejemplo.com/espejo-vintage.jpg",
  "description": "Espejo decorativo con marco vintage dorado, perfecto para entradas y salas.",
  "features": ["Marco Dorado", "Estilo Vintage", "90cm x 120cm", "Cristal Biselado"]
}
```

---

## 🚨 **Errores Comunes a Evitar:**

❌ **ID duplicado** - Cada producto debe tener un ID único
❌ **Falta coma** - Siempre pon coma después de cada producto (excepto el último)
❌ **Categoría incorrecta** - Usa exactamente: "Salas", "Comedores", "Alcobas", "Decoración"
❌ **JSON inválido** - Verifica que todas las comillas y corchetes estén cerrados

---

## 🔍 **Verificar que Todo Funciona:**

1. Guarda los archivos JSON
2. La página se recarga automáticamente
3. Ve a la categoría del producto que agregaste
4. ¡Deberías ver tu nuevo producto!

---

## 💡 **Tips Adicionales:**

- **IDs consecutivos:** Usa números consecutivos (14, 15, 16...)
- **Descripción atractiva:** Resalta los beneficios del producto
- **Features útiles:** Máximo 4-5 características principales
- **Imágenes de calidad:** Usa imágenes claras y bien iluminadas
- **Nombres descriptivos:** Sé específico con los nombres de productos

¡Ya está! Con estos pasos puedes agregar tantos productos como quieras 🎉
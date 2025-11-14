-- ================================================
-- SCHEMA DE SUPABASE PARA CATÁLOGO DE MUEBLES
-- ================================================
-- Ejecutar este script en el SQL Editor de Supabase

-- Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================
-- TABLA: products
-- ================================================
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('sala', 'comedor', 'alcoba', 'decoracion', 'oficina', 'exterior')),

  -- Dimensiones (JSON para flexibilidad)
  dimensions JSONB DEFAULT '{}',

  -- Arrays de características
  materials TEXT[] DEFAULT '{}',
  colors TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',

  -- Estado del producto
  stock_status VARCHAR(20) DEFAULT 'in_stock' CHECK (stock_status IN ('in_stock', 'out_of_stock', 'made_to_order')),
  is_featured BOOLEAN DEFAULT false,

  -- Metadatos
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Índices para búsqueda rápida
  CONSTRAINT valid_slug CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

-- ================================================
-- TABLA: product_images
-- ================================================
CREATE TABLE IF NOT EXISTS product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  cloudinary_id VARCHAR(255) NOT NULL,
  alt_text TEXT,
  is_primary BOOLEAN DEFAULT false,
  "order" INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- ÍNDICES PARA OPTIMIZACIÓN
-- ================================================

-- Índice para búsqueda por slug (usado en URLs)
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- Índice para filtrado por categoría
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Índice para productos destacados
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true;

-- Índice para búsqueda de texto completo
CREATE INDEX IF NOT EXISTS idx_products_search ON products USING GIN (to_tsvector('spanish', name || ' ' || description));

-- Índice para imágenes por producto
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);

-- Índice para orden de imágenes
CREATE INDEX IF NOT EXISTS idx_product_images_order ON product_images(product_id, "order");

-- ================================================
-- FUNCIÓN: Actualizar timestamp automáticamente
-- ================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ================================================
-- FUNCIÓN: Búsqueda de productos con filtros
-- ================================================
CREATE OR REPLACE FUNCTION search_products(
  search_query TEXT DEFAULT NULL,
  filter_category TEXT DEFAULT NULL,
  filter_materials TEXT[] DEFAULT NULL,
  filter_colors TEXT[] DEFAULT NULL,
  filter_featured BOOLEAN DEFAULT NULL,
  page_number INTEGER DEFAULT 1,
  page_size INTEGER DEFAULT 12
)
RETURNS TABLE (
  id UUID,
  name VARCHAR,
  slug VARCHAR,
  description TEXT,
  category VARCHAR,
  dimensions JSONB,
  materials TEXT[],
  colors TEXT[],
  features TEXT[],
  stock_status VARCHAR,
  is_featured BOOLEAN,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  total_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  WITH filtered_products AS (
    SELECT
      p.*,
      COUNT(*) OVER() as total_count
    FROM products p
    WHERE
      -- Filtro de búsqueda de texto
      (search_query IS NULL OR
       to_tsvector('spanish', p.name || ' ' || p.description) @@ plainto_tsquery('spanish', search_query))

      -- Filtro de categoría
      AND (filter_category IS NULL OR p.category = filter_category)

      -- Filtro de materiales (si alguno coincide)
      AND (filter_materials IS NULL OR p.materials && filter_materials)

      -- Filtro de colores (si alguno coincide)
      AND (filter_colors IS NULL OR p.colors && filter_colors)

      -- Filtro de productos destacados
      AND (filter_featured IS NULL OR p.is_featured = filter_featured)
    ORDER BY
      p.is_featured DESC,
      p.created_at DESC
    LIMIT page_size
    OFFSET (page_number - 1) * page_size
  )
  SELECT * FROM filtered_products;
END;
$$ LANGUAGE plpgsql;

-- ================================================
-- DATOS DE EJEMPLO (OPCIONAL)
-- ================================================
-- Descomentar para insertar datos de prueba

/*
-- Producto de ejemplo 1
INSERT INTO products (name, slug, description, category, materials, colors, features, is_featured, dimensions)
VALUES (
  'Sofá Modular Contemporáneo',
  'sofa-modular-contemporaneo',
  'Elegante sofá modular de diseño contemporáneo, perfecto para salas modernas. Tapizado en tela de alta calidad con estructura de madera maciza.',
  'sala',
  ARRAY['Tela', 'Madera maciza', 'Espuma de alta densidad'],
  ARRAY['Gris', 'Beige', 'Azul marino'],
  ARRAY['Modular', 'Reversible', 'Cojines removibles', 'Patas de madera'],
  true,
  '{"width": 280, "height": 85, "depth": 95, "unit": "cm"}'::jsonb
);

-- Imágenes del producto 1
INSERT INTO product_images (product_id, url, cloudinary_id, alt_text, is_primary, "order")
SELECT
  p.id,
  'https://res.cloudinary.com/demo/image/upload/v1/furniture/sofa-1.jpg',
  'furniture/sofa-1',
  'Sofá modular vista frontal',
  true,
  1
FROM products p WHERE p.slug = 'sofa-modular-contemporaneo';

-- Producto de ejemplo 2
INSERT INTO products (name, slug, description, category, materials, colors, features, dimensions)
VALUES (
  'Mesa de Comedor Extensible',
  'mesa-comedor-extensible',
  'Mesa de comedor con sistema de extensión, ideal para reuniones familiares. Acabado en nogal con detalles modernos.',
  'comedor',
  ARRAY['Madera de nogal', 'Metal'],
  ARRAY['Nogal natural', 'Negro'],
  ARRAY['Extensible', 'Capacidad 6-8 personas', 'Fácil limpieza'],
  '{"width": 160, "height": 75, "depth": 90, "unit": "cm"}'::jsonb
);
*/

-- ================================================
-- POLÍTICAS RLS (Row Level Security)
-- ================================================
-- Para un catálogo público, permitimos lectura a todos

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública de productos
CREATE POLICY "Public products are viewable by everyone"
  ON products FOR SELECT
  USING (true);

-- Permitir lectura pública de imágenes
CREATE POLICY "Public product images are viewable by everyone"
  ON product_images FOR SELECT
  USING (true);

-- Para inserción/actualización, necesitarías autenticación
-- (comentado por ahora, descomentar cuando implementes admin)
/*
CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  USING (auth.role() = 'authenticated');
*/

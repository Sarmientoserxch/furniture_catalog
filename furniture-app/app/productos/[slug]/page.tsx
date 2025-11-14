import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import ProductGallery from '@/components/ui/ProductGallery';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ProductCard from '@/components/ui/ProductCard';
import { RiCheckLine, RiRulerLine, RiPaletteLine, RiShirtLine } from 'react-icons/ri';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }

  return {
    title: `${product.name} - Muebles Sarmiento Sanchez`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images?.map((img) => ({
        url: img.url,
        alt: img.alt_text || product.name,
      })) || [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Obtener productos relacionados
  const relatedProducts = await getRelatedProducts(product.category, product.id, 4);

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary-900 transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/categoria/${product.category}`}
                className="hover:text-primary-900 transition-colors capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-primary-900 font-semibold">{product.name}</li>
          </ol>
        </nav>

        {/* Contenido principal del producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Galería de imágenes */}
          <div>
            <ProductGallery images={product.images || []} productName={product.name} />
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Título y categoría */}
            <div>
              <span className="inline-block bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 capitalize">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                {product.name}
              </h1>
            </div>

            {/* Descripción */}
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-800/80 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Dimensiones */}
            {product.dimensions && (
              <div className="bg-warm-50 p-6 rounded-xl border border-warm-200">
                <div className="flex items-center gap-2 mb-3">
                  <RiRulerLine className="text-2xl text-warm-700" />
                  <h3 className="text-lg font-bold text-primary-900">Dimensiones</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {product.dimensions.width && (
                    <div>
                      <span className="text-gray-600">Ancho:</span>
                      <p className="font-semibold text-primary-900">
                        {product.dimensions.width} {product.dimensions.unit}
                      </p>
                    </div>
                  )}
                  {product.dimensions.height && (
                    <div>
                      <span className="text-gray-600">Alto:</span>
                      <p className="font-semibold text-primary-900">
                        {product.dimensions.height} {product.dimensions.unit}
                      </p>
                    </div>
                  )}
                  {product.dimensions.depth && (
                    <div>
                      <span className="text-gray-600">Profundidad:</span>
                      <p className="font-semibold text-primary-900">
                        {product.dimensions.depth} {product.dimensions.unit}
                      </p>
                    </div>
                  )}
                  {product.dimensions.weight && (
                    <div>
                      <span className="text-gray-600">Peso:</span>
                      <p className="font-semibold text-primary-900">
                        {product.dimensions.weight} {product.dimensions.unit === 'cm' ? 'kg' : product.dimensions.unit}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Materiales */}
            {product.materials && product.materials.length > 0 && (
              <div className="bg-cream p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <RiShirtLine className="text-2xl text-coffee" />
                  <h3 className="text-lg font-bold text-primary-900">Materiales</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-secondary-800 border border-warm-300"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Colores */}
            {product.colors && product.colors.length > 0 && (
              <div className="bg-cream p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <RiPaletteLine className="text-2xl text-sage" />
                  <h3 className="text-lg font-bold text-primary-900">Colores disponibles</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-secondary-800 border border-warm-300"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Características */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">
                  Características principales
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <RiCheckLine className="text-green-600 text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-800/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Estado del stock */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  product.stock_status === 'in_stock'
                    ? 'bg-green-500'
                    : product.stock_status === 'made_to_order'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              />
              <span className="text-sm font-medium text-gray-700">
                {product.stock_status === 'in_stock' && 'Disponible'}
                {product.stock_status === 'made_to_order' && 'Hecho a medida'}
                {product.stock_status === 'out_of_stock' && 'Agotado'}
              </span>
            </div>

            {/* Botón de WhatsApp */}
            <div className="pt-4">
              <WhatsAppButton productName={product.name} className="w-full py-4 text-lg" />
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 font-serif text-center">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

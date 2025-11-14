import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import Pagination from '@/components/ui/Pagination';
import type { ProductCategory } from '@/types';

const ITEMS_PER_PAGE = 12;

const categoryNames: Record<ProductCategory, string> = {
  sala: 'Salas',
  comedor: 'Comedores',
  alcoba: 'Alcobas',
  decoracion: 'Decoración',
  oficina: 'Oficina',
  exterior: 'Exterior',
};

const categoryDescriptions: Record<ProductCategory, string> = {
  sala: 'Descubre nuestra colección de salas modernas y confortables, diseñadas para crear espacios acogedores.',
  comedor: 'Mesas y sillas perfectas para compartir momentos inolvidables con tu familia.',
  alcoba: 'Camas, mesas de noche y muebles que transforman tu habitación en un oasis de descanso.',
  decoracion: 'Detalles decorativos que dan vida y personalidad a cada rincón de tu hogar.',
  oficina: 'Muebles funcionales y elegantes para tu espacio de trabajo.',
  exterior: 'Mobiliario resistente y estético para disfrutar de tus espacios al aire libre.',
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categoryNames[category as ProductCategory];

  if (!categoryName) {
    return {
      title: 'Categoría no encontrada',
    };
  }

  return {
    title: `${categoryName} - Muebles Sarmiento Sanchez`,
    description: categoryDescriptions[category as ProductCategory],
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;

  // Validar categoría
  const validCategories: ProductCategory[] = ['sala', 'comedor', 'alcoba', 'decoracion', 'oficina', 'exterior'];
  if (!validCategories.includes(category as ProductCategory)) {
    notFound();
  }

  const currentPage = parseInt(pageParam || '1', 10);
  const categoryTyped = category as ProductCategory;

  // Obtener productos de Supabase con paginación
  const { data: products, total, totalPages } = await getProducts(
    { category: categoryTyped },
    { page: currentPage, limit: ITEMS_PER_PAGE }
  );

  const categoryName = categoryNames[categoryTyped];
  const categoryDescription = categoryDescriptions[categoryTyped];

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-4 font-serif">
            {categoryName}
          </h1>
          <p className="text-lg md:text-xl text-secondary-800/70 max-w-3xl mx-auto">
            {categoryDescription}
          </p>
          <div className="mt-6 text-sm text-gray-500">
            {total} {total === 1 ? 'producto encontrado' : 'productos encontrados'}
          </div>
        </div>

        {/* Grid de productos */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 4} />
              ))}
            </div>

            {/* Paginación */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`/categoria/${category}`}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg
                className="w-24 h-24 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No hay productos en esta categoría
              </h3>
              <p className="text-gray-500 mb-6">
                Estamos trabajando para traerte los mejores muebles. Vuelve pronto.
              </p>
              <a
                href="/"
                className="inline-block bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

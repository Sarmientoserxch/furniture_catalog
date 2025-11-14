import Link from 'next/link';
import { RiSofaLine, RiHome2Line, RiHotelBedLine, RiPlantLine } from 'react-icons/ri';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';

const categories = [
  {
    id: 1,
    name: 'Salas',
    slug: 'sala',
    description: 'Diseños modernos y confortables',
    icon: RiSofaLine,
    gradient: 'from-primary-900 to-primary-700',
  },
  {
    id: 2,
    name: 'Comedores',
    slug: 'comedor',
    description: 'Espacios para compartir',
    icon: RiHome2Line,
    gradient: 'from-secondary-800 to-secondary-600',
  },
  {
    id: 3,
    name: 'Alcobas',
    slug: 'alcoba',
    description: 'Descanso y comodidad',
    icon: RiHotelBedLine,
    gradient: 'from-warm-700 to-warm-500',
  },
  {
    id: 4,
    name: 'Decoración',
    slug: 'decoracion',
    description: 'Detalles que marcan diferencia',
    icon: RiPlantLine,
    gradient: 'from-primary-800 to-warm-600',
  },
];

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts(6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">
              Transforma tu Hogar con
              <span className="block text-warm-500 mt-2">Estilo y Calidad</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-200 max-w-2xl mx-auto">
              Descubre nuestra exclusiva colección de muebles premium.
              Diseños únicos que combinan elegancia, funcionalidad y confort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="#productos"
                className="bg-warm-600 hover:bg-warm-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Ver Catálogo
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '573144766493'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent"></div>
      </section>

      {/* Categorías */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
              Explora Nuestras Categorías
            </h2>
            <p className="text-lg text-secondary-800/70 max-w-2xl mx-auto">
              Encuentra el mueble perfecto para cada espacio de tu hogar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  href={`/categoria/${category.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-br ${category.gradient} p-8 h-64 flex flex-col justify-between`}>
                    <div>
                      <Icon className="text-5xl text-white/90 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-warm-200 text-sm">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex items-center text-warm-300 font-semibold group-hover:text-white transition-colors">
                      Ver más
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
              Productos Destacados
            </h2>
            <p className="text-lg text-secondary-800/70 max-w-2xl mx-auto">
              Descubre nuestra selección de muebles más populares
            </p>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 3} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Próximamente agregaremos productos a nuestro catálogo
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/categoria/sala"
              className="inline-block bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-900 to-secondary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
            ¿Necesitas Asesoría Personalizada?
          </h2>
          <p className="text-lg md:text-xl text-warm-200 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a encontrar el mueble perfecto para tu espacio
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '573144766493'}?text=${encodeURIComponent('Hola, me gustaría obtener asesoría personalizada sobre sus muebles.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

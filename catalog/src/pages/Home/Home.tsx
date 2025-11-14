import {Link} from 'react-router-dom';
import Banner from "../../components/Banner/Banner.tsx";
import ProductGrid from "../../components/Product/ProductGrid.tsx";
import Testimonials from "../../components/Testimonials/Testimonials.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import {useProducts} from "../../hooks/useProducts.ts";
import SectionInformation from "../../components/SecctionInformation/SectionInformation.tsx";
import {Constants} from "../../utils/Constants.ts";

const Home = () => {
    const { bannerProducts, catalogProducts, loading, error } = useProducts();
    
    // Productos destacados para la sección principal (primeros 6)
    const featuredProducts = catalogProducts.slice(0, 6);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#641B2E] mx-auto mb-4"></div>
                    <p className="text-[#641B2E] font-semibold">Cargando productos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="text-center text-red-600">
                    <p>Error al cargar los productos: {error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-[#641B2E] text-white rounded hover:bg-[#8A2D3B]"
                    >
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="w-full">
            {/* Hero Banner */}
            <Banner
                    productos={bannerProducts}
                    title={"Muebles"}
                    subTitle={"Sarmiento Sánchez"}
                    description={Constants.MESSAGE_INFO_HOME}
                    showPoint={true}
            />

            {/* Sección de Valores */}
            <SectionInformation/>

            {/* Productos Destacados */}
            <ProductGrid
                title="Productos Destacados"
                subtitle="Descubre nuestra selección de muebles más populares"
                showFilters={false}
                productsPerPage={6}
                products={featuredProducts}
            />

            {/* Sección de Categorías */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                            Explora Nuestras Categorías
                        </h2>
                        <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                            Encuentra exactamente lo que necesitas para cada espacio de tu hogar
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link to="/salas" className="group cursor-pointer">
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                                    alt="Salas"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Salas</h3>
                                    <p className="text-[#F5F1EB]/90">Sofás y muebles de sala</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/comedores" className="group cursor-pointer">
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=300&fit=crop"
                                    alt="Comedores"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Comedores</h3>
                                    <p className="text-[#F5F1EB]/90">Mesas y sillas</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/alcobas" className="group cursor-pointer">
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop"
                                    alt="Alcobas"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Alcobas</h3>
                                    <p className="text-[#F5F1EB]/90">Camas y armarios</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/decoracion" className="group cursor-pointer">
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop"
                                    alt="Decoración"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Decoración</h3>
                                    <p className="text-[#F5F1EB]/90">Mesas y espejos</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            className="px-8 py-4 bg-[#BE5B50] hover:bg-[#8A2D3B] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Ver Catálogo Completo
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#641B2E]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#FBDB93] mb-4">
                            Tu Tranquilidad es Nuestra Prioridad
                        </h2>
                        <p className="text-[#F5F1EB]/80 max-w-2xl mx-auto">
                            Servicios completos para que disfrutes tu nueva alcoba desde el primer día
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div
                                className="w-16 h-16 bg-[#FBDB93] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#641B2E]" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#FBDB93] mb-2">Garantía 2 Años</h3>
                            <p className="text-[#F5F1EB]/70 text-sm">En estructura y mecanismos</p>
                        </div>

                        <div>
                            <div
                                className="w-16 h-16 bg-[#FBDB93] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#641B2E]" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M8 5a3 3 0 016 0v6a3 3 0 11-6 0V5z"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#FBDB93] mb-2">Instalación Incluida</h3>
                            <p className="text-[#F5F1EB]/70 text-sm">Armado profesional sin costo</p>
                        </div>

                        <div>
                            <div
                                className="w-16 h-16 bg-[#FBDB93] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#641B2E]" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#FBDB93] mb-2">Domicilio Gratis</h3>
                            <p className="text-[#F5F1EB]/70 text-sm">Entrega en toda la ciudad</p>
                        </div>

                        <div>
                            <div
                                className="w-16 h-16 bg-[#FBDB93] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#641B2E]" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#FBDB93] mb-2">Asesoría Personal</h3>
                            <p className="text-[#F5F1EB]/70 text-sm">Diseño de espacios incluido</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <Testimonials/>

            {/* Sección de Contacto */}
            <div id="contacto">
                <Contact/>
            </div>

            {/* Footer */}
            <Footer/>
        </main>
    );
};

export default Home;
import {useMemo} from 'react';
import ProductGrid from '../../components/Product/ProductGrid';
import {useProducts} from '../../hooks/useProducts';
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorDisplay from "../../components/UI/ErrorDisplay";
import Banner from "../../components/Banner/Banner.tsx";
import {Constants} from "../../utils/Constants.ts";
import {MdPalette} from "react-icons/md";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import SectionCharacteristic from "../../components/SecctionInformation/SectionCharacteristic.tsx";
import {sectionCharacteristicDecoracion} from "../../elements/CharacteristicPoints.ts";
import TipsSection from "../../components/UI/TipsSection.tsx";
import {tipsDecoracion} from "../../elements/TipsData.ts";

const DecoracionPage = () => {
    const { bannerProducts, catalogProducts, loading, error } = useProducts();
    
    // Filtrar productos de la categoría "Decoración"
    const decoracionProducts = useMemo(() => {
        return catalogProducts.filter(product => 
            product.category.toLowerCase().includes('decoración') || 
            product.category.toLowerCase().includes('decoracion') ||
            product.category.toLowerCase().includes('espejo') ||
            product.category.toLowerCase().includes('lámpara') ||
            product.category.toLowerCase().includes('lampara') ||
            product.category.toLowerCase().includes('cuadro') ||
            product.category.toLowerCase().includes('mesa auxiliar') ||
            product.category.toLowerCase().includes('accesorio')
        );
    }, [catalogProducts]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorDisplay error={error} onRetry={() => window.location.reload()} />;
    }

    return (
        <>
            <main className="w-full">
                {/* Hero Section específico para Decoración */}
                <Banner
                    productos={bannerProducts}
                    title={"Detalles que"}
                    subTitle={"Inspiran"}
                    description={Constants.MESSAGE_INFO_DECORACION}
                    icon={<MdPalette strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>}
                    iconTitle={"colección decoración"}
                    showPoint={false}
                />
                
                {/* Sección de características de la decoración */}
                <SectionCharacteristic 
                    title={sectionCharacteristicDecoracion.title}
                    descriptionGeneral={sectionCharacteristicDecoracion.descriptionGeneral}
                    characteristics={sectionCharacteristicDecoracion.characteristics}
                />

                {/* Catálogo de productos */}
                <div id="catalog-section">
                    <ProductGrid
                        title="Nuestra Colección de Decoración"
                        subtitle="Accesorios y detalles que transforman cualquier espacio en algo extraordinario"
                        products={decoracionProducts}
                        showFilters={true}
                        productsPerPage={12}
                    />
                </div>

                {/* Sección de ambientes */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                                Decoración por Ambientes
                            </h2>
                            <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                                Cada espacio de tu hogar tiene su propia personalidad. Encuentra la decoración perfecta para cada ambiente
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
                                        alt="Sala de Estar"
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-2xl font-bold mb-2">Sala de Estar</h3>
                                        <p className="text-[#F5F1EB]/90 mb-4">El corazón social del hogar</p>
                                        <ul className="text-sm text-[#F5F1EB]/80 space-y-1">
                                            <li>• Cuadros como punto focal</li>
                                            <li>• Lámparas para iluminación cálida</li>
                                            <li>• Espejos que amplían el espacio</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop"
                                        alt="Dormitorio"
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-2xl font-bold mb-2">Dormitorio</h3>
                                        <p className="text-[#F5F1EB]/90 mb-4">Tu santuario personal</p>
                                        <ul className="text-sm text-[#F5F1EB]/80 space-y-1">
                                            <li>• Arte suave y relajante</li>
                                            <li>• Lámparas con luz tenue</li>
                                            <li>• Colores neutros y calmantes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips de decoración */}
                        <TipsSection {...tipsDecoracion} />
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    );
};

export default DecoracionPage;
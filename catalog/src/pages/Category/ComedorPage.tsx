import {useMemo} from 'react';
import ProductGrid from '../../components/Product/ProductGrid';
import {useProducts} from '../../hooks/useProducts';
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorDisplay from "../../components/UI/ErrorDisplay";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import Banner from "../../components/Banner/Banner.tsx";
import {Constants} from "../../utils/Constants.ts";
import {FaRegBuilding} from "react-icons/fa";
import SectionCharacteristic from "../../components/SecctionInformation/SectionCharacteristic.tsx";
import {sectionCharacteristicTable} from "../../elements/CharacteristicPoints.ts";
import TipsSection from "../../components/UI/TipsSection.tsx";
import {tipsComedor} from "../../elements/TipsData.ts";

const ComedorPage = () => {
    const { bannerProducts, catalogProducts, loading, error } = useProducts();
    
    // Filtrar productos de la categoría "Comedor"
    const comedorProducts = useMemo(() => {
        return catalogProducts.filter(product =>
            product.category.toLowerCase().includes('comedor') ||
            product.category.toLowerCase().includes('mesa') ||
            product.category.toLowerCase().includes('silla')
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
                {/* Hero Section específico para Comedores */}
                {/*banner de los comedores*/}
                <Banner
                    productos={bannerProducts}
                    title={"Espacios que"}
                    subTitle={"Conectan"}
                    description={Constants.MESSAGE_INFO_TABLES}
                    icon={<FaRegBuilding strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>}
                    iconTitle={"colección mesas"}
                    showPoint={false}
                />
                {/* Sección de características de los comedores */}
                <SectionCharacteristic title={sectionCharacteristicTable.title}
                                       descriptionGeneral={sectionCharacteristicTable.descriptionGeneral}
                                       characteristics={sectionCharacteristicTable.characteristics}/>

                {/* Catálogo de productos */}
                <div id="catalog-section">
                    <ProductGrid
                        title="Nuestra Colección de Comedores"
                        subtitle="Mesas y sillas que transforman cada comida en un momento especial"
                        products={comedorProducts}
                        showFilters={true}
                        productsPerPage={12}
                    />
                </div>

                {/* Sección de ambientes */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                                Crea el Ambiente Perfecto
                            </h2>
                            <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                                Desde cenas íntimas hasta celebraciones familiares, encuentra el comedor ideal para cada
                                ocasión
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&h=400&fit=crop"
                                        alt="Comedor Formal"
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-2xl font-bold mb-2">Comedor Formal</h3>
                                        <p className="text-[#F5F1EB]/90 mb-4">Elegancia para ocasiones especiales</p>
                                        <ul className="text-sm text-[#F5F1EB]/80 space-y-1">
                                            <li>• Mesas extensibles</li>
                                            <li>• Sillas tapizadas</li>
                                            <li>• Acabados premium</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop"
                                        alt="Comedor Casual"
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-2xl font-bold mb-2">Comedor Casual</h3>
                                        <p className="text-[#F5F1EB]/90 mb-4">Comodidad para el día a día</p>
                                        <ul className="text-sm text-[#F5F1EB]/80 space-y-1">
                                            <li>• Diseños relajados</li>
                                            <li>• Fácil mantenimiento</li>
                                            <li>• Espacios versátiles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips de decoración */}
                        <TipsSection {...tipsComedor} />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default ComedorPage;
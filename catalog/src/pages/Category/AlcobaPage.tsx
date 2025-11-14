import {useMemo} from 'react';
import ProductGrid from '../../components/Product/ProductGrid';
import {useProducts} from '../../hooks/useProducts';
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorDisplay from "../../components/UI/ErrorDisplay";
import Banner from "../../components/Banner/Banner.tsx";
import {Constants} from "../../utils/Constants.ts";
import {IoBed} from "react-icons/io5";
import SectionCharacteristic from "../../components/SecctionInformation/SectionCharacteristic.tsx";
import {sectionCharacteristicAlcobas} from "../../elements/CharacteristicPoints.ts";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import TipsSection from "../../components/UI/TipsSection.tsx";
import {tipsAlcoba} from "../../elements/TipsData.ts";

const AlcobaPage = () => {
    const { bannerProducts, catalogProducts, loading, error } = useProducts();
    
    // Filtrar productos de la categoría "Alcoba"
    const alcobaProducts = useMemo(() => {
        return catalogProducts.filter(product =>
            product.category.toLowerCase().includes('alcoba') ||
            product.category.toLowerCase().includes('cama') ||
            product.category.toLowerCase().includes('dormitorio') ||
            product.category.toLowerCase().includes('armario') ||
            product.category.toLowerCase().includes('closet') ||
            product.category.toLowerCase().includes('nochero')
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
            {/* Hero Section específico para Alcobas */}
            <Banner
                productos={bannerProducts}
                title={"Tu refugio"}
                subTitle={"personal"}
                description={Constants.MESSAGE_INFO_ALCOBAS}
                showPoint={false}
                icon={<IoBed/>}
                iconTitle={"colección alcobas"}
            />
            {/* Sección de características de las alcobas */}
            <SectionCharacteristic title={sectionCharacteristicAlcobas.title}
                                   descriptionGeneral={sectionCharacteristicAlcobas.descriptionGeneral}
                                   characteristics={sectionCharacteristicAlcobas.characteristics}/>
            {/* Catálogo de productos */}
            <div id="catalog-section">
                <ProductGrid
                    title="Nuestra Colección de Alcobas"
                    subtitle="Crea el dormitorio de tus sueños con muebles que combinan confort y elegancia"
                    products={alcobaProducts}
                    showFilters={true}
                    productsPerPage={12}
                />
            </div>

            {/* Sección de ambientes */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                            Crea el Dormitorio Perfecto
                        </h2>
                        <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                            Desde dormitorios principales hasta espacios juveniles, encuentra la alcoba ideal para cada necesidad
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="group">
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop"
                                    alt="Alcoba Principal"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Alcoba Principal</h3>
                                    <p className="text-[#F5F1EB]/90 mb-4">Lujo y comodidad para padres</p>
                                    <ul className="text-sm text-[#F5F1EB]/80 space-y-1">
                                        <li>• Camas king y queen</li>
                                        <li>• Armarios amplios</li>
                                        <li>• Mesas de noche con gavetas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div
                                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-e7b5e9b5b6d5?w=600&h=400&fit=crop"
                                    alt="Alcoba Juvenil"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Alcoba Juvenil</h3>
                                    <p className="text-[#F5F1EB]/90 mb-4">Funcional y con personalidad</p>
                                    <ul className="text-sm text-[#F5F1EB]/80 space-y-1">
                                        <li>• Diseños modernos</li>
                                        <li>• Espacios optimizados</li>
                                        <li>• Colores vibrantes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tips de decoración */}
                    <TipsSection {...tipsAlcoba} />
                </div>
            </section>

            {/* Sección de garantía y servicios */}

        </main>
            <Footer/>
            </>
    );
};

export default AlcobaPage;
import {useMemo} from 'react';
import ProductGrid from '../../components/Product/ProductGrid';
import {useProducts} from '../../hooks/useProducts';
import Banner from "../../components/Banner/Banner.tsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorDisplay from "../../components/UI/ErrorDisplay";
import {LuSofa} from 'react-icons/lu';
import {Constants} from "../../utils/Constants.ts";
import Footer from "../../components/Layout/Footer/Footer.tsx";
import SectionCharacteristic from "../../components/SecctionInformation/SectionCharacteristic.tsx";
import {sectionCharacteristicSala} from "../../elements/CharacteristicPoints.ts";
import TipsSection from "../../components/UI/TipsSection.tsx";
import {tipsSala} from "../../elements/TipsData.ts";

const SalaPage = () => {
    const { bannerProducts, catalogProducts, loading, error } = useProducts();
    
    // Filtrar productos de la categoría "Sala"
    const salaProducts = useMemo(() => {
        return catalogProducts.filter(product =>
            product.category.toLowerCase().includes('sala') ||
            product.category.toLowerCase().includes('sofa') ||
            product.category.toLowerCase().includes('sillón')
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
                {/* Hero Section específico para Salas */}

                <Banner
                    productos={bannerProducts}
                    title={"Salas que"}
                    subTitle={"Abrazan"}
                    description={Constants.MESSAGE_INFO_SALAS}
                    icon={<LuSofa strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>}
                    iconTitle={"Colección salas"}
                    showPoint={false}


                />
                {/* Sección de características de las salas */}
                <SectionCharacteristic title={sectionCharacteristicSala.title}
                                       descriptionGeneral={sectionCharacteristicSala.descriptionGeneral}
                                       characteristics={sectionCharacteristicSala.characteristics}/>

                {/* Catálogo de productos */}
                <div id="catalog-section">
                    <ProductGrid
                        title="Nuestra Colección de Salas"
                        subtitle="Encuentra el sofá perfecto para tu estilo de vida"
                        products={salaProducts}
                        showFilters={true}
                        productsPerPage={12}
                    />
                </div>

                {/* Sección de inspiración */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                                Encuentra Tu Estilo
                            </h2>
                            <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                                Cada sala es única, igual que tu hogar. Descubre el estilo que mejor se adapte a tu
                                personalidad
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop"
                                        alt="Estilo Moderno"
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">Moderno</h3>
                                        <p className="text-[#F5F1EB]/90 text-sm">Líneas limpias y contemporáneas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=400&fit=crop"
                                        alt="Estilo Clásico"
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">Clásico</h3>
                                        <p className="text-[#F5F1EB]/90 text-sm">Elegancia atemporal</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop"
                                        alt="Estilo Contemporáneo"
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#641B2E]/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">Contemporáneo</h3>
                                        <p className="text-[#F5F1EB]/90 text-sm">Tendencias actuales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tips de decoración */}
                        <div className="mt-16">
                            <TipsSection {...tipsSala} />
                        </div>
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    );
};

export default SalaPage;
import Slider from "react-slick";
import {settings} from "../../utils/utilsSlider.ts";
import type {product} from "../../utils/typeImage.ts";
import type {BannerProducts} from "../../interfaces/BannerProducts.ts";
import ButtonWhats from "../Button/ButtonWhats.tsx";
import ButtonReference from "../Button/ButtonReference.tsx";

function Banner({productos,title,subTitle, description,icon,iconTitle, showPoint}: BannerProducts) {

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Carrusel de imágenes de fondo */}
            <div className="absolute inset-0">
                <Slider {...settings} className="h-full">
                    {productos.map((product: product) => (
                        <div key={product.id}
                             className="relative h-screen bg-gradient-to-br from-primary-900 to-primary-950">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover object-center transition-all duration-1000"
                                style={{
                                    filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
                                    objectPosition: 'center 40%'
                                }}
                                onLoad={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    const aspectRatio = img.naturalWidth / img.naturalHeight;

                                    if (aspectRatio > 1.5) {
                                        img.style.objectFit = 'contain';
                                        img.style.objectPosition = 'center';
                                    } else {
                                        img.style.objectFit = 'cover';
                                        img.style.objectPosition = 'center 30%';
                                    }
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Overlay gradient fijo */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-primary-950/100 via-primary-500/20 to-transparent z-10"></div>

            <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl">

                        {!showPoint && iconTitle && <ButtonReference iconName={iconTitle} svg={icon}/>}

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif">
                            <span className="block text-cream drop-shadow-lg">{title}</span>
                            <span className="block text-warm-400 mt-2 drop-shadow-lg">{subTitle}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-cream/95 mb-12 leading-relaxed max-w-2xl font-light">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                className="px-10 py-5 bg-warm-600 hover:bg-warm-700 text-white font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-warm-600/30">
                                Ver Catálogo Completo
                            </button>
                            <button
                                className="px-10 py-5 border-3 border-cream text-cream hover:bg-cream hover:text-primary-950 font-bold text-base rounded-xl transition-all duration-300 backdrop-blur-sm shadow-xl">
                                Contáctanos Ahora
                            </button>
                        </div>

                        {/* Información adicional */}
                        {
                            showPoint && (
                                <div className="mt-16 flex flex-wrap gap-8 text-cream/80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Producto de calidad</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Garantía extendida</span>
                                    </div>
                                    {
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                                            <span className="text-sm font-medium">100% hechos a mano</span>
                                        </div>
                                    }

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Gradient inferior fijo */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary-950/60 to-transparent z-15"></div>

            {/* WhatsApp button fijo */}
            <ButtonWhats/>
            <div className="absolute bottom-10 right-10 z-30">
                <div className="flex items-center space-x-4 text-white/90">
                    <div className="hidden md:block text-right text-sm">
                        <p className="font-bold text-warm-300">¿Necesitas ayuda?</p>
                        <p className="text-cream/90">Contáctanos por WhatsApp</p>
                    </div>
                    <a href="https://wa.me/573144766493">
                        <button
                            className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse hover:animate-none">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z"/>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;

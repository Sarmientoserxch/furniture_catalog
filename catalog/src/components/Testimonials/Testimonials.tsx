import Slider from "react-slick";

interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    image: string;
    product: string;
}

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        dotsClass: "slick-dots testimonials-dots",
        pauseOnHover: true,
        adaptiveHeight: true
    };

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "María González",
            location: "Bogotá",
            rating: 5,
            comment: "Increíble calidad y atención. El sofá que compramos transformó completamente nuestra sala. El equipo de Muebles Sarmiento nos asesoró perfectamente y la entrega fue puntual.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face",
            product: "Sofá Modular Premium"
        },
        {
            id: 2,
            name: "Carlos Rodríguez",
            location: "Medellín",
            rating: 5,
            comment: "El comedor que pedimos superó nuestras expectativas. La madera es de excelente calidad y el diseño es exactamente lo que buscábamos para nuestro hogar.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            product: "Comedor Rustico Familiar"
        },
        {
            id: 3,
            name: "Ana Martínez",
            location: "Cali",
            rating: 5,
            comment: "Desde el primer contacto hasta la instalación, todo fue perfecto. Nos ayudaron a diseñar nuestra alcoba ideal y el resultado es simplemente hermoso.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            product: "Alcoba Contemporánea"
        },
        {
            id: 4,
            name: "Jorge Hernández",
            location: "Barranquilla",
            rating: 5,
            comment: "La atención personalizada marca la diferencia. Nos tomaron el tiempo necesario para entender nuestras necesidades y el resultado es espectacular.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            product: "Sala Ejecutiva"
        },
        {
            id: 5,
            name: "Luisa Pérez",
            location: "Bucaramanga",
            rating: 5,
            comment: "Llevamos más de 3 años con nuestros muebles y siguen como el primer día. La calidad y durabilidad son excepcionales. Totalmente recomendados.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            product: "Juego de Alcoba Clásica"
        }
    ];


    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-warm-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
        ));
    };

    return (
        <section className="py-20 bg-primary-950 relative overflow-hidden">
            {/* Patrón decorativo de fondo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-warm-500 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sage rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-warm-500 mb-6">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                        Más de 500 familias han transformado sus hogares con nosotros
                    </p>
                </div>

                <div className="max-w-4xl mx-auto -mb-90">
                    {/* Slider de react-slick */}
                    <Slider {...settings} className="testimonials-slider">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-4">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500">
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                        {/* Imagen del cliente */}
                                        <div className="flex-shrink-0">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-24 h-24 rounded-full object-cover border-4 border-warm-500"
                                            />
                                        </div>

                                        {/* Contenido del testimonial */}
                                        <div className="flex-1 text-center md:text-left">
                                            <div className="flex justify-center md:justify-start mb-4">
                                                {renderStars(testimonial.rating)}
                                            </div>

                                            <blockquote className="text-lg md:text-xl text-primary-950 mb-6 leading-relaxed italic">
                                                "{testimonial.comment}"
                                            </blockquote>

                                            <div className="mb-4">
                                                <h4 className="text-xl font-semibold text-primary-950">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-secondary-800/70">
                                                    {testimonial.location}
                                                </p>
                                            </div>

                                            <div className="inline-flex items-center px-4 py-2 bg-cream rounded-full">
                                                <svg className="w-4 h-4 text-warm-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                                <span className="text-sm font-medium text-primary-950">
                                                    {testimonial.product}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                    {/* Estadísticas */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-warm-500 mb-2">500+</div>
                            <p className="text-cream/80">Familias Satisfechas</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-warm-500 mb-2">15+</div>
                            <p className="text-cream/80">Años de Experiencia</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-warm-500 mb-2">98%</div>
                            <p className="text-cream/80">Recomendación</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Testimonials;
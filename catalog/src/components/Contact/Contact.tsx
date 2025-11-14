import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simular envío
        setTimeout(() => {
            console.log('Formulario enviado:', formData);
            setIsSubmitting(false);
            // Aquí integrarías con WhatsApp o tu backend
            const whatsappMessage = `Hola! Mi nombre es ${formData.name}. Estoy interesado en ${formData.productInterest}. Mi mensaje: ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`;
            const whatsappUrl = `https://wa.me/573144766493?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        }, 2000);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#F5F1EB] to-[#FBDB93]/20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                        ¿Listo para Transformar tu Hogar?
                    </h2>
                    <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                        Cuéntanos sobre tu proyecto y te ayudaremos a crear el espacio de tus sueños
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Formulario */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#FBDB93]/20">
                        <h3 className="text-2xl font-semibold text-[#641B2E] mb-6">Solicitar Cotización</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[#641B2E] font-medium mb-2">
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[#BE5B50]/20 rounded-lg focus:border-[#BE5B50] focus:ring-2 focus:ring-[#BE5B50]/20 outline-none transition-all duration-300"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#641B2E] font-medium mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[#BE5B50]/20 rounded-lg focus:border-[#BE5B50] focus:ring-2 focus:ring-[#BE5B50]/20 outline-none transition-all duration-300"
                                        placeholder="+57 123 456 7890"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#641B2E] font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#BE5B50]/20 rounded-lg focus:border-[#BE5B50] focus:ring-2 focus:ring-[#BE5B50]/20 outline-none transition-all duration-300"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-[#641B2E] font-medium mb-2">
                                    ¿Qué tipo de mueble te interesa? *
                                </label>
                                <select
                                    name="productInterest"
                                    required
                                    value={formData.productInterest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#BE5B50]/20 rounded-lg focus:border-[#BE5B50] focus:ring-2 focus:ring-[#BE5B50]/20 outline-none transition-all duration-300"
                                >
                                    <option value="">Selecciona una categoría</option>
                                    <option value="salas">Salas y Sofás</option>
                                    <option value="comedores">Comedores</option>
                                    <option value="alcobas">Alcobas</option>
                                    <option value="decoracion">Decoración</option>
                                    <option value="todos">Todo el catálogo</option>
                                    <option value="personalizado">Diseño personalizado</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[#641B2E] font-medium mb-2">
                                    Cuéntanos sobre tu proyecto
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#BE5B50]/20 rounded-lg focus:border-[#BE5B50] focus:ring-2 focus:ring-[#BE5B50]/20 outline-none transition-all duration-300 resize-none"
                                    placeholder="Describe tu espacio, presupuesto aproximado, fechas importantes..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#BE5B50] hover:bg-[#8A2D3B] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Enviando...</span>
                                    </div>
                                ) : (
                                    'Enviar Solicitud por WhatsApp'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#FBDB93]/20">
                            <h3 className="text-2xl font-semibold text-[#641B2E] mb-6">Visítanos</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#BE5B50] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#641B2E] mb-1">Nuestra Tienda</h4>
                                        <p className="text-[#8A2D3B]/80">Calle Principal #123</p>
                                        <p className="text-[#8A2D3B]/80">Ciudad, Colombia</p>
                                        <a href="#" className="text-[#BE5B50] hover:text-[#8A2D3B] text-sm font-medium">Ver en Google Maps →</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#BE5B50] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#641B2E] mb-1">Llámanos</h4>
                                        <p className="text-[#8A2D3B]/80">+57 314 476 6493</p>
                                        <p className="text-[#8A2D3B]/80">Lun - Sáb: 8AM - 5PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#641B2E] mb-1">WhatsApp</h4>
                                        <p className="text-[#8A2D3B]/80">Respuesta inmediata</p>
                                        <a href="https://wa.me/573144766493" className="text-green-600 hover:text-green-700 text-sm font-medium">Chatear ahora →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
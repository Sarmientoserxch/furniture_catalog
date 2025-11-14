const Footer = () => {
    return (
        <footer className="bg-[#641B2E] text-white">
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo y Descripción */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold text-[#FBDB93] mb-4">Muebles Sarmiento Sanchez</h3>
                        <p className="text-[#F5F1EB]/80 mb-6 max-w-md leading-relaxed">
                            Transformamos espacios en hogares llenos de calidez y elegancia. 
                            Más de 15 años creando muebles que cuentan historias.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-[#BE5B50] hover:bg-[#FBDB93] rounded-full flex items-center justify-center transition-colors duration-300 group">
                                <svg className="w-5 h-5 text-white group-hover:text-[#641B2E]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#BE5B50] hover:bg-[#FBDB93] rounded-full flex items-center justify-center transition-colors duration-300 group">
                                <svg className="w-5 h-5 text-white group-hover:text-[#641B2E]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                                </svg>
                            </a>
                        </div>
                    </div>


                    {/* Contacto */}
                    <div>
                        <h4 className="text-xl font-semibold text-[#FBDB93] mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-[#BE5B50] mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <div>
                                    <p className="text-[#F5F1EB]/80">Diagonal 4 #1-21</p>
                                    <p className="text-[#F5F1EB]/80">Cundinamarca,Silvania, Colombia</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-[#BE5B50]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <a href={"tel:+57314330029"}><p className="text-[#F5F1EB]/80">+57 314 330 0269</p></a>
                                <p className="text-[#F5F1EB]/80">+57 314 476 6493</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-[#BE5B50]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <p className="text-[#F5F1EB]/80">info@muebles-sarmiento.com</p>
                            </li>
                        </ul>
                        

                    </div>

                    <div>
                        <div className="mt-6 p-4 bg-[#8A2D3B] rounded-lg">
                            <h5 className="font-semibold text-[#FBDB93] mb-2">Horarios de Atención</h5>
                            <p className="text-sm text-[#F5F1EB]/80">Lun - Sáb: 8:00 AM - 5:00 PM</p>
                            <p className="text-sm text-[#F5F1EB]/80">Dom: 10:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#8A2D3B] py-6">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-[#F5F1EB]/60 text-sm">
                            © 2024 Muebles Sarmiento. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="https://policies.google.com/privacy?hl=es" className="text-[#F5F1EB]/60 hover:text-[#FBDB93] text-sm transition-colors duration-300">
                                Política de Privacidad
                            </a>
                            <a href="https://policies.google.com/privacy?hl=es" className="text-[#F5F1EB]/60 hover:text-[#FBDB93] text-sm transition-colors duration-300">
                                Términos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
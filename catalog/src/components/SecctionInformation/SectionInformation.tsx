const SectionInformation = () => {
    return (
        <section className="py-20 bg-[#F5F1EB]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                        Creamos Hogares, No Solo Muebles
                    </h2>
                    <p className="text-lg text-[#8A2D3B]/80 max-w-3xl mx-auto leading-relaxed">
                        Con más de 15 años de experiencia, transformamos espacios en lugares llenos de vida,
                        donde cada pieza cuenta una historia y cada rincón respira calidez y elegancia.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-[#BE5B50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8A2D3B] transition-colors duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 5 4-2 4 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[#641B2E] mb-3">Calidad Premium</h3>
                        <p className="text-[#8A2D3B]/70">Materiales selectos y acabados de la más alta calidad</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 bg-[#BE5B50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8A2D3B] transition-colors duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[#641B2E] mb-3">Diseño Único</h3>
                        <p className="text-[#8A2D3B]/70">Piezas exclusivas que reflejan tu personalidad</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 bg-[#BE5B50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8A2D3B] transition-colors duration-300">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[#641B2E] mb-3">Atención Personal</h3>
                        <p className="text-[#8A2D3B]/70">Asesoría especializada para tu proyecto ideal</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionInformation;

import type { CharacteristicSectionProps } from "../../interfaces/CharacteristicSection.ts";

const SectionCharacteristic = ({ title, descriptionGeneral, characteristics }: CharacteristicSectionProps) => {
    return (
        <section className="py-20 bg-[#F5F1EB]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                        {descriptionGeneral}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {characteristics.map((characteristic, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-20 h-20 bg-[#BE5B50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8A2D3B] group-hover:scale-110 transition-all duration-300">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={characteristic.svgPath} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#641B2E] mb-3">{characteristic.title}</h3>
                            <p className="text-[#8A2D3B]/70">{characteristic.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionCharacteristic;
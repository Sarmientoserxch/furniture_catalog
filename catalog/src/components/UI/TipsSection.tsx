import type { TipsSectionProps } from "../../interfaces/TipsSection.ts";

const TipsSection = ({ title, tips }: TipsSectionProps) => {
    return (
        <div className="bg-[#F5F1EB] rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#641B2E] mb-4">
                    {title}
                </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip, index) => (
                    <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-[#BE5B50] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tip.svgPath} />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-[#641B2E] mb-2">{tip.title}</h4>
                        <p className="text-sm text-[#8A2D3B]/70">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TipsSection;
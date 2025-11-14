const Recommendation = () => {
    return (<div className="bg-[#641B2E] rounded-2xl shadow-lg p-8 text-white">
        <h3 className="text-2xl font-semibold text-[#FBDB93] mb-4">¿Por qué elegirnos?</h3>
        <ul className="space-y-3">
            <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#FBDB93]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[#F5F1EB]/90">Más de 15 años de experiencia</span>
            </li>
            <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#FBDB93]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[#F5F1EB]/90">Materiales de primera calidad</span>
            </li>
            <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#FBDB93]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[#F5F1EB]/90">Entrega e instalación incluida</span>
            </li>
            <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#FBDB93]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[#F5F1EB]/90">Garantía de 2 años</span>
            </li>
        </ul>
    </div>)
};

export default Recommendation;
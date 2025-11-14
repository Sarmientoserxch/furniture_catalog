import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    features: string[];
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [imageError, setImageError] = useState(false);

    const handleWhatsAppClick = () => {
        const message = `Hola! Me interesa el ${product.name}. ¿Podrían darme más información y el precio actual?`;
        const whatsappUrl = `https://wa.me/573144766493?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
            {/* Imagen del producto */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
                {!imageError ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="text-center text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm">Imagen no disponible</p>
                        </div>
                    </div>
                )}
                
                {/* Overlay con categoría */}
                <div className="absolute top-4 left-4">
                    <span className="bg-[#641B2E]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Contenido del producto */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-[#641B2E] mb-3 group-hover:text-[#8A2D3B] transition-colors">
                    {product.name}
                </h3>
                
                <p className="text-[#8A2D3B]/70 mb-4 text-sm leading-relaxed">
                    {product.description}
                </p>

                {/* Características */}
                {product.features && product.features.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#641B2E] mb-2">Características:</h4>
                        <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 4).map((feature, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-[#FBDB93]/20 text-[#8A2D3B] px-2 py-1 rounded-full"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Botones de acción */}
                <div className="flex gap-3">
                    <button
                        onClick={handleWhatsAppClick}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z"/>
                        </svg>
                        Consultar
                    </button>
                    
                    <button className="px-4 py-3 border-2 border-[#641B2E] text-[#641B2E] hover:bg-[#641B2E] hover:text-white rounded-lg font-semibold transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
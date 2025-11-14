import { useEffect } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    productName?: string;
}

const ImageModal = ({ 
    isOpen, 
    images, 
    currentIndex, 
    onClose, 
    onNext, 
    onPrevious, 
    productName 
}: ImageModalProps) => {
    // Manejar teclas del teclado
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowRight':
                    if (images.length > 1) onNext();
                    break;
                case 'ArrowLeft':
                    if (images.length > 1) onPrevious();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, onClose, onNext, onPrevious, images.length]);

    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
            {/* Overlay para cerrar */}
            <div 
                className="absolute inset-0" 
                onClick={onClose}
            />
            
            {/* Contenedor del modal */}
            <div className="relative h-full flex items-center justify-center p-4">
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Imagen principal */}
                <div className="relative max-w-6xl max-h-[90vh] w-full">
                    <img
                        src={images[currentIndex]}
                        alt={productName ? `${productName} - Imagen ${currentIndex + 1}` : `Imagen ${currentIndex + 1}`}
                        className="w-full h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Navegación entre imágenes */}
                    {images.length > 1 && (
                        <>
                            {/* Botón anterior */}
                            <button
                                onClick={onPrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Botón siguiente */}
                            <button
                                onClick={onNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Información de la imagen */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="flex items-center space-x-4 text-white text-sm">
                        {productName && (
                            <span className="font-medium">{productName}</span>
                        )}
                        {images.length > 1 && (
                            <>
                                <span className="text-white/60">•</span>
                                <span>{currentIndex + 1} de {images.length}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Miniaturas (si hay múltiples imágenes) */}
                {images.length > 1 && (
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    // Esta funcionalidad se puede implementar si necesitas cambiar directamente a una imagen
                                    console.log('Cambiar a imagen', index);
                                }}
                                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'border-[#FBDB93] opacity-100' 
                                        : 'border-white/30 opacity-60 hover:opacity-80'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Miniatura ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageModal;
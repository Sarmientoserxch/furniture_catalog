import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    features: string[];
}

interface ProductGridProps {
    title?: string;
    subtitle?: string;
    showFilters?: boolean;
    productsPerPage?: number;
    products: Product[];
}

const ProductGrid = ({ 
    title = "Nuestro Catálogo", 
    subtitle = "Descubre la colección que transformará tu hogar",
    showFilters = true,
    productsPerPage = 12,
    products = []
}: ProductGridProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('name');
    const [currentPage, setCurrentPage] = useState(1);

    // Obtener categorías únicas
    const categories = useMemo(() => {
        const cats = Array.from(new Set(products.map(p => p.category)));
        return ['all', ...cats];
    }, [products]);

    // Filtrar y ordenar productos
    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Filtrar por categoría
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Ordenar productos
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'category':
                    return a.category.localeCompare(b.category);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [products, selectedCategory, sortBy]);

    // Paginación
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    // Resetear página cuando cambian los filtros
    useMemo(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortBy]);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#641B2E] mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-[#8A2D3B]/80 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Filtros y ordenamiento */}
                {showFilters && (
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
                        {/* Filtros por categoría */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-[#641B2E] text-white shadow-lg'
                                            : 'bg-[#F5F1EB] text-[#641B2E] hover:bg-[#FBDB93]/30'
                                    }`}
                                >
                                    {category === 'all' ? 'Todos' : category}
                                </button>
                            ))}
                        </div>

                        {/* Ordenamiento */}
                        <div className="flex items-center gap-4">
                            <span className="text-[#8A2D3B] font-semibold">Ordenar por:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-[#8A2D3B]/30 rounded-lg bg-white text-[#641B2E] font-semibold focus:outline-none focus:ring-2 focus:ring-[#641B2E]/50"
                            >
                                <option value="name">Nombre</option>
                                <option value="category">Categoría</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* Contador de resultados */}
                <div className="mb-8">
                    <p className="text-[#8A2D3B]/70">
                        Mostrando {paginatedProducts.length} de {filteredProducts.length} productos
                        {selectedCategory !== 'all' && ` en ${selectedCategory}`}
                    </p>
                </div>

                {/* Grid de productos */}
                {paginatedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                        {paginatedProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-[#8A2D3B]/50 mb-4">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7" />
                            </svg>
                            <p className="text-xl font-semibold">No se encontraron productos</p>
                            <p>Intenta cambiar los filtros de búsqueda</p>
                        </div>
                    </div>
                )}

                {/* Paginación */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-[#F5F1EB] text-[#641B2E] rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FBDB93]/30 transition-colors"
                        >
                            Anterior
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                                    currentPage === page
                                        ? 'bg-[#641B2E] text-white'
                                        : 'bg-[#F5F1EB] text-[#641B2E] hover:bg-[#FBDB93]/30'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-[#F5F1EB] text-[#641B2E] rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FBDB93]/30 transition-colors"
                        >
                            Siguiente
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
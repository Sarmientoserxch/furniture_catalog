import { useState, useEffect } from 'react';
import { DataService } from '../service/dataService';
import type { product, CatalogProduct } from '../utils/typeImage';

interface UseProductsReturn {
    bannerProducts: product[];
    catalogProducts: CatalogProduct[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useProducts = (): UseProductsReturn => {
    const [bannerProducts, setBannerProducts] = useState<product[]>([]);
    const [catalogProducts, setCatalogProducts] = useState<CatalogProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const [banner, catalog] = await Promise.all([
                DataService.getBannerProducts(),
                DataService.getCatalogProducts()
            ]);

            setBannerProducts(banner);
            setCatalogProducts(catalog);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            setError(errorMessage);
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    const refetch = async () => {
        DataService.clearCache();
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        bannerProducts,
        catalogProducts,
        loading,
        error,
        refetch
    };
};
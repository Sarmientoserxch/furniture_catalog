// Servicio para obtener datos desde JSON files o GitHub
export class DataService {
    private static cache = new Map<string, any>();
    private static readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

    // URLs para desarrollo local vs producción
    private static getBaseUrl() {
        // En producción usará tu repo de GitHub
        if (import.meta.env.PROD) {
            return 'https://raw.githubusercontent.com/tu-usuario/tu-repo/main/catalog/public/data';
        }
        // En desarrollo usa archivos locales
        return '/data';
    }

    private static async fetchWithCache(url: string) {
        const now = Date.now();
        const cacheKey = url;
        const cached = this.cache.get(cacheKey);

        // Usar cache si existe y no ha expirado
        if (cached && (now - cached.timestamp) < this.CACHE_DURATION) {
            return cached.data;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Guardar en cache
            this.cache.set(cacheKey, {
                data,
                timestamp: now
            });

            return data;
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            
            // Si hay error pero tenemos cache, usarlo
            if (cached) {
                console.warn('Using stale cache due to fetch error');
                return cached.data;
            }
            
            // Si no hay cache, retornar array vacío
            return [];
        }
    }

    static async getBannerProducts() {
        const baseUrl = this.getBaseUrl();
        return this.fetchWithCache(`${baseUrl}/banner-products.json`);
    }

    static async getCatalogProducts() {
        const baseUrl = this.getBaseUrl();
        return this.fetchWithCache(`${baseUrl}/products.json`);
    }

    // Método para limpiar cache manualmente
    static clearCache() {
        this.cache.clear();
    }

    // Método para pre-cargar datos
    static async preloadData() {
        try {
            await Promise.all([
                this.getBannerProducts(),
                this.getCatalogProducts()
            ]);
            console.log('Data preloaded successfully');
        } catch (error) {
            console.error('Error preloading data:', error);
        }
    }
}
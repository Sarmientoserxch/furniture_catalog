// Nuevo servicio que usa datos desde JSON
import { DataService } from './dataService';

// Exportar las funciones que obtienen datos dinámicamente
export const getBannerProducts = async () => {
    return await DataService.getBannerProducts();
};

export const getCatalogProducts = async () => {
    return await DataService.getCatalogProducts();
};

// Para mantener compatibilidad durante la migración, exportamos arrays vacíos
// que se llenarán cuando se usen los hooks
export const bannerProducts: any[] = [];
export const catalogProducts: any[] = [];
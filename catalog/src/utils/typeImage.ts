export type product = {
    id: number;
    title: string;
    image: string;
}

export interface CatalogProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    features: string[];
}
// =======================
// TIPOS DE PRODUCTO
// =======================

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ProductCategory;
  images: ProductImage[];
  dimensions?: ProductDimensions;
  materials?: string[];
  colors?: string[];
  features?: string[];
  stock_status: StockStatus;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string;
  url: string;
  cloudinary_id: string;
  alt_text?: string;
  is_primary: boolean;
  order: number;
}

export interface ProductDimensions {
  width?: number;
  height?: number;
  depth?: number;
  weight?: number;
  unit: 'cm' | 'm' | 'kg';
}

export type ProductCategory =
  | 'sala'
  | 'comedor'
  | 'alcoba'
  | 'decoracion'
  | 'oficina'
  | 'exterior';

export type StockStatus = 'in_stock' | 'out_of_stock' | 'made_to_order';

// =======================
// TIPOS DE FILTROS Y PAGINACIÓN
// =======================

export interface ProductFilters {
  category?: ProductCategory;
  search?: string;
  materials?: string[];
  colors?: string[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  featured?: boolean;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}

// =======================
// TIPOS DE SUPABASE
// =======================

export interface Database {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Omit<Product, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>;
      };
      product_images: {
        Row: ProductImage;
        Insert: Omit<ProductImage, 'id'>;
        Update: Partial<Omit<ProductImage, 'id'>>;
      };
    };
  };
}

// =======================
// TIPOS DE UI
// =======================

export interface CategoryCard {
  id: string;
  name: string;
  slug: ProductCategory;
  description: string;
  image: string;
  icon: string;
}

export interface WhatsAppMessage {
  phone: string;
  message: string;
}

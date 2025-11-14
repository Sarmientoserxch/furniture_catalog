import { supabase } from './supabase';
import type { Product, ProductFilters, PaginatedResponse, PaginationParams } from '@/types';

/**
 * Obtiene productos con filtros y paginación
 */
export async function getProducts(
  filters: ProductFilters = {},
  pagination: PaginationParams = { page: 1, limit: 12 }
): Promise<PaginatedResponse<Product>> {
  try {
    const { page, limit } = pagination;
    const offset = (page - 1) * limit;

    // Construir query base
    let query = supabase
      .from('products')
      .select('*, images:product_images(*)', { count: 'exact' })
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false });

    // Aplicar filtros
    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.search) {
      query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    }

    if (filters.featured !== undefined) {
      query = query.eq('is_featured', filters.featured);
    }

    if (filters.inStock) {
      query = query.eq('stock_status', 'in_stock');
    }

    if (filters.materials && filters.materials.length > 0) {
      query = query.overlaps('materials', filters.materials);
    }

    if (filters.colors && filters.colors.length > 0) {
      query = query.overlaps('colors', filters.colors);
    }

    // Aplicar paginación
    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching products:', error);
      throw error;
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    return {
      data: data as Product[] || [],
      total,
      page,
      limit,
      totalPages,
      hasMore: page < totalPages,
    };
  } catch (error) {
    console.error('Error in getProducts:', error);
    return {
      data: [],
      total: 0,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: 0,
      hasMore: false,
    };
  }
}

/**
 * Obtiene un producto por su slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*, images:product_images(*)')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data as Product;
  } catch (error) {
    console.error('Error in getProductBySlug:', error);
    return null;
  }
}

/**
 * Obtiene productos destacados
 */
export async function getFeaturedProducts(limit: number = 6): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*, images:product_images(*)')
      .eq('is_featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching featured products:', error);
      return [];
    }

    return data as Product[] || [];
  } catch (error) {
    console.error('Error in getFeaturedProducts:', error);
    return [];
  }
}

/**
 * Obtiene productos relacionados (misma categoría)
 */
export async function getRelatedProducts(
  category: string,
  excludeId: string,
  limit: number = 4
): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*, images:product_images(*)')
      .eq('category', category)
      .neq('id', excludeId)
      .limit(limit);

    if (error) {
      console.error('Error fetching related products:', error);
      return [];
    }

    return data as Product[] || [];
  } catch (error) {
    console.error('Error in getRelatedProducts:', error);
    return [];
  }
}

/**
 * Obtiene todas las categorías únicas
 */
export async function getCategories(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('category')
      .order('category');

    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }

    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    return uniqueCategories;
  } catch (error) {
    console.error('Error in getCategories:', error);
    return [];
  }
}

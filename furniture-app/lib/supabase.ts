import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types';

// Validar variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env.local file.'
  );
}

// Cliente de Supabase con tipos
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // No necesitamos sesiones para un catálogo público
  },
  global: {
    headers: {
      'x-application-name': 'furniture-catalog',
    },
  },
});

// Helper para manejar errores de Supabase
export function handleSupabaseError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

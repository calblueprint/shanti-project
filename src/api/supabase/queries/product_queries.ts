/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//
import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { Product } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchProducts(): Promise<
  PostgrestSingleResponse<Product[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: products, error } = await supabase
      .from('product')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return { data: [], error };
    }

    return { data: products } as PostgrestSingleResponse<Product[]>;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function fetchProductByID(
  productId: number,
): Promise<PostgrestSingleResponse<Product>> {
  try {
    const { data: product, error } = await supabase
      .from('product')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      console.error('Error fetching product data:', error);
    }

    return product;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

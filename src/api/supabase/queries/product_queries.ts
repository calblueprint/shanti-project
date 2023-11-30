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

export async function fetchProductByID(productId: number) {
  try {
    const { data: product, error } = await supabase
      .from('product')
      .select('*')
      .eq('id', productId)
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

/**
 *
 * @returns the number of items stored within the cart if there is no items then returns 0
 */

export async function totalNumberOfItemsInCart() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user !== null) {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', user.id)
      .single();

    if (data !== null) {
      const CurrUserCart = data.cart;

      if (CurrUserCart === null || CurrUserCart === undefined) {
        return 0;
      }

      const itemNumb = Object.values(CurrUserCart) as number[];

      let sum = 0;

      for (let i = 0; i < itemNumb.length; i += 1) {
        sum += itemNumb[i];
      }

      return sum;
    }
  }
  return 0;
}

export async function getProduct() {
  try {
    const { data: products, error } = await supabase
      .from('product')
      .select('*');

    if (error || products === null || products === undefined) {
      console.error('Error fetching product data:', error);
    }

    return products;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function filterProduct(productType: string) {
  const { data } = await supabase
    .from('product')
    .select('*')
    .eq('category', productType);
  return data;
}

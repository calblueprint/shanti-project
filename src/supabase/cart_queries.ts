/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';

import { Cart } from '../schema/schema';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchAllCarts(): Promise<
  PostgrestSingleResponse<Cart[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: carts, error } = await supabase
      .from('Cart')
      .select('*');

    if (error) {
      console.error('Error fetching carts:', error);
      return { data: [], error };
    }

    return { data: carts } as PostgrestSingleResponse<Cart[]>;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function fetchCartByUserId(
  userId: string,
): Promise<
  PostgrestSingleResponse<Cart[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: carts, error } = await supabase
      .from('Cart')
      .select('*')
      .eq('user_id', userId).single();

    if (error) {
      console.error('Error fetching carts for user:', error);
      return { data: [], error };
    }

    return carts;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function fetchCartById(
  cartId: number,
): Promise<PostgrestSingleResponse<Cart>> {
  try {
    const { data: cart, error } = await supabase
      .from('Cart')
      .select('*')
      .eq('id', cartId)
      .single();

    if (error) {
      console.error('Error fetching cart by ID:', error);
    }

    return cart;
  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function updateCartByUserId(
  userId: string,
  updatedCartData: Partial<Cart>,
): Promise<
  PostgrestSingleResponse<Cart> | { data: null; error: PostgrestError }
> {
  try {
    const { data: updatedCart, error } = await supabase
      .from('Cart')
      .update(updatedCartData)
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error updating cart:', error);
      return { data: null, error };
    }

    return updatedCart;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


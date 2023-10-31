/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { User } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchUserData(): Promise<
  PostgrestSingleResponse<User[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: users, error } = await supabase.from('profiles').select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return { data: [], error };
    }

    return { data: users } as PostgrestSingleResponse<User[]>;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function fetchUserByUUID(
  uuid: string,
) {
  try {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', uuid)
      .single();

    if (error) {
      console.error('Error fetching user data:', error);
    }

    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export async function updateCartForUser(
  userId: string,
  newCartData: Record<string, number>,
) {
  try {
    const { data: users, error } = await supabase
      .from('profiles') // Specify the User type for type safety
      .update({ cart: newCartData })
      .eq('user_id', userId);

    if (error) {
      console.error('Error updating cart for user:', error);
      throw error;
    }

    return { data: users } as PostgrestSingleResponse<User[]>;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getCartForUser(
  userId: string,
) {
  try {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('cart') // Select only the 'cart_items' field
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching cart for user:', error);
      throw error;
    }

    if (user) {
      return { data: user.cart } as PostgrestSingleResponse<
        Record<string, number>
      >;
    }
    throw new Error('User not found');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { User } from '../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchUserData(): Promise<
  PostgrestSingleResponse<User[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: users, error } = await supabase.from('users').select('*');

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
): Promise<PostgrestSingleResponse<unknown>> {
  try {
    const { data: user, error } = await supabase
      .from('Users')
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

export async function addUserAddress(
  uuid: string,
  newStreet: string,
  newCity: string,
  newZipcode: string,
): Promise<PostgrestSingleResponse<unknown>> {
  try {
    const { data: existingUser, error: selectError } = await supabase
      .from('Users')
      .select('street, city, zipcode')
      .eq('user_id', uuid)
      .single();

    if (selectError) {
      console.error('Error selecting user data:', selectError);
      throw selectError;
    }

    // Append new values to the arrays
    const updatedStreet = [...(existingUser?.street || []), newStreet];
    const updatedCity = [...(existingUser?.city || []), newCity];
    const updatedZipcode = [...(existingUser?.zipcode || []), newZipcode];

    const { data, error } = await supabase
      .from('Users')
      .update({
        street: updatedStreet,
        city: updatedCity,
        zipcode: updatedZipcode,
      })
      .eq('user_id', uuid)
      .single();

    if (error) {
      console.error('Error updating user data:', error);
      throw error;
    }

    return { data, error: null, status: 200, statusText: 'OK', count: 1 };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function updateCartForUser(
  userId: string,
  newCartData: Record<string, number>,
): Promise<PostgrestSingleResponse<User[]>> {
  try {
    const { data: users, error } = await supabase
      .from<User>('users') // Specify the User type for type safety
      .upsert([
        {
          userId,
          cart_items: newCartData, // Update the 'cart_items' field with new cart data
        },
      ]);

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
): Promise<PostgrestSingleResponse<Record<string, number>>> {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('cart_items') // Select only the 'cart_items' field
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching cart for user:', error);
      throw error;
    }

    if (user) {
      return { data: user.cart_items } as PostgrestSingleResponse<
        Record<string, number>
      >;
    }
    throw new Error('User not found');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

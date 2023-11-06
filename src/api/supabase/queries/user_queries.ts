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

export async function fetchUserData() {
  const { data, error }: { data: User[] | null; error: PostgrestError | null } =
    await supabase.from('profiles').select('*');

  if (error) {
    throw new Error(`An error occured when trying to read profiles: ${error}`);
  } else {
    return data;
  }
}

export async function fetchUserByUUID(uuid: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', uuid)
    .single();
  if (error) {
    throw new Error(`An error occured when trying to read profiles: ${error}`);
  } else {
    return data;
  }
}

export async function fetchUserCart(
  userId: string,
): Promise<Record<string, number>> {
  const { data, error }: { data: User | null; error: PostgrestError | null } =
    await supabase.from('profiles').select('*').eq('user_id', userId).single();

  if (error) {
    throw new Error(
      `An error occurred when trying to fetch the cart: ${error.message}`,
    );
  } else if (!data) {
    throw new Error('No user found with the specified user_id.');
  }

  return data.cart;
}

export async function updateCart(
  userId: string,
  currentCart: Record<string, number>,
) {
  const { data, error } = await supabase
    .from('profiles')
    .update({ cart: currentCart })
    .eq('user_id', userId);

  if (error) {
    throw new Error(
      `An error occurred when trying to update the cart: ${error.message}`,
    );
  }
}

export async function incrementCartItem(
  userId: string,
  itemId: string,
  n: number,
) {
  // First, fetch the current cart for the user
  const { data, error }: { data: User | null; error: PostgrestError | null } =
    await supabase.from('profiles').select('*').eq('user_id', userId).single();

  if (error) {
    throw new Error(
      `An error occurred when trying to fetch the cart: ${error.message}`,
    );
  } else if (!data) {
    throw new Error('No user found with the specified user_id.');
  }

  const currentCart = data.cart;

  // Increment the item's quantity by n or set it to n if not present
  currentCart[itemId] = (currentCart[itemId] || 0) + n;

  // Use the updateCart function to update the cart in the database
  await updateCart(userId, currentCart);
}

export async function incrementCartItemByOne(userId: string, itemId: string) {
  return incrementCartItem(userId, itemId, 1);
}

export async function decrementCartItem(
  userId: string,
  itemId: string,
  n: number,
) {
  // First, fetch the current cart for the user
  const { data, error }: { data: User[] | null; error: PostgrestError | null } =
    await supabase.from('profiles').select('*').eq('user_id', userId);

  if (error) {
    throw new Error(
      `An error occurred when trying to fetch the cart: ${error.message}`,
    );
  } else if (!data || data.length === 0) {
    throw new Error('No user found with the specified user_id.');
  }

  const currentCart = data[0].cart;

  // Decrement the item's quantity by n or remove it if it's 0 or below
  if (currentCart[itemId]) {
    currentCart[itemId] -= n;

    if (currentCart[itemId] <= 0) {
      delete currentCart[itemId];
    }
  }

  // Use the updateCart function to update the cart in the database
  await updateCart(userId, currentCart);
}

export async function decrementCartItemByOne(userId: string, itemId: string) {
  return decrementCartItem(userId, itemId, 1);
}

// export async function addUserAddress(
//   uuid: string,
//   newStreet: string,
//   newCity: string,
//   newZipcode: string,
// ): Promise<PostgrestSingleResponse<unknown>> {
//   try {
//     const { data: existingUser, error: selectError } = await supabase
//       .from('profiles')
//       .select('street, city, zipcode')
//       .eq('user_id', uuid)
//       .single();

//     if (selectError) {
//       throw selectError;
//     }

//     // Append new values to the arrays
//     const updatedStreet = [...(existingUser?.street || []), newStreet];
//     const updatedCity = [...(existingUser?.city || []), newCity];
//     const updatedZipcode = [...(existingUser?.zipcode || []), newZipcode];

//     const { data, error } = await supabase
//       .from('profiles')
//       .update({
//         street: updatedStreet,
//         city: updatedCity,
//         zipcode: updatedZipcode,
//       })
//       .eq('user_id', uuid)
//       .single();

//     if (error) {
//       throw error;
//     }

//     return { data, error: null, status: 200, statusText: 'OK', count: 1 };
//   } catch (error) {
//   }
// }

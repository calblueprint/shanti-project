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

export async function fetchUserByUUID(uuid: string) {
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

export async function fetchFavoriteItems(
  userId: string,
): Promise<Record<string, number>> {
  // Fetch fav_items for the specified user
  const { data, error } = await supabase
    .from('profiles')
    .select('fav_items')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error(
      `An error occurred when trying to fetch favorite items: ${error.message}`,
    );
  } else if (!data) {
    throw new Error('No user found with the specified user_id.');
  }

  return data.fav_items;
}

export async function addToFavorites(userId: string, productId: string) {
  // First, fetch the current fav_items for the user
  const { data, error } = await supabase
    .from('profiles')
    .select('fav_items')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error(
      `An error occurred when trying to fetch the user's favorite items: ${error.message}`,
    );
  }

  const currentFavItems = data?.fav_items || {};

  // Add the product to fav_items or update its quantity
  currentFavItems[productId] = currentFavItems[productId] || 0;

  // Now update the user's fav_items in the database
  const updateResponse = await supabase
    .from('profiles')
    .update({ fav_items: currentFavItems })
    .eq('user_id', userId);

  if (updateResponse.error) {
    throw new Error(
      `An error occurred when trying to update the user's favorite items: ${updateResponse.error.message}`,
    );
  }
}

// Function to remove a product from fav_items
export async function removeFromFavorites(userId: string, productId: string) {
  // First, fetch the current fav_items for the user
  const { data, error } = await supabase
    .from('profiles')
    .select('fav_items')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error(
      `An error occurred when trying to fetch the user's favorite items: ${error.message}`,
    );
  }

  const currentFavItems = data?.fav_items || {};

  // Remove the product from fav_items
  delete currentFavItems[productId];
  console.log(currentFavItems);
  // Now update the user's fav_items in the database
  const updateResponse = await supabase
    .from('profiles')
    .update({ fav_items: currentFavItems })
    .eq('user_id', userId);

  if (updateResponse.error) {
    throw new Error(
      `An error occurred when trying to update the user's favorite items: ${updateResponse.error.message}`,
    );
  }
}

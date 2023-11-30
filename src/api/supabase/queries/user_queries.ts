/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { User, Product } from '../../../schema/schema';

import { getProduct } from './product_queries';

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

export async function fetchUser(): Promise<User> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }

  if (user !== null) {
    const { data, error: error1 } = await supabase
      .from('profiles')
      .select()
      .eq('id', user.id)
      .single();

    if (error1) {
      throw new Error(`Error fetching user: ${error1.message}`);
    }

    return data as User;
  }

  throw new Error('User is null');
}

export async function fetchUserByUUID(uuid: string) {
  try {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', uuid)
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

/**
 * addOrRemoveProductFromFavorite is a function that adds or removes from the user's profiles -> fav_items column based on the state of the heart button.
 * @param product: product object to add/remove to user's favorites
 * @param isFav: a boolean tracking whether to remove an item from user's favorites
 */

export async function addOrRemoveProductFromFavorite(
  product: Product,
  isFav: boolean,
) {
  const specificUser = await fetchUser();

  const CurrUserFavoriteItems = specificUser.fav_items;

  if (isFav) {
    CurrUserFavoriteItems[product.id] = 1;
  } else {
    delete CurrUserFavoriteItems[product.id];
  }

  const { error } = await supabase
    .from('profiles')
    .update({ fav_items: CurrUserFavoriteItems })
    .eq('id', specificUser.id);
}

/**
 * arrayOfFavorites grabs the users favorite items from profiles->fav_items where each fav_item is being tracked by the product_id stored as a string and matches those product_id to the proper product object and stores the product object in an array.
 * @returns an array of product objects
 */

export async function arrayOfFavorites() {
  const specificUser = await fetchUser();

  const CurrUserFavoriteItems = specificUser.fav_items;

  const Favkey = Object.keys(CurrUserFavoriteItems);

  const productData = await getProduct();

  if (productData !== null && productData !== undefined) {
    const FavArray = productData.filter(product =>
      Favkey.includes(String(product.id)),
    );

    return FavArray;
  }
  return [];
}

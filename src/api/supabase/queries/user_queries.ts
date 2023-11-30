/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import supabase from '../createClient';
import { User, Product } from '../../../schema/schema';
import { fetchProductById } from './product_queries';

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
  const user = await fetchUser();

  const favItems = user.fav_items;

  const productID = product.id;

  if (isFav) {
    favItems.push();
  } else {
    const index = favItems.indexOf(productID);
    favItems.splice(index, 1);
  }

  await supabase
    .from('profiles')
    .update({ fav_items: favItems })
    .match({ id: user.id });
}

/**
 * arrayOfFavorites grabs the users favorite items from profiles->fav_items where each fav_item is being tracked by the product_id stored as a string and matches those product_id to the proper product object and stores the product object in an array.
 * @returns an array of product objects
 */

export async function arrayOfFavorites(): Promise<Product[]> {
  const user = await fetchUser();
  const favItems = user.fav_items;
  if (favItems.length === 0) {
    return [];
  }
  const arrayOfProducts = await Promise.all(
    favItems.map(item => fetchProductById(item)),
  );

  return arrayOfProducts;
}

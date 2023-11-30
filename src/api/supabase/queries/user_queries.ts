/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import supabase from '../createClient';
import { User, Product } from '../../../schema/schema';

<<<<<<< HEAD

export async function fetchUser(): Promise<User> {
  const {
    data: { user }, error
=======
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
>>>>>>> 8ddceb846eb2cb5fbc2fd2bd6922908ba78018df
  } = await supabase.auth.getUser();
  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
<<<<<<< HEAD

  if (user !== null) {
    const { data, error: error1 } = await supabase
      .from('profiles')
      .select()
      .eq('user_id', user.id).single();

    if (error1) {
      throw new Error(`Error fetching user: ${error1.message}`);
    }
  

    return data as User;
  }
  
  throw new Error('User is null');
  
}



export async function getUserInfo(product: Product, isFav: boolean) {
  const data = await fetchUser();

  if (data !== null) {
    const CurrUserFavoriteItems = data.fav_items;

    if (isFav) {
      CurrUserFavoriteItems[product.product_id] = 1;
    } else {
      delete CurrUserFavoriteItems[product.product_id];
    }

    const { error } = await supabase
      .from('profiles')
      .update({ fav_items: CurrUserFavoriteItems })
      .eq('user_id', data.id);
=======

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
>>>>>>> 8ddceb846eb2cb5fbc2fd2bd6922908ba78018df
  }

  const { error } = await supabase
    .from('profiles')
    .update({ fav_items: CurrUserFavoriteItems })
    .eq('id', specificUser.id);
}

<<<<<<< HEAD
=======
/**
 * arrayOfFavorites grabs the users favorite items from profiles->fav_items where each fav_item is being tracked by the product_id stored as a string and matches those product_id to the proper product object and stores the product object in an array.
 * @returns an array of product objects
 */
>>>>>>> 8ddceb846eb2cb5fbc2fd2bd6922908ba78018df

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
<<<<<<< HEAD

export async function getProduct() {
  const { data } = await supabase.from('product').select('*');
  return data;
}

export async function filterProduct(productType: string) {
  const { data } = await supabase
    .from('product')
    .select('*')
    .eq('category', productType);
  return data;
}

export async function totalNumberOfItemsInCart() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user !== null) {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('user_id', user.id)
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
=======
>>>>>>> 8ddceb846eb2cb5fbc2fd2bd6922908ba78018df

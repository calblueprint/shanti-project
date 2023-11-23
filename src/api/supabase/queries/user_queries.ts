/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import supabase from '../createClient';
import { User, Product } from '../../../schema/schema';


export async function fetchUser(): Promise<User> {
  const {
    data: { user }, error
  } = await supabase.auth.getUser();
  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }

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
  }
}


export async function arrayOfFavorites() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user !== null) {
    const { data: userProfileData, error: userProfileError } = await supabase
      .from('profiles')
      .select()
      .eq('user_id', user.id)
      .single();

    const CurrUserFavoriteItems = userProfileData.fav_items;

    const Favkey = Object.keys(CurrUserFavoriteItems);

    const { data: productData, error: productError } = await supabase
      .from('product')
      .select('*');

    if (productData !== null && productData !== undefined) {
      const FavArray = productData.filter(product =>
        Favkey.includes(String(product.product_id)),
      );

      return FavArray;
    }
  }
  return [];
}

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
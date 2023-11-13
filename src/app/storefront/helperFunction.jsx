import dotenv from 'dotenv';

import { createClient } from '@supabase/supabase-js';

dotenv.config();
if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  throw new Error(
    'No Supabase environment variables detected, please make sure they are in place!',
  );
}
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export async function getProduct() {
  const { data } = await supabase.from('product').select('*');

  return data;
}

export async function filterProduct(productType) {
  const { data } = await supabase
    .from('product')
    .select('*')
    .eq('category', productType);

  return data;
}

export async function getUserInfo(product, isFav) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', user.id);

  const CurrUserFavoriteItems = data[0].fav_items;

  if (isFav) {
    CurrUserFavoriteItems[product.product_id] = 1;
  } else {
    delete CurrUserFavoriteItems[product.product_id];
  }

  const { errors } = await supabase
    .from('profiles')
    .update({ fav_items: CurrUserFavoriteItems })
    .eq('user_id', user.id);
}

export async function arrayOfFavorites() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', user.id);

  const CurrUserFavoriteItems = data[0].fav_items;

  const Favkey = Object.keys(CurrUserFavoriteItems);

  var FavArray = [];

  for (let i = 0; i < Favkey.length; i++) {
    let key = Favkey[i];
    const { data, error } = await supabase
      .from('product')
      .select()
      .eq('product_id', key);

    if (data[0] != undefined) {
      FavArray.push(data[0]);
    }
  }

  return FavArray;
}

export async function totalNumberOfItemsInCart() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', user.id);

  const CurrUserCart = data[0].cart;

  const itemNumb = Object.values(CurrUserCart);

  let sum = 0;

  for (let i = 0; i < itemNumb.length; i++) {
    sum = sum + itemNumb[i];
  }

  return sum;
}

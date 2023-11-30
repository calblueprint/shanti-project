import supabase from '../createClient';

import {fetchUser} from './user_queries';

// define cart item type
export type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
};

export async function fetchCartItem(cartItemID: number): Promise<CartItem> {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*')
    .match({ id: cartItemID })
    .single();
  if (error) {
    throw new Error(`Error fetching cart item: ${error.message}`);
  }
  return data;
}

export async function fetchCart(): Promise<CartItem[]> {
  const user = await fetchUser();
  const cartID = user.cart_id;
  const { data, error } = await supabase
    .from('order')
    .select('*')
    .match({ id: cartID })
    .single();
  if (error) {
    throw new Error(`Error fetching cart: ${error.message}`);
  }
  const products = data.product_id_array;
  const productPromises = products.map(async (productID: number) => {
    const product = await fetchCartItem(productID);
    return product;
  });
  const fetchedProducts = await Promise.all(productPromises);

  return fetchedProducts;
}

async function updateCart(cartID: number, cartIDArray: number[]) {
  await supabase
    .from('order')
    .update({ cart_id_array: cartIDArray })
    .match({ id: cartID });
}

export async function addToCart(productID: number, quantity: number) {
  const items = await fetchCart();

  // check if product is already in cart
  const existingItem = items.find(item => item.product_id === productID);
  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    await supabase
      .from('cart_items')
      .update({ quantity: newQuantity })
      .match({ id: existingItem.id });
  } else {
    const { data, error } = await supabase
      .from('cart_items')
      .insert([{ product_id: productID, quantity }])
      .select('*')
      .single();
    if (error) {
      throw new Error(`Error adding to cart: ${error.message}`);
    }
    // append to existing cart
    const user = await fetchUser();
    const cartID = user.cart_id;
    const productIdArray = items.map(item => item.id);
    productIdArray.push(data.id);
    updateCart(cartID, productIdArray);
  }
}


export async function decreaseFromCart(productID: number, quantity: number) {
  const items = await fetchCart();
  const existingItem = items.find(item => item.product_id === productID);
  if (existingItem) {
    const newQuantity = existingItem.quantity - quantity;
    if (newQuantity <= 0) {
      await supabase
        .from('cart_items')
        .delete()
        .match({ id: existingItem.id })
        .select('*')
        .single();

      // remove from existing cart
      const user = await fetchUser();
      const cartID = user.cart_id;
      const productIdArray = items.map(item => item.id);
      const index = productIdArray.indexOf(existingItem.id);
      productIdArray.splice(index, 1);
      updateCart(cartID, productIdArray);
    } else {
      await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .match({ id: existingItem.id });
    }
  }
}

export async function removeCartItem(cartItemID: number) {
  decreaseFromCart(cartItemID, Infinity);
}


export async function clearCart() {
  const user = await fetchUser();
  const cartID = user.cart_id;
  updateCart(cartID, []);
}

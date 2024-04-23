import supabase from '../createClient';

import { fetchUser } from './user_queries';
import { Product, ProductWithQuantity } from '../../../schema/schema';
import { fetchProductByID } from './product_queries';
import { convertButtonNumberToCategory } from './button_queries';
// define cart item type
export type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
};

/**
 * get cart item by id
 * @param number - cart item id
 * @returns Promise<CartItem> - A CartItem object.
 */
export async function fetchCartItem(cartItemID: number): Promise<CartItem> {
  const { data, error } = await supabase
    .from('order_product')
    .select('*')
    .eq('id', cartItemID)
    .single();

  if (error) {
    throw new Error(`Error fetching cart item: ${error.message}`);
  }
  return data;
}

/**
 * get cart items in a user's cart
 * @returns Promise<CartItem[]> - An array of CartItem objects.
 */
export async function fetchCart(): Promise<CartItem[]> {
  const user = await fetchUser();

  // Check if the user has a cart_id
  if (!user.cart_id) {
    throw new Error('User does not have a cart.');
  }

  const cartID = user.cart_id;
  const { data, error } = await supabase
    .from('order')
    .select('*')
    .match({ id: cartID })
    .limit(1);

  if (error) {
    throw new Error(`Error fetching cart: ${error.message}`);
  }
  const products = data[0].order_product_id_array;
  if (products !== null && products !== undefined) {
    const productPromises = products.map(async (productID: number) => {
      const product = await fetchCartItem(productID);
      return product;
    });
    const fetchedProducts = await Promise.all(productPromises);
    return fetchedProducts;
  }

  return [] as CartItem[];
}

export async function fetchCartItems(): Promise<Product[]> {
  const cart = await fetchCart();
  const productPromises = cart.map(async (item: CartItem) => {
    const product = await fetchProductByID(item.product_id);
    return product;
  });
  const fetchedProducts = await Promise.all(productPromises);

  return fetchedProducts;
}

/**
 * update cart
 * @param cartID - cart id
 * @param cartIDArray - cart id array
 */
async function updateCart(cartID: number, cartIDArray: number[]) {
  await supabase
    .from('order')
    .update({ order_product_id_array: cartIDArray })
    .match({ id: cartID });
}

/**
 * add product to cart
 * @param productID - product id
 * @param quantity - quantity of product
 */
export async function addToCart(productID: number, quantity: number) {
  const items = await fetchCart();

  // check if product is already in cart

  const existingItem = items.find(
    item => Number(item.product_id) === Number(productID),
  );

  if (existingItem) {
    if (existingItem !== undefined && existingItem !== null) {
      const newQuantity = existingItem.quantity + quantity;
      await supabase
        .from('order_product')
        .update({ quantity: newQuantity })
        .match({ id: existingItem.id });
    }
  } else {
    const { data, error } = await supabase
      .from('order_product')
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

/**
 * decrease quantity of product in cart
 * @param productID - product id
 * @param quantity - quantity of product
 */
export async function decreaseFromCart(productID: number, quantity: number) {
  const items = await fetchCart();
  const existingItem = items.find(item => item.product_id === productID);
  if (existingItem) {
    const newQuantity = existingItem.quantity - quantity;
    if (newQuantity <= 0) {
      await supabase
        .from('order_product')
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
        .from('order_product')
        .update({ quantity: newQuantity })
        .eq('id', existingItem.id);
    }
  }
}

/**
 * remove product from cart
 * @param productID - product id
 */
export async function removeCartItem(productID: number) {
  decreaseFromCart(productID, Infinity);
}

/**
 * clear cart
 */
export async function clearCart() {
  const user = await fetchUser();
  const cartID = user.cart_id;
  updateCart(cartID, []);
}

/**
 * @returns the number of items stored within the cart if there is no items then returns 0
 */

export async function totalNumberOfItemsInCart(): Promise<number> {
  const cart = await fetchCart();
  if (cart.length === 0 || cart === null || cart === null) {
    return 0;
  }
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

export async function fetchCartItemsWithQuantity(): Promise<
  ProductWithQuantity[]
> {
  const cart = await fetchCart();
  const productPromises = cart.map(async (item: CartItem) => {
    const product = await fetchProductByID(item.product_id);
    return {
      name: product.name,
      quantity: item.quantity,
      photo: product.photo,
      id: product.id,
      category: await convertButtonNumberToCategory(product.category),
    };
  });

  const fetchedProducts = await Promise.all(productPromises);

  return fetchedProducts;
}

export async function fetchCartIdFromUser() {
  const user = await fetchUser();
  const cartID = user.cart_id;
  return cartID;
}
/**
 * get cart items in a user's cart by cart_id
 * @returns Promise<CartItem[]> - An array of CartItem objects.
 */
export async function fetchCartById(cartId: string): Promise<CartItem[]> {
  const { data, error } = await supabase
    .from('order')
    .select('*')
    .match({ id: cartId })
    .limit(1);

  if (error) {
    throw new Error(`Error fetching cart: ${error.message}`);
  }
  const products = data[0].order_product_id_array;
  if (products !== null && products !== undefined) {
    const productPromises = products.map(async (productID: number) => {
      const product = await fetchCartItem(productID);
      return product;
    });
    const fetchedProducts = await Promise.all(productPromises);
    return fetchedProducts;
  }

  return [] as CartItem[];
}

export async function fetchCartItemsWithQuantityByID(
  id: string | null,
): Promise<ProductWithQuantity[]> {
  if (id == null) throw new Error('no cartID');

  const cart = await fetchCartById(id);
  const productPromises = cart.map(async (item: CartItem) => {
    const product = await fetchProductByID(Number(item.product_id));
    return {
      name: product.name,
      quantity: item.quantity,
      photo: product.photo,
      id: product.id,
      category: await convertButtonNumberToCategory(product.category),
    };
  });

  const fetchedProducts = await Promise.all(productPromises);
  return fetchedProducts;
}

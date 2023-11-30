import { Product } from '../../../schema/schema';
import supabase from '../createClient';
import { fetchCart } from './cart_queries';

export async function fetchProducts(): Promise<Product[]> {
  const { data: products, error } = await supabase.from('product').select('*');
  if (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }

  return products;
}

export async function fetchProductById(productId: number): Promise<Product> {
  const { data: product, error } = await supabase
    .from('product')
    .select('*')
    .eq('id', productId)
    .single();

  if (error) {
    throw new Error(`Error fetching product: ${error.message}`);
  }

  return product;
}

/**
 *
 * @returns the number of items stored within the cart if there is no items then returns 0
 */

export async function totalNumberOfItemsInCart(): Promise<number> {
  const cart = await fetchCart();
  if (cart.length === 0) {
    return 0;
  }
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

export async function filterProduct(productType: string): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from('product')
    .select('*')
    .eq('category', productType);

  if (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }

  return products;
}

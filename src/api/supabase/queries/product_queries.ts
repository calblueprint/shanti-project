import { Product } from '../../../schema/schema';
import supabase from '../createClient';

/**
 * Fetches all products from the database.
 * @returns Promise<Product[]> - An array of Product objects.
 */
export async function fetchProducts(): Promise<Product[]> {
  const { data: products, error } = await supabase.from('product').select('*');
  if (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }

  return products;
}

/**
 * Fetches a single product by its ID.
 * @param productId - The unique identifier for the product.
 * @returns Promise<Product> - The Product object.
 */
export async function fetchProductByID(productId: number): Promise<Product> {
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
 * @param productType
 * @returns the products that match the productType
 */
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

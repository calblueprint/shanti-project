import { createClient } from '@supabase/supabase-js';
import { User } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchUserByUUID(): Promise<User> {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }

  return data.user.user_metadata as User;
}

export async function fetchUserCart(): Promise<Record<string, number>> {
  const data = await fetchUserByUUID();
  return data.cart;
}

export async function updateCart(currentCart: Record<string, number>) {
  const { error } = await supabase.auth.updateUser({
    data: { cart: currentCart },
  });

  if (error) {
    throw new Error(
      `An error occurred when trying to update the cart: ${error.message}`,
    );
  }
}

export async function incrementCartItem(itemId: string, n: number) {
  const currentCart = await fetchUserCart();

  currentCart[itemId] = (currentCart[itemId] || 0) + n;

  await updateCart(currentCart);
}

export async function decrementCartItem(itemId: string, n: number) {
  const currentCart = await fetchUserCart();

  if (currentCart[itemId]) {
    currentCart[itemId] -= n;

    if (currentCart[itemId] <= 0) {
      delete currentCart[itemId];
    }
  }

  await updateCart(currentCart);
}

export async function incrementCartItemByOne(userId: string, itemId: string) {
  await incrementCartItem(itemId, 1);
}

export async function decrementCartItemByOne(userId: string, itemId: string) {
  await decrementCartItem(itemId, 1);
}

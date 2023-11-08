import {
  createClient,
} from '@supabase/supabase-js';
import { User } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');


export async function fetchUserByUUID() {
  const val = (await supabase.auth.getUser()).data.user?.user_metadata;
  if (val) {
    return val;
  }
  throw new Error('User not found');
}

export async function fetchUserCart(): Promise<Record<string, number>> {
  const data = await fetchUserByUUID();
  return data.cart;
}

export async function updateCart(

  currentCart: Record<string, number>,
) {
  const { error } = await supabase
    .from('profiles')
    .update({ cart: currentCart })
    .eq('user_id', userId);

  if (error) {
    throw new Error(
      `An error occurred when trying to update the cart: ${error.message}`,
    );
  }
}

export async function incrementCartItem(

  itemId: string,
  n: number,
) {

  const currentCart = await fetchUserCart(userId);

  currentCart[itemId] = (currentCart[itemId] || 0) + n;

  await updateCart(userId, currentCart);
}

export async function decrementCartItem(

  itemId: string,
  n: number,
) {

  const currentCart = await fetchUserCart(userId);

  if (currentCart[itemId]) {
    currentCart[itemId] -= n;

    if (currentCart[itemId] <= 0) {
      delete currentCart[itemId];
    }
  }

  await updateCart(userId, currentCart);
}

export async function incrementCartItemByOne(userId: string, itemId: string) {
  await incrementCartItem(userId, itemId, 1);
}

export async function decrementCartItemByOne(userId: string, itemId: string) {
  await decrementCartItem(userId, itemId, 1);
}


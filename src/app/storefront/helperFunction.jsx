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
  let { data, error } = await supabase.from('Product').select('*');

  console.log(data);
  return data;
}

export async function filterProduct(productType) {
  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('category', productType);

  return data;
}

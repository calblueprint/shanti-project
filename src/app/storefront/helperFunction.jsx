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
  // console.log(data);
  return data;
}

export async function filterProduct(productType) {
  const { data } = await supabase
    .from('product')
    .select('*')
    .eq('category', productType);

  // console.log(data);

  return data;
}

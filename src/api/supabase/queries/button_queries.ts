import { StorefrontButtons } from '../../../schema/schema';
import supabase from '../createClient';

export async function fetchButtonCategories(): Promise<StorefrontButtons[]> {
  const { data: buttons, error } = await supabase
    .from('storefront_buttons')
    .select('*');
  if (error) {
    throw new Error(`Error fetching buttons: ${error.message}`);
  }

  return buttons;
}

export async function convertButtonNumbertoCategory(id: string):Promise<string>{
  const { data: buttonsCategory, error } = await supabase
    .from('storefront_buttons')
    .select('*')
    .eq('id', id).single();
  if (error) {
    throw new Error(`Error fetching category: ${error.message}`);
  }
  return buttonsCategory.name;
}

export async function fetchButton() {
  return 0;
}

import { StorefrontButtons } from '../../../schema/schema';
import supabase from '../createClient';

export async function fetchButoonCategories(): Promise<StorefrontButtons[]> {
    const { data: buttons, error } = await supabase
        .from('storefront_buttons')
        .select('*');
    if (error) {
        throw new Error(`Error fetching buttons: ${error.message}`);
    }
    
    return buttons;
}

export async function fetchButton() {
    return 0
}
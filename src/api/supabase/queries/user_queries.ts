import { createClient } from '@supabase/supabase-js';
import { User } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export default async function fetchUser(): Promise<User> {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }

  return data.user.user_metadata as User;
}

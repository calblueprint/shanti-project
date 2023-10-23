/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { Schedule } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchPickupData(): Promise<
  PostgrestSingleResponse<Schedule[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: pickupTimes, error } = await supabase
      .from('pickup_times')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return { data: [], error };
    }

    return { data: pickupTimes } as PostgrestSingleResponse<Schedule[]>;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function fetchPickupTimesByUUID(
  uuid: string,
): Promise<PostgrestSingleResponse<unknown>> {
  try {
    const { data: pickupTimes, error } = await supabase
      .from('pickup_times')
      .select('*')
      .eq('id', uuid)
      .single();

    if (error) {
      console.error('Error fetching user data:', error);
    }

    return pickupTimes;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

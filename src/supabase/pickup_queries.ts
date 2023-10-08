/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { Schedule } from '../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseApiKey = 'YOUR_SUPABASE_API_KEY';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseApiKey);

async function fetchData(): Promise<
  PostgrestSingleResponse<Schedule[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: pickupTimes, error } = await supabase
      .from('Pickup_Times')
      .select('*')
      .single();

    if (error) {
      console.error('Error fetching data:', error);
      return { data: [], error };
    }

    return pickupTimes;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function fetchPickupTimesByUUID(
  uuid: string,
): Promise<PostgrestSingleResponse<unknown>> {
  try {
    const { data: pickupTimes, error } = await supabase
      .from('Pickup_Times')
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

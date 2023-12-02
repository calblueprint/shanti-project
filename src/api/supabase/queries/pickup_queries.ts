import { Pickup } from '../../../schema/schema';
import supabase from '../createClient';

/**
 *
 * @returns all the pickup times from the database
 */
export async function fetchPickupData(): Promise<Pickup[]> {
  const { data: pickupTimes, error } = await supabase
    .from('Pickup_Times')
    .select('*');

  if (error) {
    throw new Error(`Error fetching pickup times: ${error.message}`);
  }
  return pickupTimes || [];
}

/**
 *
 * @param pickupID
 * @returns fetches a single pickup time by its ID
 */
export async function fetchPickupTimesByID(pickupID: string): Promise<Pickup> {
  const { data: pickupTimes, error } = await supabase
    .from('Pickup_Times')
    .select('*')
    .eq('id', pickupID)
    .single();

  if (error) {
    throw new Error(`Error fetching pickup times: ${error.message}`);
  }

  return pickupTimes;
}

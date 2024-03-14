import { Pickup } from '../../../schema/schema';
import supabase from '../createClient';

/**
 *
 * @returns all the pickup times from the database
 */
export async function fetchPickupData(): Promise<Pickup[]> {
  const { data: pickupTimes, error } = await supabase
    .from('pickup_times')
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
export async function fetchPickupTimesByID(pickupID: number): Promise<Pickup> {
  const { data: pickupTimes, error } = await supabase
    .from('pickup_times')
    .select('*')
    .eq('id', pickupID)
    .single();

  if (error) {
    throw new Error(`Error fetching pickup times: ${error.message}`);
  }

  return pickupTimes;
}

/**
 *
 * @returns most recevnt pickup
 */
export async function fetchRecentPickupTimes(): Promise<Pickup[]> {
  const { data: getTimes, error } = await supabase
    .from('pickup_times')
    .select('*')
    .limit(2);

  if (error) {
    throw new Error(`Error fetching pickup times: ${error.message}`);
  }
  return getTimes;
}

/**
 *
 * @returns 2 most recent pickup times
 */
export async function fetchNRecentPickupTimes(n: number): Promise<Pickup[]> {
  const { data: getTimes, error } = await supabase
    .from('pickup_times')
    .select('*')
    .order('start_time', { ascending: false })
    .limit(n);

  if (error) {
    throw new Error(`Error fetching pickup times: ${error.message}`);
  }
  return getTimes;
}
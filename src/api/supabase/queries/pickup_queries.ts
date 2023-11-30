import { Pickup } from '../../../schema/schema';
import supabase from '../createClient';

export async function fetchPickupData(): Promise<Pickup[]> {
  const { data: pickupTimes, error } = await supabase
    .from('Pickup_Times')
    .select('*');

  if (error) {
    throw new Error(`Error fetching pickup times: ${error.message}`);
  }
  return pickupTimes || [];
}
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

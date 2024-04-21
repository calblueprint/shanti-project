import supabase from '../createClient';

export type DeliveryTimes = {
  delivery_group: number;
  delivery_time: number;
};

export async function fetchDeliveryTimes(): Promise<DeliveryTimes[]> {
  const { data, error } = await supabase.from('delivery_times').select('*');

  if (error) {
    throw new Error(`Error fetching delivery times: ${error.message}`);
  }
  return data;
}

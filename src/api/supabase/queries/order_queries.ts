/* eslint-disable no-console */
//

import {
  PostgrestSingleResponse,
  PostgrestError,
  createClient,
} from '@supabase/supabase-js';
import { Order } from '../../../schema/schema';

// Replace these with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize the Supabase client
const supabase = createClient(supabaseUrl ?? '', supabaseApiKey ?? '');

export async function fetchOrders(): Promise<
  PostgrestSingleResponse<Order[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: orders, error } = await supabase
      .from('order') // Update to the "Order" table
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return { data: [], error };
    }

    return { data: orders } as PostgrestSingleResponse<Order[]>;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function fetchOrderByUUID(
  uuid: string,
): Promise<PostgrestSingleResponse<Order>> {
  try {
    const { data: order, error } = await supabase
      .from('order') // Update to the "Order" table
      .select('*')
      .eq('id', uuid)
      .single();

    if (error) {
      console.error('Error fetching order data:', error);
    }

    return order;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getOrdersByUserId(
  userId: string,
): Promise<
  PostgrestSingleResponse<Order[]> | { data: never[]; error: PostgrestError }
> {
  try {
    const { data: orders, error } = await supabase
      .from('order')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching orders:', error);
      return { data: [], error };
    }

    return orders;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to get an order by its ID
export async function getOrderById(
  orderId: string,
): Promise<PostgrestSingleResponse<Order>> {
  try {
    const { data: order, error } = await supabase
      .from('Order')
      .select('*')
      .eq('id', orderId)
      .single();

    if (error) {
      console.error('Error fetching order:', error);
    }

    return order;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function toggleOrderProgress(
  orderId: string,
): Promise<PostgrestSingleResponse<Order>> {
  try {
    // Fetch the order by ID to get its current "approved" value
    const { data: currentOrder, error: fetchError } = await supabase
      .from('Order')
      .select('approved')
      .eq('id', orderId)
      .single();

    if (fetchError) {
      console.error('Error fetching order:', fetchError);
      throw fetchError;
    }

    // Toggle the "approved" value
    const updatedApprovedValue = !currentOrder?.approved;

    // Update the order with the new "approved" value
    const { data: updatedOrder, error: updateError } = await supabase
      .from('Order')
      .update({ approved: updatedApprovedValue })
      .eq('id', orderId)
      .single();

    if (updateError) {
      console.error('Error updating order:', updateError);
      throw updateError;
    }

    return updatedOrder;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function updateAllOrdersProgressToTrue(): Promise<
  boolean | string
> {
  try {
    // Update all orders to set "approved" to true
    const { error: updateError } = await supabase
      .from('Order')
      .update({ approved: true });

    if (updateError) {
      console.error('Error updating orders:', updateError);
      return 'Update failed'; // Return an error message if the update fails
    }

    return true; // Return true if the update succeeds
  } catch (error) {
    console.error('Error:', error);
    return 'Update failed'; // Return an error message if an exception occurs
  }
}

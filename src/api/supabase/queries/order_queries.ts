/* eslint-disable no-console */
//

import { Order } from '../../../schema/schema';
import { fetchUser } from './user_queries';
import supabase from '../createClient';

// Replace these with your Supabase project URL and API key

export async function getOrderById(orderId: number): Promise<Order> {
  const { data: order, error } = await supabase
    .from('order') // Update to the "Order" table
    .select('*')
    .eq('id', orderId)
    .single();
  if (error) {
    throw new Error(`Error fetching order: ${error.message}`);
  }
  return order;
}

export async function getOrdersByUserId(): Promise<Order[]> {
  const user = await fetchUser();
  const userId = user.id;

  const { data: orders, error } = await supabase
    .from('order')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw new Error(`Error fetching orders: ${error.message}`);
  }
  return orders;
}

export async function createOrder() {
  // Fetch the user's cart
  const user = await fetchUser();

  // Extract user's cart

  // Create a new order
  const { data: order, error } = await supabase
    .from('order')
    .insert({ user_id: user.id })
    .select('*')
    .single();
  if (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }

  // Update the user's cart
  await supabase
    .from('users')
    .update({ cart_id: order.id })
    .match({ id: user.id });
}

function sortOrdersByCreated(orders: Order[]): Order[] {
  return orders.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}

export async function fetchOrdersByUser(): Promise<Order[]> {
  const user = await fetchUser();
  const userId = user.id;
  const { data, error } = await supabase
    .from('order')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw new Error(`Error fetching orders for user: ${error.message}`);
  }

  return data;
}

export async function fetchOrdersByUserIdSorted(): Promise<Order[]> {
  const orders = await fetchOrdersByUser();
  return sortOrdersByCreated(orders);
}

export async function fetchNOrdersByUserIdSorted(n: number): Promise<Order[]> {
  const orders = await fetchOrdersByUser();
  return sortOrdersByCreated(orders).slice(0, n);
}

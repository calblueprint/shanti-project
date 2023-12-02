/* eslint-disable no-console */
//

import { Order } from '../../../schema/schema';
import { fetchUser } from './user_queries';
import supabase from '../createClient';

/**
 * Fetches all orders from the database.
 * @returns Promise<Order[]> - An array of Order objects.
 */
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

/**
 * creates a new order for the user
 */
export async function createOrder() {
  const user = await fetchUser();

  const { data: order, error } = await supabase
    .from('order')
    .insert({ user_id: user.id })
    .select('*')
    .single();
  if (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }

  await supabase
    .from('users')
    .update({ cart_id: order.id })
    .match({ id: user.id });
}

/**
 * gets all orders by user id and sorted it by creation data
 * @param Order[] - An array of Order objects.
 * @returns Promise<Order[]> - An array of Order objects.
 */
function sortOrdersByCreated(orders: Order[]): Order[] {
  return orders.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}

/**
 * gets all orders by user id and sorted it by creation data
 * @param Order[] - An array of Order objects.
 * @returns Promise<Order[]> - An array of Order objects.
 */
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

/**
 * gets all orders by user id and sorted it by creation data
 * @param Order[] - An array of Order objects.
 * @returns Promise<Order[]> - An array of Order objects.
 */
export async function fetchOrdersByUserIdSorted(): Promise<Order[]> {
  const orders = await fetchOrdersByUser();
  return sortOrdersByCreated(orders);
}

/**
 * gets all orders by user id and sorted it by creation data and get the first n orders
 * @param Order[] - An array of Order objects.
 * @returns Promise<Order[]> - An array of Order objects.
 */
export async function fetchNOrdersByUserIdSorted(n: number): Promise<Order[]> {
  const orders = await fetchOrdersByUser();
  return sortOrdersByCreated(orders).slice(0, n);
}

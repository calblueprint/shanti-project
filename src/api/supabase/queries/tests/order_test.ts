/* eslint-disable no-console */
//

import {
  fetchOrders,
  fetchOrderByUUID,
  getOrderById,
  toggleOrderProgress,
  updateAllOrdersProgressToTrue,
  fetchOrdersByUserId,
  fetchNOrdersByUserIdSorted,
  fetchOrdersByUserIdSorted,
} from '../order_queries'; // Replace './your-module' with the actual path to your module

// Test fetching all orders
export async function testFetchOrders() {
  try {
    const result = await fetchOrders();
    console.log('Fetch Orders Result:', result);
  } catch (error) {
    console.error('Test Fetch Orders Error:', error);
  }
}

// Test fetching an order by UUID
export async function testFetchOrderByUUID() {
  const uuid = 'SAMPLE_ORDER_ID'; // Replace with a valid order ID
  try {
    const result = await fetchOrderByUUID(uuid);
    console.log('Fetch Order by UUID Result:', result);
  } catch (error) {
    console.error('Test Fetch Order by UUID Error:', error);
  }
}



// Test fetching an order by ID
export async function testGetOrderById() {
  const orderId = '2'; // Replace with a valid order ID
  try {
    const result = await getOrderById(orderId);
    console.log('Get Order by ID Result:', result);
  } catch (error) {
    console.error('Test Get Order by ID Error:', error);
  }
}

// Test toggling order progress
export async function testToggleOrderProgress() {
  const orderId = '2'; // Replace with a valid order ID
  try {
    const result = await toggleOrderProgress(orderId);
    console.log('Toggle Order Progress Result:', result);
  } catch (error) {
    console.error('Test Toggle Order Progress Error:', error);
  }
}

// Test updating all orders' progress to true
export async function testUpdateAllOrdersProgressToTrue() {
  try {
    const result = await updateAllOrdersProgressToTrue();
    console.log('Update All Orders Progress Result:', result);
  } catch (error) {
    console.error('Test Update All Orders Progress Error:', error);
  }
}

export async function fullOrderTest() {
  const testUserId = '4a934844-76fa-4a1a-80d7-fa00597398e1';
  try {
    // createOrder(testUserId);
    const orders = await fetchOrdersByUserId(testUserId);
    console.log(orders);
    const sortedOrders = await fetchOrdersByUserIdSorted(testUserId);
    console.log(sortedOrders);
    const nOrders = await fetchNOrdersByUserIdSorted(testUserId, 2);
    console.log(nOrders);
  } catch (error) {
    console.error('Error in incrementCartItemByOne:', error);
  }
}

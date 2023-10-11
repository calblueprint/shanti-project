/* eslint-disable no-console */
//

import {
  fetchProducts,
  fetchProductByID,
} from '../product_queries'; // Replace './your-module' with the actual path to your module

// Test fetching all products
export async function testFetchProducts() {
  try {
    const result = await fetchProducts();
    console.log('Fetch Products Result:', result);
  } catch (error) {
    console.error('Test Fetch Products Error:', error);
  }
}

// Test fetching a product by name
export async function testFetchProductByName() {
  const productId = '1'; // Replace with a valid product name
  try {
    const result = await fetchProductByID(productId);
    console.log('Fetch Product by Name Result:', result);
  } catch (error) {
    console.error('Test Fetch Product by Name Error:', error);
  }
}

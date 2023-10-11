/* eslint-disable no-console */
//

import { fetchPickupData, fetchPickupTimesByUUID } from '../pickup_queries'; // Replace './your-module' with the actual path to your module

// Test fetching data
export async function testFetchPickupData() {
  try {
    const result = await fetchPickupData();
    console.log('Fetch Data Result:', result);
  } catch (error) {
    console.error('Test Fetch Data Error:', error);
  }
}

// Test fetching pickup times by UUID
export async function testFetchPickupTimesByUUID() {
  const uuid = '1'; // Replace with a valid UUID
  try {
    const result = await fetchPickupTimesByUUID(uuid);
    console.log('Fetch Pickup Times by UUID Result:', result);
  } catch (error) {
    console.error('Test Fetch Pickup Times by UUID Error:', error);
  }
}

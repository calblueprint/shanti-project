/* eslint-disable no-console */
//

import {
  fetchUserData,
  fetchUserByUUID,
  addUserAddress,
} from '../user_queries';

export async function testFetchUserData() {
  try {
    const result = await fetchUserData();
    console.log('Fetch Data Result:', result);
  } catch (error) {
    console.error('Test Fetch Data Error:', error);
  }
}

export async function testFetchUserByUUID() {
  const uuid = '3b4a1317-b9ea-4cbd-95d7-e959aa80d1ea'; // Replace with a valid user ID
  try {
    const result = await fetchUserByUUID(uuid);
    console.log('Fetch User by UUID Result:', result);
  } catch (error) {
    console.error('Test Fetch User by UUID Error:', error);
  }
}

export async function testAddUserAddress() {
  const uuid = '3b4a1317-b9ea-4cbd-95d7-e959aa80d1ea'; // Replace with a valid user ID
  const newStreet = '123 New Street';
  const newCity = 'New City';
  const newZipcode = '12345';

  try {
    const result = await addUserAddress(uuid, newStreet, newCity, newZipcode);
    console.log('Add User Address Result:', result);
  } catch (error) {
    console.error('Test Add User Address Error:', error);
  }
}

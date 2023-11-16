/* eslint-disable no-console */
//

import { fetchUserData, fetchUserByUUID } from '../user_queries';

export async function runFetchUserData() {
  try {
    const result = await fetchUserData();
    console.log('fetchUserData Result:', result);
  } catch (error) {
    console.error('Error in fetchUserData:', error);
  }
}

export async function runFetchUserByUUID() {
  const testUUID = 'aeaf5f6c-a8bc-41b8-9850-5fb11e1b6dea';
  try {
    const result = await fetchUserByUUID(testUUID);
    console.log('fetchUserByUUID Result:', result);
  } catch (error) {
    console.error('Error in fetchUserByUUID:', error);
  }
}

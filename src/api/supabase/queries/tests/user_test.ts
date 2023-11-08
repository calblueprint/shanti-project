/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
//

import {
  fetchUserByUUID,
} from '../user_queries';



export async function testFetchUserByUUID() {
  const uuid = '3b4a1317-b9ea-4cbd-95d7-e959aa80d1ea'; // Replace with a valid user ID
  try {
    const result = await fetchUserByUUID();
    console.log('Fetch User by UUID Result:', result);
  } catch (error) {
    console.error('Test Fetch User by UUID Error:', error);
  }
}


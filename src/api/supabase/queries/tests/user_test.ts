/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
//

import {
  fetchUserByUUID,
} from '../user_queries';



export async function runFetchUserByUUID() {
  const testUUID = 'aeaf5f6c-a8bc-41b8-9850-5fb11e1b6dea';
  try {
    const result = await fetchUserByUUID();
    console.log('Fetch User by UUID Result:', result);
  } catch (error) {
    console.error('Error in fetchUserByUUID:', error);
  }
}


/* eslint-disable no-console */
//

import {
  fetchUserData,
  fetchUserByUUID,
  fetchUserCart,
  incrementCartItemByOne,
  decrementCartItemByOne,
  decrementCartItem,
} from '../user_queries';

export async function runFetchUserData() {
  
    const result = await fetchUserData();
  
}

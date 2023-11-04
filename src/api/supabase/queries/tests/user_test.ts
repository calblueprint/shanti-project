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
  try {
    const result = await fetchUserData();
    // console.log('fetchUserData Result:', result);
  } catch (error) {
    console.error('Error in fetchUserData:', error);
  }
}

export async function runFetchUserByUUID() {
  const testUUID = 'aeaf5f6c-a8bc-41b8-9850-5fb11e1b6dea';
  try {
    const result = await fetchUserByUUID(testUUID);
    // console.log('fetchUserByUUID Result:', result);
  } catch (error) {
    console.error('Error in fetchUserByUUID:', error);
  }
}

export async function runFetchUserCart() {
  const testUserId = 'aeaf5f6c-a8bc-41b8-9850-5fb11e1b6dea';
  try {
    const result = await fetchUserCart(testUserId);
    // console.log('fetchUserCart Result:', result);
  } catch (error) {
    console.error('Error in fetchUserCart:', error);
  }
}

export async function runIncrementCartItemByOne() {
  const testUserId = 'aeaf5f6c-a8bc-41b8-9850-5fb11e1b6dea';
  const testItemId = '10';
  try {
    await incrementCartItemByOne(testUserId, testItemId);
    // const result = await fetchUserCart(testUserId);
    // console.log('fetchUserCart Result_1:', result);
    // console.log('incrementCartItemByOne executed successfully.');
  } catch (error) {
    console.error('Error in incrementCartItemByOne:', error);
  }
}

export async function runDecrementCartItemByOne() {
  const testUserId = 'aeaf5f6c-a8bc-41b8-9850-5fb11e1b6dea';
  const testItemId = '10';
  try {
    await decrementCartItemByOne(testUserId, testItemId);
    // const result = await fetchUserCart(testUserId);
    // console.log('fetchUserCart Result_1:', result);
    // console.log('incrementCartItemByOne executed successfully.');
  } catch (error) {
    console.error('Error in incrementCartItemByOne:', error);
  }
}

export async function fullCartTest() {
  const testUserId = '4a934844-76fa-4a1a-80d7-fa00597398e1';
  const testItemId = '10';
  try {
    const result = await fetchUserByUUID(testUserId);
    // console.log('fetchUserData Result:', result);

    await incrementCartItemByOne(testUserId, testItemId);
    await incrementCartItemByOne(testUserId, testItemId);
    await incrementCartItemByOne(testUserId, testItemId);
    const result1 = await fetchUserCart(testUserId);
    // console.log('fetchUserCart Result_1:', result1);
    await decrementCartItemByOne(testUserId, testItemId);
    // result1 = await fetchUserCart(testUserId);
    // console.log('fetchUserCart Result_2:', result1);
    await decrementCartItem(testUserId, testItemId, 6);

    // const result3 = await fetchUserCart(testUserId);
    // console.log('fetchUserCart Result_3:', result3);
  } catch (error) {
    console.error('Error in incrementCartItemByOne:', error);
  }
}

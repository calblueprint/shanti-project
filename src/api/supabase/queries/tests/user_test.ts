/* eslint-disable no-console */
//

import {
  fetchUserData,
  fetchUserByUUID,
  fetchFavoriteItems,
} from '../user_queries';

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

export async function fullFavItemTest() {
  const testUserId = '4a934844-76fa-4a1a-80d7-fa00597398e1';
  try {
    const result = await fetchUserByUUID(testUserId);
    console.log('fetchUserData Result:', result);
    let result1 = await fetchFavoriteItems(testUserId);
    console.log('fetchFavoriteItems Result:', result1);
    result1 = await fetchFavoriteItems(testUserId);
    console.log('fetchFavoriteItems Result:', result1);
  } catch (error) {
    console.error('Error in incrementCartItemByOne:', error);
  }
}

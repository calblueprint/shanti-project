/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from 'next/link';
import {
  testFetchUserData,
  testFetchUserByUUID,
  testAddUserAddress,
} from '../api/supabase/queries/tests/user_test';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  testFetchOrderByUUID,
  testFetchOrders,
  testGetOrderById,
  testToggleOrderProgress,
  testUpdateAllOrdersProgressToTrue,
} from '../api/supabase/queries/tests/order_test';
import {
  testFetchProducts,
  testFetchProductByName,
} from '../api/supabase/queries/tests/product_test';
import {
  testFetchPickupData,
  testFetchPickupTimesByUUID,
} from '../api/supabase/queries/tests/pickup_test';

export default function Checkout() {
  // testFetchUserData();
  // testFetchUserByUUID();
  // testAddUserAddress();
  // testFetchOrderByUUID();
  // testFetchOrders();
  // testGetOrderById();
  // testToggleOrderProgress();
  // testFetchProducts();
  // testFetchProductByName();
  // testFetchPickupData();
  // testFetchPickupTimesByUUID();
  // testUpdateAllOrdersProgressToTrue();

  return (
    <main>
      <Link href="/pages">Store</Link>
    </main>
  );
}

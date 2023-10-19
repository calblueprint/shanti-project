import Link from 'next/link';
import {
  testFetchUserData,
  testFetchUserByUUID,
  testAddUserAddress,
} from '../supabase/tests/user_test';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  testFetchOrderByUUID,
  testFetchOrders,
  testGetOrderById,
  testToggleOrderProgress,
  testUpdateAllOrdersProgressToTrue,
} from '../supabase/tests/order_test';
import {
  testFetchProducts,
  testFetchProductByName,
} from '../supabase/tests/product_test';
import {
  testFetchPickupData,
  testFetchPickupTimesByUUID,
} from '../supabase/tests/pickup_test';

export default function Checkout() {
  testFetchUserData();
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
      <Link href="/login">Login</Link>
    </main>
  );
}

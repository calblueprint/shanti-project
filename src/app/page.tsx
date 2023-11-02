/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useEffect } from 'react';

import Link from 'next/link';
import {
  fullFavItemTest
} from '../api/supabase/queries/tests/user_test';
import {
  testFetchOrderByUUID,
  testFetchOrders,
  testGetOrderById,
  testToggleOrderProgress,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  useEffect(() => {
    async function testEverything() {
      await fullFavItemTest();
    }
    testEverything();
  });

  return (
    
    <main>
      <Link href="/login">Login</Link>
    </main>
  );
}

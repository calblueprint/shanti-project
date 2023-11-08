/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useEffect } from 'react';

import Link from 'next/link';
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


export default function Home() {
  return (
    <main>
      <Link href="/login">Login</Link>
    </main>
  );
}
'use client';

import React, { useEffect, useState } from 'react';
import { Heading1 } from '@/styles/fonts';
import OrderDetailsWithProducts from '../../components/OrderHistory/OrderHistoryBox';
import { fetchOrderIdsByUserIdSorted } from '../../api/supabase/queries/order_queries';
import Footer from '../../components/FooterFolder/Footer';
import {
  OrderHistoryContainer,
  OutterBox,
  NavBarMovedUP,
  Fullscreen,
} from './styles';
import BackButton from '../../components/BackButton/BackButton';

function OrderHistory() {
  const [orderIds, setOrderIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchIds = async () => {
      const ids = await fetchOrderIdsByUserIdSorted();
      setOrderIds(ids);
    };

    fetchIds();
  }, []);

  return (
    <Fullscreen>
      <NavBarMovedUP />
      <OutterBox>
        <BackButton destination="./profileScreen" />
        <h1>Order History</h1>
        <OrderHistoryContainer>
          {orderIds.length > 0 ? (
            orderIds.map((orderId: number) => (
              <OrderDetailsWithProducts key={orderId} orderId={orderId} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </OrderHistoryContainer>
      </OutterBox>
      <Footer />
    </Fullscreen>
  );
}

export default OrderHistory;

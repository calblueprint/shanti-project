'use client';

import React, { useEffect, useState } from 'react';
import OrderDetailsWithProducts from '../../components/OrderHistory/OrderHistoryBox';
import { fetchOrderIdsByUserIdSorted } from '../../api/supabase/queries/order_queries';
import Footer from '../../components/FooterFolder/Footer';
import {
  OrderHistoryContainer,
  OutterBox,
  NavBarMovedUP,
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
    <div>
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
    </div>
  );
}

export default OrderHistory;

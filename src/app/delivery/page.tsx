'use client';

import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import { GlobalStyle } from '../../styles/components';
import { Normal700Text } from '../../styles/fonts';
import { fetchRecentOrderProducts } from '../../api/supabase/queries/order_queries';
import { OrderProduct } from '../../schema/schema';
import ItemRows from './itemRows';
import {
  DeliveryContainer,
  OrderContainer,
  OrderSummary,
  OrderSummaryText,
  OrderButton,
  InformationContainer,
  InformationText,
  QtyText,
  NavBarMovedUP,
} from './styles';

export default function App() {
  const [OrderProducts, setOrderProducts] = useState<OrderProduct[]>([]);
  async function fetchOrderProducts() {
    const data = (await fetchRecentOrderProducts()) as OrderProduct[];
    setOrderProducts(data);
  }

  fetchOrderProducts();

  return (
    <main>
      <GlobalStyle />

      <NavBarMovedUP />
      <BackButton destination="/storefront" />
      <DeliveryContainer>
        <InformationContainer>
          <Normal700Text style={{ marginBottom: '38px', fontSize: '40px' }}>
            Shipping
          </Normal700Text>
          <Normal700Text>Name</Normal700Text>
          <InformationText>Ethan Auyeung</InformationText>
          <Normal700Text>Address</Normal700Text>
          <InformationText>123 Telegraph Ave</InformationText>
        </InformationContainer>
        <OrderContainer>
          <OrderSummary>
            <OrderSummaryText>Order Summary</OrderSummaryText>
            <QtyText>Qty.</QtyText>
            <ItemRows products={OrderProducts} />
          </OrderSummary>
          <OrderButton>Place Order</OrderButton>
        </OrderContainer>
      </DeliveryContainer>
    </main>
  );
}

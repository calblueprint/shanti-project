'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '../../components/BackButton/BackButton';
import {
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import { Normal700Text } from '../../styles/fonts';
import { fetchRecentOrderProducts } from '../../api/supabase/queries/order_queries';
import { OrderProduct, ProductWithQuantity } from '../../schema/schema';
import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';
import ItemRows from './itemRows';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  DeliveryContainer,
  OrderContainer,
  OrderSummaryText,
  OrderButton,
  InformationContainer,
  InformationText,
  QtyText,
} from './styles';

export default function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchProducts() {
      setNumberOfItems(await totalNumberOfItemsInCart());
      setCart(await fetchCartItemsWithQuantity());
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <NavBar />
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
          <OrderSummary cart={cart} numberOfItems={numberOfItems} />
          <OrderButton
            onClick={() => router.push('/orderConfirmationDelivery')}
          >
            Place Order
          </OrderButton>
        </OrderContainer>
      </DeliveryContainer>
    </main>
  );
}

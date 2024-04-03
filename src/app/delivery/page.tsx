'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '../../components/BackButton/BackButton';
import {
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import { Heading5Bold, Heading5, Heading4Bold, Heading1, Normal700Text, Body1 } from '../../styles/fonts';
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
  BackButtonDiv,
  OutterBox,
  OutterDiv
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
      <OutterDiv>
        <BackButtonDiv>

          <BackButton destination="/storefront" />
          </BackButtonDiv>
      <DeliveryContainer>
       
        <InformationContainer>
          <Heading1 style={{ marginBottom: '38px'}}>
            Shipping
          </Heading1>
          <Heading5Bold>Name</Heading5Bold>
          <Heading5>Ethan Auyeung</Heading5>
          <Heading5Bold>Address</Heading5Bold>
          <Heading5>123 Telegraph Ave, Berkeley 94704</Heading5>
          <Heading5Bold>Phone Number</Heading5Bold>
          <Heading5>+1 510-123-4567</Heading5>
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
      </OutterDiv>
    </main>
  );
}

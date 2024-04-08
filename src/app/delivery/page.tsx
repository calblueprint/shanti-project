'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import BackButton from '../../components/BackButton/BackButton';
import {
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import { Normal700Text, Heading1 } from '../../styles/fonts';
import { ProductWithQuantity, User, Address } from '../../schema/schema';
import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  DeliveryContainer,
  OrderContainer,
  OrderButton,
  InformationContainer,
  InformationText,
  BackButtonDiv,
  OutterDiv,
} from './styles';

export default function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);
  const [Profile, setProfile] = useState<User>();
  const [UserAddress, setUserAddress] = useState<Address>();
  const router = useRouter();
  useEffect(() => {
    async function fetchProducts() {
      setNumberOfItems(await totalNumberOfItemsInCart());
      setCart(await fetchCartItemsWithQuantity());
    }
    async function fetchUserData() {
      const data = await fetchUser(); // change the function to grab the cartItems as products
      setProfile(data);
      const address = await fetchUserAddress(data.id);
      setUserAddress(address);
    }
    fetchUserData();
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
            <Heading1 style={{ marginBottom: '38px' }}>Shipping</Heading1>
            <Normal700Text>Name</Normal700Text>
            <InformationText>
              {`${Profile?.first_name} ${Profile?.last_name}`}
            </InformationText>
            <Normal700Text>Address</Normal700Text>
            <InformationText>
              {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
            </InformationText>
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

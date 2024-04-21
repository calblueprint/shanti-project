'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import querystring from 'querystring';
import {
  createOrder,
  updateOrderStatus,
} from '@/api/supabase/queries/order_queries';
import BackButton from '../../components/BackButton/BackButton';
import {
  fetchCartIdFromUser,
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import {
  ProductWithQuantity,
  User,
  Address,
  OrderStatus,
} from '../../schema/schema';
import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  DeliveryContainer,
  OrderContainer,
  OrderButton,
  InformationContainer,
  BackButtonDiv,
  OutterDiv,
  InformationField,
  Label,
  Input,
  Heading4Bold,
  ForceColumnDiv,
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
        <DeliveryContainer>
          <ForceColumnDiv>
            <BackButtonDiv>
              <BackButton destination="/storefront" />
            </BackButtonDiv>

            <Heading4Bold style={{ marginLeft: '41px', marginTop: '20px' }}>
              Delivery
            </Heading4Bold>

            <InformationContainer>
              <Label>Name</Label>
              <Input />
              {`${Profile?.first_name} ${Profile?.last_name}`}
              <Input />
              <Label>Address</Label>
              <Input />
              {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
              <Input />
              <Label>Phone Number</Label>
              <Input />
              {Profile?.phone_numbers}
              <Input />
            </InformationContainer>
          </ForceColumnDiv>

          <OrderContainer>
            <OrderSummary cart={cart} numberOfItems={numberOfItems} />
            <OrderButton
              onClick={async () => {
                const orderID = await fetchCartIdFromUser();
                await updateOrderStatus(orderID, OrderStatus.Submitted);
                await createOrder();
                const newestOrder = await fetchCartIdFromUser();
                await updateOrderStatus(newestOrder, OrderStatus.inProgress);
                const queryString = querystring.stringify({ orderID });
                router.push(`/orderConfirmationDelivery?${queryString}`);
              }}
            >
              Place Order
            </OrderButton>
          </OrderContainer>
        </DeliveryContainer>
      </OutterDiv>
    </main>
  );
}

// {/* <InformationContainer>
//   <Heading1 style={{ marginBottom: '38px' }}>Shipping</Heading1>
//   <Normal700Text>Name</Normal700Text>
//   <InformationText>
//     {`${Profile?.first_name} ${Profile?.last_name}`}
//   </InformationText>
//   <Normal700Text>Address</Normal700Text>
//   <InformationText>
//     {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
//   </InformationText>
// </InformationContainer> */}

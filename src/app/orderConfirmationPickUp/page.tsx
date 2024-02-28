'use client';

import { useState, useEffect } from 'react';

import {
  fetchUser,
} from '@/api/supabase/queries/user_queries';
import { fetchPickupTimesByID } from '@/api/supabase/queries/pickup_queries';
import { fetchCurrentOrdersByUser } from '@/api/supabase/queries/order_queries';
import { Body2Bold, Body2, Heading3Bold } from '@/styles/fonts';
import { fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';

import BackButton from '../../components/BackButton/BackButton';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  ColDiv,
  OutterFavoriteDiv,
  HeaderText,
  OutterBox,
  Label,
  LabelBox,
  ScrollDiv,
  AddressText,
  DateText,
  PickUpText,
  CenterBox,
} from './styles';

import { Product, User, Pickup } from '../../schema/schema';

export default function OrderConfirmationPickUp() {
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [pickupTime, setPickupTime] = useState<Pickup>();

  useEffect(() => {
    async function fetchProducts() {
      const cartItems = (await fetchCartItemsWithQuantity()) as Product[];
      setCart(cartItems);
    }

    async function setUserDetails() {
      const fetchedUser = await fetchUser();
      setUser(fetchedUser);
      const currOrder = await fetchCurrentOrdersByUser();
      const pickup = await fetchPickupTimesByID(currOrder[0].pickup_time_id);
      setPickupTime(pickup);
    }

    fetchProducts();
    setUserDetails();
  }, []);

  function organizePickupTime() {
    const startTime = pickupTime?.start_time.toLocaleString();
    const endTime = pickupTime?.end_time.toLocaleString();
    const date =
      startTime == null
        ? ['0', '0', '0']
        : startTime?.substring(0, 10).split('-');
    const dateStr = `${date[2]}/${date[1]}/${date[0]}`;
    const start = startTime?.substring(11, 16);
    const end = endTime?.substring(11, 16);
    return `${dateStr} (${start} - ${end})`;
  }

  return (
    <div>
      <NavBar />
      <BackButton destination="./storefront" />
      <CenterBox>
        <OutterBox>
          <HeaderText>
            <Heading3Bold>
              Thank you, {user?.first_name}. Your order has been placed.
            </Heading3Bold>
          </HeaderText>
          <OutterFavoriteDiv>
            <ColDiv>
              {/** change this to order number! */}
              <DateText>Order No. {user?.cart_id}</DateText>
              {/** got the date but please clean up the date format :) */}
              <PickUpText>
                <Body2Bold>Pick Up: {organizePickupTime()}</Body2Bold>
              </PickUpText>
            </ColDiv>
            {/** mess w/ the height of the scrollDiv so that the locationn stays constant :) */}

            <ScrollDiv>
              {Cart.map(cartItem => (
                <FavoriteDiv key={cartItem.id}>
                  <img
                    src={cartItem.photo}
                    alt={cartItem.name}
                    style={{
                      width: '150px',
                      height: '150px',
                      marginLeft: '80px',
                      marginRight: '100px',
                    }}
                  />
                  <LabelBox>
                    <Label>{cartItem.name}</Label>
                    <p>Category: {cartItem.category}</p>
                  </LabelBox>
                </FavoriteDiv>
              ))}
            </ScrollDiv>
            {/** the location for pickup should be constant! I think it stays as the one below. Also please make sure that the address is not within the scrollable bar :) */}
            <AddressText>
              <Body2>Location: 3170 23rd Street, San Francisco, CA 94110</Body2>
            </AddressText>
          </OutterFavoriteDiv>
        </OutterBox>
      </CenterBox>
    </div>
  );
}

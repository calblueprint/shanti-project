'use client';

import { useState, useEffect } from 'react';

import {
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import { fetchPickupTimesByID } from '@/api/supabase/queries/pickup_queries';
import { fetchCurrentOrdersByUser } from '@/api/supabase/queries/order_queries';
import { fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';

import BackButton from '../../components/BackButton/BackButton';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  ColDiv,
  OutterFavoriteDiv,
  HeaderText,
  GlobalStyle,
  OutterBox,
  Label,
  LabelBox,
  ScrollDiv,
  AddressText,
  DateText,
  PickUpText,
} from './styles';

import { Address, Product, User, Pickup } from '../../schema/schema';

export default function OrderConfirmationPickUp() {
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [userAddress, setUserAddress] = useState<Address>();
  const [pickupTime, setPickupTime] = useState<Pickup>();

  useEffect(() => {
    async function fetchProducts() {
      const cartItems = (await fetchCartItemsWithQuantity()) as Product[];
      setCart(cartItems);
    }

    async function setUserDetails() {
      const fetchedUser = await fetchUser();
      const address = await fetchUserAddress(fetchedUser.id);
      console.log(fetchedUser.id);
      setUserAddress(address);
      setUser(fetchedUser);
      const currOrder = await fetchCurrentOrdersByUser();
      const pickup = await fetchPickupTimesByID(currOrder[0].pickup_time_id);
      setPickupTime(pickup);
    }

    fetchProducts();
    setUserDetails();
  }, []);

  return (
    <div>
      <NavBar />
      <GlobalStyle />
      <BackButton destination="./storefront" />
      <OutterBox>
        <HeaderText>
          Thank you, {user?.first_name}. Your order has been placed.
        </HeaderText>
        <OutterFavoriteDiv>
          <ColDiv>
            {/**change this to order number! */}
            <DateText>Date: November 23.2023</DateText>
            {/** got the date but please clean up the date format :) */}
            <PickUpText>
              Pick Up : {pickupTime?.start_time.toLocaleString()}+"to"+
              {pickupTime?.end_time.toLocaleString()}
            </PickUpText>
          </ColDiv>
          {/** mess w/ the height of the scrollDiv so that the locationn stays constant :)*/}

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
            Location: 3170 23rd Street, San Francisco, CA 94110
          </AddressText>
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}

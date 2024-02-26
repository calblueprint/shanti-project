'use client';

import { useState, useEffect } from 'react';

import {
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import {
  fetchPickupTimesByID
  } from '@/api/supabase/queries/pickup_queries';

import {
  fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';

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
} from './styles';

import { Address, Product, User, Pickup } from '../../schema/schema';

export default function OrderConfirmationPickUp() {
  
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [userAddress, setUserAddress] = useState<Address>();
  const [pickupTime, setPickupTime] = useState <Pickup>();

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
      const pickup = await fetchPickupTimesByID(fetchedUser.cart_id);
      setPickupTime(pickup);
    }

    fetchProducts();
    setUserDetails();
  }, []);

  return (
    <div>
      <NavBar />
      <BackButton destination="./storefront" />
      <OutterBox>
        <HeaderText>Thank you, {user?.first_name}. Your order has been placed.</HeaderText>
        <OutterFavoriteDiv>
          <ColDiv>
            <DateText>Date: November 23.2023</DateText>
            <PickUpText>Pick Up :</PickUpText>
          </ColDiv>

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
            <AddressText>
              Location: {userAddress?.street}, {userAddress?.city}, {userAddress?.zipcode}
            </AddressText>
          </ScrollDiv>
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}

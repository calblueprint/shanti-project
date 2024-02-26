'use client';

import { useState, useEffect } from 'react';
import {
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import {
  fetchPickupTimesByID
  } from '@/api/supabase/queries/pickup_queries';
import BackButton from '../../components/BackButton/BackButton';

import {
  fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';


import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  HeaderText,
  GlobalStyle,
  OutterBox,
  Label,
  LabelBox,
  ScrollDiv,
  AddressText,
  DateText,
} from './styles';


import { Product, User, Address, Order } from '../../schema/schema';

export default function OrderConfirmationDelivery() {
  
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [userAddress, setUserAddress] = useState<Address>();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    async function fetchProducts() {
      const cartItems = (await fetchCartItemsWithQuantity()) as Product[];
      setCart(cartItems);
    }

    async function setUserDetails() {
      const fetchedUser = await fetchUser();
      setUser(fetchedUser);
      const address = await fetchUserAddress(fetchedUser.id);
      setUserAddress(address);
    }

    fetchProducts();
    setUserDetails();
    console.log(userAddress?.street, userAddress?.city, userAddress?.zipcode);

  }, []);

  return (
    <div>
      <NavBar />
      <GlobalStyle />
      <BackButton destination="./storefront" />
      <OutterBox>
        <HeaderText>Thank you, {user?.first_name}. Your order has been placed.</HeaderText>
        <OutterFavoriteDiv>
          <DateText>order id</DateText>
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
              Shipping Address: {userAddress?.street}, {userAddress?.city}, {userAddress?.zipcode}
            </AddressText>
          </ScrollDiv>
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}

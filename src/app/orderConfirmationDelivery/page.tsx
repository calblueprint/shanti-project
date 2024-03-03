'use client';

import { useState, useEffect } from 'react';
import {
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';

import { Body2, Heading3Bold } from '@/styles/fonts';
import BackButton from '../../components/BackButton/BackButton';

import { fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  HeaderText,
  OutterBox,
  Label,
  LabelBox,
  ScrollDiv,
  AddressText,
  DateText,
  CenterBox,
  AddressDiv,
} from './styles';

import { Product, User, Address } from '../../schema/schema';

export default function OrderConfirmationDelivery() {
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [userAddress, setUserAddress] = useState<Address>();

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
  }, []);

  return (
    <div>
      <NavBar />

      <BackButton destination="./storefront" />
      <CenterBox>
        <OutterBox>
          <Heading3Bold>
            Thank you, {user?.first_name}. Your order has been placed.
          </Heading3Bold>
          <OutterFavoriteDiv>
            <DateText>Order No. {user?.cart_id}</DateText>
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
            <AddressDiv>
              <Body2>
                Shipping Address: {userAddress?.street}, {userAddress?.city},{' '}
                {userAddress?.zipcode}
              </Body2>
            </AddressDiv>
          </OutterFavoriteDiv>
        </OutterBox>
      </CenterBox>
    </div>
  );
}

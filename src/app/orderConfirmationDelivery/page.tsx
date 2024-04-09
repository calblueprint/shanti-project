'use client';

import { useState, useEffect } from 'react';
import {
  fetchUser,
  fetchCurrentUserAddress,
} from '@/api/supabase/queries/user_queries';

import { Body1, Body2Light, Heading3Bold, Heading4Bold } from '@/styles/fonts';
import BackButton from '../../components/BackButton/BackButton';

import { fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  LabelBox,
  ScrollDiv,
  ShippingDetailsDiv,
  BottomColumnDiv,
  LeftColumnDiv,
  RightColumnDiv,
  DetailsHeader,
  PageDiv,
  CenterDiv,
} from './styles';

import { Product, User, Address } from '../../schema/schema';
import { Body1Bold } from '../orderPage/styles';

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
      const address = await fetchCurrentUserAddress();
      setUserAddress(address);
    }

    fetchProducts();
    setUserDetails();
  }, []);

  return (
    <main>
      <NavBar />
      <CenterDiv>
        <PageDiv>
          <BottomColumnDiv>
            <LeftColumnDiv>
              <BackButton destination="./storefront" />
              <Heading3Bold>Your order has been submitted</Heading3Bold>
              <OutterFavoriteDiv>
                <Heading4Bold>Order No. {user?.cart_id}</Heading4Bold>
                <ScrollDiv>
                  {Cart.map(cartItem => (
                    <FavoriteDiv key={cartItem.id}>
                      <img
                        src={cartItem.photo}
                        alt={cartItem.name}
                        style={{
                          width: '150px',
                          height: '150px',
                          marginLeft: '30px',
                        }}
                      />
                      <LabelBox>
                        <Body1Bold>{cartItem.name}</Body1Bold>
                        <Body2Light>Category: {cartItem.category}</Body2Light>
                      </LabelBox>
                    </FavoriteDiv>
                  ))}
                </ScrollDiv>
              </OutterFavoriteDiv>
            </LeftColumnDiv>
            <RightColumnDiv>
              <ShippingDetailsDiv>
                <Heading3Bold>Delivery Information</Heading3Bold>
                <DetailsHeader>Estimated Date</DetailsHeader>
                <Body1>date</Body1>
                <DetailsHeader>Location</DetailsHeader>
                <Body1>
                  {userAddress?.street}, {userAddress?.city},{' '}
                  {userAddress?.zipcode}
                </Body1>
              </ShippingDetailsDiv>
            </RightColumnDiv>
          </BottomColumnDiv>
        </PageDiv>
      </CenterDiv>
    </main>
  );
}

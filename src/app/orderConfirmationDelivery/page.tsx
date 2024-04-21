'use client';

import { useState, useEffect } from 'react';
import {
  fetchUser,
  fetchCurrentUserAddress,
} from '@/api/supabase/queries/user_queries';

import { Body1, Heading3Bold, Heading4Bold } from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import BackButton from '../../components/BackButton/BackButton';

import { fetchCartItemsWithQuantityByID } from '../../api/supabase/queries/cart_queries';

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
import { BackButtonDiv } from '../orderConfirmationPickUp/styles';

export default function OrderConfirmationDelivery() {
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [userAddress, setUserAddress] = useState<Address>();
  const searchParams = useSearchParams();
  const orderIDFromSearch = searchParams.get('orderID');
  useEffect(() => {
    async function fetchProducts() {
      const cartItems = (await fetchCartItemsWithQuantityByID(
        orderIDFromSearch,
      )) as Product[];
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
  });

  return (
    <main>
      <NavBar />
      <CenterDiv>
        <PageDiv>
          <BackButtonDiv>
            <BackButton destination="./storefront" />
          </BackButtonDiv>
          <BottomColumnDiv>
            <LeftColumnDiv>
              <BackButton destination="./storefront" />
              <Heading3Bold>Your order has been submitted</Heading3Bold>
              <OutterFavoriteDiv>
                <Heading4Bold>Order No. {orderIDFromSearch}</Heading4Bold>
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
                        <div>
                          <span
                            style={{
                              display: 'inline-block',
                              fontWeight: 'bold',
                              marginRight: '4px',
                            }}
                          >
                            Quantity:
                          </span>
                          <span
                            style={{
                              display: 'inline-block',
                              fontSize: '16px',
                            }}
                          >
                            {cartItem.quantity}
                          </span>
                        </div>
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
                <Body1>{user?.delivery_group}</Body1>
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

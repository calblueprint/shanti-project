'use client';

import { useState, useEffect } from 'react';
import {
  fetchUser,
  fetchCurrentUserAddress,
} from '@/api/supabase/queries/user_queries';

import {
  Body1,
  Body2,
  Body2Light,
  Heading3Bold,
  Heading4Bold,
} from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import {
  DeliveryTimes,
  fetchDeliveryTimes,
} from '@/api/supabase/queries/delivery_queries';
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
  Quantity,
} from './styles';

import { Product, User, Address } from '../../schema/schema';
import { Body1Bold } from '../orderPage/styles';

export default function OrderConfirmationDelivery() {
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [userAddress, setUserAddress] = useState<Address>();
  const searchParams = useSearchParams();
  const orderIDFromSearch = searchParams.get('orderID');
  const [delivTimes, setDelivTimes] = useState<DeliveryTimes[]>([]);
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
    async function fetchDelivTimes() {
      const deliv = await fetchDeliveryTimes();
      setDelivTimes(deliv);
    }

    fetchProducts();
    setUserDetails();
    fetchDelivTimes();
  }, []);

  function organizeDelivTime() {
    const userGrp = user?.delivery_group == null ? 1 : user?.delivery_group;
    const Time = delivTimes[userGrp]?.delivery_time.toLocaleString();
    const date =
      Time == null ? ['0', '0', '0'] : Time?.substring(0, 10).split('-');
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dateStr = `${months[parseInt(date[1], 10)]} ${date[2]}, ${date[0]}`;
    return `${dateStr}`;
  }

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
                        <Body1Bold>{cartItem.name}</Body1Bold>
                        <Body2Light>Category: {cartItem.category}</Body2Light>
                      </LabelBox>
                      <Quantity>
                        <Body2>
                          <b>Quantity:</b> {cartItem.quantity}
                        </Body2>
                      </Quantity>
                    </FavoriteDiv>
                  ))}
                </ScrollDiv>
              </OutterFavoriteDiv>
            </LeftColumnDiv>
            <RightColumnDiv>
              <ShippingDetailsDiv>
                <Heading3Bold>Delivery Information</Heading3Bold>
                <DetailsHeader>Estimated Date</DetailsHeader>
                <Body1>{organizeDelivTime()}</Body1>
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

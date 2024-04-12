'use client';

import { useState, useEffect } from 'react';

import { fetchUser } from '@/api/supabase/queries/user_queries';
import { fetchPickupTimesByID } from '@/api/supabase/queries/pickup_queries';
import { fetchCurrentOrdersByUser } from '@/api/supabase/queries/order_queries';
import {
  Body1,
  Body1Bold,
  Body2Light,
  Heading3Bold,
  Heading4Bold,
} from '@/styles/fonts';
import { fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';

import BackButton from '../../components/BackButton/BackButton';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  TextDiv,
  TextDiv1,
  BackButtonDiv,
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
      <CenterDiv>
        <PageDiv>
          <BackButtonDiv>
            <BackButton destination="./storefront" />
          </BackButtonDiv>
          <BottomColumnDiv>
            <LeftColumnDiv>
              <TextDiv>
                <Heading3Bold>Your order has been submitted</Heading3Bold>
              </TextDiv>
              <OutterFavoriteDiv>
                <TextDiv1>
                  <Heading4Bold>Order No. {user?.cart_id}</Heading4Bold>
                </TextDiv1>
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
                <DetailsHeader>Pick Up Date</DetailsHeader>
                <Body1>{organizePickupTime()}</Body1>
                <DetailsHeader>Location</DetailsHeader>
                <Body1>
                  Location: 3170 23rd Street, San Francisco, CA 94110
                </Body1>
              </ShippingDetailsDiv>
            </RightColumnDiv>
          </BottomColumnDiv>
        </PageDiv>
      </CenterDiv>
    </div>
  );
}

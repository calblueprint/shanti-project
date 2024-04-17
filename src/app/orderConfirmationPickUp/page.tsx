'use client';

import { useState, useEffect } from 'react';

import { fetchUser } from '@/api/supabase/queries/user_queries';
import { fetchPickupTimesByID } from '@/api/supabase/queries/pickup_queries';
import {
  fetchCurrentOrdersByUser,
  getOrderById,
} from '@/api/supabase/queries/order_queries';
import {
  Body2Bold,
  Body2,
  Heading3Bold,
  Body1,
  Body1Bold,
  Heading4Bold,
  Body2Light,
} from '@/styles/fonts';
import { fetchCartItemsWithQuantity } from '../../api/supabase/queries/cart_queries';
import { useSearchParams } from 'next/navigation';
import BackButton from '../../components/BackButton/BackButton';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  ColDiv,
  OutterFavoriteDiv,
  TextDiv1,
  OutterBox,
  Label,
  LabelBox,
  ScrollDiv,
  ShippingDetailsDiv,
  ImageDiv,
  BottomColumnDiv,
  LabelBox1,
  LeftColumnDiv,
  RightColumnDiv,
  DetailsHeader,
  PageDiv,
  CenterDiv,
  BackButtonDiv,
  TextDiv,
} from './styles';

import { Product, User, Pickup } from '../../schema/schema';
import { fetchCartItemsWithQuantityByID } from '../../api/supabase/queries/cart_queries';
export default function OrderConfirmationPickUp() {
  const [Cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const [pickupTime, setPickupTime] = useState<Pickup>();
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
      const currOrder = await getOrderById(Number(orderIDFromSearch));
      const pickup = await fetchPickupTimesByID(currOrder.pickup_time_id);
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
    const dateStr = `${date[1]}/${date[2]}/${date[0]}`;
    return `${dateStr}`;
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
                      <ImageDiv>
                        <img
                          src={cartItem.photo}
                          alt={cartItem.name}
                          style={{
                            width: '100px',
                            height: '100px',
                          }}
                        />
                      </ImageDiv>
                      <LabelBox1>
                        <Body1Bold>{cartItem.name}</Body1Bold>
                        <br />
                        <Body2Light>Category: {cartItem.category}</Body2Light>
                      </LabelBox1>
                      <LabelBox>
                        <Body1Bold>Quantity: {cartItem.quantity}</Body1Bold>
                      </LabelBox>
                    </FavoriteDiv>
                  ))}
                </ScrollDiv>
              </OutterFavoriteDiv>
            </LeftColumnDiv>
            <RightColumnDiv>
              <ShippingDetailsDiv>
                <Heading3Bold>Delivery Information</Heading3Bold>
                <DetailsHeader>Time Slot</DetailsHeader>
                <Body1>{organizePickupTime()} (10:00 am - 12:30 pm)</Body1>
                <DetailsHeader>Location</DetailsHeader>
                <Body1>3170 23rd Street, San Francisco, CA 94110</Body1>
              </ShippingDetailsDiv>
            </RightColumnDiv>
          </BottomColumnDiv>
        </PageDiv>
      </CenterDiv>
    </div>
  );
}

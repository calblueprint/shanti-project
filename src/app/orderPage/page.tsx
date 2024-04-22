'use client';

import { useState, useEffect } from 'react';
import {
  Body1,
  Body2Light,
  Heading3Bold,
  Heading4Bold,
  Heading2,
  Body1Bold,
} from '@/styles/fonts';

import { useSearchParams } from 'next/navigation';
import { fetchPickupTimesByID } from '@/api/supabase/queries/pickup_queries';
import BackButton from '../../components/BackButton/BackButton';

import {
  fetchOrderProductsbyOrderId,
  getOrderById,
} from '../../api/supabase/queries/order_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  BackButtonDiv,
  DetailsHeader,
  RightColumnDiv,
  TextDiv,
  ImageDiv,
  BottomColumnDiv,
  ShippingDetailsDiv,
  LabelBox,
  LeftColumnDiv,
  ScrollDiv,
  PageDiv,
  CenterDiv,
  TextDiv1,
} from './styles';

import { ProductWithQuantity, Order, Pickup } from '../../schema/schema';

function formatDate(date: string | undefined): string {
  if (!date) return '';

  const monthNames = [
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
  const res: Date = new Date(date);

  const month = monthNames[res.getMonth()];
  const day = res.getDate();
  const year = res.getFullYear();

  return `${month} ${day}, ${year}`;
}

function formatTime(date: string | undefined): string {
  if (!date) return '';

  const hour = date.substring(11, 13);
  const minute = date.substring(14, 16);

  return `${hour}:${minute}`;
}

export default function OrderPage() {
  const [orders, setOrders] = useState<ProductWithQuantity[]>([]);
  const [pickupTime, setPickupTime] = useState<Pickup>();
  const searchParams = useSearchParams();
  const orderIDFromSearch = searchParams.get('orderID');
  let currOrderId = 0;
  if (orderIDFromSearch !== null) {
    currOrderId = parseInt(orderIDFromSearch, 10);
  } else {
    currOrderId = 32;
  }

  async function setUserDetails() {
    const currOrder = await getOrderById(Number(orderIDFromSearch));
    const pickup = await fetchPickupTimesByID(currOrder.pickup_time_id);
    setPickupTime(pickup);
  }

  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    async function fetchProducts() {
      const data = (await fetchOrderProductsbyOrderId(
        currOrderId,
      )) as ProductWithQuantity[];
      const currOrder = await getOrderById(currOrderId);
      setOrders(data);
      setOrder(currOrder);
    }
    fetchProducts();
    setUserDetails();
  });

  function organizePickupTime() {
    const startTime = pickupTime?.start_time.toLocaleString();

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
                <Heading2>{formatDate(order?.created_at)}</Heading2>
              </TextDiv>
              <OutterFavoriteDiv>
                <TextDiv1>
                  <Heading4Bold>Order No. {order?.id}</Heading4Bold>
                </TextDiv1>
                <ScrollDiv>
                  {orders.map(product => (
                    <FavoriteDiv key={product.id}>
                      <ImageDiv>
                        <img
                          src={product.photo}
                          alt={product.name}
                          width={150}
                          height={150}
                          style={{ marginTop: '0' }}
                        />
                      </ImageDiv>

                      <LabelBox>
                        <Body1Bold>{product.name}</Body1Bold>
                        <br />
                        <Body2Light style={{ marginTop: '-10px' }}>
                          Category: {product.category}
                        </Body2Light>
                      </LabelBox>
                      <LabelBox>
                        <Body1Bold>Quantity: {product.quantity}</Body1Bold>
                      </LabelBox>
                    </FavoriteDiv>
                  ))}
                </ScrollDiv>
              </OutterFavoriteDiv>
            </LeftColumnDiv>
            <RightColumnDiv>
              <ShippingDetailsDiv>
                <Heading3Bold>Pickup Information</Heading3Bold>
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

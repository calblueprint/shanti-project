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
  Heading2Bold,
  Heading3Bold,
  Heading4Bold,
} from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import {
  DeliveryTimes,
  fetchDeliveryTimes,
} from '@/api/supabase/queries/delivery_queries';
import {
  fetchOrderProductsbyOrderId,
  getOrderById,
} from '@/api/supabase/queries/order_queries';
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
  StatusButton,
} from './styles';

import {
  Product,
  User,
  Address,
  ProductWithQuantity,
  Order,
} from '../../schema/schema';
import { Body1Bold } from '../orderPage/styles';
import { BackButtonDiv } from '../orderConfirmationPickUp/styles';

export default function OrderPageDelivery() {
  const [orders, setOrders] = useState<ProductWithQuantity[]>([]);
  const searchParams = useSearchParams();
  const orderIDFromSearch = searchParams.get('orderID');
  let currOrderId = 0;
  const [delivTimes, setDelivTimes] = useState<DeliveryTimes[]>([]);

  if (orderIDFromSearch !== null) {
    currOrderId = parseInt(orderIDFromSearch, 10);
  } else {
    currOrderId = 32;
  }

  const [order, setOrder] = useState<Order>();
  const [userAddress, setUserAddress] = useState<Address>();
  const [user, setUser] = useState<User>();
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

  useEffect(() => {
    async function fetchProducts() {
      const data = (await fetchOrderProductsbyOrderId(
        currOrderId,
      )) as ProductWithQuantity[];
      const currOrder = await getOrderById(currOrderId);
      setOrders(data);
      setOrder(currOrder);
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

    fetchDelivTimes();
    fetchProducts();
    setUserDetails();
  }, []);

  function organizeDelivTime() {
    const userGrp = user?.delivery_group == null ? 1 : user?.delivery_group;
    const Time = delivTimes[userGrp]?.delivery_time.toLocaleString();
    const date =
      Time == null ? ['0', '0', '0'] : Time?.substring(0, 10).split('-');
    const dateStr = `${months[parseInt(date[1], 10) - 1]} ${date[2]}, ${
      date[0]
    }`;
    return `${dateStr}`;
  }

  function organizeOrderDate() {
    const Time = order?.created_at.toLocaleString();
    const date =
      Time == null ? ['0', '0', '0'] : Time?.substring(0, 10).split('-');
    const dateStr = `${months[parseInt(date[1], 10) - 1]} ${date[2]}, ${
      date[0]
    }`;
    return `${dateStr}`;
  }

  function organizeOrderTime() {
    const Time = order?.created_at.toLocaleString();
    console.log(Time);
    let ampm = 'AM';
    const date =
      Time == null ? ['00', '00'] : Time?.substring(11, 16).split(':');

    console.log(date);
    if (parseInt(date[0], 10) >= 12) {
      date[0] = (parseInt(date[0], 10) - 12).toLocaleString();
      ampm = 'PM';
    }
    const timeStr = `${date[0]}:${date[1]} ${ampm}`;
    return `${timeStr}`;
  }

  return (
    <main>
      <NavBar />
      <CenterDiv>
        <PageDiv>
          <BottomColumnDiv>
            <LeftColumnDiv>
              <BackButton destination="./orderHistory" />
              <Heading2Bold>Order No. {orderIDFromSearch}</Heading2Bold>
              <OutterFavoriteDiv>
                <Body1>Order Date: {organizeOrderDate()}</Body1>
                <Body1>Order Time: {organizeOrderTime()}</Body1>
                <ScrollDiv>
                  {orders.map(product => (
                    <FavoriteDiv key={product.id}>
                      <img
                        src={product.photo}
                        alt={product.name}
                        style={{
                          width: '150px',
                          height: '150px',
                          marginLeft: '30px',
                        }}
                      />
                      <LabelBox>
                        <Body1Bold>{product.name}</Body1Bold>
                        <Body2Light>Category: {product.category}</Body2Light>
                      </LabelBox>
                      <Quantity>
                        <Body2>
                          <b>Quantity:</b> {product.quantity}
                        </Body2>
                      </Quantity>
                    </FavoriteDiv>
                  ))}
                </ScrollDiv>
              </OutterFavoriteDiv>
            </LeftColumnDiv>
            <RightColumnDiv>
              <StatusButton>
                {' '}
                <Body1Bold>{order?.order_status}</Body1Bold>{' '}
              </StatusButton>
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

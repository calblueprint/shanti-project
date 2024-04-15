'use client';

import { useState, useEffect } from 'react';
import { Body1, Body2 } from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import BackButton from '../../components/BackButton/BackButton';

import {
  fetchOrderProductsbyOrderId,
  getOrderById,
} from '../../api/supabase/queries/order_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  Body1Bold,
  OutterFavoriteDiv,
  BackButtonDiv,
  OutterBox,
  OutterDiv,
  Heading,
  ProductNameDiv,
  StatusButton,
} from './styles';

import { ProductWithQuantity, Order } from '../../schema/schema';

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

export default function OrderPage() {
  const [orders, setOrders] = useState<ProductWithQuantity[]>([]);
  const searchParams = useSearchParams();
  const orderIDFromSearch = searchParams.get('orderID');
  let currOrderId = 0;
  if (orderIDFromSearch !== null) {
    currOrderId = parseInt(orderIDFromSearch, 10);
  } else {
    currOrderId = 32;
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
  }, []);

  return (
    <div>
      <NavBar />

      <OutterBox>
        <BackButtonDiv>
          <BackButton destination="./orderHistory" />
        </BackButtonDiv>
        <OutterDiv>
          <Heading>{formatDate(order?.created_at)}</Heading>
          <StatusButton>
            {' '}
            <Body1Bold>{order?.order_status}</Body1Bold>{' '}
          </StatusButton>
        </OutterDiv>
        <OutterFavoriteDiv>
          {orders.map(product => (
            <FavoriteDiv key={product.id}>
              <img
                src={product.photo}
                alt={product.name}
                width={150}
                height={150}
                style={{ marginTop: '0' }}
              />
              <ProductNameDiv>
                <Body1>{product.name}</Body1>
                <Body2>Category: {product.category}</Body2>
              </ProductNameDiv>
            </FavoriteDiv>
          ))}
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}

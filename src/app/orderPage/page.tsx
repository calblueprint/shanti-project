'use client';

import { useState, useEffect } from 'react';
import { Body1, Body2 } from '@/styles/fonts';
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

<<<<<<< HEAD
import {
  ProductWithQuantity,
  OrderProduct,
  Order,
  Product,
} from '../../schema/schema';
=======
import { ProductWithQuantity, Order } from '../../schema/schema';
>>>>>>> 60e46d8 (feat: order page udpated)

function formatDate(date: string | undefined): string {
  if (date === undefined) return '';

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
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

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

  const formattedDate = `${months[parseInt(month, 10) - 1]} ${parseInt(
    day,
    10,
  )}, ${year}`;

  return formattedDate;
}

export default function FavoritesPage() {
  const [orders, setOrders] = useState<ProductWithQuantity[]>([]);
  const currOrderId = 32;
  const [order, setOrder] = useState<Order>();

  async function fetchProducts() {
<<<<<<< HEAD
    const order = await getOrderById(currOrderId);
    const data = (await fetchOrderProductsbyOrderId(
      currOrderId,
    )) as ProductWithQuantity[];
    setOrders(data);
=======
    const data = (await fetchOrderProductsbyOrderId(
      currOrderId,
    )) as ProductWithQuantity[];
    const currOrder = await getOrderById(currOrderId);
    setOrders(data);
    setOrder(currOrder);
>>>>>>> 60e46d8 (feat: order page udpated)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />

      <OutterBox>
        <BackButtonDiv>
          <BackButton destination="./profileScreen" />
        </BackButtonDiv>
        <OutterDiv>
<<<<<<< HEAD
          <Heading>{order.created_at}</Heading>
          <StatusButton>
            {' '}
            <Body1Bold>{order.status}</Body1Bold>{' '}
=======
          <Heading>{formatDate(order?.created_at)}</Heading>
          <StatusButton>
            {' '}
            <Body1Bold>{order?.status}</Body1Bold>{' '}
>>>>>>> 60e46d8 (feat: order page udpated)
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

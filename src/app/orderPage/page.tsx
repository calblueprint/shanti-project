'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Body1, Body2 } from '@/styles/fonts';
import BackButton from '../../components/BackButton/BackButton';

import {
  fetchOrderProductsbyOrderId, 
  getOrderById
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
  ViewItem,
} from './styles';

import { ProductWithQuantity, OrderProduct, Order, Product } from '../../schema/schema';

function formatDate(date: Date | null): string {
  if (!date) return '';

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default function FavoritesPage() {
  const [orders, setOrders] = useState<ProductWithQuantity[]>([]);
  const [currOrder, setcurrOrder] = useState<Order[]>([]);
  const router = useRouter();
  const currOrderId = 32;

  async function fetchProducts() {
    const order = (await getOrderById(currOrderId));
    const data = (await fetchOrderProductsbyOrderId(currOrderId)) as ProductWithQuantity[];
    setOrders(data);
    
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
        <Heading>{order.created_at}</Heading>
          <StatusButton> <Body1Bold>{order.status}</Body1Bold> </StatusButton>
        </OutterDiv>

        <OutterFavoriteDiv>
          {orders.map(product => (
            <FavoriteDiv key={product.id}>
              <img
                src={product.photo}
                alt={product.name}
                width={150}
                height={150}
                style={{ marginTop: '0'}}
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
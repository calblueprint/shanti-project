'use client';

import { useState, useEffect } from 'react';
import { Check, X, Send } from 'react-feather';
import { Body1, Body2Light, Heading3Bold, Heading4Bold, Body2, Heading2, Body1Bold } from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
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
  TextDiv1,
  OutterBox,
  OutterDiv,
  ImageDiv,
  BottomColumnDiv,
  ShippingDetailsDiv,
  LabelBox,
  LeftColumnDiv,
  ScrollDiv,
  ProductNameDiv,
  PageDiv,
  CenterDiv,
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
  
  const status = order?.order_status?.toLowerCase() || 'default';

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
                  <Heading4Bold>Order No</Heading4Bold>
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
                            {product.quantity}
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
                <Heading3Bold>Pickup Information</Heading3Bold>
                <DetailsHeader>Time Slot</DetailsHeader>
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




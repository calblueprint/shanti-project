import React from 'react';
import { useRouter } from 'next/navigation';

import querystring from 'querystring';
import { Heading4Bold, Body1, OrderStatusFont } from '@/styles/fonts';
import {
  ViewOrderButton,
  ArrowIcon,
  OrderStatusDiv,
  CheckStyled,
  OrderStatusApprovedDiv,
  CrossStyled,
  OrderStatusSubmittedDiv,
  LoaderStyled,
} from './styles'; // Adjust the import path as necessary
import { Order, OrderStatus } from '../../schema/schema';

function formatDate(isoString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', options);
}

interface OrderDetailsProps {
  date: string;
  orderNumber: string;
  status: string; // Define more statuses if needed
  order: Order;
}

export default function OrderDetails(props: OrderDetailsProps) {
  const { date, orderNumber, order } = props;
  const router = useRouter();

  const viewOrder = (orderID: string) => {
    const queryString = querystring.stringify({ orderID });
    router.push(`/orderPage?${queryString}`);
  };
  if (order.status === OrderStatus.OrderRejected) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: '20px',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Heading4Bold>Order No. {orderNumber}</Heading4Bold>
          <ViewOrderButton onClick={() => viewOrder(orderNumber)}>
            <Body1>View Order</Body1>
            <ArrowIcon />
          </ViewOrderButton>
        </div>

        <Body1
          style={{
            marginTop: '5px',
          }}
        >
          {formatDate(date)}
        </Body1>
        <OrderStatusDiv>
          <CrossStyled />
          <OrderStatusFont>Order Rejected</OrderStatusFont>
        </OrderStatusDiv>
      </div>
    );
  }
  if (order.status === OrderStatus.OrderReady) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: '20px',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Heading4Bold>Order No. {orderNumber}</Heading4Bold>
          <ViewOrderButton onClick={() => viewOrder(orderNumber)}>
            <Body1>View Order</Body1>
            <ArrowIcon />
          </ViewOrderButton>
        </div>

        <Body1
          style={{
            marginTop: '5px',
          }}
        >
          {formatDate(date)}
        </Body1>
        <OrderStatusApprovedDiv>
          <CheckStyled />
          <OrderStatusFont>Order Approved</OrderStatusFont>
        </OrderStatusApprovedDiv>
      </div>
    );
  }
  if (order.status === OrderStatus.OrderSubmitted) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: '20px',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Heading4Bold>Order No. {orderNumber}</Heading4Bold>
          <ViewOrderButton onClick={() => viewOrder(orderNumber)}>
            <Body1>View Order</Body1>
            <ArrowIcon />
          </ViewOrderButton>
        </div>

        <Body1
          style={{
            marginTop: '5px',
          }}
        >
          {formatDate(date)}
        </Body1>
        <OrderStatusSubmittedDiv>
          <LoaderStyled />
          <OrderStatusFont>Order Submitted</OrderStatusFont>
        </OrderStatusSubmittedDiv>
      </div>
    );
  }
  return <p> </p>;
}

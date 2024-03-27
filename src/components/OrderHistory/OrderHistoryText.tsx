import React from 'react';
import { useRouter } from 'next/navigation';

import querystring from 'querystring';
import { ViewOrderButton, ArrowIcon, OrderApproved, OrderReject, OrderReady,CheckmarkIcon } from './styles'; // Adjust the import path as necessary
import check from '../../../public/check.svg'

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
}

export default function OrderDetails(props: OrderDetailsProps) {
  const { date, orderNumber, status } = props;
  const router = useRouter();

  const viewOrder = (orderID: string) => {
    const queryString = querystring.stringify({ orderID });
    router.push(`/orderPage?${queryString}`);
  };
  let statusElement;

  if (status === 'Ready') {
    statusElement = (
      <OrderReady>
        <CheckmarkIcon src="/ready.svg" alt='checkmark'/>
        Ready for Pick Up
      </OrderReady>
    );
  } else if (status === 'Rejected') {
    statusElement = (
      <OrderReject>
        <CheckmarkIcon src="/x.svg" alt='checkmark'/>
        Order Rejected
      </OrderReject>
    );
  } else {
    statusElement = (
      <OrderApproved>
        <CheckmarkIcon src="/check.svg" alt='checkmark'/>
        Order Approved
      </OrderApproved>
    );
  }
  console.log('status', status);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <div>
        <div style={{ color: 'var(--Black, #101010)'}}>
          <h4
            style={{
              fontFamily: 'Public Sans',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            Order No. {orderNumber}
          </h4>
        </div>
        <div style={{ color: 'var(--Black, #101010)'}}>
          <h5
            style={{
              fontFamily: 'Public Sans',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
            
          >{formatDate(date)}
          </h5>
        </div>
        
        {statusElement}
      </div>
      <ViewOrderButton type="button" onClick={() => viewOrder(orderNumber)}>
        {/** DO NOT USE IMAGE Please use the icon in the feather library! */}
        View order <ArrowIcon />
      </ViewOrderButton>
    </div>
  );
}

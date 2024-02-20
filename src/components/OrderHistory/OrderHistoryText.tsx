import React from 'react';
import { useRouter } from 'next/navigation';
import { ViewOrderButton, ArrowIcon } from './styles'; // Adjust the import path as necessary

interface OrderDetailsProps {
  date: string;
  orderNumber: string;
  status: string; // Define more statuses if needed
}

export default function OrderDetails(props: OrderDetailsProps) {
  const { date, orderNumber, status } = props;
  const router = useRouter();

  const viewOrder = () => {
    // Navigate to the order details page
    router.push(`/order/${orderNumber}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div>
        <div>{date}</div>
        <div>Order No. {orderNumber}</div>
        <div style={{ color: status === 'Confirmed' ? 'green' : 'red' }}>
          {status === 'Confirmed' ? '✓' : '✗'} {status}
        </div>
      </div>
      <ViewOrderButton type="button" onClick={viewOrder}>
        View order <ArrowIcon src="./Chevron_Right.svg" alt=">"/>
      </ViewOrderButton>
    </div>
  );
}

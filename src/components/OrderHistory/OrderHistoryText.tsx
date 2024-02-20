import React from 'react';
import { useRouter } from 'next/router';

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
      <button type="button" onClick={viewOrder}>
        View order
      </button>
    </div>
  );
}

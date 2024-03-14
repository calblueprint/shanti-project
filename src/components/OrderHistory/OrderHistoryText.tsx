import React from 'react';
import { useRouter } from 'next/navigation';
import { ViewOrderButton, ArrowIcon } from './styles'; // Adjust the import path as necessary

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

  const viewOrder = () => {
    // Navigate to the order details page
    router.push(`/order/${orderNumber}`);
  };

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
        <div>{formatDate(date)}</div>
        <div>Order No. {orderNumber}</div>
        <div style={{ color: status === 'Confirmed' ? 'green' : 'red' }}>
          {status === 'Confirmed' ? '✓' : '✗'} {status}
        </div>
      </div>
      <ViewOrderButton type="button" onClick={viewOrder}>
        {/** DO NOT USE IMAGE Please use the icon in the feather library! */}
        View order <ArrowIcon />
      </ViewOrderButton>
    </div>
  );
}

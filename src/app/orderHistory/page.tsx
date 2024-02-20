import OrderDetailsWithProducts from '../../components/OrderHistory/OrderHistoryBox';

export default function OrderHistory(id: number) {
  return (
    <div>
      <OrderDetailsWithProducts orderId={id} />
    </div>
  );
}
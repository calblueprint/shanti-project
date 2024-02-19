'use client';

import {
  HeaderShiftLeft,
  OrderSummaryDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  PShiftLeft,
  WhiteBackgroundDiv,
  ItemSummaryDiv,
  Qty,
  PShiftRight,
} from './styles';

import { ProductWithQuantity } from '../../schema/schema';

export default function OrderSummary(props: {
  cart: ProductWithQuantity[];
  numberOfItems: number;
}) {
  const { cart, numberOfItems } = props;

  return (
    <WhiteBackgroundDiv>
      <HeaderShiftLeft>Order Summary</HeaderShiftLeft>
      <Qty>Qty.</Qty>
      <OrderSummaryDiv>
        {cart.map(cartItem => (
          <ItemSummaryDiv key={cartItem.id}>
            <PShiftLeft>{cartItem.name}</PShiftLeft>
            <PShiftRight>{cartItem.quantity}</PShiftRight>
          </ItemSummaryDiv>
        ))}
      </OrderSummaryDiv>
      <OrderTotalDiv>
        <HeaderShiftLeft>Order Total</HeaderShiftLeft>
        <HeaderShiftRight>{numberOfItems}</HeaderShiftRight>
      </OrderTotalDiv>
    </WhiteBackgroundDiv>
  );
}

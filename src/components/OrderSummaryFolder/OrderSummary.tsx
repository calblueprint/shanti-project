'use client';

import { Body1, Body2, Heading2Bold, Body1Bold } from '@/styles/fonts';
import {
  OrderSummaryDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  WhiteBackgroundDiv,
  AlignItemCenter,
  ItemSummaryDiv,
  OrderSummaryHeaderDiv,
  ItemNameDiv,
} from './styles';
import { ProductWithQuantity } from '../../schema/schema';

export default function OrderSummary(props: {
  cart: ProductWithQuantity[];
  numberOfItems: number;
}) {
  const { cart, numberOfItems } = props;

  return (
    <WhiteBackgroundDiv>
      <Heading2Bold>Order Summary</Heading2Bold>
      <AlignItemCenter>
        <OrderSummaryHeaderDiv>
          <Body2>Product Name</Body2>
          <Body2>Qty.</Body2>
        </OrderSummaryHeaderDiv>
        <OrderSummaryDiv>
          {cart.map(cartItem => (
            <ItemSummaryDiv key={cartItem.id}>
              <ItemNameDiv>
                <Body1>{cartItem.name}</Body1>
              </ItemNameDiv>

              <Body1>{cartItem.quantity}</Body1>
            </ItemSummaryDiv>
          ))}
        </OrderSummaryDiv>
      </AlignItemCenter>
      <OrderTotalDiv>
        <Body1Bold style={{ marginLeft: '10px' }}>Order Total</Body1Bold>
        <HeaderShiftRight>{numberOfItems}</HeaderShiftRight>
      </OrderTotalDiv>
    </WhiteBackgroundDiv>
  );
}

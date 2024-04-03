'use client';

import { Body1, Body1Bold, Body2Light, Heading3Bold } from '@/styles/fonts';
import {
  OrderSummaryDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  WhiteBackgroundDiv,
  AlignItemCenter,
  ItemSummaryDiv,
  Qty,
  PShiftRight,
  ContainerDiv,
  TotalDiv,
  OrderRow,
  OrderTable,
  OrderTableBody,
} from './styles';
import { ProductWithQuantity } from '../../schema/schema';

export default function OrderSummary(props: {
  cart: ProductWithQuantity[];
  numberOfItems: number;
}) {
  const { cart, numberOfItems } = props;
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 3,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 3,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 3,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 3,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 3,
    },
  ];

  // return (
  //   <WhiteBackgroundDiv>
  //     <HeaderShiftLeft>Order Summary</HeaderShiftLeft>
  //     <Qty>Qty.</Qty>
  //     <OrderSummaryDiv>
  //       {cart.map(cartItem => (
  //         <ItemSummaryDiv key={cartItem.id}>
  //           <PShiftLeft>{cartItem.name}</PShiftLeft>
  //           <PShiftRight>{cartItem.quantity}</PShiftRight>
  //         </ItemSummaryDiv>
  //       ))}
  //     </OrderSummaryDiv>
  //     <OrderTotalDiv>
  //       <HeaderShiftLeft>Order Total</HeaderShiftLeft>
  //       <HeaderShiftRight>{numberOfItems}</HeaderShiftRight>
  //     </OrderTotalDiv>
  //   </WhiteBackgroundDiv>
  // );

  return (
    <ContainerDiv>
      <WhiteBackgroundDiv>
        <Heading3Bold>Order Summary</Heading3Bold>
        <OrderTable>
          <thead>
            <OrderRow>
              <th>
                <Body2Light>PRODUCT NAME</Body2Light>
              </th>
              <th>
                <Body2Light>QTY</Body2Light>
              </th>
            </OrderRow>
          </thead>
          <OrderTableBody>
            {cartItems.map(cartItem => (
              <OrderRow key={cartItem.id}>
                <td>
                  <Body1>{cartItem.name}</Body1>
                </td>
                <td>
                  <Body1>{cartItem.quantity}</Body1>
                </td>
              </OrderRow>
            ))}
          </OrderTableBody>
        </OrderTable>
      </WhiteBackgroundDiv>
      <TotalDiv>
        <Body1Bold>Order Total</Body1Bold>
        <Body1Bold>{numberOfItems}</Body1Bold>
      </TotalDiv>
    </ContainerDiv>
  );
}

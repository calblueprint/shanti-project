'use client';

import React from 'react';
import BackButton from '../../components/BackButton';
import { GlobalStyle } from '../../styles/components';
import { Normal700Text } from '../../styles/fonts';
import {
  DeliveryContainer,
  OrderContainer,
  OrderSummary,
  OrderSummaryText,
  OrderButton,
  InformationContainer,
  InformationText,
  ItemText,
  QtyText,
  QuantityText,
  ItemQuantityContainer,
  ItemQuantityRow,
  TotalContainer,
  NavBarMovedUP,
} from './styles';

export default function App() {
  return (
    <main>
      <GlobalStyle />

      <NavBarMovedUP />
      <BackButton />
      <DeliveryContainer>
        <InformationContainer>
          <Normal700Text style={{ marginBottom: '38px', fontSize: '40px' }}>
            Shipping
          </Normal700Text>
          <Normal700Text>Name</Normal700Text>
          <InformationText>Ethan Auyeung</InformationText>
          <Normal700Text>Address</Normal700Text>
          <InformationText>123 Telegraph Ave</InformationText>
        </InformationContainer>
        <OrderContainer>
          <OrderSummary>
            <OrderSummaryText>Order Summary</OrderSummaryText>
            <QtyText>Qty.</QtyText>
            <ItemQuantityContainer>
              <ItemQuantityRow>
                <ItemText>Plush Toy</ItemText>
                <QuantityText>1</QuantityText>
              </ItemQuantityRow>
              <ItemQuantityRow>
                <ItemText>Item C</ItemText>
                <QuantityText>2</QuantityText>
              </ItemQuantityRow>
            </ItemQuantityContainer>
            <TotalContainer>
              <ItemQuantityRow style={{ marginTop: '23px' }}>
                <ItemText>Order Total</ItemText>
                <QuantityText>3</QuantityText>
              </ItemQuantityRow>
            </TotalContainer>
          </OrderSummary>
          <OrderButton>Place Order</OrderButton>
        </OrderContainer>
      </DeliveryContainer>
    </main>
  );
}

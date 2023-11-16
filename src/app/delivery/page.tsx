'use client';

import React from 'react';
import NavBar from '../../components/NavBar';
import { GlobalStyle } from '../../styles/components';
import {
  DeliveryContainer,
  OrderContainer,
  OrderSummary,
  OrderButton,
  InformationContainer,
  InformationText,
  PublicSans700Text,
  ItemText,
  QtyText,
  QuantityText,
  ItemQuantityContainer,
  ItemQuantityRow,
  TotalContainer,
} from './styles';

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <NavBar />
      <DeliveryContainer>
        <InformationContainer>
          <PublicSans700Text style={{ marginBottom: '38px', fontSize: '40px' }}>
            Shipping
          </PublicSans700Text>
          <PublicSans700Text>Name</PublicSans700Text>
          <InformationText>Ethan Auyeung</InformationText>
          <PublicSans700Text>Address</PublicSans700Text>
          <InformationText>123 Telegraph Ave</InformationText>
        </InformationContainer>
        <OrderContainer>
          <OrderSummary>
            <PublicSans700Text
              style={{
                marginTop: '27px',
                fontSize: '30px',
                textAlign: 'center',
              }}
            >
              Order Summary
            </PublicSans700Text>
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

'use client';

// import React from 'react';
import NavBar from '../../components/NavBar';
import { GlobalStyle } from '../../styles/components';
import { Heading1 } from '../../styles/fonts';
import {
  DeliveryContainer,
  OrderContainer,
  OrderSummary,
  OrderButton,
  InformationContainer,
  InformationText,
} from './styles';

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <NavBar />
      <DeliveryContainer>
        <InformationContainer>
          <Heading1>Shipping</Heading1>
          <InformationText>Ethan Auyeung</InformationText>
          <InformationText>123 Telegraph Ave</InformationText>
        </InformationContainer>
        <OrderContainer>
          <OrderSummary />
          <OrderButton>Place Order</OrderButton>
        </OrderContainer>
      </DeliveryContainer>
    </main>
  );
}

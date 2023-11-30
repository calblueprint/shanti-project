'use client';

import { ArrowLeft } from 'react-feather';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { arrayOfFavorites } from '../../api/supabase/queries/user_queries';

import {
  FavoriteDiv,
  HeaderShiftLeft,
  OrderSummaryDiv,
  OutterFavoriteDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  PShiftLeft,
  WhiteBackgroundDiv,
  BackDiv,
  GlobalStyle,
  Backtext,
  TrashIcon,
  TransparentButton,
  NavBarMovedUP,
  PageDiv,
  Label,
  LabelBox,
  CheckoutButton,
  ItemSummaryDiv,
  ForceColumnDiv,
  RightColumnDiv,
  Qty,
  PShiftRight,
} from './styles';

import Buttons from './Buttons';

import { Product } from '../../schema/schema';

export default function OrderPage() {
  const [Cart, setCart] = useState<Product[]>([]);
  const router = useRouter();
  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[]; // change the function to grab the cartItems as products
    setCart(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBarMovedUP />
      <GlobalStyle />
      <PageDiv>
        <ForceColumnDiv>
          <BackDiv onClick={() => router.push('/storefront')}>
            <ArrowLeft />
            <Backtext>Back</Backtext>
          </BackDiv>
          <h1>Cart</h1>
          <OutterFavoriteDiv>
            {Cart.map(cart => (
              <FavoriteDiv key={cart.id}>
                <img
                  src={cart.photo}
                  alt={cart.name}
                  style={{ width: '150px', height: '150px' }}
                />
                <LabelBox>
                  <Label>{cart.name}</Label>
                  <p>Category: {cart.category}</p>
                </LabelBox>
                <Buttons />
                <TransparentButton
                // {onClick={() => clickFunctions({ fav: favorite })}} <- change to remove item entirely
                >
                  <TrashIcon />
                </TransparentButton>
              </FavoriteDiv>
            ))}
          </OutterFavoriteDiv>
        </ForceColumnDiv>
        <RightColumnDiv>
          <WhiteBackgroundDiv>
            <HeaderShiftLeft>Order Summary</HeaderShiftLeft>
            <Qty>Qty.</Qty>
            <OrderSummaryDiv>
              {Cart.map(cart => (
                <ItemSummaryDiv key={cart.id}>
                  <PShiftLeft>{cart.name}</PShiftLeft>
                  <PShiftRight>{cart.quantity}</PShiftRight>
                </ItemSummaryDiv>
              ))}
            </OrderSummaryDiv>
            <OrderTotalDiv>
              <HeaderShiftLeft>Order Total</HeaderShiftLeft>
              <HeaderShiftRight
              // change with the actual cart total
              >
                10
              </HeaderShiftRight>
            </OrderTotalDiv>
          </WhiteBackgroundDiv>

          <CheckoutButton
          // Add Checkout Function by using onClick
          >
            Check Out
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

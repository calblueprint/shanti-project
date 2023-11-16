'use client';

import { ArrowLeft } from 'react-feather';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  arrayOfFavorites,
  getUserInfo,
} from '../../api/supabase/queries/user_queries';

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
} from './style';

import Buttons from './Buttons';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

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

  async function clickFunctions(props: { fav: Product }) {
    const { fav } = props;
    getUserInfo(fav, false);
    setCart(Cart.filter(Prod => Prod.product_id !== fav.product_id));
  }

  return (
    <div>
      <NavBarMovedUP />
      <GlobalStyle />
      <PageDiv>
        <ForceColumnDiv>
          <BackDiv onClick={() => router.push('/profileScreen')}>
            <ArrowLeft />
            <Backtext>Back</Backtext>
          </BackDiv>
          <h1>Cart</h1>
          <OutterFavoriteDiv>
            {Cart.map(cart => (
              <FavoriteDiv key={cart.product_id}>
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
                <ItemSummaryDiv key={cart.product_id}>
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

'use client';

// import { GlobalStyle } from "@/styles/components";
import { ArrowLeft } from 'react-feather';
import { arrayOfFavorites } from "@/api/supabase/queries/user_queries";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Normal700Text } from '@/styles/fonts';
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
  PickupContent,
  PickupContainer,
} from './styles';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

export default function Pickup() {
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
          <BackDiv onClick={() => router.push('/cart')}>
            <ArrowLeft />
            <Backtext>Back</Backtext>
          </BackDiv>
          <PickupContainer>
          <Normal700Text style={{ marginBottom: '38px', fontSize: '40px' }}>
            Pick Up
          </Normal700Text>
          <Normal700Text>Name</Normal700Text>
          <PickupContent>Ethan Auyeung</PickupContent>
          <Normal700Text>Phone Number</Normal700Text>
          <PickupContent>+1 123-456-7890</PickupContent>
          </PickupContainer>
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

          <CheckoutButton onClick={() => router.push('/confirmation')}>
            Place Order
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

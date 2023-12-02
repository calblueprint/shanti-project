'use client';

// import { GlobalStyle } from "@/styles/components";
import { ArrowLeft } from 'react-feather';
import { arrayOfFavorites } from "@/api/supabase/queries/user_queries";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Normal700Text } from '@/styles/fonts';
import { fetchRecentPickupTimes } from '@/api/supabase/queries/pickup_queries';
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
  PickupTimeButton,
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

interface PickupTime {
  id: number;
  date: Date;
  start_time: Date;
  end_time: Date;
  day_of_week: string;
}

export default function Pickup() {
  const [Cart, setCart] = useState<Product[]>([]);
  const router = useRouter();
  const [Times, setTimes] = useState<PickupTime>();
  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[]; // change the function to grab the cartItems as products
    setCart(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchTimes() {
    const data = (await fetchRecentPickupTimes as unknown as PickupTime); // change the function to grab the cartItems as products
    setTimes(data);
  }
  useEffect(() => {
    fetchTimes();
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
          <PickupTimeButton> {} </PickupTimeButton>
          <PickupTimeButton>Time</PickupTimeButton>
          <div>Location: 3170 23rd Street, San Francisco, CA 94110</div>
          </PickupContainer>
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

          <CheckoutButton onClick={() => router.push('/orderConfirmationPickUp')}>
            Place Order
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

'use client';

// import { GlobalStyle } from "@/styles/components";
import { ArrowLeft } from 'react-feather';
import { arrayOfFavorites, fetchUser } from '@/api/supabase/queries/user_queries';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Normal700Text } from '@/styles/fonts';
import { fetchRecentPickupTimes ,fetchNRecentPickupTimes} from '@/api/supabase/queries/pickup_queries';
import { Pickup, Product, User } from '@/schema/schema';

import PickupButton from '@/components/PickUpFolder/PickupButton';
import {
  HeaderShiftLeft,
  OrderSummaryDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  PShiftLeft,
  WhiteBackgroundDiv,
  BackDiv,
  GlobalStyle,
  Backtext,
  NavBarMovedUP,
  PageDiv,
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


function DateInfoComponent({ date }: { date: Date }) {
  const dayOfWeek = date.getDay;
  console.log(dayOfWeek);
  const dateAsMonthDay = `${date.getDate  }/${  date.getMonth  }${1}`;


  return {
    dayOfWeek,
    dateAsMonthDay
  };
}


//

export default function Pickup() {
  const [Cart, setCart] = useState<Product[]>([]);
  const router = useRouter();
  const [Times, setTimes] = useState<Pickup[]>([]);

  const [Profile, setProfile] = useState<User>();


  useEffect(() => {
    async function fetchProducts() {
      const data = await arrayOfFavorites(); // change the function to grab the cartItems as products
      setCart(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchTimes() {
      const data = await fetchNRecentPickupTimes(2); // change the function to grab the cartItems as products
      setTimes(data);
    }
    fetchTimes();
  }, []);
  
  useEffect(() => {
    async function fetchUserData() {
      const data = await fetchUser(); // change the function to grab the cartItems as products
      setProfile(data);
    }
    fetchUserData();
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
            <PickupContent>{Profile?.first_name} {Profile?.last_name}</PickupContent>
            <Normal700Text>Phone Number</Normal700Text>
            <PickupContent>{Profile?.phone_numbers}</PickupContent>
            {/* <PickupButton day="hi" date="date" start="start" end="end" /> */}

            <PickupTimeButton>
              {Times.length > 0 && (
                <>
                  <div>{DateInfoComponent({ date: Times[0].start_time })?.dayOfWeek}</div>
                  <div>{DateInfoComponent({ date: Times[0].start_time })?.dateAsMonthDay}</div>
                </>
              )}
            </PickupTimeButton>
        
            <div>Location: 3170 23rd Street, San Francisco, CA 94110</div>
          </PickupContainer>
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
            onClick={() => router.push('/orderConfirmationPickUp')}
          >
            Place Order
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

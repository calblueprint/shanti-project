'use client';

// import { GlobalStyle } from "@/styles/components";
import { ArrowLeft } from 'react-feather';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import { fetchCartItemsWithQuantity } from '@/api/supabase/queries/cart_queries';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Normal700Text, Heading4Bold } from '@/styles/fonts';
import { fetchNRecentPickupTimes } from '@/api/supabase/queries/pickup_queries';
import { updateCartPickupId } from '@/api/supabase/queries/order_queries';
import { Pickup, User, ProductWithQuantity } from '@/schema/schema';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  HeaderShiftLeft,
  OrderSummaryDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  PShiftLeft,
  WhiteBackgroundDiv,
  BackDiv,
  Backtext,
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

function DateInfoComponent(date: { date: unknown }) {
  const date1 = new Date(date.date as string);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const getDayOfWeek = daysOfWeek[date1.getDay()];

  const dateAsMonthDay = date1.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  });

  return {
    getDayOfWeek,
    dateAsMonthDay,
  };
}

//

export default function Pickup() {
  const [Cart, setCart] = useState<ProductWithQuantity[]>([]);
  const router = useRouter();
  const [Time, setTimes] = useState<Pickup[]>([]);
  const [Profile, setProfile] = useState<User>();
  const [selectedPickupIndex, setSelectedPickupIndex] = useState<number>(0);
  useEffect(() => {
    async function fetchProducts() {
      const data = await fetchCartItemsWithQuantity(); // change the function to grab the cartItems as products
      setCart(data);
    }
    async function fetchTimes() {
      const data = await fetchNRecentPickupTimes(2); // change the function to grab the cartItems as products
      setTimes(data);
    }
    fetchProducts();
    fetchTimes();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      const data = await fetchUser(); // change the function to grab the cartItems as products
      setProfile(data);
    }
    fetchUserData();
  }, []);

  const handleButtonClick = (index: number) => {
    setSelectedPickupIndex(index);
  };

  return (
    <div>
      <NavBar />
      <PageDiv>
        <ForceColumnDiv>
          <BackDiv onClick={() => router.push('/cart')}>
            <ArrowLeft />
            <Backtext>Back</Backtext>
          </BackDiv>
          <PickupContainer>
            <Heading4Bold style={{ marginBottom: '38px', fontSize: '40px' }}>
              Pick Up
            </Heading4Bold>
            <Heading4Bold>Name</Heading4Bold>
            <PickupContent>
              {Profile?.first_name} {Profile?.last_name}
            </PickupContent>
            <Heading4Bold>Phone Number</Heading4Bold>
            <PickupContent>{Profile?.phone_numbers}</PickupContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Heading4Bold>Time Slot</Heading4Bold>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {Time.map(time => (
                <PickupTimeButton
                  key={time.id}
                  $isSelected={selectedPickupIndex === time.id}
                  onClick={() => handleButtonClick(time.id)}
                >
                  <div>
                    {String(
                      DateInfoComponent({ date: time.start_time })
                        ?.getDayOfWeek,
                    )}
                  </div>
                  <div>
                    {
                      DateInfoComponent({ date: time.start_time })
                        ?.dateAsMonthDay
                    }
                  </div>
                </PickupTimeButton>
              ))}
            </div>
            <div> Pick Up times: 10:00 AM - 12:00 PM </div>
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
                {Cart.reduce((acc, item) => acc + item.quantity, 0)}
              </HeaderShiftRight>
            </OrderTotalDiv>
          </WhiteBackgroundDiv>

          <CheckoutButton
            onClick={async () => {
              if (selectedPickupIndex !== 0) {
                await updateCartPickupId(selectedPickupIndex); // TODO double check if this is correct
                router.push('/orderConfirmationPickUp');
              } else {
                // TODO handle the case where they didn't select a time!
              }
            }}
          >
            Checkout
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

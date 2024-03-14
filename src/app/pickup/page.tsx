'use client';

// import { GlobalStyle } from "@/styles/components";
import { ArrowLeft } from 'react-feather';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import { fetchCartItemsWithQuantity } from '@/api/supabase/queries/cart_queries';
import { useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { Normal700Text } from '@/styles/fonts';
import { fetchNRecentPickupTimes } from '@/api/supabase/queries/pickup_queries';
import { updateCartPickupId } from '@/api/supabase/queries/order_queries';
import { Pickup, User, ProductWithQuantity } from '@/schema/schema';

import {
  HeaderShiftLeft,
  OrderSummaryDiv,
  HeaderShiftRight,
  OrderTotalDiv,
  PShiftLeft,
  WhiteBackgroundDiv,
  BackDiv,
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

function DateInfoComponent(date: { date: unknown; }) {
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

  const [selectedPickupIndex, setSelectedPickupIndex] = useState(null);

  const handleButtonClick = (index: SetStateAction<null>) => {
    setSelectedPickupIndex(index);
  };

  return (
    <div>
      <NavBarMovedUP />

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
            <PickupContent>
              {Profile?.first_name} {Profile?.last_name}
            </PickupContent>
            <Normal700Text>Phone Number</Normal700Text>
            <PickupContent>{Profile?.phone_numbers}</PickupContent>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Normal700Text>Pick Up Time</Normal700Text>
              <Normal700Text>Pick Up times: 10:00 AM - 12:00 PM </Normal700Text>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {Time.map((time, index) => (
                <PickupTimeButton
                  key={time.id} // Replace 'index' with a unique identifier from the 'time' object
                  isSelected={selectedPickupIndex === index}
                  onClick={() => handleButtonClick(index)}
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
            // TODO add the pick up ID to the order add the checkout feature that will clear the current users art and replace
            // it with an empty cart convettying it to an order and then redirecting to the order
            // confirmation page

            onClick={async () => {
              // Add the pickup ID to the order
              const pickupId =
                selectedPickupIndex !== null
                  ? Time[selectedPickupIndex]?.id
                  : null;
              if (pickupId) {
                await updateCartPickupId(pickupId);

                // Add your code here to update the order with the pickup ID
                // For example:
                // const updatedOrder = await updateOrderWithPickupId(orderId, pickupId);
                // console.log(updatedOrder);
              }
              router.push('/orderConfirmationPickUp');
            }}
          >
            Checkout
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

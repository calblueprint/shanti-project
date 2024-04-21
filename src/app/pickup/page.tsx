'use client';

// import { GlobalStyle } from "@/styles/components";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ArrowLeft } from 'react-feather';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import querystring from 'querystring';
import {
  fetchCartIdFromUser,
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '@/api/supabase/queries/cart_queries';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Body1, Heading4Bold } from '@/styles/fonts';
import { fetchNRecentPickupTimes } from '@/api/supabase/queries/pickup_queries';
import {
  updateCartPickupId,
  updateOrderStatus,
  createOrder,
} from '@/api/supabase/queries/order_queries';
import {
  Pickup,
  User,
  ProductWithQuantity,
  OrderStatus,
} from '@/schema/schema';
import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  BackDiv,
  Backtext,
  PageDiv,
  CheckoutButton,
  ForceColumnDiv,
  RightColumnDiv,
  PickupContent,
  PickupContainer,
  PickupTimeButton,
  ToastPopUP,
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

export default function PickUp() {
  const [Cart, setCart] = useState<ProductWithQuantity[]>([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const router = useRouter();
  const [Time, setTimes] = useState<Pickup[]>([]);
  const [Profile, setProfile] = useState<User>();
  const [selectedPickupIndex, setSelectedPickupIndex] = useState<number>(0);
  useEffect(() => {
    async function fetchProducts() {
      setNumberOfItems(await totalNumberOfItemsInCart());
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
      <ToastPopUP
        position="top-right"
        autoClose={500}
        limit={1}
        hideProgressBar
      />
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <Heading4Bold>Time Slot</Heading4Bold>
            </div>
            <div style={{ marginBottom: '10px' }}>
              {' '}
              <Body1>Pick Up times: 10:00 AM - 12:00 PM</Body1>{' '}
            </div>
            <div>
              <Body1>Location: 3170 23rd Street, San Francisco, CA 94110</Body1>
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
          </PickupContainer>
        </ForceColumnDiv>
        <RightColumnDiv>
          <OrderSummary cart={Cart} numberOfItems={numberOfItems} />

          <CheckoutButton
            onClick={async () => {
              if (selectedPickupIndex !== 0) {
                await updateCartPickupId(selectedPickupIndex); // TODO double check if this is correct
                const orderID = await fetchCartIdFromUser();
                await updateOrderStatus(orderID, OrderStatus.Submitted);
                await createOrder();
                const newestOrder = await fetchCartIdFromUser();
                await updateOrderStatus(newestOrder, OrderStatus.inProgress);
                const queryString = querystring.stringify({ orderID });
                router.push(`/orderConfirmationPickUp?${queryString}`);
              }
              if (selectedPickupIndex === 0) {
                toast(`You must select a pick-up date!`);
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

'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import { Heading1 } from '@/styles/fonts';
import BackButton from '../../components/BackButton/BackButton';

import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';

import {
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import CartItem from './cartItem';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  CartItemsDiv,
  PageDiv,
  CheckoutButton,
  LeftColumnDiv,
  RightColumnDiv,
  ContentDiv,
} from './styles';

import { ProductWithQuantity } from '../../schema/schema';

export default function OrderPage() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);
  const [deliveryEnabled, setDeliveryEnabled] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchProducts() {
      setNumberOfItems(await totalNumberOfItemsInCart());
      setCart(await fetchCartItemsWithQuantity());
      const data = await fetchUser();
      setDeliveryEnabled(data.delivery_allowed);
    }

    fetchProducts();
  }, []);

  const checkDelivery = () => {
    if (deliveryEnabled) {
      router.push('/delivery');
    } else {
      router.push('/pickup');
    }
  };

  return (
    <div>
      <NavBar />

      <PageDiv>
        <BackButton destination="./storefront" />
        <ContentDiv>
          <LeftColumnDiv>
            <Heading1>Cart</Heading1>
            <CartItemsDiv>
              {cart.map(cartItem => (
                <CartItem
                  key={cartItem.id}
                  cartItemProduct={cartItem}
                  setCart={setCart}
                  cart={cart}
                  setNumberOfItems={setNumberOfItems}
                  numberOfItems={numberOfItems}
                />
              ))}
            </CartItemsDiv>
          </LeftColumnDiv>
          <RightColumnDiv>
            <OrderSummary cart={cart} numberOfItems={numberOfItems} />
            <CheckoutButton
              // change this function so that the flow makes sense and that there is items within the cart
              onClick={() => checkDelivery()}
              disabled={numberOfItems === 0}
            >
              Check Out
            </CheckoutButton>
          </RightColumnDiv>
        </ContentDiv>
      </PageDiv>
    </div>
  );
}

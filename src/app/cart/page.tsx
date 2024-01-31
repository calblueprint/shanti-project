'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import BackButton from '../../components/BackButton/BackButton';

import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';

import {
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import CartItem from './cartItem';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  OutterFavoriteDiv,
  GlobalStyle,
  PageDiv,
  CheckoutButton,
  LeftColumnDiv,
  RightColumnDiv,
} from './styles';

import { fetchUser } from '@/api/supabase/queries/user_queries';

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
      <GlobalStyle />
      <PageDiv>
        <LeftColumnDiv>
          <BackButton destination="./storefront" />
          <h1>Cart</h1>
          <OutterFavoriteDiv>
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
          </OutterFavoriteDiv>
        </LeftColumnDiv>
        <RightColumnDiv>
          <OrderSummary cart={cart} numberOfItems={numberOfItems} />
          <CheckoutButton
            // change this function so that the flow makes sense and that there is items within the cart
            onClick={() => checkDelivery()}
          >
            Check Out
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

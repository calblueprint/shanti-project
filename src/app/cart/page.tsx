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

import {
  OutterFavoriteDiv,
  GlobalStyle,
  NavBarMovedUP,
  PageDiv,
  CheckoutButton,
  LeftColumnDiv,
  RightColumnDiv,
} from './styles';

import { ProductWithQuantity } from '../../schema/schema';

export default function OrderPage() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);

  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      setNumberOfItems(await totalNumberOfItemsInCart());
      setCart(await fetchCartItemsWithQuantity());
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <NavBarMovedUP />
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
            onClick={() => router.push('/delivery')}
          >
            Check Out
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

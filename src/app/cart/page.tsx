'use client';

import { ArrowLeft } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  fetchCartItems,
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
  fetchCart,
} from '../../api/supabase/queries/cart_queries';
import CartItem from './cartItem';

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
  LeftColumnDiv,
  RightColumnDiv,
  Qty,
  PShiftRight,
} from './styles';

import Buttons from './Buttons';

import { Product, ProductWithQuantity } from '../../schema/schema';
import { Carlito } from 'next/font/google';

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
          <BackDiv onClick={() => router.push('/storefront')}>
            <ArrowLeft />
            <Backtext>Back</Backtext>
          </BackDiv>
          <h1>Cart</h1>
          <OutterFavoriteDiv>
            {cart.map(cartItem => (
              <CartItem
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
          <WhiteBackgroundDiv>
            <HeaderShiftLeft>Order Summary</HeaderShiftLeft>
            <Qty>Qty.</Qty>
            <OrderSummaryDiv>
              {cart.map(cartItem => (
                <ItemSummaryDiv>
                  <PShiftLeft>{cartItem.name}</PShiftLeft>
                  <PShiftRight>{cartItem.quantity}</PShiftRight>
                </ItemSummaryDiv>
              ))}
            </OrderSummaryDiv>
            <OrderTotalDiv>
              <HeaderShiftLeft>Order Total</HeaderShiftLeft>
              <HeaderShiftRight>{numberOfItems}</HeaderShiftRight>
            </OrderTotalDiv>
          </WhiteBackgroundDiv>

          <CheckoutButton
            // Add Checkout Function by using onClick
            onClick={() => router.push('/orderConfirmationPickUp')}
          >
            Check Out
          </CheckoutButton>
        </RightColumnDiv>
      </PageDiv>
    </div>
  );
}

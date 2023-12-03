'use client';

import { ArrowLeft } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  fetchCartItems,
  removeCartItem,
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
  ForceColumnDiv,
  RightColumnDiv,
  Qty,
  PShiftRight,
} from './styles';

import Buttons from './Buttons';

import { Product } from '../../schema/schema';

export type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
};

export default function OrderPage() {
  const [cartObject, setCartObject] = useState<Product[]>([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);

  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const data = (await fetchCartItems()) as Product[]; // change the function to grab the cartItems as products
      setCartObject(data);
      totalNumberOfItemsInCart();
      setNumberOfItems(await totalNumberOfItemsInCart());

      setCart(await fetchCart());
      console.log(cart);
    }

    fetchProducts();
  }, [cartObject]);

  return (
    <div>
      <NavBarMovedUP />
      <GlobalStyle />
      <PageDiv>
        <ForceColumnDiv>
          <BackDiv onClick={() => router.push('/storefront')}>
            <ArrowLeft />
            <Backtext>Back</Backtext>
          </BackDiv>
          <h1>Cart</h1>
          <OutterFavoriteDiv>
            {cartObject.map(cartItem => (
              <CartItem cartItemProduct={cartItem} />
            ))}
          </OutterFavoriteDiv>
        </ForceColumnDiv>
        <RightColumnDiv>
          <WhiteBackgroundDiv>
            <HeaderShiftLeft>Order Summary</HeaderShiftLeft>
            <Qty>Qty.</Qty>
            <OrderSummaryDiv>
              {cart.map(cartItem => (
                <ItemSummaryDiv key={cartItem.id}>
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

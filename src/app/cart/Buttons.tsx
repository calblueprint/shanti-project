import React from 'react';

import { ButtonsWrapper, QuantityButton, PlusMinusButton } from './styles';

import {
  decreaseFromCart,
  addToCart,
} from '../../api/supabase/queries/cart_queries';

import { ProductWithQuantity } from '../../schema/schema';

export default function Buttons(props: {
  productNumber: number;
  quantity: number;
  setNumberOfItems: (count: number) => void;
  numberOfItems: number;
  count: number;
  setCount: (count: number) => void;
  cart: ProductWithQuantity[];
  setCart: (category: ProductWithQuantity[]) => void;
}) {
  const {
    productNumber,

    setNumberOfItems,
    numberOfItems,
    count,
    setCount,
    cart,
    setCart,
  } = props;

  const increaseQuantity = () => {
    setCount(count + 1);
    addToCart(productNumber, 1);
    setNumberOfItems(numberOfItems + 1);
    const indexOfItem = cart.findIndex(item => item.id === productNumber);
    cart[indexOfItem].quantity += 1;
    setCart(cart);
  };

  const decreaseQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
      decreaseFromCart(productNumber, 1);
      setNumberOfItems(numberOfItems - 1);
      const indexOfItem = cart.findIndex(item => item.id === productNumber);
      cart[indexOfItem].quantity -= 1;
      setCart(cart);
    }
  };

  // used hyphen instead of dash for display

  return (
    <ButtonsWrapper>
      <QuantityButton>
        <PlusMinusButton type="button" style={{ cursor: 'pointer' }} onClick={decreaseQuantity}>
          –
        </PlusMinusButton>
        <span>{count}</span>
        <PlusMinusButton type="button" style={{ cursor: 'pointer' }} onClick={increaseQuantity}>
          +
        </PlusMinusButton>
      </QuantityButton>
    </ButtonsWrapper>
  );
}

import React, { useState } from 'react';

import { ButtonsWrapper, QuantityButton, PlusMinusButton } from './styles';

import {
  decreaseFromCart,
  addToCart,
} from '../../api/supabase/queries/cart_queries';

export default function Buttons(props: { productNumber: number }) {
  const [quantity, setQuantity] = useState<number>(1);
  const { productNumber } = props;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    addToCart(productNumber, 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseFromCart(productNumber, 1);
    }
  };

  // used hyphen instead of dash for display

  return (
    <ButtonsWrapper>
      <QuantityButton>
        <PlusMinusButton type="button" onClick={decreaseQuantity}>
          –
        </PlusMinusButton>
        <span>{quantity}</span>
        <PlusMinusButton type="button" onClick={increaseQuantity}>
          +
        </PlusMinusButton>
      </QuantityButton>
    </ButtonsWrapper>
  );
}

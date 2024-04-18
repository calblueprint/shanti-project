import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Plus, Minus } from 'react-feather';
import { Body1Bold } from '@/styles/fonts';
import {
  ButtonsWrapper,
  AddToCartButton,
  QuantityButton,
  PlusMinusButton,
} from './styles';

import { addToCart } from '../../api/supabase/queries/cart_queries';

export default function Buttons(props: { productNumber: number }) {
  const [quantity, setQuantity] = useState<number>(1);
  const { productNumber } = props;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // used hyphen instead of dash for display
  const changeCart = () => {
    addToCart(productNumber, quantity);
    toast(`You have added ${quantity} items to the cart!`);
  };

  return (
    <ButtonsWrapper>
      <QuantityButton>
        <PlusMinusButton type="button" onClick={decreaseQuantity}>
          <Minus size="20" />
        </PlusMinusButton>
        <Body1Bold>{quantity}</Body1Bold>
        <PlusMinusButton type="button" onClick={increaseQuantity}>
          <Plus size="20" />
        </PlusMinusButton>
      </QuantityButton>

      <AddToCartButton onClick={changeCart}>Add to cart</AddToCartButton>
    </ButtonsWrapper>
  );
}

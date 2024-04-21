import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
    if (quantity <= 1) {
      toast(`you have added ${quantity} item to the cart!`);
    } else {
      toast(`you have added ${quantity} items to the cart!`);
    }
  };

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

      <AddToCartButton onClick={changeCart}>Add to cart</AddToCartButton>
    </ButtonsWrapper>
  );
}

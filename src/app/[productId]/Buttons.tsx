import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonsWrapper,
  AddToCartButton,
  QuantityButton,
  PlusMinusButton,
} from './styles';

import {
  decreaseFromCart,
  addToCart,
} from '../../api/supabase/queries/cart_queries';

export default function Buttons(props: { productNumber: number }) {
  const [quantity, setQuantity] = useState<number>(1);
  const { productNumber } = props;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    addToCart(productNumber, quantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseFromCart(productNumber, quantity);
    }
  };

  // used hyphen instead of dash for display
  const notify = () => toast(`you have added ${quantity} items to the cart!`);

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

      <AddToCartButton onClick={notify}>Add to cart</AddToCartButton>
    </ButtonsWrapper>
  );
}

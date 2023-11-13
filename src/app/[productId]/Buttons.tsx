import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  ButtonsWrapper,
  AddToCartButton,
  QuantityButton,
  PlusMinusButton,
} from './styles';

export default function Buttons() {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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

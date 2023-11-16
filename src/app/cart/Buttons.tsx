import React, { useState } from 'react';

import { ButtonsWrapper, QuantityButton, PlusMinusButton } from './styles';

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

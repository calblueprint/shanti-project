'use client';

import { useState } from 'react';
import { removeCartItem } from '../../api/supabase/queries/cart_queries';

import {
  FavoriteDiv,
  TrashIcon,
  TransparentButton,
  Label,
  LabelBox,
} from './styles';

import Buttons from './Buttons';

import { ProductWithQuantity } from '../../schema/schema';

export default function CartItem(props: {
  cartItemProduct: ProductWithQuantity;
  cart: ProductWithQuantity[];
  setCart: (category: ProductWithQuantity[]) => void;
  setNumberOfItems: (count: number) => void;
  numberOfItems: number;
}) {
  const { cartItemProduct, setCart, cart, setNumberOfItems, numberOfItems } =
    props;
  const [count, setCount] = useState<number>(cartItemProduct.quantity);
  async function removeProduct() {
    setNumberOfItems(numberOfItems - count);

    const tempCart = cart.filter(
      cartItem => cartItem.id !== cartItemProduct.id,
    ) as ProductWithQuantity[];
    setCart(tempCart);
    removeCartItem(cartItemProduct.id);
  }

  return (
    <div>
      <FavoriteDiv key={cartItemProduct.id}>
        <img
          src={cartItemProduct.photo}
          alt={cartItemProduct.name}
          style={{ width: '150px', height: '150px' }}
        />
        <LabelBox>
          <Label>{cartItemProduct.name}</Label>
          <p>Category: {cartItemProduct.category}</p>
        </LabelBox>
        <Buttons
          productNumber={cartItemProduct.id}
          quantity={cartItemProduct.quantity}
          setNumberOfItems={setNumberOfItems}
          numberOfItems={numberOfItems}
          count={count}
          setCount={setCount}
          setCart={setCart}
          cart={cart}
        />
        <TransparentButton onClick={() => removeProduct()}>
          <TrashIcon />
        </TransparentButton>
      </FavoriteDiv>
    </div>
  );
}

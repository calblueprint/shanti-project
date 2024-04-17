'use client';

import { useState } from 'react';
import { Body2, Heading4Bold } from '@/styles/fonts';
import { removeCartItem } from '../../api/supabase/queries/cart_queries';
import {
  FavoriteDiv,
  TrashIcon,
  TransparentButton,
  LabelBox,
  ImageBackground,
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
    <FavoriteDiv key={cartItemProduct.id}>
      <ImageBackground>
        <img
          src={cartItemProduct.photo}
          alt={cartItemProduct.name}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      </ImageBackground>
      <LabelBox>
        <Heading4Bold>{cartItemProduct.name}</Heading4Bold>
        <Body2>Category: {cartItemProduct.category}</Body2>
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
        <TrashIcon style={{ cursor: 'pointer' }} />
      </TransparentButton>
    </FavoriteDiv>
  );
}

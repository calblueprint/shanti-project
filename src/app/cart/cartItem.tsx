'use client';

import { ArrowLeft } from 'react-feather';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { removeCartItem } from '../../api/supabase/queries/cart_queries';

import {
  FavoriteDiv,
  TrashIcon,
  TransparentButton,
  Label,
  LabelBox,
} from './styles';

import Buttons from './Buttons';

import { Product } from '../../schema/schema';

export default function CartItem(props: { cartItemProduct: Product }) {
  const router = useRouter();
  const { cartItemProduct } = props;

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
        <Buttons productNumber={cartItemProduct.id} />
        <TransparentButton onClick={() => removeCartItem(cartItemProduct.id)}>
          <TrashIcon />
        </TransparentButton>
      </FavoriteDiv>
    </div>
  );
}

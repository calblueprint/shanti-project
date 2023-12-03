'use client';

import { ArrowLeft } from 'react-feather';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { fetchCartItems } from '../../api/supabase/queries/cart_queries';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  BackDiv,
  HeaderText,
  GlobalStyle,
  OutterBox,
  Backtext,
  Label,
  LabelBox,
  NavBarMovedUP,
  ScrollDiv,
  AddressText,
  DateText,
} from './styles';

import { Product } from '../../schema/schema';

export default function OrderConfirmationDelivery() {
  const [Cart, setCart] = useState<Product[]>([]);
  const router = useRouter();
  
  useEffect(() => {
    async function fetchProducts() {
      const data = (await fetchCartItems()) as Product[];
      setCart(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBarMovedUP />
      <GlobalStyle />
      <BackDiv onClick={() => router.push('/profileScreen')}>
        <ArrowLeft />
        <Backtext>Back to storefront</Backtext>
      </BackDiv>
      <OutterBox>
        <HeaderText>Thank you, Ethan. Your order has been placed.</HeaderText>
        <OutterFavoriteDiv>
          <DateText>Date: November 23.2023</DateText>
          <ScrollDiv>
            {Cart.map(cartItem => (
              <FavoriteDiv key={cartItem.id}>
                <img
                  src={cartItem.photo}
                  alt={cartItem.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    marginLeft: '80px',
                    marginRight: '100px',
                  }}
                />
                <LabelBox>
                  <Label>{cartItem.name}</Label>
                  <p>Category: {cartItem.category}</p>
                </LabelBox>
              </FavoriteDiv>
            ))}
            <AddressText>
              Shipping Address: 123 Telegraph Ave, Berkeley, 94704
            </AddressText>
          </ScrollDiv>
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}

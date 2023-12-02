'use client';

import { ArrowLeft } from 'react-feather';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  arrayOfFavorites,
  addOrRemoveProductFromFavorite,
} from '../../api/supabase/queries/user_queries';

import {
  FavoriteDiv,
  ColDiv,
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
  PickUpText,
} from './styles';

import { Product } from '../../schema/schema';

export default function FavoritesPage() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const router = useRouter();
  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function clickFunctions(props: { fav: Product }) {
    const { fav } = props;
    addOrRemoveProductFromFavorite(fav, false);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
  }

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
          <ColDiv>
            <DateText>Date: November 23.2023</DateText>
            <PickUpText>Pick Up : 12/01/2023 (1:00 PM - 4:00 PM)</PickUpText>
          </ColDiv>

          <ScrollDiv>
            {Favorites.map(favorite => (
              <FavoriteDiv key={favorite.id}>
                <img
                  src={favorite.photo}
                  alt={favorite.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    marginLeft: '80px',
                    marginRight: '100px',
                  }}
                />
                <LabelBox>
                  <Label>{favorite.name}</Label>
                  <p>Category: {favorite.category}</p>
                </LabelBox>
              </FavoriteDiv>
            ))}
            <AddressText>
              Location: 3170 23rd Street, San Francisco, CA 94110
            </AddressText>
          </ScrollDiv>
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}

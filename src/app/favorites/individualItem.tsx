import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Body1Bold, Body2, Body3 } from '@/styles/fonts';

import {
  HeartIcon,
  Hover,
  FavoriteDiv,
  ProductNameDiv,
  ViewItem,
  TransparentButton,
} from './styles';

import { addOrRemoveProductFromFavorite } from '../../api/supabase/queries/user_queries';

import { Product } from '../../schema/schema';

export default function IndividualItem(props: {
  favorite: Product;
  setFavorites: (category: Product[]) => void;
  Favorites: Product[];
}) {
  const { favorite, Favorites, setFavorites } = props;
  const router = useRouter();
  const [hovering, setHovering] = useState(false);

  async function clickFunctions(props2: { fav: Product }) {
    const { fav } = props2;
    addOrRemoveProductFromFavorite(fav, false);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
  }

  return (
    <FavoriteDiv key={favorite.id}>
      <img
        src={favorite.photo}
        alt={favorite.name}
        style={{ width: '150px', height: '150px' }}
      />

      <ProductNameDiv>
        <Body1Bold>{favorite.name}</Body1Bold>
        <Body2>Category: {favorite.category}</Body2>
        <ViewItem onClick={() => router.push(`/${favorite.id}`)}>
          <Body2>View Item</Body2>
        </ViewItem>
      </ProductNameDiv>

      <TransparentButton
        onClick={() => clickFunctions({ fav: favorite })}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Hover $ishovering={hovering}>
          <Body3>Remove from favorites</Body3>
        </Hover>
        <HeartIcon />
      </TransparentButton>
    </FavoriteDiv>
  );
}
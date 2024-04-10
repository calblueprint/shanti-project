import React, { useState } from 'react';

import { Body1, Body3 } from '@/styles/fonts';

import {
  ImageLinkWrapper,
  HeartIcon,
  HeartContainer,
  FavoritePopup,
  OuterDiv,
} from './styles';

import { addOrRemoveProductFromFavorite } from '../../api/supabase/queries/user_queries';

import { Product } from '../../schema/schema';

export default function IndividualItem(props: {
  product: Product;
  products: Product[];
}) {
  const { product, products } = props;
  const [IsFavorite, setIsFavorite] = useState(
    !!products.find(item => item.id === product.id),
  );

  async function handleFavorite() {
    await addOrRemoveProductFromFavorite(product, !IsFavorite);
    setIsFavorite(!IsFavorite);
  }
  return (
    <OuterDiv>
      {/* <StorefrontItem> */}
      <ImageLinkWrapper href={product.id.toString()}>
        <img
          src={product.photo}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ImageLinkWrapper>
      <HeartContainer onClick={() => handleFavorite()}>
        <FavoritePopup>
          <Body3>
            {IsFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Body3>
        </FavoritePopup>
        <HeartIcon $favorited={IsFavorite} />
      </HeartContainer>

      {/* </StorefrontItem> */}
      <Body1>{product.name}</Body1>
    </OuterDiv>
  );
}

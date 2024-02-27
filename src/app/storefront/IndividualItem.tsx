import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Body1 } from '@/styles/fonts';

import {
  StorefrontItem,
  ItemButtons,
  HeartIcon,
  Body1Translated,
  HeartContainer,
  Hover,
  OutterDiv,
} from './styles';

import { addOrRemoveProductFromFavorite } from '../../api/supabase/queries/user_queries';

import { Product } from '../../schema/schema';

export default function IndividualItem(props: {
  product: Product;
  products: Product[];
}) {
  const { product, products } = props;
  const [IsFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const [hovering, setHovering] = useState(false);
  var hoverMessage = '';

  useEffect(() => {
    async function fetchProducts() {
      if (products.find(item => item.id === product.id)) {
        setIsFavorite(true);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  async function clickFunction() {
    addOrRemoveProductFromFavorite(product, !IsFavorite);
    setIsFavorite(!IsFavorite);
  }
  return (
    <OutterDiv>
      <StorefrontItem>
        <ItemButtons onClick={() => router.push(`/${product.id}`)}>
          <img
            src={product.photo}
            alt={product.name}
            style={{ width: '250px', height: '250px' }}
          />
        </ItemButtons>

        <HeartContainer
          onClick={() => clickFunction()}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <HeartIcon isHovering={hovering} isClicked={IsFavorite} />
        </HeartContainer>
        <Hover isHovering={hovering} isClicked={IsFavorite}>
          {IsFavorite ? 'Add to favorites' : 'Remove from favorites'}
        </Hover>
      </StorefrontItem>
      <Body1Translated>{product.name}</Body1Translated>
    </OutterDiv>
  );
}

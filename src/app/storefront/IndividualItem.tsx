import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import {
  StorefrontItem,
  ItemButtons,
  HeartIcon,
  HeartContainer,
  Hover,
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

  useEffect(() => {
    async function fetchProducts() {
      if (products.find(item => item.id === product.id)) {
        setIsFavorite(true);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  var hoverMessage = 'Test';

  async function clickFunction() {
    addOrRemoveProductFromFavorite(product, !IsFavorite);
    setIsFavorite(!IsFavorite);
  }
  return (
    <div>
      <StorefrontItem>
        <ItemButtons onClick={() => router.push(`/${product.id}`)}>
          <img
            src={product.photo}
            alt={product.name}
            style={{ width: '250px', height: '250px' }}
          />
        </ItemButtons>
        <Hover isHovering={hovering} isClicked={IsFavorite}>
          {hoverMessage}
        </Hover>
        <HeartContainer
          onClick={() => clickFunction()}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <HeartIcon isHovering={hovering} isClicked={IsFavorite} />
        </HeartContainer>
      </StorefrontItem>
      <p style={{ transform: 'translateY( -80px)' }}>{product.name}</p>
    </div>
  );

  async function hoverButton() {
    if (IsFavorite) {
      hoverMessage = 'Remove from favorites';
      console.log(hoverMessage);
    } else {
      hoverMessage = 'Add to favorites';
      console.log(hoverMessage);
    }
  }
}

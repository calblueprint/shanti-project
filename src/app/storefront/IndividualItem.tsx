import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import {
  StorefrontItem,
  ItemButtons,
  HeartIcon,
  HeartContainer,
} from './styles';

import { getUserInfo } from '../../api/supabase/queries/user_queries';

import { Product } from '../../schema/schema';

export default function IndividualItem(props: {
  product: Product;
  products: Product[];
}) {
  const { product, products } = props;
  const [isFavorite, setIsFavorite] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      if (products.find(item => item.product_id === product.product_id)) {
        setIsFavorite(false);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  async function clickFunction() {
    setIsFavorite(!isFavorite);
    getUserInfo(product, isFavorite);
  }
  return (
    <div>
      <StorefrontItem key={product.product_id}>
        <ItemButtons onClick={() => router.push(`/${product.product_id}`)}>
          <img
            src={product.photo}
            alt={product.name}
            style={{ width: '250px', height: '250px' }}
          />
        </ItemButtons>
        <HeartContainer onClick={() => clickFunction()}>
          <HeartIcon isClicked={!isFavorite} />
        </HeartContainer>
      </StorefrontItem>
      <p style={{ transform: 'translateY( -80px)' }}>{product.name}</p>
    </div>
  );
}

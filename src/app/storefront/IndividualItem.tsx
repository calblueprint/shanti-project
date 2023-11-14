import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import {
  StorefrontItem,
  ItemButtons,
  HeartIcon,
  HeartContainer,
} from './styles';

import { getUserInfo, arrayOfFavorites } from './helperFunction';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

export default function IndividualItem(props: { product: Product }) {
  const { product } = props;
  const [isFavorite, setIsFavorite] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const data = (await arrayOfFavorites()) as Product[];

      if (data.find(item => item.product_id === product.product_id)) {
        setIsFavorite(false);
      }
    }
    fetchProducts();
  });

  async function clickFunction() {
    setIsFavorite(!isFavorite);
    getUserInfo(product, isFavorite);
    arrayOfFavorites();
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

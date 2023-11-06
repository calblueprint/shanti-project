import {
  StorefrontItem,
  ItemButtons,
  HeartIcon,
  HeartContainer,
} from './styles';

import React, { useState, useEffect } from 'react';

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
  const [Favorites, setFavorites] = useState<Product[]>([]);
  async function fetchProducts() {
    try {
      const data = (await arrayOfFavorites()) as Product[];
      for (let i = 0; i < data.length; i++) {
        var ith_product = data[i];

        if (product.product_id == ith_product.product_id) {
          setIsFavorite(!isFavorite);
        }
      }
    } catch (error) {}
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function clickFunction() {
    setIsFavorite(!isFavorite);
    getUserInfo(product, isFavorite);
    arrayOfFavorites();
  }
  return (
    <div>
      <StorefrontItem key={product.product_id}>
        <ItemButtons>
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
      <p style={{ paddingTop: '10px' }}>{product.name}</p>
    </div>
  );
}

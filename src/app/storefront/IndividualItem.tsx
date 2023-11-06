import React, { useState, useEffect } from 'react';
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

  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    for (let i = 0; i < data.length; i += 1) {
      const ithProduct = data[i];

      if (product.product_id === ithProduct.product_id) {
        setIsFavorite(!isFavorite);
      }
    }
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

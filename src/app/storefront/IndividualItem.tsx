import React, { useState, useEffect } from 'react';
import {
  StorefrontItem,
  ItemButtons,
  HeartIcon,
  HeartContainer,
} from './styles';
import { Link } from 'react-router-dom

import { getUserInfo, arrayOfFavorites } from './helperFunction';
import { useRouter } from 'next/navigation';



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

  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    for (let i = 0; i < data.length; i += 1) {
      const ithProduct = data[i];

      if (product.product_id === ithProduct.product_id) {
        setIsFavorite(!isFavorite);
      }
    }
  }

  fetchProducts();
  //<Link href={{pathname: `/${product.product_id}`,}}>

  async function clickFunction() {
    setIsFavorite(!isFavorite);
    getUserInfo(product, isFavorite);
    arrayOfFavorites();
  }
  return (
    <div>
      <StorefrontItem key={product.product_id}>
   
          <ItemButtons onClick = {()=>router.push('/${product.product_id}')}>
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

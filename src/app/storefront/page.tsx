'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Storefront from './storefrontItems';
import ProductButtons from './productButtons';
import NavBar from '@/components/NavBar';
import {
  GlobalStyle,
  ButtonsContainer,
  NavButton,
  Img,
  StickyHeader,
  ShopAllText,
} from './styles';
import { getProduct } from './helperFunction';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}
// https://codesandbox.io/s/filter-with-react-button-r5x4i?file=/src/App.js
export default function App() {
  const buttons = [
    {
      name: 'All',
      value: 'All',
      count: 0,
    },
    {
      name: 'Dog',
      value: 'Dog',
      count: 1,
    },
    {
      name: 'Cat',
      value: 'Cat',
      count: 2,
    },
    {
      name: 'Other',
      value: 'Other',
      count: 3,
    },
  ];
  const [FilteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = (await getProduct()) as Product[];
        setFilteredProducts(data);
      } catch (error) {
        // console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <GlobalStyle />
      <StickyHeader>
        <NavBar />
        <ButtonsContainer>
          {buttons.map(type => (
            <ProductButtons
              key={type.count}
              value={type.value}
              setFiltredProducts={setFilteredProducts}
              content={type.name}
            />
          ))}
        </ButtonsContainer>
      </StickyHeader>
      <ShopAllText>Shop All</ShopAllText>
      <Storefront products={FilteredProducts} />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StorefrontItems from './storefrontItems';
import ProductButtons from './productButtons';

import {
  GlobalStyle,
  ButtonsContainer,
  NavButton,
  Img,
  StickyHeader,
  ShopAllText,
} from './styles';

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
  const [, setFilteredProducts] = useState<null | Product[]>(null);

  return (
    <main>
      <GlobalStyle />
      <StickyHeader>
        <Img />
        <NavButton>
          <Link href="/checkout">Cart</Link>
        </NavButton>
        <NavButton>
          <Link href="/profileScreen">Profile</Link>
        </NavButton>
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
      <StorefrontItems />
    </main>
  );
}

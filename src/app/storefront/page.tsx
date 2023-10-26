'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StorefrontItems from './storefrontItems';
import ProductButtons from './productButtons';
import { Product } from '../../schema/schema';
import COMPONENTS from '../../styles/components';

import { ButtonsContainer, ShopAllText } from './styles';

const { GlobalStyle, StickyHeader, Logo, NavButton } = COMPONENTS;

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
        <Logo />
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

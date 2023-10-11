'use client';

import React, { useState } from 'react';
import { getProduct, filterProduct } from './helperFunction';

import { GlobalStyle, ButtonsContainer } from './styles';
import ProductButtons from './productButtons';

// https://codesandbox.io/s/filter-with-react-button-r5x4i?file=/src/App.js
export default function App() {
  const buttons = [
    {
      name: 'All',
      value: 'All',
    },
    {
      name: 'Dog',
      value: 'Dog',
    },
    {
      name: 'Cat',
      value: 'Cat',
    },
    {
      name: 'Misc.',
      value: 'Misc.',
    },
  ];
  const [filtredProduct, setFiltredProducts] = useState(null);
  const [isClicked, setisClicked] = useState(false);

  return (
    <main>
      <GlobalStyle />
      <ButtonsContainer>
        {buttons.map((type, index) => (
          <ProductButtons
            key={index}
            value={type.value}
            setFiltredProducts={setFiltredProducts}
            content={type.name}
          />
        ))}
      </ButtonsContainer>
    </main>
  );
}

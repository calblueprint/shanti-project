'use client';

import React, { useState } from 'react';
import { getProduct, filterProduct } from './helperFunction';
import { buttons } from './data.js';
import { GlobalStyle, ButtonsContainer } from './styles';
import ProductButtons from './productButtons';

// https://codesandbox.io/s/filter-with-react-button-r5x4i?file=/src/App.js
export default function App() {
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

'use client';

import React, { useEffect, useState } from 'react';
import Storefront from './storefrontItems';
import ProductButtons from './productButtons';
import { GlobalStyle } from '../../styles/components';
import NavBar from '../../components/NavBar';
import { ButtonsContainer, ShopAllText } from './styles';
import { getProduct } from './helperFunction';
import { Product } from '../../schema/schema';

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
      <ShopAllText>Shop All</ShopAllText>
      <Storefront products={FilteredProducts} />
    </main>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Storefront from './storefrontItems';
import ProductButtons from './productButtons';

import Footer from '../../components/FooterFolder/Footer';
import {
  GlobalStyle,
  ButtonsContainer,
  NavBarZeroIndex,
  ShopAllText,
} from './styles';
import { fetchProducts } from '../../api/supabase/queries/product_queries';
import { Product } from '../../schema/schema';

import { buttons } from './buttonValues';

export default function App() {
  const [FilteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [CategoryWord, setCategoryWord] = useState('All');

  const [IsClickedButton, setIsClickedButton] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const data = (await fetchProducts()) as Product[];
        setFilteredProducts(data);
      } catch (error) {
        // console.log(error);
      }
    }

    fetchAllProducts();
  }, []);

  return (
    <main>
      <GlobalStyle />
      <NavBarZeroIndex />
      <ButtonsContainer>
        {buttons.map((type, index) => (
          <ProductButtons
            key={type.count}
            value={type.value}
            setFiltredProducts={setFilteredProducts}
            content={type.name}
            setIsClickedButton={setIsClickedButton}
            IsClickedButton={IsClickedButton}
            setCategoryWord={setCategoryWord}
            index={index}
          />
        ))}
      </ButtonsContainer>
      <ShopAllText>Shop {CategoryWord}</ShopAllText>
      <Storefront products={FilteredProducts} />
      <Footer />
    </main>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Storefront from './storefrontItems';

import Footer from '../../components/FooterFolder/Footer';
import { GlobalStyle, ShopAllText } from './styles';
import { fetchProducts } from '../../api/supabase/queries/product_queries';
import { Product } from '../../schema/schema';

import { Heading1 } from '@/styles/fonts';

import StoreFrontNavBar from './StoreFrontNavBar';

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
      <StoreFrontNavBar
        setFilteredProducts={setFilteredProducts}
        setIsClickedButton={setIsClickedButton}
        IsClickedButton={IsClickedButton}
        setCategoryWord={setCategoryWord}
      />
      <GlobalStyle />
      <ShopAllText>
        <Heading1>Shop {CategoryWord}</Heading1>
      </ShopAllText>
      <Storefront products={FilteredProducts} />
      <Footer />
    </main>
  );
}

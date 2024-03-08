'use client';

import React, { useEffect, useState } from 'react';
import Storefront from './storefrontItems';

import Footer from '../../components/FooterFolder/Footer';
import { ShopAllText } from './styles';
import { fetchUserProducts } from '../../api/supabase/queries/product_queries';
import { Product } from '../../schema/schema';

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
        const data = (await fetchUserProducts()) as Product[];
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

      <ShopAllText>Shop {CategoryWord}</ShopAllText>
      <Storefront products={FilteredProducts} />
      <Footer />
    </main>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Storefront from './storefrontItems';

import Footer from '../../components/FooterFolder/Footer';
import { ShopAllText, Fullscreen } from './styles';
import { fetchUserProducts } from '../../api/supabase/queries/product_queries';
import { Product } from '../../schema/schema';

import StoreFrontNavBar from './StoreFrontNavBar';

export default function App() {
  const [FilteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [CategoryWord, setCategoryWord] = useState('All');

  const [clickedButton, setClickedButton] = useState(0);

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
    <Fullscreen>
      <StoreFrontNavBar
        setFilteredProducts={setFilteredProducts}
        setCategoryWord={setCategoryWord}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />

      <ShopAllText>Shop {CategoryWord}</ShopAllText>
      <Storefront products={FilteredProducts} />
      <Footer />
    </Fullscreen>
  );
}

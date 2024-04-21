'use client';

import React, { useEffect, useState } from 'react';
import { Heading1Bold } from '@/styles/fonts';
import Storefront from './storefrontItems';

import Footer from '../../components/FooterFolder/Footer';
import { StorefrontWrapper } from './styles';
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
    <div>
      <StoreFrontNavBar
        setFilteredProducts={setFilteredProducts}
        setCategoryWord={setCategoryWord}
        clickedButton={clickedButton}
        setClickedButton={setClickedButton}
      />

      <StorefrontWrapper>
        <Heading1Bold>Shop {CategoryWord}</Heading1Bold>
        <Storefront products={FilteredProducts} />
      </StorefrontWrapper>

      <Footer />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import BackButton from '../../components/BackButton/BackButton';
import 'react-toastify/dist/ReactToastify.css';

import {
  ImageContainer,
  TextContainer,
  DescriptionContainer,
  ToastPopUP,
  Fullscreen,
} from './styles';

import NavBar from '../../components/NavBarFolder/NavBar';
import { Product } from '../../schema/schema';
import Buttons from './Buttons';

export default function ItemDisplay({
  params,
}: {
  params: { productId: number };
}) {
  const [Item, setItem] = useState<Product>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetchProductByID(params.productId);
        if (response) {
          setItem(response);
        }
      } catch (error) {
        // console.error(error);
      }
    }

    fetchProducts();
  }, [params.productId]);

  return (
    <Fullscreen>
      <NavBar />
      <ToastPopUP
        position="top-right"
        autoClose={500}
        limit={1}
        hideProgressBar
      />
      <BackButton destination="./storefront" />
      <DescriptionContainer>
        <ImageContainer>
          <img
            src={Item?.photo}
            alt={Item?.name}
            style={{ width: '350px', height: '350px' }}
          />
        </ImageContainer>
        <TextContainer>
          <h1>{Item?.name}</h1>
          <h4 style={{ fontWeight: 'normal', paddingTop: '5px' }}>
            {Item?.category}
          </h4>
          <Buttons productNumber={params.productId} />
          <p style={{ paddingTop: '50px' }}>Product ID: {Item?.id}</p>
          <p style={{ paddingTop: '20px' }}>Product Details:</p>
          <p>{Item?.description}</p>
        </TextContainer>
      </DescriptionContainer>
    </Fullscreen>
  );
}

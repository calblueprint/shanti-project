'use client';

import { useEffect, useState } from 'react';
import { convertButtonNumberToCategory } from '@/api/supabase/queries/button_queries';
import { Body1, Heading1, Body2Light } from '@/styles/fonts';
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
        response.category = await convertButtonNumberToCategory(
          response.category,
        );
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
      <div style={{ marginLeft: '250px', marginTop: '50px' }}>
        <BackButton destination="./storefront" />
      </div>

      <DescriptionContainer>
        <ImageContainer>
          <img
            src={Item?.photo}
            alt={Item?.name}
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
        </ImageContainer>
        <TextContainer>
          <Heading1>{Item?.name}</Heading1>
          <Body1 style={{ fontWeight: 'normal', paddingTop: '5px' }}>
            {Item?.category}
          </Body1>
          <Buttons productNumber={params.productId} />
          <Body2Light style={{ paddingTop: '50px' }}>
            Product ID: {Item?.id}
          </Body2Light>
          <Body2Light style={{ paddingTop: '20px' }}>
            Product Details:
          </Body2Light>
          <Body2Light>{Item?.description}</Body2Light>
        </TextContainer>
      </DescriptionContainer>
    </Fullscreen>
  );
}

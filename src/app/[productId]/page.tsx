'use client';

import { useEffect, useState } from 'react';
import { convertButtonNumberToCategory } from '@/api/supabase/queries/button_queries';
import { Body1, Heading1, Body2Light, Body2Bold } from '@/styles/fonts';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import BackButton from '../../components/BackButton/BackButton';
import 'react-toastify/dist/ReactToastify.css';

import {
  ImageContainer,
  TextContainer,
  DescriptionContainer,
  ToastPopUP,
  Fullscreen,
  LeftColumnDiv
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

      <DescriptionContainer>
        <LeftColumnDiv>
        <BackButton destination="./storefront" />
        <ImageContainer>
          <img
            src={Item?.photo}
            alt={Item?.name}
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
        </ImageContainer>
        </LeftColumnDiv>
        <TextContainer>
          <Heading1>{Item?.name}</Heading1>
          <Body1 style={{ fontWeight: 'normal', paddingTop: '5px' }}>
            <b>Category:</b> {Item?.category}
          </Body1>
          <Buttons productNumber={params.productId} />
          <Body2Bold style={{ paddingTop: '40px' }}>
            Product Details:
          </Body2Bold>
          <Body2Light style={{ paddingTop: '20px' }}>
            {Item?.description}
          </Body2Light>
        </TextContainer>
      </DescriptionContainer>
    </Fullscreen>
  );
}

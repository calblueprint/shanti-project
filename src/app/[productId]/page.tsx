'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import 'react-toastify/dist/ReactToastify.css';

import {
  BackButton,
  ImageContainer,
  TextContainer,
  DescriptionContainer,
  ToastPopUP,
} from './styles';
import { GlobalStyle } from '../../styles/components';
import NavBar from '../../components/NavBar';
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
    <main>
      <GlobalStyle />

      <NavBar />
      <ToastPopUP
        position="top-right"
        autoClose={500}
        limit={1}
        hideProgressBar
      />
      <BackButton>
        <Link href="/storefront">
          <Image
            src="/images/Arrow_Left_MD.png"
            alt="Back Arrow"
            width={20}
            height={20}
          />
          <span style={{ marginLeft: '8px' }}>Back</span>
        </Link>
      </BackButton>
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
          <Buttons />
          <p style={{ paddingTop: '50px' }}>Product ID: {Item?.id}</p>
          <p style={{ paddingTop: '20px' }}>Product Details:</p>
          <p>{Item?.description}</p>
        </TextContainer>
      </DescriptionContainer>
    </main>
  );
}

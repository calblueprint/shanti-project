'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import {
  BackButton,
  ImageContainer,
  TextContainer,
  DescriptionContainer,
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
            style={{ width: '600px', height: '600px' }}
          />
        </ImageContainer>
        <TextContainer>
          <h1>{Item?.name}</h1>
          <h4 style={{ fontWeight: 'normal', paddingTop: '5px' }}>
            {Item?.category}
          </h4>
          <Buttons />
          <p style={{ paddingTop: '50px' }}>Product ID: {Item?.product_id}</p>
          <p style={{ paddingTop: '20px' }}>Product Details:</p>
          <p>{Item?.description}</p>
        </TextContainer>
      </DescriptionContainer>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import { BackButton, ImageContainer, DescriptionContainer } from './styles';
import COLLECTION from '../../styles/components';
import { Product } from '../../schema/schema';

const { GlobalStyle, StickyHeader, Logo, NavButton } = COLLECTION;

export default function ItemDisplay({
  params,
}: {
  params: { productId: number };
}) {
  const [Item, setItem] = useState<Product | undefined>(undefined);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetchProductByID(params.productId);
        if (response) {
          // not sure why it's underlined but the image does get outputted
          setItem(response);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  // replace the sticky header by importing
  return (
    <main>
      <GlobalStyle />
      <StickyHeader>
        <Logo />
        <NavButton>
          <Link href="/checkout">Cart</Link>
        </NavButton>
        <NavButton>
          <Link href="/profileScreen">Profile</Link>
        </NavButton>
      </StickyHeader>
      <BackButton>
        <Link href="/storefront">Back</Link>
      </BackButton>
      <ImageContainer>
        <img
          src={Item?.photo}
          alt={Item?.name}
          style={{ width: '600px', height: '600px' }}
        />
      </ImageContainer>
      <DescriptionContainer>
        <h1>{Item?.name}</h1>
      </DescriptionContainer>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import {
  BackButton,
  ImageContainer,
  TextContainer,
  DescriptionContainer,
  ButtonsContainer,
  QuantityButton,
  AddToCartButton,
} from './styles';
import {
  GlobalStyle,
  StickyHeader,
  Logo,
  NavButton,
} from '../../styles/components';
import { Product } from '../../schema/schema';

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
          // not sure why this is erroring b/c it still outputs the product?
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
          <p>{Item?.category}</p>
          <ButtonsContainer>
            <QuantityButton>1</QuantityButton>
            <AddToCartButton>Add to cart</AddToCartButton>
          </ButtonsContainer>
        </TextContainer>
      </DescriptionContainer>
    </main>
  );
}

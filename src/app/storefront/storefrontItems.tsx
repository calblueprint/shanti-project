import React, { useState } from 'react';

import { StorefrontWrapper } from './styles';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

import IndividualItem from './IndividualItem';

export default function Storefront(props: { products: Product[] }) {
  const { products } = props;

  return (
    <StorefrontWrapper>
      {products.map(productVal => (
        <IndividualItem product={productVal} />
      ))}
    </StorefrontWrapper>
  );
}

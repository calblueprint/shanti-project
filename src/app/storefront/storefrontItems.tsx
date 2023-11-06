import React from 'react';

import { StorefrontWrapper } from './styles';

import IndividualItem from './IndividualItem';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

export default function Storefront(props: { products: Product[] }) {
  const { products } = props;

  return (
    <StorefrontWrapper>
      {products.map(productVal => (
        <IndividualItem product={productVal} key={productVal.product_id} />
      ))}
    </StorefrontWrapper>
  );
}

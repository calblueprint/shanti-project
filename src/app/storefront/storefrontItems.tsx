import React from 'react';

import { StorefrontWrapper } from './styles';

import IndividualItem from './IndividualItem';

import { Product } from '../../schema/schema';

function Storefront({ products }: { products: Product[] }) {
  return (
    <StorefrontWrapper>
      {products.map(productVal => (
        <IndividualItem product={productVal} key={productVal.product_id} />
      ))}
    </StorefrontWrapper>
  );
}

export default Storefront;

import React from 'react';
import Link from 'next/link';
import { StorefrontWrapper, StorefrontItem, ItemButtons } from './styles';

import { Product } from '../../schema/schema';

function Storefront({ products }: { products: Product[] }) {
  return (
    <StorefrontWrapper>
      {products.map(product => (
        <StorefrontItem key={product.product_id}>
          <ItemButtons>
            <Link
              href={{
                pathname: `/${product.product_id}`,
              }}
            >
              <img
                src={product.photo}
                alt={product.name}
                style={{ width: '250px', height: '250px' }}
              />
            </Link>
          </ItemButtons>
          <p style={{ paddingTop: '10px' }}>{product.name}</p>
        </StorefrontItem>
      ))}
    </StorefrontWrapper>
  );
}

export default Storefront;

import React from 'react';

import { StorefrontWrapper, StorefrontItem, ItemButtons } from './styles';
import NavBar from './../../components/NavBar';
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
      {products.map(product => (
        <StorefrontItem key={product.product_id}>
          <ItemButtons>
            <img
              src={product.photo}
              alt={product.name}
              style={{ width: '250px', height: '250px' }}
            />
          </ItemButtons>
          <p style={{ paddingTop: '10px' }}>{product.name}</p>
        </StorefrontItem>
      ))}
    </StorefrontWrapper>
  );
}

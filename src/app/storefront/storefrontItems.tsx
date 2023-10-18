import React, { useState, useEffect } from 'react';

import { StorefrontWrapper, StorefrontItem, ItemButtons } from './styles';

import { getProduct } from './helperFunction';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

function Storefront() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = (await getProduct()) as Product[];
        setProducts(productsData);
      } catch (error) {
        // console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

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

export default Storefront;

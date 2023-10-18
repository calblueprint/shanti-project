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
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <StorefrontWrapper>
      {products.map(product => (
        <StorefrontItem key={product.product_id}>
          <ItemButtons>
            <img src={product.photo} alt={product.name} />
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
          </ItemButtons>
          <h3>{product.name}</h3>
        </StorefrontItem>
      ))}
    </StorefrontWrapper>
  );
}

export default Storefront;

import React, { useEffect, useState } from 'react';
import { OrderProduct } from '../../schema/schema';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';
import {
  ItemQuantityContainer,
  ItemQuantityRow,
  ItemText,
  QuantityText,
  TotalContainer,
} from './styles';

function ItemRows({ products }: { products: OrderProduct[] }) {
  const [productDetails, setProductDetails] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    // Fetch product details for each product ID
    const fetchProductDetails = async () => {
      const details: { [key: number]: string } = {};

      // Create an array of promises
      const productPromises = products.map(async product => {
        const productData = await fetchProductByID(product.product_id);
        details[product.product_id] = productData.name;
      });

      // Wait for all promises to resolve
      await Promise.all(productPromises);

      setProductDetails(details);
    };

    fetchProductDetails();
  }, [products]);

  const totalQuantity = products.reduce(
    (total, productVal) => total + productVal.quantity,
    0,
  );

  return (
    <div>
      <ItemQuantityContainer>
        {products.map(productVal => (
          <ItemQuantityRow key={productVal.product_id}>
            <ItemText>{productDetails[productVal.product_id]}</ItemText>
            <QuantityText>{productVal.quantity}</QuantityText>
          </ItemQuantityRow>
        ))}
      </ItemQuantityContainer>
      <TotalContainer>
        <ItemQuantityRow style={{ marginTop: '23px' }}>
          <ItemText>Order Total</ItemText>
          <QuantityText>{totalQuantity}</QuantityText>
        </ItemQuantityRow>
      </TotalContainer>
    </div>
  );
}

export default ItemRows;

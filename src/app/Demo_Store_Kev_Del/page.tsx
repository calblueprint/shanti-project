/* eslint-disable no-console */
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { StoreItem } from '../../components/cart/StoreItem';
import { fetchProducts } from '../../supabase/product_queries';
import { Product } from '../../schema/schema';

// eslint-disable-next-line import/prefer-default-export
export function Store() {
  const [storeItems, setStoreItems] = useState<Product[]>([]); // State to store the fetched products

  useEffect(() => {
    // Function to fetch products and set them in the state
    const fetchStoreItems = async () => {
      try {
        const response = await fetchProducts();
        if (response.data) {
          setStoreItems(response.data);
        } else {
          console.error('Error fetching products:', response.error);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchStoreItems();
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.product_id}>
            <StoreItem id={0} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../../components/cart/StoreItem";
import { fetchProducts } from "../../api/supabase/queries/product_queries";
import { Product } from "../../schema/schema";
import { ShoppingCartProvider } from "../context/ShoppingCartContext copy";

export default function Store() {
  const [storeItems, setStoreItems] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchStoreItems() {
      const { data, error } = await fetchProducts();
      if (error) {
        console.error(error);
        return;
      }
      setStoreItems(data);
    }
    fetchStoreItems();
  }, []);
  // console.log("store_items:", storeItems);
  return (
    <ShoppingCartProvider>
    <div>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.product_id}>
            <StoreItem id={item.product_id} {...item} />
          </Col>
        ))}
      </Row>
    </div>
    </ShoppingCartProvider>
  );
}

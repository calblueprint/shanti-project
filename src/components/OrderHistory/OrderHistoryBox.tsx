'use client';

// Importing the required components and styles
import React, { useState, useEffect } from 'react';
import { Order, Product } from '../../schema/schema';
import {
  getOrderById,
  fetchProductsFromOrder,
} from '../../api/supabase/queries/order_queries';
import ImageCarousel from './ImageCarousel';
import OrderHistoryText from './OrderHistoryText';

interface OrderDetailsWithProductsProps {
  orderId: number;
}

export default function OrderDetailsWithProducts({
  orderId,
}: OrderDetailsWithProductsProps) {
  const [order, setOrder] = useState<Order | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedOrder = await getOrderById(orderId);
        const fetchedProducts = await fetchProductsFromOrder(orderId);
        setOrder(fetchedOrder);
        setProducts(fetchedProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  const imageUrls = products.map(product => product.photo);

  return (
    <div>
      <div>
        <OrderHistoryText
          date={order.created_at}
          orderNumber={order.id.toString()}
          status={order.status}
        />
        <ImageCarousel images={imageUrls} />
      </div>
    </div>
  );
}

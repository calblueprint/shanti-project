/* eslint-disable no-console */
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useShoppingCart } from '../../app/context/ShoppingCartContext';
import { Product } from '../../schema/schema';
import { fetchProductByID } from '../../api/supabase/queries/product_queries';

// eslint-disable-next-line import/prefer-default-export
export function StoreItem({ id }: { id: number }) {
  const [storeItems, setStoreItems] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchStoreItems() {
      const { data, error } = await fetchProductByID(id);
      if (error) {
        console.error(error);
        return;
      }
      setStoreItems(data);
    }
    fetchStoreItems();
  }, [id]);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={storeItems?.imgUrl || 'https://via.placeholder.com/300'}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{storeItems?.name}</span>
          <span className="ms-2 text-muted">{0}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

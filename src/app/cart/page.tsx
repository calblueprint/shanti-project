'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import BackButton from '../../components/BackButton/BackButton';
import { Heading1 } from '../../styles/fonts';

import OrderSummary from '../../components/OrderSummaryFolder/OrderSummary';

import {
  fetchCartItemsWithQuantity,
  totalNumberOfItemsInCart,
} from '../../api/supabase/queries/cart_queries';
import CartItem from './cartItem';
import NavBar from '../../components/NavBarFolder/NavBar';
import {
  PageDiv,
  CheckoutButton,
  LeftColumnDiv,
  RightColumnDiv,
  OrderButton,
  DeliveryContainer,
  OrderContainer,
  Container,
  Heading,
  BackButtonDiv,
  RightColumnDiv1,
  InformationContainer,
  LeftColumnDiv1,
  OutterDiv
} from './styles';

import { ProductWithQuantity } from '../../schema/schema';

export default function OrderPage() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<ProductWithQuantity[]>([]);
  const [deliveryEnabled, setDeliveryEnabled] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchProducts() {
      setNumberOfItems(await totalNumberOfItemsInCart());
      setCart(await fetchCartItemsWithQuantity());
      const data = await fetchUser();
      setDeliveryEnabled(data.delivery_allowed);
    }

    fetchProducts();
  }, []);

  const checkDelivery = () => {
    if (deliveryEnabled) {
      router.push('/delivery');
    } else {
      router.push('/pickup');
    }
  };

  return (
    <div>
      <NavBar />
      <OutterDiv>
      <BackButtonDiv>
          <BackButton destination="/storefront" />
          </BackButtonDiv>
      <DeliveryContainer>
        
          <InformationContainer>
          <Heading1 style={{ marginBottom: '38px'}}>Cart</Heading1>
            {cart.map(cartItem => (
              <CartItem
                key={cartItem.id}
                cartItemProduct={cartItem}
                setCart={setCart}
                cart={cart}
                setNumberOfItems={setNumberOfItems}
                numberOfItems={numberOfItems}
              />
            ))}
          </InformationContainer>
        <OrderContainer>
          <OrderSummary cart={cart} numberOfItems={numberOfItems} />
          <OrderButton
            onClick={() => checkDelivery()}
          >
            Check Out
          </OrderButton>
        </OrderContainer>
      </DeliveryContainer>
      </OutterDiv>
    </div>
  );
}

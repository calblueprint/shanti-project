import { createContext, ReactNode, useContext, useState } from 'react';
import ShoppingCart from '../../components/cart/ShoppingCart';
import useLocalStorage from '../hooks/useLocalStorage';
import { updateCartForUser } from '../../api/supabase/queries/user_queries';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

// TODO: get this from the user
const userID = '1';

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    [],
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      const updatedCart = currItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      const cartData: Record<string, number> = {}; // Use Record<string, number> here

      updatedCart.forEach(item => {
        cartData[item.id] = item.quantity;
      });

      updateCartForUser(userID, cartData); // Replace userId with the actual user ID

      return updatedCart;
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      const updatedCart = currItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      const cartData: Record<string, number> = {}; // Use Record<string, number> here

      updatedCart.forEach(item => {
        cartData[item.id] = item.quantity;
      });

      updateCartForUser(userID, cartData); // Replace userId with the actual user ID

      return updatedCart;
    });
  }
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      const updatedCart = currItems.filter(item => item.id !== id);

      const cartData: Record<string, number> = {}; // Use Record<string, number> here

      updatedCart.forEach(item => {
        cartData[item.id] = item.quantity;
      });

      // Update the cart on the backend using the updateCartForUser function
      updateCartForUser(userID, cartData); // Replace userId with the actual user ID

      return updatedCart;
    });
  }

  return (
    <ShoppingCartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

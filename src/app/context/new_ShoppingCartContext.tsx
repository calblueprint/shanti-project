// import { createContext, ReactNode, useContext, useState, useMemo, useReducer} from 'react';
// import ShoppingCart from '../../components/cart/ShoppingCart';
// import useLocalStorage from '../hooks/useLocalStorage';
// import { updateCartForUser } from '../../api/supabase/queries/user_queries';

// type ShoppingCartProviderProps = {
//   children: ReactNode;
// };

// type CartItem = {
//   id: number;
//   quantity: number;
// };

// export interface cartState {
//   items: CartItem[];
// }

// export type AuthContextAction =
//   | { type: 'ADD_ITEM'; userObject: RegularUser | null }
//   | { type: 'REMOVE_ITEM'; userObject: RegularUser | null }
//   | { type: 'REMOVE_ITEM' }
//   | { type: 'CHANGE_BOOKMARK'; bookmarkedArray: string[] | undefined }
//   | { type: 'UPDATE_LANGUAGE'; language: string | undefined };

// // TODO: get this from the user
// const userID = '1';


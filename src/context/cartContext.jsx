import React, { useReducer, createContext } from "react";
import cartReducer, {sumItems} from "./cartReducer";

export const CartContext = createContext();
const cartFromStorage = sessionStorage.getItem('cart') ? 
  JSON.parse(sessionStorage.getItem('cart')) : [];

const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const incItem = (product) => dispatch({ type: "INC_ITEM", payload: product });
  const decItem = (product) => dispatch({ type: "DEC_ITEM", payload: product });
  const remItem = (product) => dispatch({ type: "REM_ITEM", payload: product });
  const clearCart = () => dispatch({ type: "CLEAR"});

  const cart = { ...state, addItem, incItem, decItem, remItem, clearCart };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

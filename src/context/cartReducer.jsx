const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

export const sumItems = (cartItems) => {
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((i) => i.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case "INC_ITEM":
      const incIndex = state.cartItems.findIndex(
        (i) => i.id === action.payload.id);
      state.cartItems[incIndex].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

      case "DEC_ITEM":
      const decIndex = state.cartItems.findIndex(
        (i) => i.id === action.payload.id );
       const currentProduct= state.cartItems[decIndex];
       if(currentProduct.quantity > 1) currentProduct.quantity--;
       return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

      case "REM_ITEM":
      const newCartItems = state.cartItems.filter(i => i.id !== action.payload.id)
       return {
        ...state,
        cartItems: [...newCartItems],
        ...sumItems(newCartItems),
      };

      case "CLEAR":
        sessionStorage.removeItem('cart');
       return {
        cartItems: [],
        itemCount: 0,
        total: 0
      };

    default:
      return state;
  }
};
export default cartReducer;

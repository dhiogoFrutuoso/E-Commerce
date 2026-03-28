// Redux sendo aplicado da forma antiga, sem o toolkit, para fins de estudo e comparação

import { Product } from "../../components/ProductsList/ProductsList";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
}

interface CartAction {
  type: string;
  payload?: Product;
}

export function cartReducer(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case 'cart/add':
      if (action.payload) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
      return state;

    case 'cart/remove': {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(product => product.id !== productToRemove?.id);
      
      return {
        ...state,
        cart: cartFiltered,
      }
    }

    default:
      return state;
  }
}
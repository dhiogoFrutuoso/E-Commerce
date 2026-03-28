import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductsList/ProductsList";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action) => {
      state.cart = [
        ...state.cart,
        action.payload,
      ]
    },
    removeFromCart: (state, action) => {
      const productToRemove = action.payload;
      state.cart = state.cart.filter(product => product.id !== productToRemove?.id);
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
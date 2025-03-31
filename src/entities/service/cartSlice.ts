import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStore,
  removeLocalStore,
  setLocalStore,
} from "../../shared/hooks/useLocale";
import { Product } from "../product/model";
import { CART_KEY } from "../../shared/constants";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const getInitialCartItems = (): CartItem[] => {
  try {
    const cartData = getLocalStore(CART_KEY.cart);
    return cartData ? JSON.parse(cartData) : [];
  } catch (e) {
    console.error("Failed to parse cart data", e);
    return [];
  }
};

const initialState: CartState = {
  items: getInitialCartItems(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      setLocalStore(CART_KEY.cart, JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      setLocalStore(CART_KEY.cart, JSON.stringify(state.items));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        setLocalStore(CART_KEY.cart, JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      removeLocalStore(CART_KEY.cart);
    },
  },
});

export const selectTotalPrice = (state: { cart: CartState }) => {
  return state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectTotalItems = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

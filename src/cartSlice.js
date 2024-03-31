import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (action.payload.type === 'increment') {
        cartItem.amount++;
      } else {
        cartItem.amount--;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!cartItem) {
        state.cartItems.push(action.payload);
      } else {
        cartItem.amount += action.payload.amount;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
  },
});

export const {
  clearCart,
  removeItem,
  updateCartAmount,
  decrease,
  calculateTotals,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;

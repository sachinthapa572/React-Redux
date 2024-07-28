import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cartitems',
  initialState,
  reducers: {
    additems: (state, action) => {
      console.log(action.payload);
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.Quantity += 1;
      } else {
        state.cart.push({ ...action.payload, Quantity: 1 });
      }
    },

    removeitems: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload);
      if (existingItem.Quantity > 1) {
        existingItem.Quantity -= 1;
      } else {
        state.cart = state.cart.filter((curelem) => curelem.id !== action.payload);
      }
    },
  },
});

export const { additems, removeitems } = cartSlice.actions;

export default cartSlice.reducer;

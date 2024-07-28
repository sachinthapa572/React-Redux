import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cartitems',
  initialState,
  reducers: {
    additems: (state, action) => {
      state.cart.push(action.payload);
    },
    removeitems: (state, action) => {
      state.cart = state.cart.filter((curelem) => curelem.id !== action.payload);
    },
  },
});

export const { additems, removeitems } = cartSlice.actions;

export default cartSlice.reducer;

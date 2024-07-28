import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from '../Todo/TodoSlice';
import cartSlice from '../Cart/cartSlice';
import ProductSlice from '../Cart/ProductSlice';

const store = configureStore({
  reducer: {
    todo: TodoSlice,
    cart: cartSlice,
    product: ProductSlice,
  },
});

export default store;

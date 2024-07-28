import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
});

const initialState = {
  data: [],
  status: STATUSES.IDLE,
  searchdata: '',
};

// thunk : async function to fetch data from api and dispatch the action to the reducer function in the redux store

// createAsyncThunk(identifier , async function );
export const fetchProduct = createAsyncThunk('product/fetch', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addsearchdata: (state, action) => {
      state.searchdata = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const {addsearchdata} = ProductSlice.actions;

export default ProductSlice.reducer;

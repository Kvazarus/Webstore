import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducers/productsReducer';
import { filtersReducer } from './reducers/filtersReducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});

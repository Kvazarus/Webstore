import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsArray: [],
  favoritesIds: [],
  purchasedIds: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeProducts: (state, action) => {
      state.productsArray = action.payload;
    },
    addFavorite: (state, action) => {
      state.favoritesIds.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favoritesIds.indexOf(id);
      state.favoritesIds.splice(index, 1);
    },
    addPurchased: (state, action) => {
      state.purchasedIds.push(action.payload);
    },
    deletePurchased: (state, action) => {
      const id = action.payload;
      const index = state.purchasedIds.indexOf(id);
      state.purchasedIds.splice(index, 1);
    },
    clearPurchased: (state) => {
      state.purchasedIds = [];
    },
  },
});

export const {
  changeProducts, addFavorite, deleteFavorite, addPurchased, deletePurchased, clearPurchased,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state) => state.products.productsArray;
export const selectFavoritesIds = (state) => state.products.favoritesIds;
export const selectPurchasedIds = (state) => state.products.purchasedIds;

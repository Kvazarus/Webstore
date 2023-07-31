import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchingQuery: '',
  categories: [],
  selectedCategory: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearchingQuery: (state, action) => {
      state.searchingQuery = action.payload;
    },
    changeCategories: (state, action) => {
      state.categories = action.payload;
    },
    changeSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    resetFilters: (state) => {
      state.searchingQuery = '';
      state.selectedCategory = '';
    },
  },
});

export const {
  changeSearchingQuery,
  changeCategories,
  changeSelectedCategory,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectSearchingQuery = (state) => state.filters.searchingQuery;
export const selectCategories = (state) => state.filters.categories;
export const selectSelectedCategory = (state) => state.filters.selectedCategory;

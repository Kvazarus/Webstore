/* eslint-disable no-console */
import axios from 'axios';
import { changeProducts } from './reducers/productsReducer';
import { changeCategories } from './reducers/filtersReducer';

axios.defaults.baseURL = 'https://dummyjson.com';

export function fetchAllProducts() {
  return async (dispatch) => {
    try {
      const response = await axios.get('/products?limit=0');
      const { products } = response.data;
      dispatch(changeProducts(products));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchSearchedProducts() {
  return async (dispatch, getState) => {
    const { searchingQuery } = getState().filters;
    try {
      const response = await axios.get(`/products/search?q=${searchingQuery}`);
      const { products } = response.data;
      dispatch(changeProducts(products));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchProductsByCategory() {
  return async (dispatch, getState) => {
    const { selectedCategory } = getState().filters;
    try {
      const response = await axios.get(`/products/category/${selectedCategory}`);
      const { products } = response.data;
      dispatch(changeProducts(products));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dummyjson.com/products/categories');
      dispatch(changeCategories(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchFavoriteProducts() {
  return async (dispatch, getState) => {
    const { favoritesIds } = getState().products;
    try {
      const response = await axios.get('/products?limit=0');
      const { products } = response.data;
      const favoriteProducts = products.filter((product) => (
        favoritesIds.some((id) => id === product.id)
      ));
      dispatch(changeProducts(favoriteProducts));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchPerchasedProducts() {
  return async (dispatch, getState) => {
    const { purchasedIds } = getState().products;
    try {
      const response = await axios.get('/products?limit=0');
      const { products } = response.data;
      const favoriteProducts = products.filter((product) => (
        purchasedIds.some((id) => id === product.id)
      ));
      dispatch(changeProducts(favoriteProducts));
    } catch (error) {
      console.error(error);
    }
  };
}

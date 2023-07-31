import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../header/header';
import { ProductsGrid } from '../products_grid/products_grid';
import { fetchAllProducts } from '../../asyncActions';

export function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ProductsGrid />
    </>
  );
}

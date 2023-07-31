import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../header/header';
import { ProductsGrid } from '../products_grid/products_grid';
import { fetchFavoriteProducts } from '../../asyncActions';

export function FavoritesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteProducts());
  }, [dispatch]);

  return (
    <>
      <Header isMain={false} />
      <ProductsGrid />
    </>
  );
}

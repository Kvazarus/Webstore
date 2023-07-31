import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MainPage } from '../main_page/main_page';
import { fetchCategories } from '../../asyncActions';
import { FavoritesPage } from '../favorites_page/favorites_page';
import { ShoppingPage } from '../shopping_page/shopping_page';
import { SuccessPage } from '../success_page/success_page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/cart',
    element: <ShoppingPage />,
  },
  {
    path: '/success_purchase',
    element: <SuccessPage />,
  },
]);

export function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <RouterProvider router={router} />
  );
}

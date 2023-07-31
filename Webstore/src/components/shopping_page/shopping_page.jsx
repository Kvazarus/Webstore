import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { Header } from '../header/header';
import { ProductsGrid } from '../products_grid/products_grid';
import { fetchPerchasedProducts } from '../../asyncActions';
import { clearPurchased, selectProducts } from '../../reducers/productsReducer';

export function ShoppingPage() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPerchasedProducts());
  }, [dispatch]);

  const isArrayEmpty = products.length === 0;
  function handleBuyClick() {
    dispatch(clearPurchased);
    navigate('/success_purchase');
  }

  return (
    <>
      <Header isMain={false} />
      <ProductsGrid />
      {!isArrayEmpty && (
        <Button variant="contained" onClick={handleBuyClick} sx={{ margin: '20px' }}>
          Купить
        </Button>
      )}
    </>
  );
}

import './products_grid.css';
import { Alert, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ProductCard } from '../product_card/product_card';
import { selectProducts } from '../../reducers/productsReducer';

export function ProductsGrid() {
  const products = useSelector(selectProducts);

  const isArrayEmpty = products.length === 0;
  if (isArrayEmpty) {
    return (
      <Alert variant="filled" severity="info" sx={{ width: '300px', margin: 'auto', mt: '19%' }}>
        Ничего не найдено
      </Alert>
    );
  }

  return (
    <Box className="products_grid">
      {products.map((product) => <ProductCard product={product} key={product.id} />)}
    </Box>
  );
}

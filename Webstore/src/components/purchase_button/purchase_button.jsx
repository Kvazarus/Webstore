import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deletePurchased, addPurchased, selectPurchasedIds } from '../../reducers/productsReducer';

export function PurchaseButton({ id: productId }) {
  const purchasedIds = useSelector(selectPurchasedIds);
  const dispatch = useDispatch();

  function handleCancelClick() {
    dispatch(deletePurchased(productId));
  }

  function handleBuyClick() {
    dispatch(addPurchased(productId));
  }

  const isPurchased = purchasedIds.some((id) => id === productId);

  if (isPurchased) {
    return (
      <Button variant="outlined" onClick={handleCancelClick}>Отмена</Button>
    );
  }

  return (
    <Button variant="contained" onClick={handleBuyClick}>Купить</Button>
  );
}

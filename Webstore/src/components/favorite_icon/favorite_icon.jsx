import { useSelector, useDispatch } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import { selectFavoritesIds, addFavorite, deleteFavorite } from '../../reducers/productsReducer';

export function FavoriteIcon({ id: productId }) {
  const favoritesIds = useSelector(selectFavoritesIds);
  const dispatch = useDispatch();

  const isFavorite = favoritesIds.some((id) => id === productId);

  function handleClick() {
    if (isFavorite) {
      dispatch(deleteFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  }

  if (isFavorite) {
    return (
      <IconButton onClick={handleClick}>
        <StarIcon sx={{ color: 'gold' }} />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={handleClick}>
      <StarBorderIcon />
    </IconButton>
  );
}

import './product_card.css';
import {
  Box, Paper, Typography,
} from '@mui/material';
import { FavoriteIcon } from '../favorite_icon/favorite_icon';
import { PurchaseButton } from '../purchase_button/purchase_button';

function getPriceWithDiscount(price, discountPercentage) {
  const priceWithDiscount = Math.floor(price * ((100 - discountPercentage) / 100));
  return priceWithDiscount;
}

export function ProductCard({ product }) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
  } = product;

  return (
    <Paper className="product_card" variant="outlined">
      <img alt="product_image" className="card_media" src={thumbnail} />
      <Box className="card_content">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">
          Price:
          {' '}
          <del className="crossed_out_full_price">{price}</del>
          {' '}
          {getPriceWithDiscount(price, discountPercentage)}
          {' '}
          $
        </Typography>
        <Typography variant="body1">
          Rating:
          {' '}
          {rating}
        </Typography>
        <Typography variant="body1">
          In stock:
          {' '}
          {stock}
        </Typography>
      </Box>
      <Box className="card_actions">
        <PurchaseButton id={id} />
        <FavoriteIcon id={id} />
      </Box>
    </Paper>
  );
}

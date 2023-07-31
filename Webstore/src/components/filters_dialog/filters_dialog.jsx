import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem,
} from '@mui/material';
import {
  changeSelectedCategory, resetFilters, selectCategories, selectSelectedCategory,
} from '../../reducers/filtersReducer';
import { fetchAllProducts, fetchProductsByCategory } from '../../asyncActions';

export function FiltersDialog({ open, setOpen }) {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const [category, setCategory] = useState(selectedCategory);
  const dispatch = useDispatch();

  function handleClose() {
    setOpen(false);
  }

  function handleChange(event) {
    setCategory(event.target.value);
  }

  function handleResetClick() {
    dispatch(resetFilters());
    dispatch(fetchAllProducts());
    setOpen(false);
  }

  function handleApplyClick() {
    if (category) {
      dispatch(changeSelectedCategory(category));
      dispatch(fetchProductsByCategory());
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <Select value={category} onChange={handleChange} sx={{ width: '100%' }}>
          {categories.map((categoryText) => (
            <MenuItem value={categoryText} key={categoryText}>{categoryText}</MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleResetClick}>Сбросить</Button>
        <Button onClick={handleApplyClick}>Применить</Button>
      </DialogActions>
    </Dialog>
  );
}

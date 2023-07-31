import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  AppBar, IconButton, Toolbar, Typography, Box, Button,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SearchBar } from '../search_bar/search_bar';
import { FiltersDialog } from '../filters_dialog/filters_dialog';

export function Header({ isMain = true } = {}) {
  const [open, setOpen] = useState(false);

  function handleFiltersClick() {
    setOpen(true);
  }

  return (
    <>
      <Box>
        <AppBar position="fixed">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <Button>
                <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                  Webstore
                </Typography>
              </Button>
            </Link>
            {isMain && (
              <Box sx={{ display: 'flex' }}>
                <SearchBar />
                <IconButton onClick={handleFiltersClick}>
                  <FilterAltIcon />
                </IconButton>
                <Link to="/favorites">
                  <IconButton>
                    <StarsIcon sx={{ color: 'gold' }} />
                  </IconButton>
                </Link>
                <Link to="/cart">
                  <IconButton>
                    <ShoppingCartIcon sx={{ color: 'purple' }} />
                  </IconButton>
                </Link>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
      <FiltersDialog open={open} setOpen={setOpen} />
    </>
  );
}

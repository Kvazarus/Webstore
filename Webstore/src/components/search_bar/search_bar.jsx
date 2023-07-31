import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styledComponents';
import { changeSearchingQuery, selectSearchingQuery } from '../../reducers/filtersReducer';
import { fetchSearchedProducts } from '../../asyncActions';

export function SearchBar() {
  const searchingQuery = useSelector(selectSearchingQuery);
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(changeSearchingQuery(event.target.value));
    dispatch(fetchSearchedProducts());
  }

  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchingQuery}
          onChange={handleChange}
        />
      </Search>
    </Box>
  );
}

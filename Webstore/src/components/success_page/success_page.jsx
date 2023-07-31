import { Link } from 'react-router-dom';
import { Alert, Box, Button } from '@mui/material';
import { Header } from '../header/header';

export function SuccessPage() {
  return (
    <>
      <Header isMain={false} />
      <Box sx={{
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      }}
      >
        <Alert variant="filled" severity="success" sx={{ margin: 'auto', mt: '19%' }}>
          The purchase was successful
        </Alert>
        <Link to="/">
          <Button variant="contained" sx={{ margin: '20px' }}>
            Вернуться на главную страницу
          </Button>
        </Link>
      </Box>
    </>
  );
}

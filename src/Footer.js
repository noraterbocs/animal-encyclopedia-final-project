import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Animal Quest
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const StickyFooter = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) => (theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800])
          }}>
          <Container sx={{ width: '100%', marginTop: '1rem' }}>
            <Typography variant="body1">
              Nora Terbocs and Jennifer Feenstra-Arengårds Pet Project
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default StickyFooter;
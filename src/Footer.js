import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Logo from './assets/encylogo4.png';

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
};

const StickyFooter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#F3F9F5',
          display: 'flex',
          alignItems: 'center'
        }}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="animal-quest-logo" style={{ width: '150px', height: 'auto', marginRight: '1rem', opacity: 0.8 }} />
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: '#04211F' }}>
              Built by Nora Terbocs and Jennifer Feenstra-Arengård
            </Typography>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default StickyFooter;

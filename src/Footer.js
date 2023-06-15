import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
        Animal Quest{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

const StickyFooter = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
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
          width: '100vw',
          position: isMobile ? 'relative' : 'fixed',
          bottom: 0,
          padding: '1em',
          backgroundColor: '#84a199',
          display: 'flex',
          alignItems: 'center'
        }}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '100% !important'
          }}>
          <Typography variant="body1" sx={{ color: '#04211F', textAlign: 'center', flex: 1 }}>
              Built by Nora Terbocs and Jennifer Feenstra-Arengård
          </Typography>
          <Box sx={{ flexShrink: 0, pr: 2 }}>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default StickyFooter;

/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';

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
  const isMobile = useMediaQuery('(max-width:1000px)');
  const location = useLocation();

  // Excluding pages to show Header:
  const [display, setDisplay] = useState(true)
  useEffect(() => {
    if (location.pathname.includes('animal') || location.pathname.includes('login')) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }, [location])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      {display
        ? <>
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
                flexDirection: isMobile ? 'column' : 'row',
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
        </>
        : ''}
    </Box>
  );
};

export default StickyFooter;

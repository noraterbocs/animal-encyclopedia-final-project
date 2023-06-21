import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { Animation } from 'components/Animation';
import { BackgroundImage } from 'components/BackgroundImage';
import { Map } from './Map';
import { getUser } from '../../reducers/user';
import Background from '../../assets/background/jungle2.jpg';
import { MobileView } from './MobileView';

export const HomePage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const isLoading = useSelector((store) => store.loading.isLoading);
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    } else {
      dispatch(getUser());
    }
  }, [accessToken, dispatch, navigate]);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', p: 0, m: 0, minWidth: '100vw' }}>
      <BackgroundImage src={Background} />
      {!isLoading && !isMobile ? (
        <Map />
      ) : (
        isMobile && <MobileView />
      )}
      {isLoading && (
        <Animation size="80%" src="https://assets8.lottiefiles.com/packages/lf20_OLzqniWinA.json" />
      )}
    </Container>
  );
};

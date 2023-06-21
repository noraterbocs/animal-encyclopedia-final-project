import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { BackgroundImage } from 'components/BackgroundImage';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountInformation } from './AccountInformation';
import { Badges } from './Badges';
import { MyActivity } from './MyActivity';
import { Scores } from './Scores';
import Background from '../../assets/background/jungle2.jpg'

export const MyAccount = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Grid container spacing={2} sx={{ boxSizing: 'border-box', padding: '2em', gap: '3em' }}>
        <BackgroundImage src={Background} alt="main background" />
        <AccountInformation />
        <Badges />
        <Scores />
        <MyActivity />
      </Grid>
    </Container>
  )
}
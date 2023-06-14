import React from 'react';
import { Container, Grid } from '@mui/material';
import { AccountInformation } from './AccountInformation';
import { Badges } from './Badges';
import { MyActivity } from './MyActivity';
import { Scores } from './Scores';
import Background from '../../assets/background/jungle2.jpg'

export const MyAccount = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ boxSizing: 'border-box', padding: '2em', gap: '3em' }}>
        <img style={{ position: 'absolute', height: '100vh', width: '100%', top: '0px', left: '0px', zIndex: '-2', opacity: '0.7' }} src={Background} alt="main background" />
        <AccountInformation />
        <Badges />
        <Scores />
        <MyActivity />
      </Grid>
    </Container>
  )
}
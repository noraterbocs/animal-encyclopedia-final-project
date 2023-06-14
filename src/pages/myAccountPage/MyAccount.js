import React from 'react';
import { Container, Grid } from '@mui/material';
import { BackgroundImage } from 'components/BackgroundImage';
import { AccountInformation } from './AccountInformation';
import { Badges } from './Badges';
import { MyActivity } from './MyActivity';
import { Scores } from './Scores';
import Background from '../../assets/background/jungle2.jpg'

export const MyAccount = () => {
  return (
    <Container>
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
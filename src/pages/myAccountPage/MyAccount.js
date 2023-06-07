import React from 'react';
import { Grid } from '@mui/material';
import { AccountInformation } from './AccountInformation';
import { Badges } from './Badges';
import { MyActivity } from './MyActivity';
import { TotalScore } from './TotalScore';

export const MyAccount = () => {
  return (
    <Grid container spacing={2} sx={{ boxSizing: 'border-box', padding: '2em', gap: '1em' }}>
      {/* <h1>MyAccount</h1> */}
      <AccountInformation />
      <Badges />
      <TotalScore />
      <MyActivity />
    </Grid>
  )
}
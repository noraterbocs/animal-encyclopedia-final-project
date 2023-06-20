/* eslint-disable max-len */
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tooltip from '@mui/material/Tooltip';

export const Badges = () => {
  const badges = useSelector((store) => store.user.badges);
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid item xs={isMobileView ? 12 : 5} sx={{ borderRadius: '10%', background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)', padding: '2em !important', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
      <Typography variant="h4">Badges: </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        {badges.map((badge) => {
          return (
            <Tooltip key={`badge-${badge.id}`} title={`${badge.title}: ${badge.description}`}>
              <Avatar alt={badge.title} src={badge.path} sx={{ height: '60px', width: '60px', margin: '1em 0' }} />
            </Tooltip>
          )
        })}
      </Stack>
    </Grid>
  );
}
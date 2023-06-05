import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { Grid, Tooltip, Typography, useMediaQuery } from '@mui/material';

export const Badges = () => {
  const badges = useSelector((store) => store.user.badges)
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid item xs={isMobileView ? 12 : 4} sx={{ padding: '2em', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
      <Typography variant="h4">Badges: </Typography>
      <Stack direction="row" spacing={2}>
        {badges.map((badge) => {
          return (
            <Tooltip key={badge.title} title={`${badge.title}: ${badge.description}`}>
              <Avatar alt={badge.title} src={badge.path} />
            </Tooltip>
          )
        })}
      </Stack>
    </Grid>
  );
}
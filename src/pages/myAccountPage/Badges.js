import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { Container, Tooltip, Typography } from '@mui/material';

export const Badges = () => {
  const badges = useSelector((store) => store.user.badges)
  return (
    <Container>
      <Typography variant="h4">Badges: </Typography>
      <Stack direction="row" spacing={2}>
        {badges.map((badge) => {
          return (
            <Tooltip title={`${badge.title}: ${badge.description}`}>
              <Avatar alt={badge.title} src={badge.path} />
            </Tooltip>
          )
        })}
      </Stack>
    </Container>
  );
}
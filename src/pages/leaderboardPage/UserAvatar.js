import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const UserAvatar = () => {
  const users = useSelector((store) => store.leaderboard.leaderboard).slice(3)
  return (
    <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', gap: '1em' }}>
      {users.map((user, index) => {
        return (
          <Stack
            key={user.id}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '1em',
              alignItems: 'center',
              height: '4em',
              background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,70%) 100%)',
              borderRadius: '20px',
              padding: '1em',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
            }}>
            <Typography>{index + 4}</Typography>
            <Avatar sx={{ backgroundColor: 'transparent', width: '80px' }} aria-label="avatar">
              <img src={user.avatar} alt="avatar" style={{ width: '100%' }} />
            </Avatar>
            <Typography sx={{ overflowWrap: 'break-word', width: '80%', fontSize: '1em' }}>{user.username}</Typography>
            <Typography sx={{ fontSize: '1.5em' }}>{user.totalScore}</Typography>
          </Stack>
        )
      })}
    </Box>
  )
}
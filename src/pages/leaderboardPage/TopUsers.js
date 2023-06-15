/* eslint-disable no-nested-ternary */
import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const TopUsers = () => {
  const users = useSelector((store) => store.leaderboard.leaderboard).slice(0, 3)
  return (
    <Box sx={{ position: 'relative', height: '310px', width: '380px', flexDirection: 'row', display: 'flex', justifyContent: 'center', gap: '1em' }}>
      {users.map((user, index) => {
        return (
          <Stack
            key={user.id}
            sx={{
              position: 'absolute',
              display: 'flex',
              top: index === 0 ? '0' : '40%',
              left: index === 1 && '0',
              right: index === 2 && '0',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0',
              alignItems: 'center',
              width: 180,
              height: 180,
              background: index === 0 ? 'radial-gradient(circle, rgba(211,212,199,1) 2%, rgba(173 185 38 / 75%) 100%)' : 'radial-gradient(circle,rgb(231 231 231)2%,rgb(117 143 162 / 75%)100%)',
              borderRadius: '50%',
              padding: '0 10px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              zIndex: index === 0 && 2
            }}>
            <Typography>{index + 1}</Typography>
            <Avatar sx={{ backgroundColor: 'transparent', width: '100px' }} aria-label="avatar">
              <img src={user.avatar} alt="avatar" style={{ width: '100%' }} />
            </Avatar>
            <Typography sx={{ overflowWrap: 'break-word', width: '80%', fontSize: '1em', textAlign: 'center' }}>{user.username}</Typography>
            <Typography sx={{ fontSize: '2em' }}>{user.totalScore}</Typography>
          </Stack>
        )
      })}
    </Box>
  )
}
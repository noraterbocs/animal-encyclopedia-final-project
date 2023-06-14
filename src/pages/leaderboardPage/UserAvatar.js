import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const UserAvatar = ({ users, isTopUsers }) => {
  const flexDirectionUser = isTopUsers ? 'column' : 'row';
  const flexDirection = isTopUsers ? 'row' : 'column';
  const gap = '1em';

  const avatarSize = 180;
  return (
    <Box sx={{ flexDirection, display: 'flex', justifyContent: 'center', gap }}>
      {users.map((user, index) => {
        return (
          <Stack
            key={user.id}
            sx={{
              display: 'flex',
              flexDirection: flexDirectionUser,
              justifyContent: 'center',
              gap,
              alignItems: 'center',
              width: isTopUsers ? avatarSize : 'auto',
              height: isTopUsers ? avatarSize : '4em',
              background: isTopUsers && index === 0 ? 'radial-gradient(circle, rgba(211,212,199,1) 2%, rgba(201,208,125,1) 100%)' : 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)',
              borderRadius: isTopUsers ? '50%' : '',
              padding: '0 10px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              zIndex: isTopUsers && index === 0 ? 1 : 'auto'
            }}>
            <Typography>{isTopUsers ? index + 1 : index + 4}</Typography>
            <Avatar sx={{ backgroundColor: 'transparent', width: '100px' }} aria-label="avatar">
              <img src={user.avatar} alt="avatar" style={{ width: '100%' }} />
            </Avatar>
            <Typography sx={{ overflowWrap: 'break-word', width: '80%', fontSize: isTopUsers ? '0.8em' : '1.5em', textAlign: isTopUsers ? 'center' : 'start' }}>{user.username}</Typography>
            <Typography sx={{ fontSize: isTopUsers ? '0.8em' : '1.5em' }}>{user.totalScore}</Typography>
          </Stack>
        )
      })}
    </Box>
  )
}
import { Avatar, Container, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'reducers/leaderboard';

export const Leaderboard = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.leaderboard.leaderboard);
  console.log(users)
  useEffect(() => {
    dispatch(getUsers())
  })
  return (
    <Container>
      {users.map((user) => {
        return (
          <Stack key={user.username} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em' }}>
            <Avatar sx={{ backgroundColor: 'transparent' }} aria-label="avatar">
              <img src={user.avatar} alt="avatar" style={{ width: '100%' }} />
            </Avatar>
            <Typography>{user.username}</Typography>
            <Typography>{user.totalScore}</Typography>
          </Stack>)
      })}
    </Container>
  )
}
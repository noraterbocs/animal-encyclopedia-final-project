import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'reducers/leaderboard';
import { BackgroundImage } from 'components/BackgroundImage';
import { UserAvatar } from './UserAvatar';
import Background from '../../assets/background/jungle2.jpg'

export const Leaderboard = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.leaderboard.leaderboard);
  console.log(users)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const topUsers = users.slice(0, 3)
  const restOfUsers = users.slice(3)
  return (
    <Container sx={{ padding: '1em', gap: '1em', display: 'flex', flexDirection: 'column' }}>
      <BackgroundImage src={Background} alt="main background" />
      <UserAvatar users={topUsers} isTopUsers />
      <UserAvatar users={restOfUsers} isTopUsers={false} />
    </Container>
  )
}
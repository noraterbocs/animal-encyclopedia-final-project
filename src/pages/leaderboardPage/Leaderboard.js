import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from 'reducers/leaderboard';
import { BackgroundImage } from 'components/BackgroundImage';
import { UserAvatar } from './UserAvatar';
import Background from '../../assets/background/jungle2.jpg'
import { TopUsers } from './TopUsers';

export const Leaderboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <Container sx={{ padding: '1em', gap: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundImage src={Background} alt="main background" />
      <TopUsers />
      <UserAvatar />
    </Container>
  )
}
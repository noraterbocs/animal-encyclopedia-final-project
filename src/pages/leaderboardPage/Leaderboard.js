import { Container, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'reducers/leaderboard';
import { BackgroundImage } from 'components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { UserAvatar } from './UserAvatar';
import Background from '../../assets/background/jungle2.jpg'
import { TopUsers } from './TopUsers';

export const Leaderboard = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    } else {
      dispatch(getUsers())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const isMobile = useMediaQuery('(max-width:1000px)');

  return (
    <Container sx={{ padding: '1em', gap: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: isMobile ? '100vh' : 'auto' }}>
      <BackgroundImage src={Background} alt="main background" />
      <TopUsers />
      <UserAvatar />
    </Container>
  )
}
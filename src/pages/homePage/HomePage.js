/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { Map } from './Map';
import { getUser } from '../../reducers/user';
import { Loading } from '../../components/Loading';

export const HomePage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  // const email = useSelector((store) => store.user.email);
  // const username = useSelector((store) => store.user.username);
  const isLoading = useSelector((store) => store.loading.isLoading)
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    } else {
      dispatch(getUser())
    }
  }, [accessToken]);
  return (
    <Container sx={{ bgcolor: '#2ba8c2e0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 0, m: 0, minWidth: '100vw' }}>
      {!isLoading
        ? <Map />
        : <Loading />}
    </Container>
  )
}
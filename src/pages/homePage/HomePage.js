/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { Map } from './Map';
import { getUser } from '../../reducers/user';
import { Loading } from '../../components/Loading';
// import BackgroundAnimals from '../../assets/background/BackgroundAnimals.png'
import BackgroundAnimals from '../../assets/background/jungle2.jpg'

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', p: 0, m: 0, minWidth: '100vw' }}>
      <img style={{ position: 'absolute', height: '100vh', width: '100%', top: '0px', left: '0px', zIndex: '-2', opacity: '0.4' }} src={BackgroundAnimals} alt="main background" />
      {!isLoading
        ? <Map />
        : <Loading />}
    </Container>
  )
}

// bgcolor: '#108bdfeb;'
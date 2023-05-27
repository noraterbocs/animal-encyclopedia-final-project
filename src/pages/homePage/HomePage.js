/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <>
      {!isLoading
        ? <Map />
        : <Loading />}
    </>
  )
}
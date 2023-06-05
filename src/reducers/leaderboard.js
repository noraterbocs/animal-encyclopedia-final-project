import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { user } from './user';
import { loading } from './loading';

export const leaderboard = createSlice({
  name: 'leaderboard',
  initialState: {
    leaderboard: [],
    error: null
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload
    },
    setLeaderboard: (store, action) => {
      store.leaderboard = action.payload
      console.log(action.payload)
    }
  }
});

// GET all users data
export const getUsers = () => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('users'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(leaderboard.actions.setLeaderboard(data.response));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};
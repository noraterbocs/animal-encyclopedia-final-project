import { createSlice } from '@reduxjs/toolkit';
import { loading } from './loading';

export const thoughts = createSlice({
  name: 'user',
  initialState: {
    users: [],
    newUser: []

  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setNewUser: (state, action) => {
      state.newUser = action.payload
      state.users = [...state.users, action.payload];
    }
  }
});

// Fetch all users (leaderboard)
export const fetchThoughts = () => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('https://testtesttest/users', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(thoughts.actions.setUsers(json.body.response))
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// Register a new user
export const registerUser = (name, email, password) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }
    fetch('https://testtesttest/register', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(thoughts.actions.setNewUser(json.response)) // doublecheck the route
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// POST - Login
export const loginUser = () => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'accessToken'
      }
    }
    fetch('https://testtesttest/login', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(thoughts.actions.setSingleThought(json))
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
}
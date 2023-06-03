/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';

export const user = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    username: '',
    email: '',
    avatar: 'https://picsum.photos/200',
    badges: [],
    // history: [{ quiz: 'bear', score: 10, timestamp: '2023-06-03T09:04:53.761Z' }, { quiz: 'toucan', score: 5, timestamp: '2023-06-02T09:04:53.761Z' }],
    history: [],
    totalScore: 0,
    createdAt: '',
    // accessToken: '39804dfc98c71614f0ceaf199012274f03ef7037125e16dfe0c08b6f7e09a9e9d1818df9e7dd47ac1fef7b422d43ecc306a18e4ff2cd3f9093c262f85e492c6704e74b39f6827f6cebf676f43aaacba8fc19989c8d7dbdc6a557b684af64f64d1db1307a13104080cf1729794b2cbbe99901d5a1186fe08a7cd8bb9592abfc55',
    accessToken: null,
    error: null,
    mode: 'login',
    lastGeneratedStoryDate: ''
  },
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload
      console.log('userId:', action.payload)
    },
    setUsername: (store, action) => {
      store.username = action.payload
      console.log('username:', action.payload)
    },
    setEmail: (store, action) => {
      store.email = action.payload
      console.log('email:', action.payload)
    },
    setAvatar: (store, action) => {
      store.avatar = action.payload
      console.log('avatar:', action.payload)
    },
    setBadges: (store, action) => {
      store.badges = action.payload
      console.log('badges:', action.payload)
    },
    setHistory: (store, action) => {
      store.history = action.payload
      console.log('history:', action.payload)
    },
    setTotalScore: (store, action) => {
      store.totalScore = action.payload
      console.log('totalscore:', action.payload)
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
      console.log('accessToken:', action.payload)
    },
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload
      console.log('createdAt:', action.payload)
    },
    setError: (store, action) => {
      store.error = action.payload
      console.log('error:', action.payload)
    },
    setMode: (store, action) => {
      store.mode = action.payload
    },
    setLastGeneratedStoryDate: (store, action) => {
      store.lastGeneratedStoryDate = action.payload
      console.log('date for last gen story:', action.payload)
    }
  }
});

// POST: register a user
export const registerUser = (username, email, password) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }
    fetch(API_URL('register'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null))
          console.log(data)
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response))
          dispatch(loading.actions.setLoading(false))
        }
      })
  };
};

// POST: login user
export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'accessToken'
      },
      body: JSON.stringify({ email, password })
    }
    fetch(API_URL('login'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response))
          dispatch(loading.actions.setLoading(false))
        }
      })
  };
};

// GET user data
export const getUser = () => {
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
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setAvatar(data.response.avatar));
          dispatch(user.actions.setBadges(data.response.badges));
          dispatch(user.actions.setCreatedAt(data.response.createdAt));
          dispatch(user.actions.setTotalScore(data.response.totalScore));
          dispatch(user.actions.setHistory(data.response.history));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

// GET date of last generated Story
export const getLastGeneratedStoryDate = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(false))
    const { accessToken } = getState().user;
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('completion/lastgeneratedstory'), options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(user.actions.setLastGeneratedStoryDate(data.response))
        } else {
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

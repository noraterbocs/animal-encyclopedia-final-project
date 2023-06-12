/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';

export const user = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    username: '',
    password: '',
    email: '',
    avatar: '/images/avatars/AlligatorAvatar.png',
    badges: [],
    // history: [{ quiz: 'bear', score: 10, timestamp: '2023-06-03T09:04:53.761Z' }, { quiz: 'toucan', score: 5, timestamp: '2023-06-02T09:04:53.761Z' }],
    history: [],
    totalScore: 0,
    createdAt: '',
    accessToken: 'dd97006238677b9cbdef92be251025a692e065268b780d5a7caf09d29a9c576aa23a0f9008739f935ad12bf46b9e50cf22629496bcfff1c23f8a19127b208e66b40658f076d15a0adea6f388ce7663b15077c3f4effa93958ffd025dc90358dd784120ab4fb044d4ae43d255770415daecc5206ac8012bdc134a77eab8cfb17d',
    // accessToken: null,
    error: null,
    mode: 'login',
    lastGeneratedStoryDate: '',
    highestBadgeRank: 'explorer'
  },
  reducers: {
    // modifies the state directly
    setUserId: (store, action) => {
      store.userId = action.payload
      console.log('userId:', action.payload)
    },
    //  modifies the state indirectly
    // setUserId: (state, action) => {
    //   return Object.assign({}, state, { userId: action.payload });
    // },
    setUsername: (store, action) => {
      store.username = action.payload
      console.log('username:', action.payload)
    },
    setPassword: (store, action) => {
      store.password = action.payload
      console.log('password:', action.payload)
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
      if (Array.isArray(action.payload)) {
        // Overwrite the current badges with the new payload
        store.badges = [...action.payload];
      } else {
        // Add the single payload object to the current badges array
        store.badges = [...store.badges, action.payload];
      }
      store.highestBadgeRank = action.payload[action.payload.length - 1].title
      console.log('badges:', action.payload, store.highestBadgeRank)
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

// PATCH - update username
export const updateUsername = (username) => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ username })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update password
export const updatePassword = (password) => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ password })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setPassword(data.response.password));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update badges
export const updateBadges = (badges) => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;

    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ badges })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setBadges(data.response.badges));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update quiz history
export const updateHistory = (history) => {
  return (dispatch, getState) => {
    const { accessToken, totalScore } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ history })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setHistory(data.response.history));
          dispatch(user.actions.setTotalScore(data.response.history[data.response.history.length - 1].score + totalScore));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
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

// DELETE user account
export const deleteUser = () => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'DELETE',
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
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

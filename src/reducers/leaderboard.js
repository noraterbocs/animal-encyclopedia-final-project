import { createSlice } from '@reduxjs/toolkit';

export const leaderboard = createSlice({
  name: 'leaderboard',
  initialState: {
    items: [],
    leaderboard: '',
    error: null
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload
    },
    setLeaderboard: (store, action) => {
      store.leaderboard = action.payload
    }
  }
});
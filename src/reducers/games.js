/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';
import { user } from './user';

export const games = createSlice({
  name: 'games',
  initialState: {
    generatedStory: null,
    previousStories: [],
    lastGeneratedStoryInDays: 0
  },
  reducers: {
    setGeneratedStory: (store, action) => {
      store.generatedStory = action.payload
      console.log('generated story:', action.payload)
    },
    setPreviousStories: (store, action) => {
      store.previousStories = action.payload
      console.log('previous stories:', action.payload)
    }
  }
});

// POST: Create prompt
export const generateText = (mainCharacter, friends, location, genre) => {
  return async (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const { accessToken } = getState().user;
    console.log(accessToken)
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ mainCharacter, friends, location, genre })
    }
    try {
      const response = await fetch(API_URL('completions'), options);
      const data = await response.json();

      if (data.success) {
        console.log(data)
        dispatch(games.actions.setGeneratedStory(data.response))
      } else {
        console.error(data)
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(loading.actions.setLoading(false));
    }
  };
};

// Get all stories
export const getStories = () => {
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
    fetch(API_URL('completion'), options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(games.actions.setPreviousStories(data.response))
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

import { createSlice } from '@reduxjs/toolkit';
// import { API_URL } from 'utils/urls';
// import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import { loading } from './loading';
import { user } from './user';

export const games = createSlice({
  name: 'games',
  initialState: {
    generatedText: 'Sample text',
    generatedImage: '',
    generatedTitle: 'Sample title',
    previousStories: []
  },
  reducers: {
    setGeneratedText: (store, action) => {
      store.generatedText = action.payload.newGeneratedText
      store.generatedTitle = action.payload.title
      console.log('generated text:', action.payload)
    },
    setGeneratedImage: (store, action) => {
      store.generatedImage = action.payload
      console.log('generated img:', action.payload)
    },
    setPreviousStories: (store, action) => {
      store.previousStories = [...store.previousStories, ...action.payload]
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
        dispatch(games.actions.setGeneratedText(data.response))
        // comment it back if image genenration is on again:
        // dispatch(games.actions.setGeneratedImage(data.response.image))
        // dispatch(user.actions.setError(null))
      } else {
        // dispatch(user.actions.setError('Error'))
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

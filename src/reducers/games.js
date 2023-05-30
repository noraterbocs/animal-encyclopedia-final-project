import { createSlice } from '@reduxjs/toolkit';
// import { API_URL } from 'utils/urls';
// import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import { loading } from './loading';
// import { user } from './user';

export const games = createSlice({
  name: 'games',
  initialState: {
    generatedText: '',
    previousStories: []
  },
  reducers: {
    setGeneratedText: (store, action) => {
      store.generatedText = action.payload
      console.log('generated text:', action.payload)
    }
  }
});

// POST: Create prompt
export const generateText = (mainCharacter, location, friends, genre) => {
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
      body: JSON.stringify({ mainCharacter, location, friends, genre })
    }
    try {
      const response = await fetch(API_URL('completions'), options);
      const data = await response.json();

      if (data.success) {
        console.log(data)
        dispatch(games.actions.setGeneratedText(data.response.newGeneratedText))
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

import { createSlice } from '@reduxjs/toolkit';
// import { API_URL } from 'utils/urls';
// import { useSelector } from 'react-redux';
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
  return (dispatch, getState) => {
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
    fetch('https://animal-encyclopedia-backend-7v5hitnola-no.a.run.app/completions', options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          // dispatch(games.actions.setGeneratedText())
          // dispatch(user.actions.setError(null))
        } else {
          // dispatch(user.actions.setError('Error'))
          console.log(data)
        }
        dispatch(loading.actions.setLoading(false))
        // console.log(data)
      })
  };
};
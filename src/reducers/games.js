import { createSlice } from '@reduxjs/toolkit';
import { OPEN_AI_BASE_URL, API_KEY } from '../utils/urls';
import { loading } from './loading';

export const games = createSlice({
  name: 'games',
  initialState: {
    generatedText: ''
  },
  reducers: {
    setGeneratedText: (store, action) => {
      store.generatedText = action.payload
      console.log('generated text:', action.payload)
    }
  }
});

// POST: Create prompt
export const generateText = () => {
  return async (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line prefer-template
        Authorization: 'Bearer ' + API_KEY,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // model: 'text-davinci-003',
        // prompt: 'Say this is a test',
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Generate a story about a dog' }],
        max_tokens: 10,
        temperature: 1
      })
    }
    await fetch(OPEN_AI_BASE_URL, options)
      .then((response) => response.json())
      .then((data) => {
        // dispatch(games.actions.setGeneratedText(data.choices[0].message.content))
        console.log(data)
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
}
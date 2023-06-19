/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';

export const animalArticles = createSlice({
  name: 'animalArticles',
  initialState: {
    animalText: [],
    loading: false,
    error: 'Information not found'
  },
  reducers: {
    setAnimalText: (store, action) => {
      store.animalText = action.payload;
    },
    setAnimalImages: (store, action) => {
      store.animalImages = action.payload;
    }
  }
});

export const fetchAnimalArticles = (animalName) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(API_URL(`animals/animals/${animalName}`), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(animalArticles.actions.setAnimalText(data.response))
        } else {
          dispatch(animalArticles.actions.setError(data.response.message))
          console.log('error')
        }
      })
      .catch((error) => {
        dispatch(animalArticles.actions.setError(error.message))
        console.log(error)
      })
      .finally(() => {
        dispatch(loading.actions.setLoading(false))
      })
  };
};

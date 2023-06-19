/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';

export const animalArticles = createSlice({
  name: 'animalArticles',
  initialState: {
    animalText: [],
    animalImages: '',
    loading: false,
    error: 'Information not found'
  },
  reducers: {
    setAnimalText: (store, action) => {
      store.animalText = action.payload;
    }
    // setAnimalImages: (store, action) => {
    //   store.animalImages = action.payload;
    // }
  }
});

export const fetchAnimalArticles = (animalName) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))

    fetch(API_URL(`animals/${animalName}`))
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(animalArticles.actions.setAnimalText(data.response))
          // dispatch(animalArticles.actions.setAnimalImages(data.response))
        } else {
          // dispatch(user.actions.setError(data.response.message))
          console.log('error')
        }
      })
      .catch((error) => {
        // dispatch(user.actions.setError(error.message))
        console.log(error)
      })
      .finally(() => {
        dispatch(loading.actions.setLoading(false))
      })
  };
};

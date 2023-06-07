import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';

export const animalArticles = createSlice({
  name: 'animalArticles',
  initialState: {
    animalText: {
      animalName: '',
      animalIntroduction: '',
      animalDiet: '',
      animalReproduction: '',
      animalFacts: ''
    },
    loading: false,
    error: 'Information not found'
  },
  reducers: {
    setAnimalText: (store, action) => {
      store.animalText = action.payload;
    }
  }
});

export const fetchAnimalArticles = () => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))

    fetch(API_URL('animals'))
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(animalArticles.actions.setAnimalText(data.response))
        } else {
          dispatch(loading.actions.setError(data.response.message))
        }
      })
      .catch((error) => {
        dispatch(loading.actions.setError(error.message))
      })
      .finally(() => {
        dispatch(loading.actions.setLoading(false))
      })
  };
};

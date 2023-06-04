import { createSlice } from '@reduxjs/toolkit';

const animalArticles = [
  { id: 352836, name: 'bear', content: '' },
  { id: 353071, name: 'eagle', content: '' },
  { id: 353093, name: 'elephant', content: '' },
  { id: 353145, name: 'fox', content: '' },
  { id: 353182, name: 'giraffe', content: '' },
  { id: 391021, name: 'hedgehog', content: '' },
  { id: 353312, name: 'jaguar', content: '' },
  { id: 353331, name: 'kangaroo', content: '' },
  { id: 353344, name: 'koala', content: '' },
  { id: 353389, name: 'lion', content: '' },
  { id: 353596, name: 'panda', content: '' },
  { id: 353611, name: 'penguin', content: '' },
  { id: 353690, name: 'raccoon', content: '' },
  { id: 353754, name: 'seal', content: '' },
  { id: 353858, name: 'tiger', content: '' },
  { id: 353869, name: 'toucan', content: '' }
];

// const animalArticles = [
//   { bear: 352836 },
//   { eagle: 353071 },
//   { elephant: 353093 },
//   { fox: 353145 },
//   { giraffe: 353182 },
//   { hedgehog: 391021 },
//   { jaguar: 353312 },
//   { kangaroo: 353331 },
//   { koala: 353344 },
//   { lion: 353389 },
//   { panda: 353596 },
//   { penguin: 353611 },
//   { raccoon: 353690 },
//   { seal: 353754 },
//   { tiger: 353858 },
//   { toucan: 353869 }
// ];

const initialState = {
  animalArticles: animalArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
  }, {}),
  loading: false,
  error: 'Article not found'
};

export const articleSlice = createSlice({
  name: 'animalarticles',
  initialState,
  reducers: {
    setArticleContent: (store, action) => {
      const { id, content } = action.payload;
      store.animalArticles[id].content = content;
    }
  }
});

export const { setArticleContent } = articleSlice.actions;


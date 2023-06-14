import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Animal } from 'pages/animalPage/Animal.js';
import { quiz } from 'reducers/quiz.js';
import { TextGeneratorGame } from 'pages/gamesPage/TextGeneratorGame.js';
import { animalArticles } from 'reducers/articles.js';
import StickyFooter from 'Footer.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { Header } from './Header.js';
import { HomePage } from './homePage/HomePage.js';
import { Games } from './gamesPage/Games.js';
import { NotFound } from './NotFound.js';
import { Leaderboard } from './leaderboardPage/Leaderboard.js';
import { AboutUs } from './aboutUsPage/AboutUs.js';
import { MyAccount } from './myAccountPage/MyAccount.js';
import { Login } from './RegisterLoginPage/Login.js';
import { user } from '../reducers/user.js';
import { loading } from '../reducers/loading.js';
import { leaderboard } from '../reducers/leaderboard.js';
import { games } from '../reducers/games.js';

// const theme = createTheme();
const theme = createTheme({
  typography: {
    fontFamily: [
      'Fredoka',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#84a199' // light green
    },
    secondary: {
      main: '#04211F' // dark green
    }
  }
});
export const App = () => {
  // const { location } = useLocation();
  const reducer = combineReducers({
    user: user.reducer,
    leaderboard: leaderboard.reducer,
    loading: loading.reducer,
    quiz: quiz.reducer,
    games: games.reducer,
    animalArticles: animalArticles.reducer

  });
  const store = configureStore({ reducer })
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles styles={{ h1: { color: '#04211F' } }} />
          {/* {
          location.pathname === '/login' ? <Header /> : ''
        } */}
          {/* {window.location.pathname === '/login' ? (
          <Header />
        ) : null} */}
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/storygenerator" element={<TextGeneratorGame />} />
            <Route path="/animal/:animalId" element={<Animal />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
          <StickyFooter />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

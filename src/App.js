import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Animal } from 'pages/animalPage/Animal.js';
import { quiz } from 'reducers/quiz.js';
import { TextGeneratorGame } from 'pages/gamesPage/TextGeneratorGame.js';
import { animalArticles } from 'reducers/articles.js';
import { Header } from './pages/Header.js';
import { HomePage } from './pages/homePage/HomePage.js';
import { Games } from './pages/gamesPage/Games.js';
import { NotFound } from './pages/NotFound.js';
import { Leaderboard } from './pages/leaderboardPage/Leaderboard';
import { AboutUs } from './pages/aboutUsPage/AboutUs';
import { MyAccount } from './pages/myAccountPage/MyAccount';
import { Login } from './pages/RegisterLoginPage/Login';
import { user } from './reducers/user';
import { loading } from './reducers/loading';
import { leaderboard } from './reducers/leaderboard';
import { games } from './reducers/games';

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
    <Provider store={store}>
      <BrowserRouter>
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
      </BrowserRouter>
    </Provider>
  )
}

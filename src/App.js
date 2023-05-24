import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from 'pages/Header.js';
import { HomePage } from 'pages/homePage/HomePage.js';
import { Games } from 'pages/gamesPage/Games.js';
import { NotFoundPage } from 'pages/NotFoundPage.js';
import { Leaderboard } from 'pages/leaderboardPage/Leaderboard';
import { AboutUs } from 'pages/aboutUsPage/AboutUs';
import { MyAccount } from 'pages/myAccountPage/MyAccount';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/animal/:animalId" element={<Games />} />
        <Route path="/games" element={<Games />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

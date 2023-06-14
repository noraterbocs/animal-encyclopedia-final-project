import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, useMediaQuery } from '@mui/material';

export const Scores = () => {
  const totalScore = useSelector((store) => store.user.totalScore)
  const totalQuiz = useSelector((store) => store.user.history).length
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid container xs={isMobileView ? 12 : 3} sx={{ gap: '1em', padding: '0 !important' }}>
      <Grid item xs={12} sx={{ height: '50%', borderRadius: '10%', background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)', padding: '2em !important', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
        <Typography variant="h4">Total score: </Typography>
        <Typography variant="h2">{totalScore}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ height: '50%', borderRadius: '10%', background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)', padding: '2em !important', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
        <Typography variant="h4">Quizzes completed: </Typography>
        <Typography variant="h2">{totalQuiz}</Typography>
      </Grid>
    </Grid>
  );
}
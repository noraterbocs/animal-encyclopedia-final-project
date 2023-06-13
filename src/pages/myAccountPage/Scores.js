import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, useMediaQuery } from '@mui/material';

export const Scores = () => {
  const totalScore = useSelector((store) => store.user.totalScore)
  const totalQuiz = useSelector((store) => store.user.history).length
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid item xs={isMobileView ? 12 : 3} sx={{ padding: '0 !important' }}>
      <Grid item xs={12} sx={{ padding: '2em !important', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
        <Typography variant="h4">Total score: </Typography>
        <Typography variant="h2">{totalScore}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ padding: '2em !important', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
        <Typography variant="h4">Quizzes completed: </Typography>
        <Typography variant="h2">{totalQuiz}</Typography>
      </Grid>
    </Grid>
  );
}
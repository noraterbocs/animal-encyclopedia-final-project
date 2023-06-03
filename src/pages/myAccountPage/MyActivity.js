import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const MyActivity = () => {
  const myActivity = useSelector((store) => store.user.history)
  return (
    <Container>
      <Typography variant="h4">My activity: </Typography>
      {myActivity.map((item) => {
        return (
          <Box key={item.quizname}>
            <Typography>{item.quizname}</Typography>
            <Typography>{item.score}</Typography>
            <Typography>{item.timestamp}</Typography>
          </Box>
        )
      })}
    </Container>
  )
}
import { Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';

export const options = {
  chart: {
    title: 'Score per quiz'
  }
};

export const MyActivity = () => {
  const myActivity = useSelector((store) => store.user.history)
  const performance = [['Date', 'Score']]
  myActivity.map((item) => {
    return performance.push([item.timestamp, item.score])
  })
  console.log(performance)
  return (
    <Container>
      <Typography variant="h4">My activity: </Typography>
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={performance}
        options={options} />
    </Container>
  )
}
import { Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';

export const options = {
  backgroundColor: {
    fill: 'transparent'
  },
  chart: {
    title: 'Score per day'
  },
  chartArea: {
    backgroundColor: '#dfe6e1'
  },
  legend: { position: 'bottom' }
};
export const MyActivity = () => {
  const myActivity = useSelector((store) => store.user.history)
  const today = new Date();

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  // Prepare the chart data
  const performance = [['Date', 'Score']];

  // Create a map to track the score for each date
  const scoreMap = {};

  // Iterate over myActivity to populate the scoreMap
  myActivity.forEach((item) => {
    const date = new Date(item.timestamp).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit'
    });
    if (Object.hasOwn(scoreMap, date)) {
      scoreMap[date] += item.score
    } else {
      scoreMap[date] = item.score;
    }
  });

  // Iterate over the past 7 days to populate the performance array
  const currentDate = new Date(sevenDaysAgo);
  while (currentDate <= today) {
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit'
    });

    const score = scoreMap[formattedDate] || 0;
    performance.push([formattedDate, score]);

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid xs={isMobileView ? 12 : 7} item sx={{ borderRadius: '10%', background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)', padding: '2em !important', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
      <Typography variant="h4">My activity: </Typography>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={performance}
        options={options} />
    </Grid>
  )
}
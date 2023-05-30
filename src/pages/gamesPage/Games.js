import React from 'react';
// import { TextGeneratorGame } from './TextGeneratorGame';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export const Games = () => {
  return (
    // <div>
    //   <h1>Games</h1>
    //   <TextGeneratorGame />
    // </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">Games</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/games/storygenerator">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="story generator"
                height="140"
                image="https://placehold.co/600x400?text=Story+Generator" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
          Story generator
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
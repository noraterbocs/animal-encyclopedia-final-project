import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateText } from 'reducers/games';

export const TextGeneratorGame = () => {
  const dispatch = useDispatch()
  const mainCharacter = 'cat'
  const location = ' jungle'
  const friends = ['zebra', 'dog'].toString()
  const genre = 'comedy'
  const generatedText = useSelector((store) => store.games.generatedText)
  return (
    <div>
      <h1>TextGeneratorGame</h1>
      <Button onClick={() => dispatch(generateText(mainCharacter, location, friends, genre))}>
        Generate text
      </Button>
      <Typography variant="body1">{generatedText}</Typography>
    </div>
  )
}
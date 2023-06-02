/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateText, getStories } from 'reducers/games';
import { PreviousStories } from './PreviousStories';

export const TextGeneratorGame = () => {
  const parameters = [
    {
      url: 'https://placehold.co/600x400?text=',
      title: 'Main character',
      width: '25%',
      id: 'maincharacter',
      options: ['Bear', 'Lion', 'Eagle', 'Penguin']
    },
    {
      url: 'https://placehold.co/600x400?text=',
      title: 'Friends',
      width: '25%',
      id: 'friends',
      options: ['Bear', 'Lion', 'Eagle', 'Penguin']
    },
    {
      url: 'https://placehold.co/600x400?text=',
      title: 'Location',
      width: '25%',
      id: 'location',
      options: ['Asian jungle', 'African savanna', 'Antarctica', 'Australia']
    },
    {
      url: 'https://placehold.co/600x400',
      title: 'Genre',
      width: '25%',
      id: 'genre',
      options: ['Adventure', 'Fantasy', 'Drama', 'Comedy']
    }
  ];
  const dispatch = useDispatch()
  const [selectedOptions, setSelectedOptions] = useState(Array(parameters.length).fill(null));
  const mainCharacter = selectedOptions[0]
  const location = selectedOptions[2]
  const friends = selectedOptions[1]
  const genre = selectedOptions[3]

  const generatedStory = useSelector((store) => store.games.generatedStory)
  console.log(selectedOptions)

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch, generatedStory])

  const handleChange = (event, index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <Container>
      <Typography variant="h2">Story Generator</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {parameters.map((parameter, index) => {
          return (
            <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
              <InputLabel id={`${parameter.id}-title`}>{parameter.title}</InputLabel>
              <Select
                labelId={`${parameter.id}-label`}
                id={`${parameter.id}-select`}
                value={selectedOptions[index]}
                onChange={(event) => handleChange(event, index)}
                label={parameter.title}>
                {parameter.options.map((option) => {
                  return (
                    <MenuItem value={option} key={option}>
                      {option}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )
        })}
      </Box>
      <Box>
        {generatedStory !== null
        && <Card sx={{ maxWidth: '100%' }}>
          <CardHeader
            title={generatedStory.title} />
          <CardMedia
            sx={{ width: 'auto', margin: 'auto' }}
            component="img"
            height="200px"
            image={generatedStory.image}
            alt="new generated image" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ height: 'max-content' }}>
              {generatedStory.newGeneratedText}
            </Typography>
          </CardContent>
          {/* eslint-disable-next-line indent */}
           </Card>}
        <Button onClick={() => selectedOptions !== null && dispatch(generateText(mainCharacter, friends, location, genre))}>
        Generate text
        </Button>
      </Box>
      <Box>
        <PreviousStories />
      </Box>
    </Container>
  )
}
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateText, getStories } from 'reducers/games';
import { getLastGeneratedStoryDate } from 'reducers/user';
// import Countdown from 'react-countdown';
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
  const [isFormValid, setIsFormValid] = useState(false);

  // logged in user's stories:
  // const lastGeneratedStoryDate = useSelector((store) => store.user.lastGeneratedStoryDate)
  // const timeDifference = Math.floor((new Date().getTime() - new Date(lastGeneratedStoryDate).getTime()));
  // const renderer = ({ hours, minutes, seconds }) => {
  //   return <span>{hours}:{minutes}:{seconds} left to generate a new story</span>;
  // };
  // console.log(timeDifference)
  const generatedStory = useSelector((store) => store.games.generatedStory)
  console.log(selectedOptions)

  useEffect(() => {
    dispatch(getStories())
    dispatch(getLastGeneratedStoryDate())
  }, [dispatch, generatedStory])

  const handleChange = (event, index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
    setIsFormValid(newSelectedOptions.every((option) => option !== null));
    // console.log(timeDifference)
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>Story Generator</Typography>
      {/* {timeDifference < 86400000 ? '': */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, justifyContent: 'center' }}>
        {parameters.map((parameter, index) => {
          return (
            <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
              <InputLabel id={`${parameter.id}-title`}>{parameter.title}</InputLabel>
              <Select
                labelId={`${parameter.id}-label`}
                id={`${parameter.id}-select`}
                value={selectedOptions[index]}
                onChange={(event) => handleChange(event, index)}
                label={parameter.title}
                required>
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
      {/* } */}
      <Box>
        {/* <Button disabled={!isFormValid || timeDifference < 86400000} onClick={() => selectedOptions !== null && dispatch(generateText(mainCharacter, friends, location, genre))}> */}
        <Button disabled={!isFormValid} onClick={() => selectedOptions !== null && dispatch(generateText(mainCharacter, friends, location, genre))}>
          {/* {timeDifference < 86400000
            ? <Countdown date={Date.now() + (86400000 - timeDifference)} renderer={renderer} /> : 'Generate Story'} */}
       Generate
        </Button>
      </Box>
      <Box>
        <PreviousStories />
      </Box>
    </Container>
  )
}
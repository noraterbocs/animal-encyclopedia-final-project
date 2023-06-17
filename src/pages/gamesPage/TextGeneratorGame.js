/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateText, getStories } from 'reducers/games';
import { getLastGeneratedStoryDate } from 'reducers/user';
// import Countdown from 'react-countdown';
import { Animation } from 'components/Animation';
import { PreviousStories } from './PreviousStories';
import { MainHeader } from './MainHeader';
import BackgroundAnimals from '../../assets/background/jungle2.jpg'

export const TextGeneratorGame = () => {
  const parameters = [
    {
      url: 'https://placehold.co/600x400?text=',
      title: 'Main character',
      width: '25%',
      id: 'maincharacter',
      options: ['Bear', 'Lion', 'Eagle', 'Penguin', 'Koala', 'Kangaroo', 'Hedgehog', 'Elephant', 'Toucan', 'Jaguar', 'Fox', 'Panda', 'Racoon']
    },
    {
      url: 'https://placehold.co/600x400?text=',
      title: 'Friends',
      width: '25%',
      id: 'friends',
      options: ['Bear', 'Lion', 'Eagle', 'Penguin', 'Koala', 'Kangaroo', 'Hedgehog', 'Elephant', 'Toucan', 'Jaguar', 'Fox', 'Panda', 'Racoon']
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
      options: ['Adventure', 'Fantasy', 'Drama', 'Comedy', 'Action']
    }
  ];
  const dispatch = useDispatch()
  const [selectedOptions, setSelectedOptions] = useState(Array(parameters.length).fill(null));
  const mainCharacter = selectedOptions[0]
  const location = selectedOptions[2]
  const friends = selectedOptions[1]
  const genre = selectedOptions[3]
  const [isFormValid, setIsFormValid] = useState(false);
  const isLoading = useSelector((store) => store.loading.isLoading)

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
  };
  const mainHeader = {
    title: 'Story Generator',
    description:
    'You can unleash your creativity and bring your imagination to life with the help of our AI-powered story generator. Select various options to customize your story, and watch as the AI generates a unique and exciting narrative just for you!',
    image: BackgroundAnimals,
    imageText: 'Image by <a href="https://www.freepik.com/free-vector/organic-flat-jungle-background_13859430.htm#query=jungle%20background%20cartoon&position=35&from_view=search&track=ais#position=35&query=jungle%20background%20cartoon">Freepik</a>'
  };

  return (
    <Container sx={{ height: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative', margin: 0, maxWidth: 'none !important', background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)', paddingBottom: '1em' }}>
      {/* <img style={{ position: 'absolute', minHeight: '100vh', height: '100%', width: '100%', top: '0px', left: '0px', zIndex: '-2', opacity: '0.1' }} src={BackgroundAnimals} alt="main background" /> */}
      <MainHeader post={mainHeader} />
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
      <Box>
        <Button disabled={!isFormValid} onClick={() => selectedOptions !== null && dispatch(generateText(mainCharacter, friends, location, genre))}>
          {isLoading ? <Animation inLine loop position="relative" size="150px" src="https://assets6.lottiefiles.com/packages/lf20_pvjwvcvn.json" />
            : 'Generate'}
        </Button>
      </Box>
      <Box>
        <PreviousStories />
      </Box>
    </Container>
  )
}
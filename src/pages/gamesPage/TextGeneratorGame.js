/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Container, Menu, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateText } from 'reducers/games';
import { Image, ImageButton, ImageBackdrop, ImageSrc, ImageMarked } from './ImageButtonStyle';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props} />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));
export const TextGeneratorGame = () => {
  const dispatch = useDispatch()
  const mainCharacter = 'cat'
  const location = ' jungle'
  const friends = ['zebra', 'dog'].toString()
  const genre = 'comedy'
  const generatedText = useSelector((store) => store.games.generatedText)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
  return (
    <Container>
      <Typography variant="h1">Story Generator</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {parameters.map((parameter) => (
          <>
            <ImageButton
              focusRipple
              key={parameter.id}
              style={{
                width: parameter.width,
                height: '100px'
              }}
              onClick={handleClick}>
              <ImageSrc style={{ backgroundImage: `url(${parameter.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                  }}>
                  {parameter.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button'
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}>
              {parameter.options.map((option) => {
                return (
                  <Typography key={option} onClick={handleClose} disableripple="true">
                    {option}
                  </Typography>
                )
              })}
            </StyledMenu>
          </>
        ))}
      </Box>
      <Button onClick={() => dispatch(generateText(mainCharacter, location, friends, genre))}>
        Generate text
      </Button>
      <Typography variant="body1">{generatedText}</Typography>
    </Container>
  )
}
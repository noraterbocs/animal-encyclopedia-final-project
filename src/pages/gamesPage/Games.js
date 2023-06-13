/* eslint-disable max-len */
import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Image, ImageButton, ImageBackdrop, ImageSrc, ImageMarked } from './ImageButtonStyle';
import BackgroundAnimals from '../../assets/background/landscape.jpg'
import { MainHeader } from './MainHeader';
import BackgroundForest from '../../assets/background/animals.jpg'
import BackgroundGreen from '../../assets/background/green.jpg'

export const Games = () => {
  const images = [
    {
      src: BackgroundForest,
      title: 'Story generator',
      width: '30%',
      id: 'storygenerator',
      alt: '<a href="https://www.freepik.com/free-vector/background-gradient-green-color-modern-abstract-designs_34010087.htm#query=green%20background%20illustration&position=36&from_view=search&track=ais">Image by logturnal</a> on Freepik'
    }
  ];
  const mainHeader = {
    title: "Let's play some games",
    description:
    'This page offers a collection of games to explore. Click on each game to try it out and engage in various challenges and activities.',
    image: BackgroundGreen,
    imageText: 'Image by <a href="https://www.freepik.com/free-vector/comic-style-background_11798698.htm#query=green%20background%20cartoon&position=2&from_view=search&track=ais">Freepik</a>',
    linkText: 'Continue reading…'
  };

  return (
    <>
      <Box>
        <MainHeader post={mainHeader} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1em', minWidth: 300, width: '100%', height: '100%', padding: '1em' }}>
        <img style={{ position: 'absolute', height: '100vh', width: '100%', top: '0px', left: '0px', zIndex: '-2', opacity: '0.7' }} src={BackgroundAnimals} alt="main background" />
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width
            }}>
            <ImageSrc style={{ backgroundImage: `url(${image.src})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Link to={`/games/${image.id}`}>
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
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </Link>
          </ImageButton>
        ))}
        <Typography variant="body1" sx={{ alignSelf: 'flex-end' }}>More games to come...</Typography>
      </Box>
    </>
  );
}
/* eslint-disable max-len */
import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { Image, ImageButton, ImageBackdrop, ImageSrc, ImageMarked } from './ImageButtonStyle';
import BackgroundAnimals from '../../assets/background/jungle2.jpg'
import { MainHeader } from '../../components/MainHeader';
import BackgroundForest from '../../assets/background/animals.jpg'
import { WaitingAnimation } from './WaitingAnimation'

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
    image: BackgroundAnimals,
    imageText: 'Image by <a href="https://www.freepik.com/free-vector/comic-style-background_11798698.htm#query=green%20background%20cartoon&position=2&from_view=search&track=ais">Freepik</a>'
  };

  return (
    <Container sx={{ background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)', maxWidth: 'none !important', padding: '0px !important', minHeight: '100vh', height: '100%' }}>
      <Box>
        <MainHeader post={mainHeader} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1em', minWidth: 300, width: '100%', height: '100%', padding: '1em', justifyContent: 'space-around' }}>
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
        <WaitingAnimation sx={{ alignSelf: 'flex-end' }} />
      </Box>
    </Container>
  );
}
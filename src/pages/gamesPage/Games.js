/* eslint-disable max-len */
import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Image, ImageButton, ImageBackdrop, ImageSrc, ImageMarked } from './ImageButtonStyle';

export const Games = () => {
  const images = [
    {
      url: 'https://placehold.co/600x400?text=Story+Generator',
      title: 'Story generator',
      width: '30%',
      id: 'storygenerator'
    },
    {
      url: 'https://placehold.co/600x400?text=Coming+Soon',
      title: 'Coming soon',
      width: '30%',
      id: 'comingsoon'
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width
          }}>
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
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
    </Box>

  );
}
/* eslint-disable max-len */
/* eslint-disable import/no-absolute-path */
import React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, useMediaQuery } from '@mui/material';

const avatarStyle = {
  width: '75px',
  height: '75px'
};

const iconStyle = {
  fontSize: '2.5rem',
  color: 'secondary.light'
}

export const CardComponent = ({ details }) => {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const cardStyle = {
    width: isMobileView ? 'auto' : '50%',
    maxWidth: 536,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: '20px'
  };
  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Avatar alt={details.name} src={details.image} sx={avatarStyle} />
          <Box sx={{ marginLeft: '1rem' }}>
            <Typography variant={isMobileView ? 'h6' : 'h5'} component="div">
              {details.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
            Frontend developer
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2">
          {details.text}
        </Typography>
        <CardActions sx={{ justifyContent: 'center' }}>
          <IconButton href={details.githublink} target="_blank">
            <GitHubIcon color="primary" sx={iconStyle} />
          </IconButton>
          <IconButton href={details.linkedinlink} target="_blank">
            <LinkedInIcon color="primary" sx={iconStyle} />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
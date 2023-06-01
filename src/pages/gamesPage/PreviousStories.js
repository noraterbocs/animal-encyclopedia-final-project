/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading  */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export const PreviousStories = () => {
  const previousStories = useSelector((store) => store.games.previousStories)
  const userAvatar = useSelector((store) => store.user.avatar)
  const userName = useSelector((store) => store.user.username).charAt[0]

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', gap: '1em' }}>
      {(previousStories.length > 0 || previousStories !== undefined) && previousStories.map((story) => {
        return (
          <Card sx={{ maxWidth: 280 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ backgroundImage: `url(${userAvatar})` }} aria-label="recipe">
                  {userName}
                </Avatar>
              }
              title={story.title}
              subheader={story.createdAt} />
            <CardMedia
              sx={{ width: 'auto', margin: 'auto' }}
              component="img"
              height="200px"
              // if image generator is fixed:   image={story.image}
              image={story.mainCharacter !== null && `/images/${story.mainCharacter.toLowerCase()}.png`}
              alt={`${story.mainCharacter} & ${story.friends}`} />
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ height: 'max-content' }}>
                {story.generatedtext}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </Box>
  );
}
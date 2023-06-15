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
import { format } from 'date-fns'
import ShowMoreText from 'react-show-more-text';
import { useState } from 'react';

export const PreviousStories = () => {
  const previousStories = useSelector((store) => store.games.previousStories)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, gap: '1em', justifyContent: 'center' }}>
      {(previousStories.length > 0 || previousStories !== undefined) && previousStories.map((story) => {
        return (
          <Card key={story.storyId} sx={{ maxWidth: 280 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ backgroundColor: 'transparent' }} aria-label="avatar">
                  <img src={story.userAvatar} alt="avatar" style={{ width: '100%' }} />
                </Avatar>
              }
              title={`posted by ${story.username}`}
              subheader={story.createdAt && format(new Date(story.createdAt), 'MM/dd/yyyy')} />
            <CardMedia
              sx={{ width: 'auto', margin: 'auto' }}
              component="img"
              height="200px"
              image={story.image}
              alt={`${story.mainCharacter} & ${story.friends}`} />
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ height: 'max-content' }}>
                {story.title}
              </Typography>
              <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={() => setIsExpanded(true)}
                expanded={isExpanded}
                truncatedEndingComponent="... ">
                <Typography variant="body2" color="text.secondary" sx={{ height: 'max-content' }}>
                  {story.newGeneratedText}
                </Typography>
              </ShowMoreText>
            </CardContent>
          </Card>
        )
      })}
    </Box>
  );
}
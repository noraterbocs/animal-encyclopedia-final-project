/* eslint-disable max-len */
/* eslint-disable import/no-absolute-path */
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import headerBackground from '../../assets/background/jungle2.jpg'

export const Introduction = () => {
  const mainHeader = {
    imageText: 'Image by <a href="https://www.freepik.com/free-vector/comic-style-background_11798698.htm#query=green%20background%20cartoon&position=2&from_view=search&track=ais">Freepik</a>',
    description: "Introducing Animal Quest, we are two aspiring front-end developers who built Animal Quest as the final project of a six-month bootcamp in web development. Animal Quest aims to educate and engage users through its innovative features. The app presents a captivating quiz section that tests players knowledge about various animals. Users can challenge themselves with intriguing questions and earn points to unlock badges based on their performance. The leaderboard showcases the top scorers, adding a competitive element to the experience. In addition to the quiz, Animal Quest offers a unique chatbot feature powered by OpenAI's API, providing users with an interactive conversation experience. The chatbot, designed to mimic ChatGPT, engages users in entertaining and informative conversations about animals, allowing them to delve deeper into the fascinating world of wildlife. Another exciting aspect of Animal Quest is its story generator, also utilizing OpenAI's powerful capabilities. The app generates captivating stories about animals, complemented by fetching relevant images to enhance the storytelling experience. Users can immerse themselves in the narrative and explore the wonders of the animal kingdom through imaginative tales. Animal Quest also includes a summary page that provides comprehensive information about various animals, ensuring users can expand their knowledge beyond the quizzes and stories. This feature serves as a valuable educational resource, making learning about wildlife enjoyable and accessible. Whether you are an animal enthusiast seeking a fun and informative experience or an avid learner looking to expand your knowledge, Animal Quest is the perfect companion. Join the adventure, collect badges, explore the animal kingdom, and discover the wonders of nature—all within the captivating realm of Animal Quest."
  }
  const headerStyle = { maxWidth: '100vw',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${headerBackground})`,
    backgroundSize: 'cover',
    padding: '0',
    width: '100vw' };
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Card variant="outlined" sx={headerStyle}>
      <Typography color="secondary" variant="h3" sx={{ textAlign: 'center', padding: '1em 0' }}>About Animal Quest</Typography>
      <Typography color="secondary" variant="body1" sx={{ margin: isMobile ? '1em' : '3em', lineHeight: '1.7', backgroundColor: 'rgb(181 197 184 / 50%)', padding: '1em', borderRadius: '10px', color: '#04211F' }}>{mainHeader.description}</Typography>
    </Card>
  );
}
/* eslint-disable max-len */
/* eslint-disable import/no-absolute-path */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import headerBackground from '../../assets/background/jungle2.jpg'

const headerStyle = { maxWidth: '100vw',
  backgroundImage: `url(${headerBackground})`,
  backgroundSize: 'cover',
  margin: '20px',
  padding: '10px' };

const containerStyle = {
  backgroundColor: '#AEC6BF',
  minWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const cardStyle = {
  maxWidth: '45vw',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  margin: '20px'
};

const avatarStyle = {
  width: '75px',
  height: '75px'
};

const iconStyle = {
  fontSize: '2.5rem',
  color: '#04211F'
}

export const AboutUs = () => {
  const noraCard = (
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <Avatar alt="Nora Terbocs" src="/images/AboutUsImg/NoraProfileImg.png" sx={avatarStyle} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h3" component="div">
            Nora Terbocs
          </Typography>
          <Typography variant="h4" color="text.secondary">
            Frontend developer
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2">
        Hey there! I am a frontend developer aspiring to become a fullstack developer.
        I started learning coding by taking free online courses and making small projects
        during my free time. I gained hands-on experience in creating and maintaining Javascript
        applications while working in a product team in customer service operations. Besides that,
        I have also managed IT projects within data migration and process design. Later on, I joined
        a web development bootcamp to round up my knowledge. As a project manager and frontend
        developer, I am great at tackling problems and simplifying complex tasks. Furthermore, I
        have demonstrated a consistent ability to manage my time efficiently while maintaining
        clear and effective communication with stakeholders across diverse functions and
        departments.
      </Typography>
      <CardActions sx={{ justifyContent: 'center' }}>
        <IconButton size="medium" href="https://github.com/noraterbocs" target="_blank">
          <GitHubIcon color="primary" sx={iconStyle} />
        </IconButton>
        <IconButton size="medium" href="https://www.linkedin.com/in/noraterbocs/" target="_blank">
          <LinkedInIcon color="primary" sx={iconStyle} />
        </IconButton>
      </CardActions>
    </CardContent>
  );

  const jenniferCard = (
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <Avatar alt="Jennifer Feenstra-Arengård" src="/images/AboutUsImg/jenniferProfileImg.png" sx={avatarStyle} />
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h3" component="div">
            Jennifer Feenstra-Arengård
          </Typography>
          <Typography variant="h4" color="text.secondary">
            Frontend developer
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2">
        Hello! Welcome to Animal Quest. I hope you are enjoying our App. As for me, I
        am a front-end developer with a background in scientific research. My thesis
        and subsequent work involved developing chemotherapy agents for breast cancer
        and studying the genetic pathways that control embryonic limb formation. Though
        my career shift may seem drastic, I am in search of an interesting and fulfilling
        career. My scientific background has honed my problem-solving skills and attention
        to detail, which I bring to every project I work on. If you find my portfolio and/or this
        project intriguing and would like to discuss either of them, please do not
        hesitate to reach out via one of the links provided.
      </Typography>
      <CardActions sx={{ justifyContent: 'center' }}>
        <IconButton href="https://github.com/jenster5" target="_blank">
          <GitHubIcon color="primary" sx={iconStyle} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/jennifer-feenstra-areng%C3%A5rd-299b1a60/" target="_blank">
          <LinkedInIcon color="primary" sx={iconStyle} />
        </IconButton>
      </CardActions>
    </CardContent>
  );

  return (
    <Container sx={containerStyle}>
      <Box>
        <Card variant="outlined" sx={headerStyle}>
          <Typography variant="h3" sx={{ textAlign: 'center' }}> About Animal Quest</Typography>
          <Typography variant="body2">Introducing Animal Quest, we are two aspiring front-end developers who built Animal Quest as the final project of a six-month
              bootcamp in web development. Animal Quest aims to educate and engage users through its innovative features.
              The app presents a captivating quiz section that tests players knowledge about various animals.
              Users can challenge themselves with intriguing questions and earn points to unlock badges based on their performance.
              The leaderboard showcases the top scorers, adding a competitive element to the experience. In addition to the quiz,
              Animal Quest offers a unique chatbot feature powered by OpenAI&rsquo;s API, providing users with an interactive conversation experience.
              The chatbot, designed to mimic ChatGPT, engages users in entertaining and informative conversations about animals, allowing them
              to delve deeper into the fascinating world of wildlife.

              Another exciting aspect of Animal Quest is its story generator, also utilizing OpenAI&rsquo;s powerful capabilities. The app generates
              captivating stories about animals, complemented by fetching relevant images to enhance the storytelling experience. Users can immerse
              themselves in the narrative and explore the wonders of the animal kingdom through imaginative tales. Animal Quest also includes a summary
              page that provides comprehensive information about various animals, ensuring users can expand their knowledge beyond the quizzes and stories.
              This feature serves as a valuable educational resource, making learning about wildlife enjoyable and accessible.

              Whether you are an animal enthusiast seeking a fun and informative experience or an avid learner looking to expand your knowledge,
              Animal Quest is the perfect companion. Join the adventure, collect badges, explore the animal kingdom, and discover the wonders of
              nature—all within the captivating realm of Animal Quest.
          </Typography>
        </Card>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Card variant="outlined" sx={cardStyle}>{noraCard}</Card>
        <Card variant="outlined" sx={cardStyle}>{jenniferCard}</Card>
      </Box>

    </Container>
  );
}
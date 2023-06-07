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

export const AboutUs = () => {
  const noraCard = (
    <>
      <CardContent>
        <Typography variant="h2" component="div">
        Nora Terbocs
        </Typography>
        <Typography variant="h4" color="text.secondary">
        Frontend developer
        </Typography>
        <Avatar alt="Nora Terbocs" src="/images/AboutUsImg/NoraProfileImg.png" />
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
      </CardContent>
      <CardActions>

        <IconButton size="medium" href="https://github.com/noraterbocs" target="_blank">
          <GitHubIcon color="primary" />
        </IconButton>

        <IconButton size="medium" href="https://www.linkedin.com/in/noraterbocs/" target="_blank">
          <LinkedInIcon color="primary" />
        </IconButton>
      </CardActions>
    </>
  );

  const jenniferCard = (
    <>
      <CardContent>
        <Typography variant="h2" component="div">
        Jennifer Feenstra
        </Typography>
        <Typography variant="h4" color="text.secondary">
        Frontend developer
        </Typography>
        <Avatar alt="Jennifer Feenstra-Arengård" src="/images/AboutUsImg/jenniferProfileImg.png" />
        <Typography variant="body2">
        Hello! Welcome to Animal Quest I hope you are enjoying our App. As for me I
        am a front-end developer with a background in scientific research. My thesis
        and subsequent work involved developing chemotherapy agents for breast cancer
        and studying the genetic pathways that control embryonic limb formation. Though
        my career shift may seem drastic, I am in search of a interesting and fulfilling
        career. My scientific background has honed my problem-solving skills and attention
        to detail, which I bring to every project I work on. If you find my portfolio and/or this
        project intriguing and would like to discuss either of them, please do not
        hesitate to reach out via one of the links provided.
        </Typography>
      </CardContent>
      <CardActions>

        <IconButton size="medium" href="https://github.com/jenster5" target="_blank">
          <GitHubIcon color="primary" />
        </IconButton>

        <IconButton size="medium" href="https://www.linkedin.com/in/jennifer-feenstra-areng%C3%A5rd-299b1a60/" target="_blank">
          <LinkedInIcon color="primary" />
        </IconButton>
      </CardActions>
    </>
  );

  return (
    <Container>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{noraCard}</Card>
        <Card variant="outlined">{jenniferCard}</Card>
      </Box>
    </Container>
  );
}
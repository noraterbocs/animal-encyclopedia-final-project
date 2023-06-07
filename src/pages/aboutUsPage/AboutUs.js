import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const AboutUs = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} />
  );

  const noraCard = (
    <>
      <CardContent>
        <Typography variant="h1" component="div">
        Nora Terbocs
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Frontend developer
        </Typography>
        <Avatar alt="Nora Terbocs" src="/images/NoraProfileImg.png" />
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
        <GitHubIcon color="primary" />
        <LinkedInIcon color="primary" />
      </CardActions>
    </>
  );

  const jenniferCard = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
        </Typography>
        <Typography variant="body2">
        well meaning and kindly
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
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
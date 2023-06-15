/* eslint-disable max-len */
/* eslint-disable import/no-absolute-path */
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';
import { CardComponent } from './CardComponent';
import { Introduction } from './Introduction';

const containerStyle = {
  background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)',
  minWidth: '100vw',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 !important'
};

export const AboutUs = () => {
  const information = [
    { name: 'Nora Terbocs',
      image: '/images/AboutUsImg/NoraProfileImg.png',
      text: 'Hey there! I am a frontend developer aspiring to become a fullstack developer. I started learning coding by taking free online courses and making small projects during my free time. I gained hands-on experience in creating and maintaining Javascript applications while working in a product team in customer service operations. Besides that, I have also managed IT projects within data migration and process design. Later on, I joined a web development bootcamp to round up my knowledge. As a project manager and frontend developer, I am great at tackling problems and simplifying complex tasks. Furthermore, I have demonstrated a consistent ability to manage my time efficiently while maintaining clear and effective communication with stakeholders across diverse functions and departments.',
      githublink: 'https://github.com/noraterbocs',
      linkedinlink: 'https://www.linkedin.com/in/noraterbocs/' },
    { name: 'Jennifer Feenstra-Arengård',
      image: '/images/AboutUsImg/jenniferProfileImg.png',
      text: 'Hello! Welcome to Animal Quest. I hope you are enjoying our App. As for me, I am a front-end developer with a background in scientific research. My thesis and subsequent work involved developing chemotherapy agents for breast cancer and studying the genetic pathways that control embryonic limb formation. Though my career shift may seem drastic, I am in search of an interesting and fulfilling career. My scientific background has honed my problem-solving skills and attention to detail, which I bring to every project I work on. If you find my portfolio and/or this project intriguing and would like to discuss either of them, please do not hesitate to reach out via one of the links provided.',
      githublink: 'https://github.com/jenster5',
      linkedinlink: 'https://www.linkedin.com/in/jennifer-feenstra-areng%C3%A5rd-299b1a60/' }
  ]
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container sx={containerStyle}>
      <Introduction />
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row' }}>
        {information.map((details) => {
          return (
            <CardComponent details={details} />
          )
        })}
      </Box>

    </Container>
  );
}
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Box } from '@mui/material';
import chatbot from '../../assets/animations/chatbot.json';

export const ChatbotAnimation = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '10px',
        display: 'inline-block'
      }}>
      <Player
        loop={5}
        autoplay
        className="chatbot"
        src={chatbot}
        speed={1}
        style={{
          height: '250px',
          width: '250px'
        }}
        background="transparent" />
    </Box>
  );
}

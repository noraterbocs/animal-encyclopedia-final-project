import { Box, Typography, Button, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { useSelector } from 'react-redux';

export const AccountInformation = () => {
  const email = useSelector((store) => store.user.email);
  const username = useSelector((store) => store.user.username);
  return (
    <Container>
      <Typography variant="h4">Account information: </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography>Username: {username}</Typography><Button><EditIcon /></Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography>Email: {email}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography>Password: **********</Typography><Button><EditIcon /></Button>
      </Box>
    </Container>
  )
}
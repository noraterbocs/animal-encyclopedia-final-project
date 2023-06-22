/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Alert, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { registerUser, loginUser } from '../../reducers/user';

const Copyright = (props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Copyright ©  Nora and Jennifer&apos;s Website {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#AEC6BF'
    }
  }
});

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(true);
  const error = useSelector((store) => store.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const isLoading = useSelector((store) => store.loading.isLoading)
  useEffect(() => {
    if (accessToken) {
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  const onFormSubmit = (event) => {
    event.preventDefault()
    if (!checked) {
      dispatch(registerUser(username, email, password))
    } else {
      dispatch(loginUser(email, password))
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?animals)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PetsIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {checked ? 'Sign in' : 'Sign up'}
            </Typography>
            <Box component="form" noValidate onSubmit={onFormSubmit} sx={{ mt: 1 }}>
              {!checked && <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)} />}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password" />
              <FormControlLabel
                control={<Switch
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)} />}
                label={checked ? 'Sign in' : 'Sign up'} />
              {error !== null
              && <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">{error}</Alert></Stack>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: '#F3F9F5' }}>
                {isLoading ? <CircularProgress size={10} thickness={5} sx={{ margin: '0 5px', color: '#ffffff' }} /> : ''}
                {checked ? 'Sign in' : 'Sign up'}
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
};
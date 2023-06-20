/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Button, Container, ThemeProvider, createTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { user } from '../reducers/user';
import Logo from '../assets/encylogo4.png';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Games', path: '/games' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'About Us', path: '/aboutus' },
  { label: 'My account', path: '/myaccount' }
];

export const Header = (props) => {
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentAvatar = useSelector((store) => store.user.avatar)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Fredoka',
        'sans-serif'
      ].join(',')
    },
    palette: {
      primary: {
        main: '#84a199'
      }
    }
  });

  // Excluding pages to show Header:
  const [display, setDisplay] = useState(true)
  useEffect(() => {
    if (location.pathname.includes('animal') || location.pathname.includes('login')) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }, [location])

  const onLogoutButtonClick = () => {
    navigate('/')
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setEmail(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setBadges(null));
    dispatch(user.actions.setHistory(null));
    dispatch(user.actions.setAvatar(null));
    dispatch(user.actions.setTotalScore(null));
    dispatch(user.actions.setCreatedAt(null));
    dispatch(user.actions.setError(null))
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={Logo} alt="animal-quest-logo" style={{ padding: '1em', width: '100px', opacity: 0.8 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink key={item.label} to={item.path} style={{ textDecoration: 'none', color: '#04211F' }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
        <Button color="primary" onClick={onLogoutButtonClick}><LogoutIcon /></Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="100vw">
        {display ? <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}>
                <MenuIcon />
              </IconButton>
              <Box
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
                <img src={Logo} alt="animal-quest-logo" style={{ width: '100px', opacity: 0.8 }} />
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
                {navItems.map((item) => (
                  <NavLink key={item.label} to={item.path} style={{ color: '#04211F', textDecoration: 'none' }}>
                    {item.label === 'My account' ? <Avatar alt={currentAvatar} src={currentAvatar} sx={{ height: '60px', width: '60px', margin: '0' }} />
                      : <Button sx={{ color: '#04211F' }}>{item.label}</Button>}
                  </NavLink>
                ))}
                <Button sx={{ color: '#04211F' }} onClick={onLogoutButtonClick}><LogoutIcon /></Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)' }
              }}>
              {drawer}
            </Drawer>
          </Box>
          <Box component="main">
            <Toolbar />
          </Box>
        </Box> : ''}
      </Container>
    </ThemeProvider>
  );
}
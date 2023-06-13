/* eslint-disable max-len */
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Grid, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword, updateUsername } from 'reducers/user';
import { DeleteAccount } from './DeleteAccount';

export const AccountInformation = () => {
  const dispatch = useDispatch()
  const email = useSelector((store) => store.user.email);
  const username = useSelector((store) => store.user.username);
  const [dialogValue, setDialogValue] = useState('');
  const [open, setOpen] = useState(false);
  // const [setDeleteAccountOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const handleClickOpen = (id) => {
    if (id === 'username') {
      setOpen(true);
    } else if (id === 'password') {
      setChangePasswordOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setChangePasswordOpen(false)
  };
  const handleSaveUsername = () => {
    dispatch(updateUsername(dialogValue))
    setOpen(false);
  }
  const handleSavePassword = () => {
    dispatch(updatePassword(dialogValue))
    setChangePasswordOpen(false);
  }
  // const handleDeleteAccount = () => {
  //   dispatch(deleteUser())
  //   setDeleteAccountOpen(false);
  // }
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Grid item xs={isMobileView ? 12 : 4} sx={{ padding: '2em', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
      <Typography variant="h4">Account information: </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography>Username: {username}</Typography><Button id="username" onClick={() => handleClickOpen('username')}><EditIcon /></Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update information</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Select your new username:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              // id="username"
              label="New Username"
              type="text"
              fullWidth
              onChange={(e) => setDialogValue(e.target.value)}
              variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveUsername}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography>Email: {email}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography>Password: **********</Typography><Button id="password" onClick={() => handleClickOpen('password')}><EditIcon /></Button>
        <Dialog open={changePasswordOpen} onClose={handleClose}>
          <DialogTitle>Update information</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Select your new password:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              // id="password"
              label="New Password"
              type="text"
              fullWidth
              onChange={(e) => setDialogValue(e.target.value)}
              variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSavePassword}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>

      <DeleteAccount />
    </Grid>
  )
}
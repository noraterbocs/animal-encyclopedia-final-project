/* eslint-disable max-len */
import { Box, Typography, Button, Container, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updatePassword, updateUsername } from 'reducers/user';

export const AccountInformation = () => {
  const dispatch = useDispatch()
  const email = useSelector((store) => store.user.email);
  const username = useSelector((store) => store.user.username);
  const [dialogValue, setDialogValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSaveUsername = () => {
    dispatch(updateUsername(dialogValue))
    setOpen(false);
  }
  const handleSavePassword = () => {
    dispatch(updatePassword(dialogValue))
    setOpen(false);
  }
  const handleDeleteAccount = () => {
    dispatch(deleteUser())
    setOpen(false);
  }
  return (
    <Container>
      <Typography variant="h4">Account information: </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography>Username: {username}</Typography><Button onClick={handleClickOpen}><EditIcon /></Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update information</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Select your new username:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="New Psername"
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
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography>Email: {email}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography>Password: **********</Typography><Button onClick={handleClickOpen}><EditIcon /></Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update information</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Select your new password:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="password"
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
      <Box><Button>Delete account</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            Are you sure you want to delete your account?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Please confirm of the deletion of your account.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDeleteAccount} autoFocus>
            Confirm
            </Button>
          </DialogActions>
        </Dialog>
        {/* <Alert severity="success">Your account has been deleted!</Alert> */}
      </Box>
    </Container>
  )
}
/* eslint-disable max-len */
import { Box, Button, Dialog, DialogTitle, DialogActions, DialogContent, Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar } from 'reducers/user';
import { Animation } from '../../components/Animation';

export const ChangeAvatar = () => {
  const dispatch = useDispatch()
  const [accountOpen, setAccountOpen] = useState(false);
  const currentAvatar = useSelector((store) => store.user.avatar)
  const [newAvatar, setNewAvatar] = useState('')
  console.log(newAvatar)
  const handleClickOpen = () => {
    setAccountOpen(true)
  };

  const handleClose = () => {
    setAccountOpen(false)
  };
  const handleChangeAvatar = () => {
    dispatch(changeAvatar(newAvatar))
    setAccountOpen(false);
  }

  const avatars = ['Alligator', 'Horse', 'Koala', 'Moose', 'Penguin', 'pufferfish', 'Rabbit', 'Tiger', 'Warthog']

  return (
    <Box>
      <Button id="changeavatar" onClick={() => handleClickOpen('delete')}>Change Avatar  <Avatar alt={currentAvatar} src={currentAvatar} sx={{ height: '60px', width: '60px', margin: '0' }} /></Button>
      <Dialog
        open={accountOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
            Select your new avatar!
        </DialogTitle>
        <DialogContent sx={{ flexWrap: 'wrap', alignItems: 'center', display: 'flex' }}>
          {avatars.map((avatar) => {
            return (
              <Button onClick={(e) => setNewAvatar(`/images/avatars/${e.target.alt}Avatar.png`)}><Avatar alt={avatar} src={`/images/avatars/${avatar}Avatar.png`} sx={{ height: '60px', width: '60px', margin: '1em 0' }} />
              </Button>
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChangeAvatar} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Alert sx={{ position: 'absolute', top: '50%', left: 0, zIndex: 200 }} severity="success">Your account has been deleted!</Alert> */}
      {newAvatar !== '' ? <Animation src="https://assets3.lottiefiles.com/datafiles/7aeDjIq0a63VZGd/data.json" /> : ''}
    </Box>

  )
}
/* eslint-disable max-len */
import { Box, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'reducers/user';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Animation } from '../../components/Animation';

export const DeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [deletedUser, setDeletedUser] = useState(false)

  const handleClickOpen = () => {
    setDeleteAccountOpen(true)
  };

  const handleClose = () => {
    setDeleteAccountOpen(false)
  };
  const handleDeleteAccount = () => {
    dispatch(deleteUser())
    setDeleteAccountOpen(false);
    setDeletedUser(true)
  }
  if (deletedUser) {
    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  return (
    <Box><Button sx={{ color: '#C24813' }} id="delete" onClick={() => handleClickOpen('delete')}>Delete account <DeleteOutlineIcon /></Button>
      <Dialog
        open={deleteAccountOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
            Are you sure you want to delete your account?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteAccount} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Alert sx={{ position: 'absolute', top: '50%', left: 0, zIndex: 200 }} severity="success">Your account has been deleted!</Alert> */}
      {deletedUser && <Animation src="https://assets9.lottiefiles.com/packages/lf20_aimunqmw.json" />}
    </Box>

  )
}
import React from 'react';
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

const BackButton = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(-1);
  }
  return (
    <Button className="back-btn" type="button" onClick={onBackButtonClick}>
      <ArrowBackIcon />
    </Button>
  )
}

export default BackButton;
/* eslint-disable max-len */
import React from 'react';
import { Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Chatbot } from './ChatBot';

const style = {
  position: 'absolute',
  bottom: '5%',
  right: '5%',
  width: '60vw',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const Summary = () => {
  const answers = useSelector((store) => store.quiz.answers)
  const animalId = useSelector((store) => store.quiz.animalId)
  const correctAnswers = answers.filter((item) => item.isCorrect)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Summary</h1>
      <h2>Congratulations you got {correctAnswers.length}/{answers.length} questions right! Learn more about the {animalId} here</h2>
      <Card>
        <CardContent>
          <p>animal stuff here</p>
        </CardContent>
      </Card>

      <div>
        <Button onClick={handleOpen}>Click here for the!</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Chatbot />
          </Box>
        </Modal>
      </div>
    </div>
  )
}
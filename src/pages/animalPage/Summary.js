/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { quiz } from 'reducers/quiz';
// import { setArticleContent } from 'reducers/articles';
import Confetti from 'react-confetti'
import { ANIMAL_API_KEY } from 'utils/urls';
import { Chatbot } from './ChatBot';
import ChatbotAvatar from '../../assets/chatbot/195.jpg';
import SummaryPicture from '../../assets/summary/summarypic.jpg';

const chatbotStyle = {
  position: 'absolute',
  bottom: '5%',
  right: '5%',
  width: '60vw',
  height: '70vh',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
const summaryStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  height: '70vh',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
const ChatbotAvatarStyle = {
  width: '60px',
  height: '60px'
}

export const Summary = () => {
  // useSelector from quiz reducer
  const answers = useSelector((store) => store.quiz.answers)
  const animalId = useSelector((store) => store.quiz.animalId)
  const correctAnswers = answers.filter((item) => item.isCorrect)
  const dispatch = useDispatch();
  const { quizOver } = useSelector((store) => store.quiz);

  // useSelector from article reducer
  const animalArticles = useSelector((store) => store.animalArticles[animalId])

  const animalArticle = animalArticles.find((article) => article.id === animalId);

  const [summaryModalOpen, setSummaryModalOpen] = React.useState(false);
  const [chatbotModalOpen, setChatbotModalOpen] = React.useState(false);

  const handleOpenSummaryModal = () => setSummaryModalOpen(true);
  const handleCloseSummaryModal = () => setSummaryModalOpen(false);

  const handleOpenChatbotModal = () => setChatbotModalOpen(true);
  const handleCloseChatbotModal = () => setChatbotModalOpen(false);

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleQuizOver = () => {
    if (quizOver) {
      dispatch(quiz.actions.restart());
    }
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleCloseSummaryModal();
    }, 10000);

    handleOpenSummaryModal();

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        const response = await fetch('https://syndication.api.eb.com/production/article/352836/xml', {
          headers: {
            // eslint-disable-next-line prefer-template
            'x-api-key': ANIMAL_API_KEY,
            'Content-Type': 'application/json'
          }
        })

        // const response = await fetch(`https://syndication.api.eb.com/production/article/${animalArticles.id}/xml?key=${ANIMAL_API_KEY}`);
        if (response.ok) {
          const data = await response.text();
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml');
          const articleText = xmlDoc.getElementsByTagName('content')[0].textContent;
          // dispatch(setArticleContent({ id: animalArticles.id, content: articleText }));
          console.log('is the fetched??', articleText);
        } else {
          throw new Error('Failed to fetch article content');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchArticleContent();

    const timer = setTimeout(() => {
      handleCloseSummaryModal();
    }, 10000);

    handleOpenSummaryModal();

    return () => clearTimeout(timer);
  }, [dispatch, animalId]);

  if (!animalArticle) {
    return <p>Article not found</p>
  }

  return (
    <div>

      <div>
        <Modal
          open={summaryModalOpen}
          onClose={handleCloseSummaryModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={summaryStyle}>
            <Card sx={{ backgroundColor: 'green', height: '100%', position: 'relative' }}>
              <Confetti sx={{ position: 'absolute' }} />
              <CardMedia
                sx={{ }}
                image={SummaryPicture}
                title="party background" />
              <CardContent>
                <Typography variant="h1" sx={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>🎉 🥳 You got {correctAnswers.length}/{answers.length} questions right! 🥳 🎉</Typography>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>

      <div>
        <Card>
          <CardContent>
            <Typography variant="h1">Learn more about the {animalId} here</Typography>
            <h1>{animalArticle.name}</h1>
          </CardContent>
        </Card>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleOpenChatbotModal} sx={{ alignItems: 'center' }}>  <img src={ChatbotAvatar} alt="Chatbot Icon" style={ChatbotAvatarStyle} /> Got Questions?</Button>
      </Box>

      <div>
        <Modal
          open={chatbotModalOpen}
          onClose={handleCloseChatbotModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={chatbotStyle}>
            <Chatbot />
          </Box>
        </Modal>
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button onClick={handleQuizOver}>Try more animals</Button>
      </Link>
    </div>
  )
}

// article numbers for animals currently in project
// bear-352836
// eagle-353071
// elephant-353093
// Fox-353145
// giraffe - 353182
// hedgehog - 391021
// jaguar - 353312
// kangaroo - 353331
// Koala - 353344
// lion - 353389
// panda - 353596
// penguin - 353611
// raccoon - 353690
// seal -353754
// tiger - 353858
// toucan - 353869

/* eslint-disable max-len */
import React, { useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { quiz } from 'reducers/quiz';
import Confetti from 'react-confetti'
// import { animalArticles } from 'reducers/articles';
import { fetchAnimalArticles } from 'reducers/articles';
import Stack from '@mui/material/Stack';
import { updateBadges } from 'reducers/user';
import ImageList from '@mui/material/ImageList';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
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

const userBadges = [
  { id: '1', title: 'explorer', path: '/images/badges/Explorer.png', description: 'Congratulations! You have earned the Explorer badge! As an explorer, you have taken your first steps into the exciting world of animals. You have shown curiosity and a keen interest in learning about different species. Keep exploring and discovering fascinating facts about animals from all around the world.' },
  { id: '2', title: 'apprentice', path: '/images/badges/Apprentice.png', description: 'Well done on achieving the Apprentice badge! You are now progressing beyond the beginner stage and showing dedication to expanding your animal knowledge. As an apprentice, you are developing a deeper understanding of various species and their unique characteristics. Continue to explore, ask questions, and grow your expertise in the animal kingdom.' },
  { id: '3', title: 'speciesSleuth', path: '/images/badges/SpeciesSleuth.png', description: 'Fantastic work! You have earned the Species Sleuth badge! As a species sleuth, you have proven yourself to be a skilled investigator of the animal world. You have developed an eye for detail and can identify different species based on their distinctive features. Your knowledge and observation skills are becoming more advanced, enabling you to unravel the secrets of the animal kingdom.' },
  { id: '4', title: 'juniorZoologist', path: '/images/badges/JuniorZoologist.png', description: 'Congratulations on reaching the Junior Zoologist badge! You have now become a young expert in the field of zoology. Your dedication and hard work have paid off, and you have gained a wealth of knowledge about various animal groups, their habitats, and behaviors. Your passion for animals shines through as you continue to explore and deepen your understanding of the incredible diversity of life on Earth.' },
  { id: '5', title: 'seniorZoologist', path: '/images/badges/SeniorZoologist.png', description: 'Well done! You have achieved the prestigious Senior Zoologist badge! As a senior zoologist, you have become a true authority on the subject of animals. Your extensive knowledge and experience make you a valuable resource for others seeking information about the natural world. You have demonstrated a deep understanding of complex concepts and can analyze animal behavior and ecological relationships with expertise.' },
  { id: '6', title: 'wildlifeChampion', path: '/images/badges/WildlifeChampion2.png', description: 'Congratulations! You have reached the pinnacle of animal knowledge and earned the esteemed Wildlife Champion badge! As a wildlife champion, you stand out as a true advocate for the conservation and protection of animal species. Your dedication to preserving the natural world and raising awareness about the importance of wildlife is truly inspiring. You are a role model for others,and your passion and commitment make a significant impact on the future of our planet&apos;s biodiversity.' }
]

export const Summary = () => {
  // useSelector from quiz reducer
  const answers = useSelector((store) => store.quiz.answers)
  const animalId = useSelector((store) => store.quiz.animalId)
  // const allBadges = useSelector((store) => store.quiz.badges)
  const highestBadgeRank = useSelector((store) => store.user.highestBadgeRank)
  // const userBadges = useSelector((store) => store.user.badges)
  const totalScore = useSelector((store) => store.user.totalScore)
  const correctAnswers = answers.filter((item) => item.isCorrect)
  const dispatch = useDispatch();
  const { quizOver } = useSelector((store) => store.quiz);

  // useSelector from article reducer
  const animalText = useSelector((store) => store.animalArticles.animalText);
  // const animalImages = useSelector((store) => store.animalArticles.animalImages)

  useEffect(() => {
    dispatch(fetchAnimalArticles(animalId));
    let newHighestBadgeRank = ''
    if (totalScore > 60) {
      newHighestBadgeRank = 'wildlifeChampion'
    } else if (totalScore > 50) {
      newHighestBadgeRank = 'seniorZoologist'
    } else if (totalScore > 40) {
      newHighestBadgeRank = 'juniorZoologist'
    } else if (totalScore > 30) {
      newHighestBadgeRank = 'speciesSleuth'
    } else if (totalScore > 20) {
      newHighestBadgeRank = 'apprentice'
    } else {
      newHighestBadgeRank = 'explorer'
    }
    const newBadge = userBadges.find((badge) => badge.title === newHighestBadgeRank)
    if (newHighestBadgeRank !== highestBadgeRank) {
      dispatch(updateBadges(newBadge))
      console.log('earning a new badge:', 'newHighestBadgeRank:', newHighestBadgeRank, 'highestBadgeRank:', highestBadgeRank, 'newBadge:', newBadge)
    }
  }, []);

  const [summaryModalOpen, setSummaryModalOpen] = React.useState(false);
  const [chatbotModalOpen, setChatbotModalOpen] = React.useState(false);

  const handleOpenSummaryModal = () => setSummaryModalOpen(true);
  const handleCloseSummaryModal = () => setSummaryModalOpen(false);

  const handleOpenChatbotModal = () => setChatbotModalOpen(true);
  const handleCloseChatbotModal = () => setChatbotModalOpen(false);

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
  console.log('Animal Text:', animalText);
  console.log('Animal ID:', animalId);

  // const animalIntroduction = animalText ? animalText.animalIntroduction : '';
  // const animalDiet = animalText ? animalText.animalDiet : '';
  // const animalReproduction = animalText ? animalText.animalReproduction : '';
  // const animalFacts = animalText ? animalText.animalFacts : '';

  // const animalArticle = animalText ? animalText[animalId] : null;
  // // const animalArticle = animalText[animalId];
  // console.log('Animal Article:', animalArticle);
  // if (!animalArticle) {
  //   console.log('Animal text not found:', animalId);
  //   return <p>Article not found</p>
  // }

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
            <Typography variant="h2">Learn more about the {animalId} here</Typography>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana" />
            <Stack spacing={2}>
              <Typography variant="h3">The {animalId}</Typography>

              <Typography variant="h4">Introduction</Typography>
              <Typography variant="body2">{animalText.animalIntroduction}</Typography>

              <Typography variant="h4">Diet</Typography>
              <Typography variant="body2">{animalText.animalDiet}</Typography>

              <Typography variant="h4">Reproduction</Typography>
              <Typography variant="body2">{animalText.animalReproduction}</Typography>

              <Typography variant="h4">Interesting Facts</Typography>
              <Typography variant="body2">{animalText.animalFacts}</Typography>

              <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                <ImageListItem>
                  <img src={animalText.imageURL1} alt={animalId} />
                  <img src={animalText.imageURL2} alt={animalId} />
                  <img src={animalText.imageURL3} alt={animalId} />
                </ImageListItem>
              </ImageList>

            </Stack>
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
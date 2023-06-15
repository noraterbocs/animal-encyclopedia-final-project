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
import { fetchAnimalArticles } from 'reducers/articles';
import Grid from '@mui/material/Grid';
import { updateBadges } from 'reducers/user';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Chatbot } from './ChatBot';
import ChatbotAvatar from '../../assets/chatbot/chatbot.png';
import SummaryPicture from '../../assets/summary/summarypic.jpg';
import Amazing from '../../assets/animations/amazing3.gif';
import BackgroundImage from '../../assets/background/jungle2.jpg';

const rootStyle = {
  // margin: '0 !important',
  // padding: '0 !important',
  width: '100vw',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const chatbotStyle = {
  position: 'absolute',
  bottom: '10%',
  left: '10%',
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
  width: '20rem',
  height: '20rem'
};

const subtitleStyle = { fontSize: '2rem',
  textAlign: 'center',
  backgroundColor: 'rgba(243, 249, 245, 0.8)',
  borderRadius: '25px',
  margin: '0.8rem' };

const textStyle = { fontSize: '2rem',
  padding: '15px',
  backgroundColor: 'rgba(243, 249, 245, 0.8)',
  borderRadius: '25px',
  margin: '0.8rem',
  color: '#21514C' }

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
  const highestBadgeRank = useSelector((store) => store.user.highestBadgeRank)
  const totalScore = useSelector((store) => store.user.totalScore)
  const correctAnswers = answers.filter((item) => item.isCorrect)
  const dispatch = useDispatch();
  const { quizOver } = useSelector((store) => store.quiz);

  // useSelector from article reducer
  const animalText = useSelector((store) => store.animalArticles.animalText);

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
  }, [highestBadgeRank, totalScore]);

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

  return (
    <div style={rootStyle}>

      <Modal
        open={summaryModalOpen}
        onClose={handleCloseSummaryModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={summaryStyle}>
          <Card sx={{ backgroundColor: '#AEC6BF', height: '100%', position: 'relative' }}>
            <Confetti sx={{ position: 'absolute' }} />
            <CardMedia
              sx={{ }}
              image={SummaryPicture}
              title="party background" />
            <CardContent>
              <Typography variant="h1" sx={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Fredoka One' }}>
                <img src={Amazing} alt="Amazing" style={{ width: '80vw', margin: '0' }} />
                You got {correctAnswers.length} points!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ textAlign: 'center', backgroundColor: 'rgba(243, 249, 245, 0.8)', borderRadius: '25px', display: 'inline-block' }}>Learn more about the {animalId}</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>

            <Grid item xs={12}>
              <Typography variant="h4" style={subtitleStyle}>Introduction</Typography>
              <Typography variant="body1" style={textStyle}>{animalText.animalIntroduction}</Typography>
            </Grid>

            <Grid item xs={12}>
              <img src={animalText.imageURL1} alt={animalId} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" style={subtitleStyle}>Diet</Typography>
              <Typography variant="body1" style={textStyle}>{animalText.animalDiet}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <img src={animalText.imageURL2} alt={animalId} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" style={subtitleStyle}>Reproduction</Typography>
              <Typography variant="body1" style={textStyle}>{animalText.animalReproduction}</Typography>
            </Grid>

            <Grid item xs={12}>
              <img src={animalText.imageURL3} alt={animalId} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" style={subtitleStyle}>Interesting Facts</Typography>
              <Typography variant="body1" style={textStyle}>{animalText.animalFacts}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button onClick={handleOpenChatbotModal} sx={{ alignItems: 'center' }}>  <img src={ChatbotAvatar} alt="Chatbot Icon" style={ChatbotAvatarStyle} /> Got Questions? Chatbot has Answers!</Button>
        </Box>

        <Modal
          open={chatbotModalOpen}
          onClose={handleCloseChatbotModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">

          <Box sx={chatbotStyle}>
            <Chatbot />
          </Box>
        </Modal>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button onClick={handleQuizOver} variant="outlined" sx={{ color: '#21514C' }}>Try more animals</Button>
        </Link>
      </Grid>
    </div>
  )
}
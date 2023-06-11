/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/urls';
import { loading } from './loading';

export const user = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    username: '',
    password: '',
    email: '',
    avatar: 'https://picsum.photos/200',
    badges: [{ id: '1', title: 'explorer', path: '/images/badges/Explorer.png', description: 'Congratulations! You have earned the Explorer badge! As an explorer, you have taken your first steps into the exciting world of animals. You have shown curiosity and a keen interest in learning about different species. Keep exploring and discovering fascinating facts about animals from all around the world.' }],
    // history: [{ quiz: 'bear', score: 10, timestamp: '2023-06-03T09:04:53.761Z' }, { quiz: 'toucan', score: 5, timestamp: '2023-06-02T09:04:53.761Z' }],
    history: [],
    totalScore: 0,
    createdAt: '',
    // accessToken: '39804dfc98c71614f0ceaf199012274f03ef7037125e16dfe0c08b6f7e09a9e9d1818df9e7dd47ac1fef7b422d43ecc306a18e4ff2cd3f9093c262f85e492c6704e74b39f6827f6cebf676f43aaacba8fc19989c8d7dbdc6a557b684af64f64d1db1307a13104080cf1729794b2cbbe99901d5a1186fe08a7cd8bb9592abfc55',
    accessToken: null,
    error: null,
    mode: 'login',
    lastGeneratedStoryDate: ''
  },
  reducers: {
    // modifies the state directly
    setUserId: (store, action) => {
      store.userId = action.payload
      console.log('userId:', action.payload)
    },
    //  modifies the state indirectly
    // setUserId: (state, action) => {
    //   return Object.assign({}, state, { userId: action.payload });
    // },
    setUsername: (store, action) => {
      store.username = action.payload
      console.log('username:', action.payload)
    },
    setPassword: (store, action) => {
      store.password = action.payload
      console.log('password:', action.payload)
    },
    setEmail: (store, action) => {
      store.email = action.payload
      console.log('email:', action.payload)
    },
    setAvatar: (store, action) => {
      store.avatar = action.payload
      console.log('avatar:', action.payload)
    },
    setBadges: (store, action) => {
      store.badges = action.payload
      console.log('badges:', action.payload)
    },
    setHistory: (store, action) => {
      store.history = action.payload
      console.log('history:', action.payload)
    },
    setTotalScore: (store, action) => {
      store.totalScore = action.payload
      console.log('totalscore:', action.payload)
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
      console.log('accessToken:', action.payload)
    },
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload
      console.log('createdAt:', action.payload)
    },
    setError: (store, action) => {
      store.error = action.payload
      console.log('error:', action.payload)
    },
    setMode: (store, action) => {
      store.mode = action.payload
    },
    setLastGeneratedStoryDate: (store, action) => {
      store.lastGeneratedStoryDate = action.payload
      console.log('date for last gen story:', action.payload)
    }
  }
});

// POST: register a user
export const registerUser = (username, email, password) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }
    fetch(API_URL('register'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null))
          console.log(data)
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response))
          dispatch(loading.actions.setLoading(false))
        }
      })
  };
};

// POST: login user
export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'accessToken'
      },
      body: JSON.stringify({ email, password })
    }
    fetch(API_URL('login'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response))
          dispatch(loading.actions.setLoading(false))
        }
      })
  };
};

// GET user data
export const getUser = () => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setAvatar(data.response.avatar));
          dispatch(user.actions.setBadges(data.response.badges));
          dispatch(user.actions.setCreatedAt(data.response.createdAt));
          dispatch(user.actions.setTotalScore(data.response.totalScore));
          dispatch(user.actions.setHistory(data.response.history));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

// PATCH - update username
export const updateUsername = (username) => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ username })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update password
export const updatePassword = (password) => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ password })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setPassword(data.response.password));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update TotalScore
export const updateTotalScore = (totalScore) => {
  console.log('updateTotalScore')
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ totalScore })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setTotalScore(data.response.totalScore));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update badges
// From badges.js--Tooltip key={badge.title} title={`${badge.title}: ${badge.description}`}>
const userBadges = [
  { id: '1', title: 'explorer', path: '/images/badges/Explorer.png', description: 'Congratulations! You have earned the Explorer badge! As an explorer, you have taken your first steps into the exciting world of animals. You have shown curiosity and a keen interest in learning about different species. Keep exploring and discovering fascinating facts about animals from all around the world.' },
  { id: '2', title: 'apprentice', path: '/images/badges/Apprentice.png', description: 'Well done on achieving the Apprentice badge! You are now progressing beyond the beginner stage and showing dedication to expanding your animal knowledge. As an apprentice, you are developing a deeper understanding of various species and their unique characteristics. Continue to explore, ask questions, and grow your expertise in the animal kingdom.' },
  { id: '3', title: 'speciesSleuth', path: '/images/badges/SpeciesSleuth.png', description: 'Fantastic work! You have earned the Species Sleuth badge! As a species sleuth, you have proven yourself to be a skilled investigator of the animal world. You have developed an eye for detail and can identify different species based on their distinctive features. Your knowledge and observation skills are becoming more advanced, enabling you to unravel the secrets of the animal kingdom.' },
  { id: '4', title: 'juniorZoologist', path: '/images/badges/JuniorZoologist.png', description: 'Congratulations on reaching the Junior Zoologist badge! You have now become a young expert in the field of zoology. Your dedication and hard work have paid off, and you have gained a wealth of knowledge about various animal groups, their habitats, and behaviors. Your passion for animals shines through as you continue to explore and deepen your understanding of the incredible diversity of life on Earth.' },
  { id: '5', title: 'seniorZoologist', path: '/images/badges/SeniorZoologist.png', description: 'Well done! You have achieved the prestigious Senior Zoologist badge! As a senior zoologist, you have become a true authority on the subject of animals. Your extensive knowledge and experience make you a valuable resource for others seeking information about the natural world. You have demonstrated a deep understanding of complex concepts and can analyze animal behavior and ecological relationships with expertise.' },
  { id: '6', title: 'wildlifeChampion', path: '/images/badges/WildlifeChampion2.png', description: 'Congratulations! You have reached the pinnacle of animal knowledge and earned the esteemed Wildlife Champion badge! As a wildlife champion, you stand out as a true advocate for the conservation and protection of animal species. Your dedication to preserving the natural world and raising awareness about the importance of wildlife is truly inspiring. You are a role model for others,and your passion and commitment make a significant impact on the future of our planet&apos;s biodiversity.' }
]
export const updateBadges = (badges) => {
  return (dispatch, getState) => {
    const { accessToken, totalScore } = getState().user;

    let badgeRank = '';
    if (totalScore > 60) {
      badgeRank = 'wildlifeChampion';
    } else if (totalScore > 50) {
      badgeRank = 'seniorZoologist';
    } else if (totalScore > 40) {
      badgeRank = 'juniorZoologist';
    } else if (totalScore > 30) {
      badgeRank = 'speciesSleuth';
    } else if (totalScore > 20) {
      badgeRank = 'apprentice';
    } else if (totalScore > 10) {
      badgeRank = 'explorer';
    }

    const currentBadgeIndex = badges.findIndex((badge) => Object.prototype.hasOwnProperty.call(badge, badgeRank));
    if (currentBadgeIndex !== -1) {
      return;
    }

    const updatedBadges = [...badges, { [badgeRank]: userBadges.find((badge) => Object.prototype.hasOwnProperty.call(badge, badgeRank))[badgeRank] }];

    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ badges: updatedBadges })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setBadges(data.response.badges));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// PATCH - update History
export const updateHistory = (history) => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ history })
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setHistory(data.response.history));
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  };
};

// GET date of last generated Story
export const getLastGeneratedStoryDate = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(false))
    const { accessToken } = getState().user;
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('completion/lastgeneratedstory'), options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(user.actions.setLastGeneratedStoryDate(data.response))
        } else {
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

// DELETE user account
export const deleteUser = () => {
  return (dispatch, getState) => {
    const { accessToken } = getState().user;
    const options = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('user'), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setError(null))
        } else {
          dispatch(user.actions.setError(data.response.message))
          dispatch(loading.actions.setLoading(false))
        }
      })
      .finally(() => setTimeout(() => dispatch(loading.actions.setLoading(false)), 5000))
  };
};

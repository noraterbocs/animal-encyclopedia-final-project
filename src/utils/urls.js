// Server for user data & progress
const BASE_URL = 'https://animal-encyclopedia-backend-7v5hitnola-no.a.run.app';
// const BASE_URL = 'http://localhost:8080';
export const API_URL = (slug) => `${BASE_URL}/${slug}`
// OPEN AI API KEY
export const API_KEY = process.env.REACT_APP_API_KEY
// export const ANIMAL_API_KEY = process.env.REACT_APP_ANIMAL_API_KEY
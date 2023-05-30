// Server for user data & progress
const BASE_URL = 'https://animal-encyclopedia-backend-7v5hitnola-no.a.run.app';
export const API_URL = (slug) => `${BASE_URL}/${slug}`
// OPEN AI API KEY
export const API_KEY = process.env.REACT_APP_API_KEY
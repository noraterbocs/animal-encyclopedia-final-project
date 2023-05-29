// Server for user data & progress
const BASE_URL = 'https://project-auth-hwmybixkua-lz.a.run.app';
export const API_URL = (slug) => `${BASE_URL}/${slug}`
// OPEN AI API KEY
export const API_KEY = process.env.REACT_APP_API_KEY

// Text completion OPEN AI API
export const OPEN_AI_BASE_URL = 'https://api.openai.com/v1/chat/completions'
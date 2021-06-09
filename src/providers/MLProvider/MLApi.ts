import axios from 'axios';

export const MLApi = axios.create({ baseURL: process.env.ML_URL });

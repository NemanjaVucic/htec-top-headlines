import axios from 'axios';

import { API_KEY } from './shared/constants/api';

const instance = axios.create({
  baseURL: 'https://localhost:3000/',
  headers: { 'X-Api-Key': API_KEY },
});

export default instance;

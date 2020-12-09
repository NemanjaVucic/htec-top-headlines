import axios from 'axios';

const API_KEY = '3f0c01386cbb462286d052d9dbfcca47';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines/',
  headers: { 'X-Api-Key': API_KEY },
});

export default instance;

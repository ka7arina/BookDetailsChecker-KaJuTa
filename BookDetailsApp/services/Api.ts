import axios from 'axios';

//replace with your own API URL and make sure it is not localhost!!
const API_URL = 'http:// IPv4-Adresse:3000';

const Api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
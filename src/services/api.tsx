import axios from 'axios';

const API = axios.create({
  baseURL: 'https://gds.gipsyy.com.br/api/GipsyyWeb/',
});

export const API_BACK_END = axios.create({
  baseURL: 'https://backend.gipsyy.com.br/api/',
});

export default API;

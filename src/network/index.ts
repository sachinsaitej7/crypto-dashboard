
import axios from 'axios';
import { COIN_GECO_API_URL } from '@/constants/network';
import { getHeaders } from './utils';

const api = axios.create({
    baseURL: COIN_GECO_API_URL,
    headers: getHeaders(),
    timeout: 10000,
});


export default api;
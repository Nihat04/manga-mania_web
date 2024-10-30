import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import { API_URL } from '../config';

const token = localStorage.getItem('lcTk');

export const cache = setupCache({
    maxAge: 15 * 60 * 1000,
});

const apiInstance = axios.create({
    baseURL: API_URL + 'api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : null,
    },
    cache: cache,
});

export default apiInstance;

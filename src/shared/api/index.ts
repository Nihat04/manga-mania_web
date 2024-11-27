import axios from 'axios';

import { API_URL } from '../config';

const token = localStorage.getItem('lcTk');

const apiInstance = axios.create({
    baseURL: API_URL + '',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : null,
    },
});

export default apiInstance;

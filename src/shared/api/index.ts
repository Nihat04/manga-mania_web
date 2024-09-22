import axios from 'axios';

// export const BASE_URL = 'https://192.168.1.64:7144/';
export const BASE_URL = 'https://localhost:7144/';

const token = localStorage.getItem('lcTk');

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : null,
    },
});

export default axiosInstance;

import apiInstance from '../../../shared/api';

export async function login({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    const response = await apiInstance.post('accounts/login', {
        email,
        password,
    });

    const data = await response.data;
    localStorage.setItem('lcTk', data.token);
    localStorage.setItem('lcRcTk', data.refreshToken);
}

export async function register() {}

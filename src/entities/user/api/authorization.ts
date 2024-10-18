import apiInstance from '../../../shared/api';

function setUser(responseData: { token: string; refreshToken: string }) {
    localStorage.setItem('lcTk', responseData.token);
    localStorage.setItem('lcRcTk', responseData.refreshToken);
}

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
    setUser(data);
}

export async function register({
    email,
    password,
    passwordConfirm,
    displayName,
}: {
    email: string;
    password: string;
    passwordConfirm: string;
    displayName: string;
}) {
    const response = await apiInstance.post('accounts/register', {
        email,
        password,
        passwordConfirm,
        displayName,
        firstName: '',
        lastName: '',
    });
    console.log(response);
    const data = await response.data;
    setUser(data);
}

import styles from '../styles/index.module.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from '../../../entities/user/api';

import loginLogo from '../assets/svg/login.svg';

type authData = {
    email: string;
    password: string;
};

export const AuthPage = () => {
    const { register, handleSubmit } = useForm<authData>();
    const navigate = useNavigate();
    const authorize = (data: authData) => {
        login(data)
            .then(() => navigate(-1))
            .catch((err) => console.log(err));
    };

    return (
        <main className={styles['main']}>
            <section className={styles['auth']}>
                <img className={styles['img']} src={loginLogo} />
                <form
                    className={styles['form']}
                    onSubmit={handleSubmit((data: authData) => authorize(data))}
                >
                    <input
                        className={styles['input']}
                        {...register('email', {
                            required: `Поле Mail обязательно к заполнению`,
                        })}
                        type="text"
                        placeholder="Mail"
                    />
                    <input
                        className={styles['input']}
                        {...register('password', {
                            required: `Поле Password обязательно к заполнению`,
                        })}
                        type="password"
                        placeholder="Password"
                    />
                    <button className={styles['btn']} type="submit">
                        LOGIN
                    </button>
                </form>
            </section>
        </main>
    );
};

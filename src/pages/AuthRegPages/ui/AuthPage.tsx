import styles from '../styles/index.module.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { login } from '../../../entities/user/api';

import loginLogo from '../assets/svg/login.svg';
import { createNotification } from '../../../features/notifications';

type authData = {
    email: string;
    password: string;
};

export const AuthPage = () => {
    const { register, handleSubmit } = useForm<authData>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authorize = (data: authData) => {
        login(data)
            .then(() => navigate(-1))
            .catch((err) => {
                createNotification({
                    header: 'Ошибка авторизации',
                    bodyText: err.message,
                })(dispatch);
            });
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
                    <button
                        className={classNames(styles['btn'], 'btn-da')}
                        type="submit"
                    >
                        LOGIN
                    </button>
                </form>
            </section>
        </main>
    );
};

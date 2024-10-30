import styles from '../styles/index.module.css';

import { useForm } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import classNames from 'classnames';

import { login } from '../../../entities/user/api';
import { createNotification } from '../../../features/notifications';
import { SimpleLoader } from '../../../widgets/ui/Loader';

import loginLogo from '../assets/svg/login.svg';

type authData = {
    email: string;
    password: string;
};

export const AuthPage = () => {
    const { register, handleSubmit } = useForm<authData>();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [loaderVisible, setLoaderVisible] = useState<boolean>(false);

    const authorize = (data: authData) => {
        setLoaderVisible(true);
        login(data)
            .then(() => {
                const nextPage = searchParams.get('next');

                if (nextPage) location.href = nextPage;
                location.href = '/';
            })
            .catch((err) => {
                createNotification({
                    header: 'Ошибка авторизации',
                    bodyText: err.message,
                })(dispatch);
            }).finally(() => setLoaderVisible(false));
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
                <Link className={styles['bottom-link']} to={'/register'}>Создать аккаунт</Link>
            </section>
            <section className={styles['loader']}>
                {loaderVisible && <SimpleLoader />}
            </section>
        </main>
    );
};

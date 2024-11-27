import styles from '../styles/index.module.css';

import { Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { register as registerApi } from '../../../entities/user/api';

import loginLogo from '../assets/svg/login.svg';
import { createNotification } from '../../../features/notifications';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { SimpleLoader } from '../../../widgets/ui/Loader';

type regData = {
    email: string;
    password: string;
    passwordConfirm: string;
    displayName: string;
};

export const RegPage = () => {
    const { register, handleSubmit } = useForm<regData>();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [loaderVisible, setLoaderVisible] = useState<boolean>(false);

    const regUser = (data: regData) => {
        if (data.password !== data.passwordConfirm) {
            createNotification({
                header: 'Ошибка регистрации',
                bodyText: 'Пароли не совпадают',
            })(dispatch);
            return;
        }

        setLoaderVisible(true);

        registerApi(data)
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
            })
            .finally(() => setLoaderVisible(false));
    };

    return (
        <main className={styles['main']}>
            <section className={styles['auth']}>
                <img className={styles['img']} src={loginLogo} />
                <form
                    className={styles['form']}
                    onSubmit={handleSubmit(regUser)}
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
                        {...register('displayName', {
                            required: `Поле Username обязательно к заполнению`,
                        })}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        className={styles['input']}
                        {...register('password', {
                            required: `Поле Password обязательно к заполнению`,
                        })}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className={styles['input']}
                        {...register('passwordConfirm', {
                            required: `Поле Repeat Password обязательно к заполнению`,
                        })}
                        type="password"
                        placeholder="Repeat Password"
                    />
                    <button
                        className={classNames(styles['btn'], 'btn-da')}
                        type="submit"
                    >
                        REGISTER
                    </button>
                </form>
                <Link className={styles['bottom-link']} to={'/login'}>
                    Войти в аккаунт
                </Link>
            </section>
            <section className={styles['loader']}>
                {loaderVisible && <SimpleLoader />}
            </section>
        </main>
    );
};

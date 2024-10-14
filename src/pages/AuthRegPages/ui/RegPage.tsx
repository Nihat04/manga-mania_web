import styles from '../styles/index.module.css';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { register as registerApi } from '../../../entities/user/api';

import loginLogo from '../assets/svg/login.svg';

type regData = {
    email: string;
    password: string;
    passwordConfirm: string;
    displayName: string;
};

export const RegPage = () => {
    const { register, handleSubmit } = useForm<regData>();
    const navigate = useNavigate();

    const regUser = (data: regData) => {
        if (data.password !== data.passwordConfirm) {
            console.log('Password not the same');
            return;
        }

        registerApi(data)
            .then(() => navigate(-1))
            .catch((err) => console.log(err));
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
                    <button className={styles['btn']} type="submit">
                        LOGIN
                    </button>
                </form>
            </section>
        </main>
    );
};

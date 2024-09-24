import styles from './styles/index.module.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from '../../entities/user/api';

import loginLogo from './assets/svg/login.svg';

const AuthPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const authorize = (data: { email: string; password: string }) => {
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
                    onSubmit={handleSubmit(authorize)}
                >
                    <input
                        className={styles['input']}
                        {...register('email', {
                            required: 'enter an email',
                        })}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        className={styles['input']}
                        {...register('password', {
                            required: 'enter an password',
                        })}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.lastName && <p>Last name is required.</p>}
                    {errors.age && <p>Please enter number for age.</p>}
                    <button className={styles['btn']} type="submit">
                        LOGIN
                    </button>
                </form>
            </section>
        </main>
    );
};

export default AuthPage;

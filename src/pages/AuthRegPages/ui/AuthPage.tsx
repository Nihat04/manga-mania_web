import styles from '../styles/index.module.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from '../../../entities/user/api';
import { field } from '../model';

import loginLogo from '../assets/svg/login.svg';

const FIELDS: field[] = [
    {
        name: 'email',
        isRequired: true,
        placeholder: 'Mail',
        type: 'text',
    },
    {
        name: 'password',
        isRequired: true,
        placeholder: 'Password',
        type: 'password',
    },
];

export const AuthPage = () => {
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
                    {FIELDS.map((field, index) => (
                        <input
                            key={index}
                            className={styles['input']}
                            {...register(field.name, {
                                required: `Поле ${field.placeholder} обязательно к заполнению`,
                            })}
                            type={field.type}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <button className={styles['btn']} type="submit">
                        LOGIN
                    </button>
                </form>
            </section>
        </main>
    );
};

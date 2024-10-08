import styles from '../styles/index.module.css';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { register as registerApi } from '../../../entities/user/api';
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
        name: 'displayName',
        isRequired: true,
        placeholder: 'Username',
        type: 'text',
    },
    {
        name: 'password',
        isRequired: true,
        placeholder: 'Password',
        type: 'password',
    },
    {
        name: 'passwordConfirm',
        isRequired: true,
        placeholder: 'Repeat Password',
        type: 'password',
    },
];

export const RegPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const regUser = (data: {
        email: string;
        password: string;
        passwordConfirm: string;
    }) => {
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

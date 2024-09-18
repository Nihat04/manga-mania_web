import styles from './styles/index.module.css';

import { useForm } from 'react-hook-form';

import loginLogo from './assets/svg/login.svg';

const AuthPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <main className={styles['main']}>
            <section className={styles['auth']}>
                <img className={styles['img']} src={loginLogo} />
                <form
                    className={styles['form']}
                    onSubmit={handleSubmit((data) => console.log(data))}
                >
                    <input
                        className={styles['input']}
                        {...register('firstName')}
                        placeholder="Username"
                    />
                    <input
                        className={styles['input']}
                        {...register('lastName', { required: true })}
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

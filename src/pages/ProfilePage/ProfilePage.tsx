import styles from './styles/ProfilePage.module.css';

import { ReactElement } from 'react';

import Filters from '../../shared/ui/Filters/Filters';
import ProfileDropdownTab from './ui/ProfileDropdownTab/ProfileDropdownTab';

type profileTab = {
    title: string;
    body: ReactElement;
};

const PROFILE_TABS: profileTab[] = [
    { title: 'История заказов', body: <div></div> },
    { title: 'Бонусы', body: <div></div> },
    { title: 'Отзывы', body: <div></div> },
    { title: 'Настройки', body: <div></div> },
    { title: 'Доставка', body: <div></div> },
    { title: 'Лист Ожидания', body: <div></div> },
];

const ProfilePage = () => {
    return (
        <main className={styles['profile']}>
            <section>
                <Filters title="Профиль" />
            </section>
            <section className={styles['tabs']}>
                <ul className={styles['tabs__list']}>
                    {PROFILE_TABS.map((el, index) => (
                        <li className={styles['tabs__item']} key={index}>
                            <ProfileDropdownTab title={el.title}>
                                {el.body}
                            </ProfileDropdownTab>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default ProfilePage;

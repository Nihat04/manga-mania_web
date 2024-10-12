import styles from './styles/ProfilePage.module.css';

import { ReactElement, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../model/store/store';

import ProfileDropdownTab from './ui/ProfileDropdownTab/ProfileDropdownTab';
import DecisionModal from '../../shared/ui/Modal/types/DecisionModal';
import { PageHeader } from '../../shared/ui';

enum tabType {
    link,
    dropdown,
}

type tab = {
    title: string;
    type: tabType;
    body?: ReactElement;
    link?: string;
};

const TABS: tab[] = [
    {
        title: 'Вход / Имя пользователя',
        type: tabType.link,
        link: '/login',
    },
    { title: 'История заказов', body: <div></div>, type: tabType.dropdown },
    { title: 'Бонусы', body: <div></div>, type: tabType.dropdown },
    { title: 'Отзывы', body: <div></div>, type: tabType.dropdown },
    { title: 'Настройки', body: <div></div>, type: tabType.dropdown },
    { title: 'Доставка', body: <div></div>, type: tabType.dropdown },
    { title: 'Лист Ожидания', body: <div></div>, type: tabType.dropdown },
];

const ProfilePage = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [additionalElements, setAdditionalElements] = useState<JSX.Element[]>(
        []
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log('Authorized');
        } else {
            setAdditionalElements([
                ...additionalElements,
                <DecisionModal
                    btns={[
                        {
                            text: 'Войти',
                            action: () => (window.location.href = './login'),
                        },
                        {
                            text: 'Отмена',
                            action: () => navigate(-1),
                        },
                    ]}
                >
                    <div>
                        <p>
                            Нужно войти, чтобы получить доступ к этой странице
                        </p>
                        <p style={{ textAlign: 'center' }}>Войти?</p>
                    </div>
                </DecisionModal>,
            ]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const renderTab = (tab: tab) => {
        switch (tab.type) {
            case tabType.link:
                if (!tab.link) throw new Error('type link doesnt have link');
                return <Link to={tab.link}>{tab.title}</Link>;
            case tabType.dropdown:
                if (!tab.body)
                    throw new Error('type dropdown doesnt have body');
                return (
                    <ProfileDropdownTab title={tab.title}>
                        {tab.body}
                    </ProfileDropdownTab>
                );
        }
    };

    return (
        <main className={styles['profile']}>
            <section>
                <PageHeader>Профиль</PageHeader>
            </section>
            <section className={styles['tabs']}>
                <ul className={styles['tabs__list']}>
                    {TABS.map((el, index) => (
                        <li className={styles['tabs__item']} key={index}>
                            {renderTab(el)}
                        </li>
                    ))}
                </ul>
            </section>
            {additionalElements}
        </main>
    );
};

export default ProfilePage;

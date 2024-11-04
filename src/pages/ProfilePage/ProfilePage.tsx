import styles from './styles/ProfilePage.module.css';

import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store/store';

import { DroppingMenu } from '../../shared/ui/DroppingMenu';
import { PageHeader } from '../../shared/ui';
import { UnauthorizedModal } from '../../features/modal';

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
    const [modal, setModal] = useState<JSX.Element | null>();

    useEffect(() => {
        if (user) {
            if (modal) {
                setModal(null);
            }
        } else {
            setModal(<UnauthorizedModal />);
        }
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
                    <DroppingMenu label={tab.title}>{tab.body}</DroppingMenu>
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
            {modal}
        </main>
    );
};

export default ProfilePage;

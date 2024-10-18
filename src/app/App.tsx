import './styles/index.css';
import styles from './styles/index.module.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../features/store/store';

import Header from '../widgets/ui/Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CartPage from '../pages/CartPage/CartPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import WaitingListPage from '../pages/WaitingListPage/WaitingListPage';
import { RegPage, AuthPage } from '../pages/AuthRegPages';
import { Notification } from '../features/notifications';

import logo from '../shared/assets/svg/mainLogo.svg';

type route = {
    path: string;
    element: JSX.Element;
};

function isAllowedDevice(): boolean {
    const clientWidth = document.body.clientWidth;

    if (clientWidth < 560) return true;

    return false;
}

function App() {
    const notifications = useSelector(
        (state: RootState) => state.screen.notifications
    );

    const publicRoutes: route[] = [
        { path: '/', element: <MainPage /> },
        { path: '/catalog', element: <CatalogPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/product/:id', element: <ProductPage /> },
        { path: '/favorites', element: <FavoritesPage /> },
        { path: '/profile', element: <ProfilePage /> },
        { path: '/waitinglist', element: <WaitingListPage /> },
    ];

    const independentRoutes: route[] = [
        { path: '/login', element: <AuthPage /> },
        { path: '/register', element: <RegPage /> },
    ];

    return isAllowedDevice() ? (
        <>
            {!independentRoutes.some(
                (route) => route.path === location.pathname
            ) && <Header />}
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                {independentRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                <Route path="*" element={<Navigate to={'/'} replace />} />
            </Routes>
            <div className={styles['notifications']}>
                <ul className={styles['notifications__list']}>
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                            <Notification
                                header={notification.header}
                                type={notification.type}
                            >
                                {notification.body}
                            </Notification>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    ) : (
        <div
            style={{
                display: 'flex',
                marginTop: '70px',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '20px',
            }}
        >
            <img src={logo} style={{ width: '100px' }} />
            <p>YOUR DEVICE NOT ALLOWED</p>
        </div>
    );
}

export default App;

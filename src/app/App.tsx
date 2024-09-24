import './styles/index.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../widgets/ui/Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CartPage from '../pages/CartPage/CartPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import AuthPage from '../pages/AuthRegPages/AuthPage';

type route = {
    path: string;
    element: JSX.Element;
};

function App() {
    const publicRoutes: route[] = [
        { path: '/', element: <MainPage /> },
        { path: '/catalog', element: <CatalogPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/product/:id', element: <ProductPage /> },
        { path: '/favorites', element: <FavoritesPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ];

    const independentRoutes: route[] = [
        { path: '/login', element: <AuthPage /> },
    ];

    return (
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
        </>
    );
}

export default App;

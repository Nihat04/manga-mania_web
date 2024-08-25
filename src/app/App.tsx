import './styles/global.module.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../widgets/ui/Header/Header';
import MainPage from '../pages/MainPage/MainPage';

type route = {
    path: string;
    element: JSX.Element;
};

function App() {
    const publicRoutes: route[] = [{ path: '/', element: <MainPage /> }];

    return (
        <>
            <Header />
            <Routes>
                {publicRoutes.map((route, index) => (
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

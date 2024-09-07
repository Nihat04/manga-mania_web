import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app/App.tsx';

import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <StrictMode>
                <App />
            </StrictMode>
        </Provider>
    </BrowserRouter>
);

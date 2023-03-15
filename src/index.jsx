import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import GlobalStyle from './utils/styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App>
                <GlobalStyle />
                <Routes>
                    <Route path="/home" element={ <HomePage /> } />
                    <Route path="/game/:collection/:difficulty" element={ <GamePage /> } />
                    <Route path="*" element={ <HomePage /> } />
                </Routes>
            </App>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

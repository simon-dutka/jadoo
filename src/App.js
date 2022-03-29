import React from 'react';
import './app.scss';

// Components
import { Navbar } from './components';

// Pages
import { Header } from './pages';

const app = () => {
    return (
        <div>
            <Navbar />
            <Header />
        </div>
    );
};

export default app;

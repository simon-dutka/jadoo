import React from 'react';
import './app.scss';

// Components
import { Navbar } from './components';

// Pages
import { Header, Services, Destinations } from './pages';

const app = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Destinations />
        </div>
    );
};

export default app;

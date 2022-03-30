import React from 'react';
import './app.scss';

// Components
import { Navbar } from './components';

// Pages
import { Header, Services, Destinations, Brands } from './pages';

const app = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Destinations />
            <Brands />
        </div>
    );
};

export default app;

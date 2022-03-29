import React from 'react';
import './app.scss';

// Components
import { Navbar } from './components';

// Pages
import { Header, Services } from './pages';

const app = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
        </div>
    );
};

export default app;

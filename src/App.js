import React from 'react';
import './app.scss';

// Components
import { Navbar, Footer } from './components';

// Pages
import { Header, Services, Destinations, Brands, Bookings } from './pages';

const app = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Destinations />
            <Bookings />
            <Brands />
            <Footer />
        </div>
    );
};

export default app;

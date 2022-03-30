import React, { useState } from 'react';
import './navbar.scss';

// Images
import logo from '../../assets/logo.svg';

const Logo = () => (
    <>
        <img className='navbar__menu-logo' src={logo} alt='payme logo' />
    </>
);

const Menu = () => (
    <>
        <ul className='navbar__menu-container'>
            <li className='navbar__menu-element'>
                <a href='#destinations'>Destinations</a>
            </li>
            <li className='navbar__menu-element'>
                <a href='#hotels'>Hotels</a>
            </li>
            <li className='navbar__menu-element'>
                <a href='#Ffights'>Flights</a>
            </li>
            <li className='navbar__menu-element'>
                <a href='#bookings'>Bookings</a>
            </li>
        </ul>
    </>
);

const Sign = () => (
    <>
        <div className='navbar__btn-container'>
            <button type='submit' className='navbar__btn'>
                Login
            </button>
            <button type='submit' className='navbar__btn navbar__btn--sign-up'>
                Sign up
            </button>
        </div>
    </>
);

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='navbar'>
            {openMenu ? (
                <>
                    <div className='navbar--small'>
                        <Logo />

                        <div
                            className='navbar__menu-hamburger-container'
                            onClick={() => setOpenMenu(false)}
                        >
                            <div
                                className='navbar__menu-hamburger navbar__menu-hamburger--open'
                                onClick={() => setOpenMenu(false)}
                            ></div>
                        </div>
                        <div className='navbar__menu--large'>
                            <Menu />
                        </div>
                    </div>

                    <div className='navbar__menu--small'>
                        <Menu />
                    </div>

                    <Sign />
                </>
            ) : (
                <>
                    <div className='navbar--small'>
                        <Logo />

                        <div
                            className='navbar__menu-hamburger-container'
                            onClick={() => setOpenMenu(true)}
                        >
                            <div className='navbar__menu-hamburger'></div>
                        </div>

                        <div className='navbar__menu--large'>
                            <Menu />
                        </div>
                    </div>

                    <div className='navbar__menu--large'>
                        <Sign />
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;

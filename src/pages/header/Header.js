import React from 'react';
import '../../styles/pages/header/header.scss';

import play from '../../assets/play.svg';
import person from '../../assets/person.png';
import decorator1 from '../../assets/decorator1.svg';

const Header = () => {
    return (
        <header className='header'>
            <img className='decorator decorator--first' src={decorator1} />
            <div className='header__content'>
                <p className='header__tagline'>
                    Best Destinations around the world
                </p>

                <h1>Travel, enjoy and live a new and full life</h1>

                <p className='header__description'>
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                </p>

                <div className='header__btn-container'>
                    <button type='submit' className='header__btn'>
                        Find out more
                    </button>

                    <div className='header__btn-container header__btn-container--right'>
                        <img src={play} alt='Play button' />
                        <button type='submit' className='header__btn--play'>
                            Play Demo
                        </button>
                    </div>
                </div>
            </div>

            <img src={person} alt='Person' className='header__img' />
        </header>
    );
};

export default Header;

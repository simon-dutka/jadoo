import React from 'react';
import './footer.scss';

// Images
import logoFooter from '../../assets/logoFooter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import googlePlay from '../../assets/googlePlay.svg';
import appleStore from '../../assets/appleStore.svg';

const infoData = [
    {
        title: 'Company',
        list: [
            <a href='#'>About</a>,
            <a href='#'>Careers</a>,
            <a href='#'>Mobile</a>,
        ],
    },
    {
        title: 'Contact',
        list: [
            <a href='#'>Help/FAQ</a>,
            <a href='#'>Press</a>,
            <a href='#'>Affilates</a>,
        ],
    },
    {
        title: 'More',
        list: [
            <a href='#'>Airlinefees</a>,
            <a href='#'>Airline</a>,
            <a href='#'>Low fare tips</a>,
        ],
    },
];

function FooterInfo({ title, list }) {
    const listItems = list.map((listItem, index) => (
        <li key={index}>{listItem}</li>
    ));

    return (
        <div className='footer__content-item'>
            <p className='footer__content-title'>{title}</p>
            <ul className='footer__content-list'>{listItems}</ul>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className='footer' id='contact'>
            <div className='footer-main'>
                <div className='footer__container'>
                    <img
                        className='footer__container-logo'
                        src={logoFooter}
                        alt='Payme logo'
                    />
                    <p className='footer__container-text'>
                        Book your trip in minute, get full Control for much
                        longer.
                    </p>
                </div>

                <div className='footer__content'>
                    {infoData.map((item, index) => (
                        <FooterInfo
                            title={item.title}
                            list={item.list}
                            key={index}
                        />
                    ))}
                </div>

                <div className='footer__social'>
                    <div className='footer__social-icons'>
                        <a href='#'>
                            <img src={facebook} alt='Facebook icon' />
                        </a>

                        <a href='#'>
                            <img src={instagram} alt='Instagram icon' />
                        </a>

                        <a href='#'>
                            <img src={twitter} alt='Twitter icon' />
                        </a>
                    </div>

                    <p className='footer__social-text'>Discover our app</p>

                    <div className='footer__social-links'>
                        <a href='#'>
                            <img src={googlePlay} alt='Google Play icon' />
                        </a>

                        <a href='#'>
                            <img src={appleStore} alt='Apple Store icon' />
                        </a>
                    </div>
                </div>
            </div>

            <p className='footer__copyright'>
                &copy; All rights reserved@jadoo.co
            </p>
        </footer>
    );
};

export default Footer;

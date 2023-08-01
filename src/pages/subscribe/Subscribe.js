import React from 'react';
import '../../styles/pages/subscribe/subscribe.scss';

// Images
import email from '../../assets/email.svg';
import send from '../../assets/send.svg';
import decorator5 from '../../assets/decorator5.svg';
import decorator6 from '../../assets/decorator6.svg';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <img src={send} alt='send icon' className='subscribe__send-icon' />
            <img className='decorator decorator--fifth' src={decorator5} />
            <img className='decorator decorator--sixth' src={decorator6} />

            <p className='subscribe__heading'>
                Subscribe to get information, latest news and other interesting
                offers about Cobham
            </p>

            <div className='subscribe__email-container'>
                <div className='subscribe__email-form'>
                    <img
                        src={email}
                        alt='email icon'
                        className='subscribe__email-icon'
                    />

                    <input
                        type='email'
                        className='subscribe__email-input'
                        placeholder='Your email'
                    />
                </div>

                <button type='submit' className='subscribe__email-btn'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Subscribe;

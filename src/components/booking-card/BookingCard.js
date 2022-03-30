import React from 'react';
import './bookingCard.scss';

const BookingCard = ({ bookingImg, bookingAlt, bookingTitle, bookingText }) => {
    return (
        <div className='booking-card'>
            <img
                src={bookingImg}
                alt={bookingAlt}
                className='booking-card__icon'
            />

            <div className='booking-card__right'>
                <p className='booking-card__title'>{bookingTitle}</p>
                <p className='booking-card__text'>{bookingText}</p>
            </div>
        </div>
    );
};

export default BookingCard;

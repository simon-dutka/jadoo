import React from 'react';
import './destinationCard.scss';

// Images
import arrow from '../../assets/arrow.svg';

const DestinationCard = ({
    destinationImg,
    destinationAlt,
    destinationPlace,
    destinationPrice,
    destinationTime,
}) => {
    return (
        <div className='destination-card'>
            <img
                src={destinationImg}
                alt={destinationAlt}
                className='destination-card__image'
            />

            <div className='destination-card__bottom'>
                <div className='destination-card__row '>
                    <p className='destination-card__row-item'>
                        {destinationPlace}
                    </p>
                    <p className='destination-card__row-item'>
                        {destinationPrice}
                    </p>
                </div>

                <div className='destination-card__row destination-card__row--bottom'>
                    <img
                        src={arrow}
                        alt='arrow'
                        className='destination-card__row-icon'
                    />
                    <p className='destination-card__row-item'>
                        {destinationTime}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;

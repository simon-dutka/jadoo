import React from 'react';
import './serviceCard.scss';

const ServiceCard = ({
    serviceIcon,
    serviceAlt,
    serviceTitle,
    serviceDesc,
}) => {
    return (
        <div className='card'>
            <img className='card__icon' src={serviceIcon} alt={serviceAlt} />
            <p className='card__title'>{serviceTitle}</p>
            <p className='card__description'>{serviceDesc}</p>
        </div>
    );
};

export default ServiceCard;

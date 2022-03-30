import React from 'react';
import './serviceCard.scss';

const ServiceCard = ({
    serviceIcon,
    serviceAlt,
    serviceTitle,
    serviceDesc,
}) => {
    return (
        <div className='service-card'>
            <img
                className='service-card__icon'
                src={serviceIcon}
                alt={serviceAlt}
            />
            <p className='service-card__title'>{serviceTitle}</p>
            <p className='service-card__description'>{serviceDesc}</p>
        </div>
    );
};

export default ServiceCard;

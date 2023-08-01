import React from 'react';
import '../../styles/pages/services/services.scss';

// Components
import ServiceCard from '../../components/service-card/ServiceCard';

// Images
import { decorator2, gear, microphone, plane, satellite } from './imports';

const ServiceCardData = [
    {
        serviceIcon: satellite,
        serviceAlt: 'satellite icon',
        serviceTitle: 'Calculated Weather ',
        serviceDesc:
            'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
        serviceIcon: plane,
        serviceAlt: 'plane icon',
        serviceTitle: ' Best Flights ',
        serviceDesc:
            'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
        serviceIcon: microphone,
        serviceAlt: 'microphone icon',
        serviceTitle: ' Local Events',
        serviceDesc:
            'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    },
    {
        serviceIcon: gear,
        serviceAlt: 'gear icon',
        serviceTitle: ' Customization ',
        serviceDesc:
            'We deliver outsourced aviation services for military customers',
    },
];

const Services = () => {
    return (
        <section className='services'>
            <img className='decorator decorator--second' src={decorator2} />

            <div className='heading-container'>
                <p className='category'>category</p>
                <h2 className='heading'>We Offer Best Services</h2>
            </div>

            <div className='services__card-container'>
                {ServiceCardData.map((item, index) => (
                    <ServiceCard
                        serviceIcon={item.serviceIcon}
                        serviceAlt={item.serviceAlt}
                        serviceTitle={item.serviceTitle}
                        serviceDesc={item.serviceDesc}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;

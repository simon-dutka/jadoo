import React from 'react';
import '../../styles/pages/destinations/destinations.scss';

// Components
import DestinationCard from '../../components/destination-card/DestinationCard';

// Images
import { europe, london, rome } from './imports';

const DestinationsCardData = [
    {
        destinationImg: rome,
        destinationAlt: 'Rome',
        destinationPlace: 'Rome, Italty',
        destinationPrice: '$5,42k',
        destinationTime: '10 Days Trip',
    },
    {
        destinationImg: london,
        destinationAlt: 'London',
        destinationPlace: 'London, UK',
        destinationPrice: '$4.2k',
        destinationTime: '12 Days Trip',
    },
    {
        destinationImg: europe,
        destinationAlt: 'Europe',
        destinationPlace: 'Full Europe',
        destinationPrice: '$15k',
        destinationTime: '28 Days Trip',
    },
];

const Destinations = () => {
    return (
        <section className='destinations' id='destinations'>
            <div className='heading-container'>
                <p className='category'>Top Selling</p>
                <h2 className='heading'>Top Destinations</h2>
            </div>

            <div className='destinations__card-container'>
                {DestinationsCardData.map((item, index) => (
                    <DestinationCard
                        destinationImg={item.destinationImg}
                        destinationAlt={item.destinationAlt}
                        destinationPlace={item.destinationPlace}
                        destinationPrice={item.destinationPrice}
                        destinationTime={item.destinationTime}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Destinations;

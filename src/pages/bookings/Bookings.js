import React from 'react';
import './bookings.scss';

// Images
import trip from '../../assets/trip.png';
import square from '../../assets/square.svg';
import waterSport from '../../assets/waterSport.svg';
import taxi from '../../assets/taxi.svg';

// Components
import BookingCard from '../../components/booking-card/BookingCard';

const BookingCardData = [
    {
        bookingImg: square,
        bookingAlt: 'Square icon',
        bookingTitle: 'Choose Destination',
        bookingText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
    },
    {
        bookingImg: waterSport,
        bookingAlt: 'Water sport icon',
        bookingTitle: 'Make Payment',
        bookingText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
    },
    {
        bookingImg: taxi,
        bookingAlt: 'Taxi icon',
        bookingTitle: 'Reach Airport on Selected Date',
        bookingText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
    },
];

const Bookings = () => {
    return (
        <section className='bookings' id='bookings'>
            <div className='bookings__content'>
                <div className='heading-container'>
                    <p className='category'>Easy and Fast</p>
                    <h2 className='heading heading--bookings'>
                        Book your next trip in 3 easy steps
                    </h2>
                </div>

                <div className='bookings__card-container'>
                    {BookingCardData.map((item, index) => (
                        <BookingCard
                            destinationTime={item.destinationTime}
                            bookingImg={item.bookingImg}
                            bookingAlt={item.bookingAlt}
                            bookingTitle={item.bookingTitle}
                            bookingText={item.bookingText}
                            key={index}
                        />
                    ))}
                </div>
            </div>

            <img className='bookings__image' src={trip} alt='Trip card' />
        </section>
    );
};

export default Bookings;

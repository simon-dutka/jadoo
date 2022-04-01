import React from 'react';
import './testimonial.scss';

const Testimonial = ({
    testimonialImg,
    testimonialAlt,
    testimonialText,
    testimonialName,
    testimonialPlace,
}) => {
    return (
        <div className='testimonial'>
            <img
                src={testimonialImg}
                alt={testimonialAlt}
                className='testimonial__image'
            />

            <p className='testimonial__text'>{testimonialText}</p>

            <div className='testimonial__person'>
                <p className='testimonial__person-name'>{testimonialName}</p>
                <p className='testimonial__person-place'>{testimonialPlace}</p>
            </div>
        </div>
    );
};

export default Testimonial;

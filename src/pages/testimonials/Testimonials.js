import React from 'react';
import './testimonials.scss';

// Components
import Testimonial from '../../components/testimonial/Testimonial';

// Images
import testimonialPerson1 from '../../assets/testimonial-person1.png';

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='heading-container'>
                <p className='category category--testimonials'>Testimonials</p>
                <h2 className='heading heading--testimonials'>
                    What people say about Us.
                </h2>
            </div>

            <div className='testimonials__container'>
                <Testimonial
                    testimonialImg={testimonialPerson1}
                    testimonialAlt='Smiling man'
                    testimonialText='“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”'
                    testimonialName='Mike taylor'
                    testimonialPlace='Lahore, Pakistan'
                />
            </div>
        </section>
    );
};

export default Testimonials;

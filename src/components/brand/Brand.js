import React from 'react';
import './brand.scss';

const Brand = ({ brandImg, brandAlt }) => {
    return <img className='brand__element' src={brandImg} alt={brandAlt} />;
};

export default Brand;

import React from 'react';
import './brands.scss';

// Components
import Brand from '../../components/brand/Brand';

// Images
import { alitalia, axon, expedia, jetstar, qantas } from './imports';

const brandsData = [
    {
        brandImg: axon,
        brandAlt: 'axon',
    },
    {
        brandImg: jetstar,
        brandAlt: 'jetstar',
    },
    {
        brandImg: expedia,
        brandAlt: 'expedia',
    },
    {
        brandImg: qantas,
        brandAlt: 'qantas',
    },
    {
        brandImg: alitalia,
        brandAlt: 'alitalia',
    },
];

const Brands = () => {
    return (
        <div className='brands'>
            {brandsData.map((item, index) => (
                <Brand brandImg={item.brandImg} key={index} />
            ))}
        </div>
    );
};

export default Brands;

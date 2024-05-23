import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from '../Pages/Common/MenuItem';
import useMenu from '../Hooks/useMenu';

const Popular = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <section className='mb-12 mt-10'>
            <SectionTitle subHeading="--From Our Menu--" heading="Popular Items"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </section>
    );
};

export default Popular;
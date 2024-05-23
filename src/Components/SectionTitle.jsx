import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='flex flex-col items-center mb-10   justify-center'>
             <p className='text-yellow-600 text-xl font-samu'>{subHeading}</p>
             <h3 className='font-samu text-5xl p-5 mt-3  border-t-4 border-b-4'>--{heading}--</h3>
        </div>
    );
};

export default SectionTitle;
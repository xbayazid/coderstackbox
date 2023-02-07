import React from 'react';

const BrandIcon = () => {
    return (
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 xs:scale-100 scale-90 transition-all duration-300 ease-in-out'>
            <span className='text-3xl text-secondary  pt-2'>
                <ion-icon name="logo-slack"></ion-icon>
            </span>
            <h1 className='text-white '>Coders<span className='text-secondary ml-'>StackBox</span></h1>
        </div>
    );
};

export default BrandIcon;
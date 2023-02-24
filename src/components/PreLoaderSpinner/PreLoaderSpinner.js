import React from 'react';
import { logo } from '../../assets';

const PreLoaderSpinner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <img className='animate-bounce shadow-white' src={logo} alt="" />
        </div>

    );
};

export default PreLoaderSpinner;
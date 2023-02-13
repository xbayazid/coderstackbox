import React from 'react';
import { Bars } from 'react-loader-spinner';

const PreLoaderSpinner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center '>
            <Bars
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    );
};

export default PreLoaderSpinner;
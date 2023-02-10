import React from 'react';
import { Bars } from 'react-loader-spinner';

const PreLoaderSpinner = () => {
    return (
        <div className='w-full h-full flex justify-center items-center -translate-y-64'>
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
import React from 'react';

const DevDetails = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img className='h-32 w-32 rounded-full' src="https://i.ibb.co/6twZ7yY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg" alt="" />
            </div>
            <div className='text-white  my-5'>
                <div className='flex justify-center'>
                    <h2 className='text-2xl font-poppins font-semibold mr-4'>Jessia</h2>
                    <button type="button" class="inline-block  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out font-bold">Hire Me</button>
                </div>
                <p className='text-center mt-4 font-mono'>Front-End Developer | ReactJS Developer</p>
            </div>
        </div>
    );
};

export default DevDetails;
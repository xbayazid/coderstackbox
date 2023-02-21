import React from 'react';

const DevDetails = ({profile}) => {
    console.log(profile)
    return (
        <div>
            <div className='flex justify-center'>
                <img className='h-32 w-32 rounded-full' src={profile?.photoURL} alt="" />
            </div>
            <div className='text-white  my-5'>
                <div className='flex justify-center'>
                    <h2 className='text-2xl font-poppins font-semibold mr-4'>{profile?.name}</h2>
                    <a href={`mailto:${profile?.email}`}><button type="button" className="inline-block  px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Hire Me</button></a>
                </div>
                <p className='text-center mt-4 font-mono'>{profile?.role}</p>
                <p className='text-center mt-4 font-mono'>{profile?.about}</p>
            </div>
        </div>
    );
};

export default DevDetails;
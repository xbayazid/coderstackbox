import React from 'react';
import Avatar from 'react-avatar';

const LeftSide = ({username}) => {
    return (
            <div className='text-white my-5 bg-orange-300 w-[180px] h-[100vh] sticky -mt-[2px]'>
                <h1>Connected</h1>
                <Avatar name={username} size={50} round="14px"></Avatar>
               <h3>{username}</h3>
            </div>
    );
};

export default LeftSide;
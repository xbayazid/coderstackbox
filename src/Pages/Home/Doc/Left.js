import React from 'react';
import { Link } from 'react-router-dom';
import './Left.css'

const Left = ({category}) => {
    const {id, categoryName} = category;
    return (
        <div className="left w-64 sidebar">
            <div className='text-2xl text-gray-200'>
                <div>
                <Link>{categoryName}</Link>
                </div>
            </div>
        </div>
    );
};

export default Left;
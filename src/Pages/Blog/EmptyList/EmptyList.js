import React from 'react';
import errorImg from '../../../assets/amimationpng.gif';
import './EmptyList.css'

const EmptyList = () => {
    return (
        <div className='emptyList-wrap'>
            <img src={errorImg} alt="empty" />
        </div>
    );
};

export default EmptyList;
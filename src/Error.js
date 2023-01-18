import React from 'react';
import { Link } from 'react-router-dom';
import img from '../src/assets/amimationpng.gif'
import Button from './components/Buttons/Button';

const Error = () => {
    return (
        <div>
            <div className='pl-20 pt-20 items-center flex'>
            <img className=' shadow-green-500 shadow-xl' src={img} alt="" />
            <div className='pl-20 text-white '>
            <h1 className='text-6xl'>Oh! You're Lost!</h1>
            <p className='text-4xl'>The page you are looking for does not exist. <br /><span className='text-2xl'>But you can click the button below to go back to the homepage</span>.</p>
            <Link to ='/'><Button className=''>Go Back </Button></Link>
            </div>
        </div>
        </div>
    );
};

export default Error;
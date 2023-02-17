import React from 'react';
import styles from '../../../style';
import { HiSun, HiBriefcase, HiOutlineTemplate } from "react-icons/hi";

const CommunityBenefit = () => {
    return (
        <div className={` ${styles.paddingY} relative text-white`}>
            <div className='font-poppins'>
                <h1 className='text-2xl lg:text-4xl font-bold text-center'>Find your dream job in a well-known company and make a career with our platform</h1>
                <p className='lg:w-2/3 mx-auto text-center mt-3'>Our community platform brings together many popular companies in recruting talents and people with passion for developement.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-poppins mt-8'>
                <div className='bg-cyan-900 p-4'>
                    <HiSun className='bg-black py-5 px-5 text-7xl'></HiSun>
                    <h3 className='text-2xl font-bold mt-3'>Dream job work</h3>
                    <p className='text-justify mt-2'>The platform focuses on run code & save them. Developers from around the world can use our website without any hassle.</p>
                </div>
                <div className='bg-indigo-500 p-4'>
                    <HiBriefcase className='bg-black py-5 px-5 text-7xl'></HiBriefcase>
                    <h3 className='text-2xl font-bold mt-3'>Recruitment Requirements</h3>
                    <p className='text-justify mt-2'>The platform focuses on run code & save them. Developers from around the world can use our website without any hassle.</p>
                </div>
                <div className='bg-sky-700 p-4'>
                    <HiOutlineTemplate className='bg-black py-5 px-5 text-7xl'></HiOutlineTemplate>
                    <h3 className='text-2xl font-bold mt-3'>Advanced Platform</h3>
                    <p className='text-justify mt-2'>The platform focuses on run code & save them. Developers from around the world can use our website without any hassle.</p>
                </div>
            </div>
        </div>
    );
};

export default CommunityBenefit;
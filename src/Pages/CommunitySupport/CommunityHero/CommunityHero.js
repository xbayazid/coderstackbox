import React from 'react';
import styles from '../../../style';
import heroImg from '../../../assets/community-hero.jpg'

const CommunityHero = () => {
    return (
        <div  className={` ${styles.paddingY} relative`}>
           <div className='text-white font-poppins'>
           <h1 className='text-4xl lg:text-7xl font-bold'><span className='text-accent'>Commun</span>ity</h1>
           <p className='my-4 lg:w-2/4'>The worlds first and largest coding community platform here to connect people in the world</p>
           <div>
            <img src={heroImg} alt="" />
           </div>
           <div className='lg:flex gap-3 mt-2'>
            <div className='bg-gray-700 p-5'>
                <p>Let's connect with people who share the same interests as you. Together improve yourself and establish relationship for your self-improvement.</p>
            </div>
            <div className='bg-stone-700 p-5 mt-3 text-center  lg:mt-0'>
                <h3 className='text-3xl font-semibold'>300K</h3>
                <p className='text-yellow-300'>Community</p>
            </div>
           </div>
           </div>
        </div>
    );
};

export default CommunityHero;
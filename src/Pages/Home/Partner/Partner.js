import React from 'react';
import partnerOne from '../../../assets/partner-1.jpg'
import partnerTwo from '../../../assets/partner-2.jpg'
import partnerThree from '../../../assets/partner-3.png'
import partnerFour from '../../../assets/partner-4.png'
import partnerFive from '../../../assets/partner-5.png'
import Button from '../../../components/Buttons/Button';

const Partner = () => {
    return (
        <div>
            <div className='grid gap-5 items-center grid-cols-1 lg:grid-cols-2 text-white'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='flex flex-col gap-3'>
                    <div className=' bg-sky-300 w-1/2 rounded-full'>
                    <img src={partnerTwo} alt="" />
                    </div>
                    <div className='-mr-20 bg-slate-700 w-3/2 rounded-full'>
                    <img src={partnerOne} alt="" />
                    </div>
                    <div className=' bg-gray-300 w-1/2 rounded-full'>
                    <img src={partnerThree} alt="" />
                    </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                    <div className='bg-violet-500 w-1/2 rounded-full'>
                    <img src={partnerFour} alt="" />
                    </div>
                    <div className='bg-fuchsia-300 w-1/2 rounded-full'>
                    <img src={partnerFive} alt="" />
                    </div>
                    </div>
                </div>
                <div className='font-poppins lg:w-3/4'>
                    <h1 className='text-2xl lg:text-5xl font-semibold'>See our trusted partners</h1>
                    <p className='my-5 lg:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque soluta aspernatur nisi dignissimos illum provident sed autem deserunt rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quibusdam distinctio tempora repellat accusantium sapiente delectus suscipit porro pariatur facere!</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Partner;
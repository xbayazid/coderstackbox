import React from 'react';

const TestimonialCard = ({slide}) => {
    return (
        <div className='border rounded-lg glassmorphism border-gradient-to-r from-accent to-secondary p-2'>
                                <div className='text-white text-center font-bold mt-5  flex flex-col justify-center items-center'>
                                    <img className='h-24 w-24 rounded-full object-cover border-2 border-gray-300' src={slide.img} alt="" />
                                    <div className='text-2xl mt-2 mb-2'>
                                    {slide.name}
                                    </div>
                                    <div className='text-center  '>
                                        {slide.info}
                                    </div>

                                </div>
                            </div>
    );
};

export default TestimonialCard;
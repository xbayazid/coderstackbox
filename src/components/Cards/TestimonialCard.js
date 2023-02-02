import React from 'react';

const TestimonialCard = ({slide}) => {
    return (
        <div className='border rounded-lg glassmorphism border-gradient-to-r from-accent to-secondary p-2 h-56'>
                                <div className='text-white text-center mt-5  flex flex-col justify-center items-center'>
                                    <div className='flex gap-3 items-center'>
                                    <img className='h-24 w-24 rounded-full object-cover border-2 border-gray-300' src={slide.img} alt="" />
                                    <h2 className='name font-semibold'>{slide.name}</h2>
                                    </div>
                                    <div className='text-center py-5'>
                                        <p className='font-mono'>{slide.info}</p>
                                    </div>

                                </div>
                            </div>
    );
};

export default TestimonialCard;
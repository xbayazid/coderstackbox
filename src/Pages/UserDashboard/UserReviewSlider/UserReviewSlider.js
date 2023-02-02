import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { userSlider } from '../../../constants';
import TestimonialCard from '../../../components/Cards/TestimonialCard';

SwiperCore.use([ Navigation, Pagination, Scrollbar,  A11y]);


const UserReviewSlider = () => {

    


    return (
        <div id='testimonial' className='m-5'>
        <h1 className="text-4xl text-center mb-5 mt-5 font-bold text-white">Testimonial's </h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                
               
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    userSlider.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <TestimonialCard slide={slide}/>

                        </SwiperSlide>))
                }
                
            </Swiper>
        </div>
    );
};

export default UserReviewSlider;
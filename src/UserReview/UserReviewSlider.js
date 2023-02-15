import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { userSlider } from "../../../constants";
import TestimonialCard from "../../../components/Cards/TestimonialCard";
import styles, { layout } from "../../../style";
import { fadeIn, staggerContainer, textVariant } from "../../../utils/motion";
import {
  TitleText,
  TypingText,
} from "../../../components/CustomText/CustomText";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const UserReviewSlider = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="testimonial"
      className={`${layout.sectionCol} relative`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 0.75)}
        className="text-center mb-3"
      >
        <TypingText
          textStyles={"text-dimWhite"}
          title={"|What our clients says"}
        />
        <motion.h1 variants={textVariant(0.5)} className=" text-white mb-5">
          <TitleText title={<>See our trusted partners</>} />
        </motion.h1>

        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {userSlider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <TestimonialCard slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default UserReviewSlider;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css";
import 'swiper/css/effect-fade';
import './BestDev.css'
import {
  TitleText,
  TypingText,
} from "../../../components/CustomText/CustomText";
import { layout } from "../../../style";
import { getAllUsers } from "../../../api/user";
import ContributeSlider from "../../../components/CarouselSlider/ContributeSlider";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/usersSlice";
import PreLoaderSpinner from "../../../components/PreLoaderSpinner/PreLoaderSpinner";
const BestDeveloper = () => {

  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if(loading) {
    return <PreLoaderSpinner />;
  }

  return (
    <div className={`${layout.sectionCol}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div
          variants={fadeIn("", "spring", 0.5, 1)}
          className={`${layout.sectionInfo} text-center z-10 text-white`}
        >
          <TypingText title="| Developers" />
          <TitleText title={<>Meet our contributors</>} />
        </div>
        <Swiper
          autoplay={true}
          effect='fade'
          speed={2000}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
        >
          {users?.map((user, i) => (
            <SwiperSlide key={user._id}>
              <ContributeSlider i={i} user={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default BestDeveloper;

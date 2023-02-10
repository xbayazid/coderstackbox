import React from "react";
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from "../../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-poppins font-semibold xs:text-[24px] text-[16px] text-dimWhite xs:leading-[76.8px] leading-[66.8px] w-full ${textStyles}`}
  >
    {
      Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === '' ? '\u00A0' : letter}
        </motion.span>
      ))
    }
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >{title}
  </motion.h2>
);

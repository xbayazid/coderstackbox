import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/heroImage.gif";
import Button from "../../../components/Buttons/Button";
import styles from "../../../style";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";
const Hero = () => {
  return (
    <section className={` ${styles.paddingY} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex md:flex-row flex-col`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <motion.h1 variants={textVariant(0.5)} className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Code Smarter, <br className="sm:block hidden" />{" "}
            <span className="">Not Harder</span>{" "}
          </motion.h1>
          <motion.div
          variants={textVariant(0.6)} className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            with <span className="text-secondary">StackBox</span>.
          </motion.div>
          <motion.div
          variants={textVariant(0.7)} className={`${styles.paragraph} max-w-[470px] my-5`}>
            Build your Fron-End Web Application. Get work done quicker by
            building out entire projects. Isolating code to test features and
            animations. Want to keep it all under wraps?
          </motion.div>
          <motion.div
          variants={textVariant(0.8)}>
          <Link to="/code-editor">
            <Button>
              Start Coding <FaArrowRight className="ml-2"></FaArrowRight>{" "}
            </Button>
          </Link>
          </motion.div>
        </div>
        <motion.div variants={slideIn('right', 'tween', 0.5, 1.2)}
          className={`flex-1 hidden lg:flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={heroImage}
            alt="heroImage"
            className="w-[100%]relative z-[5] rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

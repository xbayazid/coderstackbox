import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/heroImage.gif";
import Button from "../../../components/Buttons/Button";
import styles from "../../../style";
import { motion } from "framer-motion";
import heroImg from "../../../assets/code.png";
import heroImgTwo from "../../../assets/tests.png";
import heroImgThree from "../../../assets/hero.gif";
import {
  fadeIn,
  FADE_UP_ANIMATION_VARIANTS,
  slideIn,
  staggerContainer,
  textVariant,
} from "../../../utils/motion";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import "./Hero.css";
import OutlinedButton from "../../../components/Buttons/OutlinedButton";
const Hero = () => {
  return (
    <section 
    className="mt-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` ${styles.paddingY} relative`}
      >
        <div className="text-white w-full lg:w-2/3 mx-auto mb-6 font-poppins">
          <motion.h1
            variants={textVariant(0.3)}
            className=" text-3xl sm:text-6xl font-semibold text-center hero-title"
          >
            Write better code, <span className="text-emerald-200">Collabo</span>
            <span className="text-emerald-500">ratively</span>
          </motion.h1>
          <motion.p
            variants={textVariant(0.4)}
            className="w-full lg:w-3/4 mx-auto my-3 text-center"
          >
            {" "}
            Build your Front-End Web Application. Get work done quicker by
            building out entire projects. Isolating code to test features and
            animations. Want to keep it all under wraps?
          </motion.p>
          <motion.div
            variants={textVariant(0.5)}
            className="flex justify-center items-center gap-4"
          >
            <Link to="/text-editor">
              <OutlinedButton>Text Editor</OutlinedButton>
            </Link>
            <Link to="/code-editor">
              <Button>
                Code Editor
                <FaArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 0.75)}
          className="w-4/4 mx-auto"
        >
          <div className="lg:flex">
            <div className="text-white h-2/3 p-5 bg-gradient-to-r from-fuchsia-400 to-violet-600 rounded-md font-poppins font-semibold gap-3 -mr-10 mt-24 z-20 lg:block hidden">
              <div className="flex gap-3 rounded-xl items-center p-2 text-2xl bg-gradient-to-l from-accent to-slate-600">
                <FaHtml5 className="ml-3"></FaHtml5> <h1 className="">HTML</h1>
              </div>
              <div className="flex gap-3 my-3 rounded-xl items-center p-2 text-2xl bg-gradient-to-l from-accent to-slate-600">
                <FaCss3Alt className="ml-3"></FaCss3Alt> <h1>CSS</h1>
              </div>
              <div className="flex gap-3 rounded-xl items-center p-2 text-2xl bg-gradient-to-l from-accent to-slate-600">
                <FaJs className="ml-3"></FaJs> <h1>JAVASCRIPT</h1>
              </div>
            </div>
            <div>
              <img className="rounded-md" src={heroImg} alt="" />
            </div>
            <div className="-ml-16 mt-52 lg:block hidden">
              <img className="rounded-md" src={heroImgTwo} alt="" />
              
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[-1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
              <div className="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              {/* gradient end */}
    </section>
  );
};

export default Hero;

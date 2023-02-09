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
import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import './Hero.css';
const Hero = () => {
  return (
    // <section className={` ${styles.paddingY} relative`}>
    //   <motion.div
    //     variants={staggerContainer}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: false, amount: 0.25 }}
    //     className={`flex md:flex-row flex-col`}
    //   >
    //     <div
    //       className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    //     >
    //       <motion.h1 variants={textVariant(0.5)} className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
    //         Code Smarter, <br className="sm:block hidden" />{" "}
    //         <span className="">Not Harder</span>{" "}
    //       </motion.h1>
    //       <motion.div
    //       variants={textVariant(0.6)} className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
    //         with <span className="text-secondary">StackBox</span>.
    //       </motion.div>
    //       <motion.div
    //       variants={textVariant(0.7)} className={`${styles.paragraph} max-w-[470px] my-5`}>
    //         Build your Fron-End Web Application. Get work done quicker by
    //         building out entire projects. Isolating code to test features and
    //         animations. Want to keep it all under wraps?
    //       </motion.div>
    //       <motion.div
    //       variants={textVariant(0.8)}>
    //       <Link to="/code-editor">
    //         <Button>
    //           <span>Start Coding </span><FaArrowRight />
    //         </Button>
    //       </Link>
    //       </motion.div>
    //     </div>
    //     <motion.div variants={slideIn('right', 'tween', 0.5, 1.2)}
    //       className={`flex-1 hidden lg:flex ${styles.flexCenter} md:my-0 my-10 relative`}
    //     >
    //       <img
    //         src={heroImage}
    //         alt="heroImage"
    //         className="w-[100%]relative z-[5] rounded-xl"
    //       />
    //     </motion.div>
    //   </motion.div>
    // </section>
    
    <div>
     <div className={` ${styles.paddingY} relative`}>
     <div className="text-white w-2/3 mx-auto mb-6 font-poppins">
      <h1 className=" text-3xl lg:text-6xl font-semibold text-center hero-title">Write better code, <span className="text-emerald-200">Collabo</span><span className="text-emerald-500">ratively</span></h1>
      <p className="lg:w-3/4 mx-auto my-3"> Build your Front-End Web Application. Get work done quicker by building out entire projects. Isolating code to test features and animations. Want to keep it all under wraps?</p>
      <div className="flex justify-center">
      <Link to="/code-editor"><Button>Code Editor<FaArrowRight /></Button></Link>
      </div>
      </div>
      <div className="w-4/4 mx-auto">
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
      </div>
      </div> 
    </div>
  );
};

export default Hero;

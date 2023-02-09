import React from "react";
import {
  TitleText,
  TypingText,
} from "../../../components/CustomText/CustomText";
import styles, { layout } from "../../../style";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { servicesInfo } from "../../../constants";
import buildImg from "../../../assets/build.gif";
import learnImg from "../../../assets/learn.gif";
import shareImg from "../../../assets/share.gif";
import { HiOutlineShare } from "react-icons/hi2";
import { TiLightbulb, TiEdit } from "react-icons/ti";
const Services = () => {
  return (
    // <div id='service' className={`${layout.sectionCol} text-white`}>
    //     <div>
    //     <motion.div
    //         variants={staggerContainer}
    //         initial="hidden"
    //         whileInView="show"
    //         viewport={{ once: false, amount: 0.25 }}>
    //         <div className={`${layout.sectionInfo} text-center`}>
    //             <TypingText title="| Our Services" />
    //             <TitleText title={<>Codestack is a platform that allows you to build, run, and share </>} />
    //             {/* <h1 className={`${styles.heading2} `}>Our Services</h1>
    //         <p className={`${styles.paragraph} `}>Codestack is a platform that allows you to build, run, and share code in three different programming languages HTMl, CSS and JAVASCRIPT.</p> */}
    //         </div>
    //         <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 mt-10 z-10'>
    //             {
    //                 servicesInfo.map((e, i) => <motion.div
    //                     variants={fadeIn('right', 'tween', 0.2, 1)} className=' border border-lime-500 rounded-md mt-10'
    //                     key={i}>
    //                     <div className='p-6'>
    //                         <img className="h-12 w-12 bg-emerald-100 rounded-md -mt-12" src={e.image} alt="" />
    //                         <h2 className="text-center font-bold text-xl lg:-mt-6">{e.title}</h2>
    //                         <p className="text-center mt-10">{e.details}</p>
    //                     </div>
    //                 </motion.div>)
    //             }
    //         </div>
    //     </motion.div>
    // </div>

    // </div>

    <div>
      <h1 className="text-3xl lg:text-6xl text-white text-center font-semibold lg:font-bold">
        Codestack is a platform that allows you to build, run, and share
      </h1>
      <div id="service" className={`${layout.sectionCol} text-white`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="font-poppins">
            <div className="w-3/4">
              <h1 className="text-2xl lg:text-5xl font-semibold">
                We Are Focus On Your Ultimate Goal
              </h1>
              <p className="mt-4">
                Codestack is a platform that allows you to build, run, and share
                code in three different programming languages HTMl, CSS and
                JAVASCRIPT.
              </p>
            </div>
            <div className="text-2xl mt-5">
              <div className="bg-sky-400 p-4 lg:w-1/2 text-center flex items-center rounded-md">
                <TiLightbulb className="ml-2 mr-2 bg-purple-300 p-2 text-5xl rounded-full"></TiLightbulb>{" "}
                <h1>Build & Test</h1>
              </div>
              <div className="bg-sky-400 p-4 lg:w-1/2 text-center mt-4 flex items-center rounded-md">
                <TiEdit className="ml-2 mr-2 bg-purple-300 p-2 text-5xl rounded-full"></TiEdit>{" "}
                <h1>Learn & Discover</h1>
              </div>
              <div className="bg-sky-400 p-4 lg:w-1/2 text-center mt-4 flex items-center rounded-md">
                <HiOutlineShare className="ml-2 mr-2 bg-purple-300 p-2 text-5xl rounded-full"></HiOutlineShare>{" "}
                <h1>Share Your Work</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mt-5">
            <div className="">
              <img className="rounded-xl" src={buildImg} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <img className="rounded-xl" src={learnImg} alt="" />
              <img className="rounded-xl" src={shareImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

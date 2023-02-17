import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Buttons/Button";
import { layout } from "../../../style";
import { fadeIn, planetVariants, staggerContainer, textVariant, zoomIn } from "../../../utils/motion";
import { TitleText, TypingText } from "../../../components/CustomText/CustomText";
import { partnerFive, partnerFour, partnerOne, partnerThree, partnerTwo } from "../../../assets";

const Partner = () => {
  return (
    <div className={``}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        
      >
                <TypingText textStyles={"text-center text-dimWhite"} title={"|Our Valuable Partners"}/>

        <div  className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionImg}`}>
          <div className="flex flex-col gap-3">
            <motion.div variants={planetVariants('left', 'spring', 0.5, 1)} className=" bg-sky-300 w-1/2 rounded-full">
              <img src={partnerTwo} alt="" />
            </motion.div>
            <motion.div variants={planetVariants('left','spring', 0.3, 2)} className="-mr-20 bg-slate-700 w-3/2 rounded-full">
              <img src={partnerOne} alt="" />
            </motion.div>
            <motion.div variants={planetVariants('left', 'spring', 0.6, 2)} className=" bg-gray-300 w-1/2 rounded-full">
              <img src={partnerThree} alt="" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <motion.div variants={planetVariants('left', 'spring', 0.7, 2)} className="bg-violet-500 w-1/2 rounded-full">
              <img src={partnerFour} alt="" />
            </motion.div>
            <motion.div variants={planetVariants('left', 'spring', 1, 2)} className="bg-fuchsia-300 w-1/2 rounded-full">
              <img src={partnerFive} alt="" />
            </motion.div>
          </div>
        </div>
        <motion.div variants={fadeIn('left', 'tween' , 0.5, 0.75)} className={`${layout.sectionInfoStart}`}>
          <motion.h1 variants={textVariant(0.25)} className=" text-white">
            <TitleText title={<>See our trusted partners</>}/>
          </motion.h1>
          <p className="my-5 lg:text-justify text-white">
            These partners provide us with invaluable insights and feedback that enable us to continously improve our product. We ahve carefully chosen these partners based on their expertise in the coding industry, and our shared commitment to innovation and excellence. Tus
          </p>
          <Button>Get Started</Button>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Partner;

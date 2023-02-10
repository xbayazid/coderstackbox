import React from "react";
import { motion } from "framer-motion";
import partnerOne from "../../../assets/partner-1.jpg";
import partnerTwo from "../../../assets/partner-2.jpg";
import partnerThree from "../../../assets/partner-3.png";
import partnerFour from "../../../assets/partner-4.png";
import partnerFive from "../../../assets/partner-5.png";
import Button from "../../../components/Buttons/Button";
import { layout } from "../../../style";
import { fadeIn, planetVariants, staggerContainer, zoomIn } from "../../../utils/motion";
import { TypingText } from "../../../components/CustomText/CustomText";

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

        <div  className={`${layout.section}`}>
        <div className={`${layout.sectionImg}`}>
          <div className="flex flex-col gap-3">
            <motion.div variants={planetVariants('left', 'spring', 0.2, 0.75)} className=" bg-sky-300 w-1/2 rounded-full">
              <img src={partnerTwo} alt="" />
            </motion.div>
            <motion.div variants={zoomIn('spring', 0.3, 0.75)} className="-mr-20 bg-slate-700 w-3/2 rounded-full">
              <img src={partnerOne} alt="" />
            </motion.div>
            <motion.div variants={fadeIn('left', 'spring', 0.4, 0.75)} className=" bg-gray-300 w-1/2 rounded-full">
              <img src={partnerThree} alt="" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <motion.div variants={planetVariants('left', 'spring', 0, 0.75)} className="bg-violet-500 w-1/2 rounded-full">
              <img src={partnerFour} alt="" />
            </motion.div>
            <motion.div variants={planetVariants('left', 'spring', 0.1, 0.75)} className="bg-fuchsia-300 w-1/2 rounded-full">
              <img src={partnerFive} alt="" />
            </motion.div>
          </div>
        </div>
        <motion.div variants={fadeIn('left', 'tween' , 0.5, 0.75)} className={`${layout.sectionInfoStart}`}>
          <h1 className="text-2xl lg:text-5xl font-semibold text-white">
            See our trusted partners
          </h1>
          <p className="my-5 lg:text-justify text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque
            soluta aspernatur nisi dignissimos illum provident sed autem
            deserunt rem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Beatae quibusdam distinctio tempora repellat accusantium
            sapiente delectus suscipit porro pariatur facere!
          </p>
          <Button>Get Started</Button>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Partner;

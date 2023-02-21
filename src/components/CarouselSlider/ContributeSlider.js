import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import DevDetails from "../../Pages/DevProfile/DevDetails/DevDetails";
import styles, { layout } from "../../style";
import "./Carousel.css";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { TitleText, TypingText } from "../CustomText/CustomText";
import Button from "../Buttons/Button";
import { useDispatch } from "react-redux";
import {
  addUserCollections,
  getAllUserCollections,
} from "../../features/userCollections";
import OutlinedButton from "../Buttons/OutlinedButton";

const ContributeSlider = ({ user, i }) => {
  const { _id, email, photoURL, name, about, role, project } = user;
  const [showModal, setShowModal] = React.useState(false);

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className={`${layout.sectionReverse}`}>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 0.75)}
            className={`${layout.sectionInfoStart}`}
          >
            <motion.h1 variants={textVariant(0.25)} className=" text-white">
              <TitleText
                textStyles={`md:text-[48px] text-[40px] font-thin`}
                title={<>{name}</>}
              />
            </motion.h1>
            <p className="text-white font-thin text-xl my-3">
              -{" "}{role}
            </p>
            <p className={`${styles.paragraph}`}>
              {truncate(`${about}`, 20)} ...
            </p>
            <Link className="mt-5" to={`/${_id}`}>
              <OutlinedButton styles={`py-2`}>View Projects</OutlinedButton>
            </Link>
          </motion.div>
          <div
            className={`flex-1 flex justify-end items-center  mr-0 md:mt-0 mt-10 relative`}
          >
            <img className="w-4/5 rounded-lg " src={photoURL} alt={name} />
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[-1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContributeSlider;

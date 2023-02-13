import React from "react";
import styles from "../../style";
import { motion } from 'framer-motion'
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";


const BestDevCard = ({ props, i }) => {
  return (
    <motion.div
    variants={fadeIn("right", "spring", i*0.2, 1)} className="relative rounded-lg overflow-hidden glassmorphism hover:duration-150 card">
      <div
        className="bg-gradient-to-r from-accent to-secondary"
        style={{ height: "2px" }}
      />
      <div className={`${styles.flexStart} gap-4 m-5`}>
        <img
          className="w-20 h-20 rounded-full p-1 ring-2 "
          src={props.image}
          alt={props.alt}
        />
        <div>
          <div className={`${styles.heading3} hover:text-lime-600`}><Link to="/devProfile">{props.name}</Link></div>
          <div className={`text-dimGreen`}>{props.title}</div>
        </div>
      </div>

        <div className="flex justify-center px-4">
        <div
          className={`bg-gradient-to-r from-accent to-secondary w-full `}
          style={{ height: "2px" }}
        />
        </div>
      <div className="p-4 text-justify">
        <div className={`${styles.paragraph}`}>{props.details}</div>
      </div>
      <div className="p-4 flex justify-end">
      <Link to="/devProfile">
      <button type="button" class="inline-block flex items-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">View Profile <HiArrowRight className="ml-2 text-lg"></HiArrowRight></button>
      </Link>
      </div>
    </motion.div>
  );
};

export default BestDevCard;

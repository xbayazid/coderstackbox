import React from "react";
import styles from "../../style";
import { motion } from 'framer-motion'
import { fadeIn } from "../../utils/motion";


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
          <div className={`${styles.heading3}`}>{props.name}</div>
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
    </motion.div>
  );
};

export default BestDevCard;

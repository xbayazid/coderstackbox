import React, { useEffect, useState } from "react";
import BestDevCard from "../../../components/Cards/BestDevCard";
import { bestDevs } from "../../../constants";
import styles, { layout } from "../../../style";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import {
  TitleText,
  TypingText,
} from "../../../components/CustomText/CustomText";
const BestDeveloper = () => {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    fetch(
      "https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/bestDevelopers"
    )
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  return (
    <div className={`${layout.sectionCol}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={`${layout.sectionInfo} text-center z-10 text-white`}>
          <TypingText title="| Best Developers" />
          <TitleText title={<>Meet our top contributors</>} />

          {/*  <div className={`${styles.heading2} `}>Best Developers</div>
        <div className={`${styles.paragraph} `}>
          Meet our top contributors
        </div> */}
        </div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5"
        >
          {developers.map((bestDev) => (
            <BestDevCard key={bestDev._id} props={bestDev} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BestDeveloper;

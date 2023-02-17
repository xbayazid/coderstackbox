import React, { useEffect, useState } from "react";
import BestDevCard from "../../../components/Cards/BestDevCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import {
  TitleText,
  TypingText,
} from "../../../components/CustomText/CustomText";
import { layout } from "../../../style";
import { getAllUsers } from "../../../api/user";
const BestDeveloper = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    getAllUsers().then((data) => {
      setUsers(data.result);
      setLoading(false);
    });
  };

  return (
    <div className={`${layout.sectionCol}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div
          variants={fadeIn("", "spring", 0.2, 1)}
          className={`${layout.sectionInfo} text-center z-10 text-white`}>
          <TypingText title="| Best Developers" />
          <TitleText title={<>Meet our top contributors</>} />

          {/*  <div className={`${styles.heading2} `}>Best Developers</div>
        <div className={`${styles.paragraph} `}>
          Meet our top contributors
        </div> */}
        </div>
        <motion.div
          variants={fadeIn("", "spring", 0.3, 1)}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5"
        >
          {users?.splice(0, 3).map((user, i) => (
            <BestDevCard key={user._id} i={i} props={user} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BestDeveloper;

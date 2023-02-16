import React, { useEffect, useState } from "react";
import BestDevCard from "../../../components/Cards/BestDevCard";
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
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
      console.log(data.result);
      setLoading(false);
    });
  };
  console.log(users);

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
        <div
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5"
        >
          {users?.splice(0,3).map((user, i) => (
            <BestDevCard key={user._id} i={i} props={user} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BestDeveloper;

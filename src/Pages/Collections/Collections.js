import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import CollectionCard from "../../components/Cards/CollectionCard";
import { TitleText, TypingText } from "../../components/CustomText/CustomText";
import styles, { layout } from "../../style";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Loading from "../Loading/Loading";

const Collections = () => {
  const url = `http://localhost:5000/collections`;

  const {
    data: collections = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      });
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(collections.result);

  return (
    <div className={`${layout.sectionCol}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={`${layout.sectionInfo} text-center z-10 text-white`}>
          <TitleText
            title={
              <TypingText
                textStyles="my-[8px] font-bold md:text-[64px] text-[40px] text-white"
                title="Stack Collections"
              />
            }
          />
              <h2 className={`font-poppins font-normal xs:text-[32px] text-[28px] text-dimWhite xs:leading-[76.8px] leading-[66.8px] w-full`}>Browse and share work from world-class designers and developers in the front-end community.</h2>

        </div>
        <div
          
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5"
        >
          {collections.result?.map((collection, index) => (
            <CollectionCard key={collection._id} index={index} props={collection} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Collections;

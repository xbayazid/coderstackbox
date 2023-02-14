import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CollectionCard from "../../components/Cards/CollectionCard";
import { TitleText, TypingText } from "../../components/CustomText/CustomText";
import styles, { layout } from "../../style";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Search from "../catagories/Search";
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

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredData = collections.result?.filter(item =>
    item.projectName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredData);


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
          <div>
            <h1 className="text-white mb-2 font-bold text-2xl">Explore ideas from the 1.8 million+ front-end designers and developers.</h1>
            <p className="text-white mb-4">Check out the work of top-notch designers and developers in the front-end community and share it.</p>
            <fieldset className="w-full text-gray-100  lg:flex">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-gray-100"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  name="Search"
                  type="text"
                  placeholder="Search by title..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="w-full py-2 pl-10 text-sm rounded-full sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400"
                />
              </div>
            </fieldset>
            <ul>
            </ul>
          </div>
          {filteredData?.map((collection, index) => (
            <CollectionCard key={collection._id} index={index} props={collection} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Collections;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CollectionCard from "../../components/Cards/CollectionCard";
import { TitleText, TypingText } from "../../components/CustomText/CustomText";
import styles, { layout } from "../../style";
import { fadeIn, FADE_IN_ANIMATION_SETTINGS, FADE_UP_ANIMATION_VARIANTS, slideIn, staggerContainer } from "../../utils/motion";
import Search from "../catagories/Search";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addCollections, getAllCollections } from "../../features/collectionSlice/collectionSlice";
import i from "rechart/lib/chart";
import { useEffect } from "react";

const Collections = () => {
  const dispatch = useDispatch();
  const Projects = useSelector(getAllCollections);

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [projects, setProjects] = useState([]);

  // const url = `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/collections?page=${pageNumber}&limit=${5}`;
  const url = `http://localhost:5000/collections?page=${pageNumber}&limit=${5}`

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
            },
          })
    .then(res => res.json())
    .then(({totalPages, result}) => {
      console.log(totalPages, result);
      // console.log(data.result);
      // setProjects(result);
      dispatch(addCollections(result));
      setNumberOfPages(totalPages);
      setLoading(false);
      return result;
    })
  }, [pageNumber]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    // refetch();
  };

  // console.log(Projects);

  const filteredData = Projects?.filter((item) =>
    item.projectName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) {
    return <Loading />;
  }

  const previousPage = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  }

  const nextPage = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  }

  

  return (
    <div className={`${layout.sectionCol}`}>
     <AnimatePresence>
      <div>
        <div className={`${layout.sectionInfo} text-center z-10 text-white`}>
          <TitleText
            title={
              <TypingText
                textStyles="my-[8px] font-bold md:text-[64px] text-[40px] text-white"
                title="Stack Collections"
              />
            }
          />
          <h2
            className={`font-poppins font-normal xs:text-[32px] text-[28px] text-dimWhite leading-[32px] md:leading-[76.8px]  w-full sm:flex hidden`}
          >
            Browse and share work from world-class designers and developers in
            the front-end community.
          </h2>
        </div>
       
         <motion.div
          {...FADE_UP_ANIMATION_VARIANTS}
          className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5"
        >
          <div>
            <h1 className=" font-poppins font-normal xs:text-[28px] text-[24px] text-dimWhite w-full">
              Explore ideas from the 1.8 million+ front-end designers and
              developers.
            </h1>
            <p className="text-dimWhite/60 mb-4">
              Check out the work of top-notch designers and developers in the
              front-end community and share it.
            </p>
            <fieldset className="w-full lg:flex">
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
            <ul></ul>
          </div>
          {filteredData?.map((collection, index) => (
            <CollectionCard
              key={collection._id}
              index={index}
              collection={collection}
              user={collection.user}
            />
          ))}
          

        </motion.div>
        <div className="mt-4 flex justify-end">
            <nav aria-label="Page navigation">
              <ul className="inline-flex -space-x-px">
                <li>
                  <button onClick={previousPage} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                </li>
                {
                  pages.map((pageIndex) => (
                    <li>
                      <button onClick={() => setPageNumber(pageIndex)} key={pageIndex} 
                      className={`px-3 py-2 leading-tight text-gray-500 
                      bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 
                      dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                      `}>
                        {pageIndex + 1}
                      </button>
                    </li>
                  ))
                }
                {/* <li>
                  <button aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</button>
                </li> */}
                <li>
                  <button onClick={nextPage} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
              </ul>
            </nav>

          </div>
      
      </div>
      </AnimatePresence>
    </div>
  );
};

export default Collections;

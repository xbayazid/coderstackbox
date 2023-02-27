import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import CollectionCard from "../../../../components/Cards/CollectionCard";
import PreLoaderSpinner from "../../../../components/PreLoaderSpinner/PreLoaderSpinner";
import { getUsersCollections } from "../../../../features/collectionSlice/userCollectionSlice";
import { getUsers } from "../../../../features/usersSlice";
import { layout } from "../../../../style";
import {
  fadeIn,
  FADE_UP_ANIMATION_VARIANTS,
  staggerContainer,
} from "../../../../utils/motion";
import ProjectRow from "./ProjectRow";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false)
  const user = useSelector(getUsersCollections);
//   // console.log(userCollections);
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredData = userCollections?.project?.filter((item) =>
//     item.projectName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

const url = `http://localhost:5000/user-collections?id=${user._id}`;
  const {
    data: project,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      });
      return res.data.result;
    },
  });




  const handleDelete = (id) => {
    fetch(`http://localhost:5000/code/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.error(data.message);
          refetch()
        }
      });
  };


    return (
        <div>
            <header>
                <h2 className='text-3xl mb-5 text-dimWhite'>Projects</h2>
            </header>
            <main>    
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-center py-4 bg-white dark:bg-gray-900">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />

                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                   Project Overview
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Project Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Onner
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {project?.length === 0 ? (
                                <>
                                <p className="text-4xl font-bold text-dimWhite">No item found</p>
                    
                                </>
                              ) : (
                                project?.map((collection, index) => (
                                  <ProjectRow
                                  handleDelete={handleDelete}
                                    key={collection._id}
                                    index={index}
                                    project={collection}
                                    user={user}
                                  />
                                ))
                              )}
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
};

export default Projects;
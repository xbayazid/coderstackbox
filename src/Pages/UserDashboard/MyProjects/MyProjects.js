<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaHome, FaUsers, FaSwatchbook, FaUserCircle, FaRegEnvelope, FaSignOutAlt, FaExclamationTriangle, FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../../components/Buttons/Button';

const MyProjects = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - MyProjects</title>
            </Helmet>
            <div className="flex text-white">
                <div className='hidden lg:block md:w-3/12 h-[100vh] bg-blue-green-gradient z-50'>
                    <div className='absolute sidebar-menu ml-3 text-white text-2xl'>
                        <ul className='mt-20'>
                            <li>
                                <Link to="/userProfile"> <FaUserCircle className='sidebar-icon'></FaUserCircle> <span>Profile</span> </Link>
                            </li>
                            <li>
                                <Link to="/myProjects"> <FaSwatchbook className='sidebar-icon'></FaSwatchbook> <span>My Projects</span> </Link>
                            </li>

                        </ul>

                        <div>
                            <FaSignOutAlt className=''></FaSignOutAlt>
                        </div>
=======
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaHome,
  FaUsers,
  FaSwatchbook,
  FaUserCircle,
  FaRegEnvelope,
  FaSignOutAlt,
  FaExclamationTriangle,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../components/Buttons/Button";

const MyProjects = () => {
  const { data: myProjects = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/MyProjects.json");
      const data = await res.json();
      return data;
    },
  });
  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }
  return (
    <div>
      <div className="flex text-white">
        <div className="hidden lg:block md:w-3/12 h-[100vh] bg-blue-green-gradient z-50">
          <div className="absolute sidebar-menu ml-3 text-white text-2xl">
            <ul className="mt-20">
              <li>
                <Link to="/userProfile">
                  {" "}
                  <FaUserCircle className="sidebar-icon"></FaUserCircle>{" "}
                  <span>Profile</span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/myProjects">
                  {" "}
                  <FaSwatchbook className="sidebar-icon"></FaSwatchbook>{" "}
                  <span>My Projects</span>{" "}
                </Link>
              </li>
            </ul>

            <div>
              <FaSignOutAlt className=""></FaSignOutAlt>
            </div>
          </div>
        </div>

        <div className="main-content w-full">
          <header className="bg-dark-1 p-4">
            <div className="flex justify-between items-center">
              <div className="header-title text-3xl flex gap-x-5 items-center">
                <label htmlFor="">
                  <FaBars></FaBars>
                </label>
                Overview
              </div>
              <div className="user-wrapper text-3xl ">
                <FaUserCircle></FaUserCircle>
              </div>
            </div>
          </header>

          <main className="py-5 px-10">
            {/* we will load the username here from email */}
            <h2 className="text-3xl mb-5 others">My project</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {myProjects?.map((myProject) => (
                <div class="flex max-w-md bg-dark-1 shadow-xl hover:bg-gray-900 duration-300">
                  <div class="w-2/4 flex items-center p-2">
                    <img src={myProject.picture} className="" alt="" />
                  </div>

                  <div class="w-2/3 p-4 md:p-4 text-white">
                    <h1 class="text-xl font-bold  dark:text-white">
                      {myProject.name}
                    </h1>

                    <p class="mt-2 text-sm  ">{myProject.about}</p>

                    <div class="flex justify-between mt-3 item-center">
                      <h1 class="text-lg font-bold   dark:text-gray-200 md:text-xl">
                        <button className="px-2 py-1 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-lime-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                          Code...
                        </button>
                      </h1>

                      <button class="px-2 py-1 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-red-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                        Remove projects
                      </button>
>>>>>>> 68109ce8090c7db95ef4b0d64f3f42e0c7848b2e
                    </div>
                  </div>
                </div>
<<<<<<< HEAD

                <div className='main-content w-full'>

                    <header className='bg-dark-1 p-4'>
                        <div className='flex justify-between items-center'>
                            <div className='header-title text-3xl flex gap-x-5 items-center'>
                                <label htmlFor=""><FaBars></FaBars></label>Overview
                            </div>
                            <div className='user-wrapper text-3xl '>
                                <FaUserCircle></FaUserCircle>
                            </div>
                        </div>
                    </header>

                    <main className='py-5 px-10'>
                        {/* we will load the username here from email */}
                        <h2 className='text-3xl mb-5 others'>My project</h2>

                    </main>
                </div>
            </div>
        </div>
    );
=======
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
>>>>>>> 68109ce8090c7db95ef4b0d64f3f42e0c7848b2e
};

export default MyProjects;

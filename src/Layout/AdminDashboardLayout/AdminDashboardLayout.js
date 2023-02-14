import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaSwatchbook,
  FaUserCircle,
  
  FaSignOutAlt,
 
  FaBars,
  
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

import "./AdminDashboardLayout.css";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex  text-white">
      <div
        className={`bg-dark-1 min-h-screen ${
          isOpen ? "w-64" : "w-0"
        }  duration-500 text-white`}
      >
        <div
          style={{ width: isOpen ? "384px" : "48px" }}
          className=" w-64 ml-3 text-white text-2xl"
        >
          <div className=" flex items-center py-5">
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800  transition-all duration-300 ease-in-out"
            >
              <h1 className="text-white ">
                <span className="text-3xl text-secondary  pt-2">
                  <ion-icon name="logo-slack"></ion-icon>
                </span>{" "}
                Coders<span className="text-secondary ml-">StackBox</span>
              </h1>
            </div>
            <div className=" text-3xl flex gap-x-5 items-center">
              {/* <div style={{ marginLeft: isOpen ? '20px' : '0px' }}>
                                    <FaBars onClick={toggle} className='ml-1 sm:block hidden md:block  '></FaBars>
                                </div> */}

              <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl text-white absolute right-8 top-6
                                        cursor-pointer md:block hidden lg:hidden sm:block 
                                        ">
                                    <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
                                </div>

                            </div>
                        </div>
                        <ul className=''>
                            <div>
                                <li>
                                    <Link className=' flex items-center gap-2 mt-5 pl-5 pt-5 font-medium ' to="/adminDashboard"> <FaHome className={`text-2xl cursor-pointer duration-500 ${!isOpen && 'scale-0'}`} ></FaHome> <span className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'} hover:bg-black rounded-full p-2`} >Dashboard</span> </Link>
                                </li>
                            </div>
                            <li>
                                <Link className=' flex items-center gap-2 mt-5 pl-5 pt-5 font-medium ' to="/adminDashboard/developers"> <FaUsers className={`text-2xl cursor-pointer duration-500 ${!isOpen && 'scale-0'}`}></FaUsers> <span className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'} hover:bg-black rounded-full p-2`}>Developers</span> </Link>
                            </li>
                            <li>
                                <Link className=' flex items-center gap-2 mt-5 pl-5 pt-5 font-medium ' to="/adminDashboard/projects"> <FaSwatchbook className={`text-2xl cursor-pointer duration-500 ${!isOpen && 'scale-0'}`}></FaSwatchbook> <span className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'} hover:bg-black rounded-full p-2`}>Projects</span> </Link>
                            </li>

                            <li>
                                <Link className=' flex items-center gap-2 mt-5 pl-5 pt-5 font-medium ' to="/adminDashboard/profile"> <FaUserCircle className={`text-2xl cursor-pointer duration-500 ${!isOpen && 'scale-0'}`}></FaUserCircle> <span className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'} hover:bg-black rounded-full p-2`}>Profile</span> </Link>
                            </li>
                        </ul>

                        <div className='ml-2 p-2 mt-2'>
                            <Link to='/'><FaSignOutAlt></FaSignOutAlt></Link>
                        </div>
                    </div>
                </div>

                <div className='main-content w-full'>

                    <header className='bg-dark-1 p-4'>
                        <div className='flex justify-between items-center'>
                            <div className='header-title text-3xl flex gap-x-5 items-center'>
                                <div onClick={() => setIsOpen(!isOpen)} className='text-3xl text-white absolute right-8 top-6
                                        cursor-pointer md:hidden block
                                        '
              >
                <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
              </div>
              <div style={{ marginLeft: isOpen ? "20px" : "0px" }}>
                <FaBars
                  onClick={toggle}
                  className="ml-1 sm:block hidden md:hidden lg:block  "
                ></FaBars>
              </div>
              <label htmlFor=""></label>Overview
            </div>
            <div className="user-wrapper text-3xl md:hidden  sm:block hidden">
              <FaUserCircle></FaUserCircle>
            </div>
          </div>
        </header>

        <main className="py-5 px-10">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaChartArea, FaHome, FaSwatchbook, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({ isOpen, desktopSidebarRef, setIsOpen }) => {
  return (
    <>
      <motion.div
        ref={desktopSidebarRef}
        key="desktop-modal"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onMouseDown={(e) => {
          if (desktopSidebarRef.current === e.target) {
            setIsOpen(false);
          }
        }}
        className={`fixed top-0 z-10 ${
          !isOpen && "ml-[-100%]"
        } flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition-all duration-700 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700`}
      >
        <div>
          <div className="-mx-6 px-6 py-4 flex justify-between items-center">
            <Logo styles="w-32" />
            <div
            onClick={() => setIsOpen(false)}
            className="text-3xl text-white cursor-pointer lg:hidden"
          >
            <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
          </div>
          </div>

          <div className="mt-8 text-center">
            <img
              src="images/second_user.webp"
              alt=""
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h5 className="mt-4 text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
              Cynthia J. Watts
            </h5>
            <span className="text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="mt-8 space-y-2 tracking-wide">
            <li>
              <Link
              to="/adminDashboard"
                aria-label="dashboard"
                className="relative flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r from-green-600 to-cyan-400  px-4 py-3 text-white"
              >
                 <FaHome
                    className={`text-lg cursor-pointer duration-500 `}
                  ></FaHome>{" "}
                <span className="-mr-1 font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300
                hover:bg-gradient-to-r from-green-600 to-cyan-400  "
              >
                <FaSwatchbook
                  className={`text-lg cursor-pointer duration-500 `}
                ></FaSwatchbook>{" "}
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                My Projects
                </span>
              </a>
            </li>
            <li>
              <Link
               to="/adminDashboard/useranalytics"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300
                hover:bg-gradient-to-r from-green-600 to-cyan-400  "
              >
               <FaChartArea
                  className={`text-lg cursor-pointer duration-500 `}
                ></FaChartArea>{" "}
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                User Analytics
                </span>
              </Link>
            </li>
            <li>
              <Link to="/adminDashboard/profile"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300
                hover:bg-gradient-to-r from-green-600 to-cyan-400  "
              >
                <FaUserCircle
                  className={`text-lg cursor-pointer duration-500 `}
                ></FaUserCircle>{" "}
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                Profile
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700
        hover:bg-gradient-to-r from-green-600 to-cyan-400 ">
          <Link to="/" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white">
              Logout
            </span>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

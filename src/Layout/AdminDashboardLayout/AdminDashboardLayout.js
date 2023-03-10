import React from "react";
import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaSwatchbook,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaChartArea,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/Logo";

import "./AdminDashboardLayout.css";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex relative text-white">
      <div
        className={`bg-zinc-700 z-[20] min-h-screen ${
          isOpen ? "w-[350px]" : "w-0"
        }  duration-500 text-white fixed`}
      >
        <div
          style={{ width: isOpen ? "384px" : "48px" }}
          className=" w-64 ml-3 text-white text-2xl"
        >
          <div className=" flex items-center py-3">
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800  transition-all duration-300 ease-in-out"
            >
              <Logo />
            </div>
            <div className=" text-3xl flex gap-x-5 items-center">
              {/* <div style={{ marginLeft: isOpen ? '20px' : '0px' }}>
                                    <FaBars onClick={toggle} className='ml-1 sm:block hidden md:block  '></FaBars>
                                </div> */}

              <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:block hidden lg:hidden sm:block"
              >
                <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
              </div>
            </div>
          </div>
          <ul className="">
            <div>
              <li>
                <Link
                  className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                  to="/adminDashboard/adminboard"
                >
                  {" "}
                  <FaHome
                    className={`text-lg cursor-pointer duration-500 ${
                      !isOpen && "scale-0"
                    }`}
                  ></FaHome>{" "}
                  <span
                    className={`whitespace-pre duration-500 ${
                      !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                    } hover:bg-black rounded-full p-2`}
                  >
                    Admin Board
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                  to="/adminDashboard"
                >
                  {" "}
                  <FaHome
                    className={`text-lg cursor-pointer duration-500 ${
                      !isOpen && "scale-0"
                    }`}
                  ></FaHome>{" "}
                  <span
                    className={`whitespace-pre duration-500 ${
                      !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                    } hover:bg-black rounded-full p-2`}
                  >
                    Dashboard
                  </span>{" "}
                </Link>
              </li>
            </div>
            <li>
              <Link
                className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                to="/adminDashboard/developers"
              >
                {" "}
                <FaUsers
                  className={`text-lg cursor-pointer duration-500 ${
                    !isOpen && "scale-0"
                  }`}
                ></FaUsers>{" "}
                <span
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  } hover:bg-black rounded-full p-2`}
                >
                  Developers
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                to="/adminDashboard/myprojects"
              >
                {" "}
                <FaSwatchbook
                  className={`text-lg cursor-pointer duration-500 ${
                    !isOpen && "scale-0"
                  }`}
                ></FaSwatchbook>{" "}
                <span
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  } hover:bg-black rounded-full p-2`}
                >
                  My Projects
                </span>{" "}
              </Link>
            </li>

            <li>
              <Link
                className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                to="/adminDashboard/useranalytics"
              >
                {" "}
                <FaChartArea
                  className={`text-lg cursor-pointer duration-500 ${
                    !isOpen && "scale-0"
                  }`}
                ></FaChartArea>{" "}
                <span
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  } hover:bg-black rounded-full p-2`}
                >
                  User Analytics
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                to="/adminDashboard/profile"
              >
                {" "}
                <FaUserCircle
                  className={`text-lg cursor-pointer duration-500 ${
                    !isOpen && "scale-0"
                  }`}
                ></FaUserCircle>{" "}
                <span
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  } hover:bg-black rounded-full p-2`}
                >
                  Profile
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                className=" flex items-center gap-2 mt-5 pl-5 pt-5 text-lg "
                to="/"
              >
                <FaSignOutAlt
                  className={`text-lg cursor-pointer duration-500 ${
                    !isOpen && "scale-0"
                  }`}
                />
                <span
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  } hover:bg-black rounded-full p-2`}
                >
                  Go to home
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content w-full">
        <header className="bg-dark-1 p-4">
          <div className="flex justify-between items-center">
            <div className="header-title text-3xl flex gap-x-5 items-center">
              {/* <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl text-white absolute right-8 top-6
                                        cursor-pointer md:hidden block
                                        "
              >
                <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
              </div> */}
              <div>
                <FaBars
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer"
                ></FaBars>
              </div>
              <div >Overview</div>
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

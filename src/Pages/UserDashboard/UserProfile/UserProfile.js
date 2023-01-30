import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import {
  FaHome,
  FaUsers,
  FaSwatchbook,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../../style";
import UserModal from "./UserModal/UserModal";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex text-white my-16">
        <div className="hidden lg:block md:w-3/12 h-[60vh] bg-teal-400">
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
          </div>
        </div>

        <div className="main-content w-full">
          <header className="bg-dark-1 p-4">
            <div className="flex justify-between items-center">
              <div className="header-title text-3xl flex gap-x-5 items-center">
                <label htmlFor="">
                  <FaBars></FaBars>
                </label>
              </div>
              <div className="user-wrapper text-3xl ">
                <FaUserCircle></FaUserCircle>
              </div>
            </div>
          </header>

          <main className="py-5 px-10 bg-indigo-400 h-[53.3vh]">
            <h2 className={`${styles.heading2} `}>Profile</h2>
            <div className="flex items-center">
              <div className="mr-5">
                <img
                  className="rounded-full w-36 h-36 mb-5"
                  src="https://i.ibb.co/199wc0y/3d-illustration-person-23-2149436179.webp"
                  alt=""
                />
                {/*  */}
              </div>
              <div>
                <h2 className="text-2xl">Full Name:</h2>
                <p>Email:</p>
                <p>Phone:</p>
              </div>
            </div>
            <div>
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 ml-4" onClick={() => setIsOpen(true)}>
             Edit Profile </button>
            </div>
          </main>
        </div>
      </div>
      {isOpen && <UserModal setIsOpen={setIsOpen}></UserModal>}
    </div>
  );
};

export default UserProfile;

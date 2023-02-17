/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import styles from "../../../style";
import { navVariants } from "../../../utils/motion";
import { motion } from "framer-motion";
import Button from "../../../components/Buttons/Button";
import Dropdown from "../../../components/Dropdown";
import { close, logo, menu } from "../../../assets";
import Logo from "../../../components/Logo";
import useScrollPosition from "../../../hooks/useScrollPosition";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userOpen, setUserOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleLogOut = () => {
    localStorage.removeItem("CodersStackBox");
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };


  const scrolled = useScrollPosition(50);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`py-5 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.paddingX} mx-auto`}>
        <div className="flex justify-between py-4 ">
          <Logo />
          
          <ul
            className={`list-none lg:flex hidden justify-end items-center flex-1 text-white`}
          >
            <li>
              <Link className="font-bold cursor-pointer  mr-6 " to="/doc">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="font-bold cursor-pointer  mr-6 " to="/ide">
                IDE
              </Link>
            </li>

            <li>
              <Link className="font-bold cursor-pointer  mr-6 " to="/collections">
                Collections
              </Link>
            </li>
              {user?.uid ? (
                    <>
                      <li className="font-bold cursor-pointer  mr-6 ">
                        <Link to="/adminDashboard">Dashboard</Link>
                      </li>
                      <li className="font-bold cursor-pointer ">
                        <label htmlFor="logout" onClick={handleLogOut}>
                          <Button id="logout" styles="h-2 ">
                            Log Out
                          </Button>
                        </label>
                      </li>
                      <li className="ml-5">
                        <button
                          onClick={() => setUserOpen(!userOpen)}
                          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 hover:animate-bounce focus:ring-offset-secondary "
                        >
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user?.photoURL}
                            alt="user"
                          />
                        </button>
                        <Dropdown
                          userOpen={userOpen}
                          setUserOpen={setUserOpen}
                          user={user}
                        />
                      </li>
                </>
              ) : (
                <li>
                  <label htmlFor="login">
                    <Link to="/login">
                      <Button id="login" styles="h-2 ">
                        Login
                      </Button>
                    </Link>
                  </label>
                </li>
              )}
          </ul>
          <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-30 box-shadow`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-white`}
              
              >
                <Link to="/doc">Documentation</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-white`}
              
              >
                <Link to="/ide">IDE</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-white`}
              
              >
                <Link to="/collections">Collections</Link>
              </li>
              {user?.uid ? (
                <>
                  <li className="font-poppins font-medium cursor-pointer text-[16px] text-white  mr-6 ">
                        <Link to="/adminDashboard">Dashboard</Link>
                      </li>
                      <li className="font-poppins font-medium cursor-pointer text-[16px] text-white ">
                        <label htmlFor="logout" onClick={handleLogOut}>
                          <Button id="logout" styles="h-2 ">
                            Log Out
                          </Button>
                        </label>
                      </li>
                      <li className="">
                        <button
                          onClick={() => setUserOpen(!userOpen)}
                          className="text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 hover:animate-bounce focus:ring-offset-secondary "
                        >
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user?.photoURL}
                            alt="user"
                          />
                        </button>
                        <Dropdown
                          userOpen={userOpen}
                          setUserOpen={setUserOpen}
                          user={user}
                        />
                      </li>
                </>
              ) : (
                <li>
                  <label htmlFor="login">
                    <Link to="/login">
                      <Button id="login" styles="h-2 ">
                        Login
                      </Button>
                    </Link>
                  </label>
                </li>
              )} 
            
          </ul>
        </div>
      </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;



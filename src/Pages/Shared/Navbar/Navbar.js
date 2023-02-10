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
import { logo } from "../../../assets";
import Logo from "../../../components/Logo";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userOpen, setUserOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("CodersStackBox")
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  let [open, setOpen] = useState(false);

  const [fix, setFix] = useState(false);
  useEffect(() => {
    const fixedHeader = () => {
      if (window.scrollY >= 390) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", fixedHeader);
    return () => window.removeEventListener("scroll", fixedHeader);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      /* className={` w-full z-50 top-0 left-0 transition-all duration-300 ease-in-out ${fix ? "fixed top-0 z-50  navglassmorphism " : "relative"} `}  */
      className={`py-5 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.paddingX} mx-auto`}>
        <div className="flex justify-between py-4 ">
          <Logo />
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl text-white absolute right-8 top-6
                cursor-pointer md:hidden block
                "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center mr-12 md:pb-0
                pb-12 absolute md:static text-white z-10 
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                ${
                  open
                    ? "top-20 opacity-100 navglassmorphism p-5 "
                    : "top-[-490px]"
                } `}
          >
            <li>
              <Link className="lg:ml-8 ml-0 mr-5" to="/doc">
                Documentation
              </Link>
            </li>

            <li>
              <Link className="lg:ml-8 ml-0 mr-5" to="/collections">
                Collections
              </Link>
            </li>
            <li>
              <Link className="lg:ml-8 ml-0 mr-5" to="/userDashboard">
                UserDashboard
              </Link>
            </li>
            <li className="lg:ml-8 ml-0 mr-5">
              {user?.uid ? (
                <>
                  <div className="lg:flex">
                    <>
                      <li className="lg:mr-8">
                        <Link to="/adminDashboard">Dashboard</Link>
                      </li>
                    </>
                    <>
                      <li>
                        <label htmlFor="logout" onClick={logOut}>
                          <Button id="logout" styles="h-2 ">
                            Log Out
                          </Button>
                        </label>
                      </li>
                    </>
                    <>
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
                        <Dropdown userOpen={userOpen} setUserOpen={setUserOpen} user={user}/>
                      </li>
                    </>
                  </div>
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
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../style";
import { motion } from "framer-motion";
import { footerVariants } from "../../../utils/motion";
import Logo from "../../../components/Logo";


const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.boxWidth} mx-auto  py-10 text-white relative flex justify-center `}
    >
      <div className="footer-gradient" />
      <div className="md:items-center flex flex-col justify-center w-full">
        <ul className="w-full mb-5 flex md:flex-row flex-col items-center md:justify-between justify-center text-bold text-white">

          <li className=" md:hidden block">

            <div className="font-bold text-2xl cursor-pointer flex justify-center items-center ml-10 font-[poppins] text-gray-800">
              <Logo />
            </div>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="" to='/about'>About Us</Link>
          </li>
          <li className="md:block hidden">
            <Logo />
          </li>

          <li>
            <Link className="" to='/community'>Community Support</Link>
          </li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
        <div 
          className="mt-5 bg-gradient-to-r from-accent to-secondary"
          style={{ height: "2px" }}
        />
        

        <div className="text-white mt-5 flex gap-2 justify-center">
          <>
            <a className=" rounded-full ..." href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-github"></ion-icon></button>
            </a>
            <a className="" href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-linkedin"></ion-icon></button>
            </a>
            <a className="" href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-facebook"></ion-icon></button>
            </a>
            <a className="" href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-ionic"></ion-icon></button>
            </a>
          </>
        </div>
        <div className="text-white flex justify-center">
          <a className="mt-5 mb-5 pt-5" href="">
            <ion-icon name="logo-edge"></ion-icon>  2010-2020 Privacy-Terms
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;

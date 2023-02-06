/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../style";
import { motion } from "framer-motion";
import { footerVariants } from "../../../utils/motion";
import Button from "../../../components/Buttons/Button";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.boxWidth} mx-auto  py-10 text-white relative flex justify-center `}
    >
      <div className="footer-gradient" />
      <div className="flex flex-col justify-center w-full">
        <ul className="lg:flex md:flex sm:flex items-center text-bold justify-around text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <li><Link className="lg:ml-8 ml-0" to='/about'>About Us</Link></li>
          </li>
          <li>
            <Link to="/">
              <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                <span className="text-3xl text-secondary mr-1 pt-2">
                  <ion-icon name="logo-slack"></ion-icon>
                </span>
                <h1 className="text-white">
                  Coders<span className="text-secondary">StackBox</span>
                </h1>
              </div>
            </Link>
          </li>
          <li>
          <Link className="lg:ml-8 ml-0" to='/catagories'>Categories</Link>
          </li>
          <li>
          <Link className="lg:ml-8 ml-0" to='/community'>Community Support</Link>
          </li>
          {/* <li><Link to=''>Login</Link></li>
                        <li><Link to="">Sign Up</Link></li> */}
        </ul>
        <div
          className="mt-5 bg-gradient-to-r from-accent to-secondary"
          style={{ height: "2px" }}
        />

        <div className="text-white flex justify-center">
          <div className="mt-5 mb-5 pt-10">
            <a className="mr-2 rounded-full ..." href="">
            <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-github"></ion-icon></button>
            </a>
            <a className="mr-2" href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-linkedin"></ion-icon></button>
            </a>
            <a className="mr-2" href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-facebook"></ion-icon></button>
            </a>
            <a className="mr-2" href="">
              <button className="px-2 py-1 bg-lime-800 hover:bg-lime-500 border border-outline rounded-2xl "><ion-icon name="logo-ionic"></ion-icon></button>
            </a>
          </div>
        </div>
        <div className="text-white flex justify-center">
          <a className="mt-5 mb-5 pt-10" href="">
            <ion-icon name="logo-edge"></ion-icon>  2010-2020 Privacy-Terms
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;

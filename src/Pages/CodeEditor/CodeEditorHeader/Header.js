import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../../../assets";
import { navLinks } from "../../../constants";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sticky top-0 z-[3] w-full flex py-3 justify-between items-center navbar">
      <>
        <Link to="/" className="gap-x-4 items-center flex">
          
          <span className='text-3xl text-secondary  pt-2'>
              <ion-icon name="logo-slack"></ion-icon>
            </span>
            <h1 className='text-white'>Coders<span className='text-secondary'>StackBox</span></h1>
        </Link>
      </>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-bold cursor-pointer text-[26px] ${
              active === nav.title ? "text-white text-[32px]" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.icon}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

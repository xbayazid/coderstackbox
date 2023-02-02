import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaCodepen } from "react-icons/fa";

const UserDashboardNavbar = () => {
    const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
    return (
        <div>
            <nav className="bg-gray-800">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src="logo.svg" alt="Logo" className="w-10 h-10" />
          <span className="font-medium text-white ml-3">CodersStackBox</span>
        </div>
        <div className="hidden md:flex">
          <Link to="/"
            className="font-medium text-white mr-3 hover:text-gray-400"
          ><div className='flex items-center gap-1'>
          <FaHome></FaHome> Home
          </div>
          </Link>
          <Link to="/myProjects"
            className="font-medium text-white mr-3 hover:text-gray-400"
          >
            <div className='flex items-center gap-1'><FaCodepen></FaCodepen>My Projects</div>
          </Link>
          <Link
            to="/userProfile"
            className="font-medium text-white mr-3 hover:text-gray-400"
          >
            <div className='flex items-center gap-1'><FaUserCircle></FaUserCircle>Profile</div>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggle}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {collapse ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
            </nav>
        </div>
    );
};

export default UserDashboardNavbar;
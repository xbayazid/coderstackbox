import React from "react";
import { useState } from "react";
import { useContext } from "react";

import { FaRegWindowClose } from "react-icons/fa";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";

const UserModal = ({ setIsOpen }) => {
  const { user } = useContext(AuthContext);

  const [updatedUser, setUpdatedUser] = useState({});

  const handleUpdateUser = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...updatedUser };
    newUser[field] = value;
    setUpdatedUser(newUser);
  };

  return (
    <div className="fixed inset-0 overflow-hidden ">
      <div className="relative w-full h-full top-1/4">
        <div
          className="absolute bg-gray-900 opacity-0"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="max-w-lg mx-auto my-10 bg-gradient-to-r from-gray-500 to-gray-600  rounded-lg p-10">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-white">Profile Setting</h2>
            <button
              className="text-blue-500 hover:text-blue-600 text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <FaRegWindowClose className="text-white"></FaRegWindowClose>
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 ">
            <form onSubmit={handleUpdateUser}>
              <input
                onChange={handleInputChange}
                name="name"
                type="text"
                className="w-full border-2 my-2 p-2 rounded-md outline-none"
                placeholder="Your Full Name"
              />
              <input
                onChange={handleInputChange}
                name="email"
                type="email"
                className="w-full border-2 my-2 p-2 rounded-md outline-none"
                placeholder="Email Address"
              />
              <input
                onChange={handleInputChange}
                name="phone"
                type="text"
                className="w-full border-2 my-2 p-2 rounded-md outline-none"
                placeholder="Phone Number"
              />
              <button
                className="uppercase bg-cyan-700 text-white px-5 py-3 rounded-md"
                type="submit"
                onClick={() => setIsOpen(false)}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

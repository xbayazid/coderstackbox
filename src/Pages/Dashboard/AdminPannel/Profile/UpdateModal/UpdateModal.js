import { React, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const UserModal = ({ setIsOpen, user }) => {
  const { name, email, _id, about, phone } = user;
  const [updatedUser, setUpdatedUser] = useState({});

  const handleUpdateUser = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/u/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdatedUser("");
      });
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...updatedUser };
    newUser[field] = value;
    setUpdatedUser(newUser);
  };

  return (
    <div className="fixed inset-0 overflow-hidden backdrop-blur-lg">
      <div className="w-full h-full">
        <div
          className="absolute bg-gray-900 opacity-0"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="w-2/4 mx-auto my-10 bg-gradient-to-r from-gray-500 to-gray-600  rounded-lg p-10">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-white">Profile Setting</h2>
            <button
              className="text-blue-500 hover:text-blue-600 text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <FaRegWindowClose className="text-white"></FaRegWindowClose>
            </button>
          </div>

          <div className="mt-5 ">
            <form onSubmit={handleUpdateUser}>
              <label className="" htmlFor="">
                Name
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={name}
                name="name"
                type="text"
                className="w-full border-2 my-2 p-2 rounded-md outline-none text-black"
                placeholder="Your Full Name"
              />
              <label className="" htmlFor="">
                Email Address
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={email}
                name="email"
                type="email"
                className="w-full border-2 my-2 p-2 rounded-md outline-none text-black"
                placeholder="Email Address"
              />
              <label className="" htmlFor="">
                Phone
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={phone}
                name="phone"
                type="number"
                className="w-full border-2 my-2 p-2 rounded-md outline-none text-black"
                placeholder="Phone Number"
              />
              <div>
                <label
                  for="Description"
                  class="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Description
                </label>

                <textarea
                  onChange={handleInputChange}
                  defaultValue={about}
                  name="about"
                  placeholder="About Me"
                  className="block  mt-2 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                ></textarea>
              </div>
              <button
                className="uppercase bg-cyan-700 text-white px-5 py-3 rounded-md my-2"
                type="submit"
                // onClick={() => setIsOpen(false)}
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

import React from "react";
import { FaTrash } from "react-icons/fa";

const User = ({ user }) => {
  const { _id, name, email, project, photoURL, phone, about } = user;
  console.log(_id);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={photoURL}
          alt="Jese image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">
        {/* <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
          {developerAddress}
        </div> */}
      </td>
      <td class="px-6 py-4">
        <button to="#" className="font-medium text-blue-500 ">
          Make Admin
        </button>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-500 dark:text-white">
        <button>
          <FaTrash className="text-red-400 hover:text-red-500 text-2xl"></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default User;

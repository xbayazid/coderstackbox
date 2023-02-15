import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeveloperRow = ({ user }) => {


  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={user?.photoURL}
          alt={user?.name}
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{user?.name}</div>
          <div className="font-normal text-gray-500">{user?.email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{user?.phone}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
          {"address"}
        </div>
      </td>
      <td class="px-6 py-4">
        <Link to="/" class="font-medium text-blue-500 ">
          {user?.role}
        </Link>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-500 dark:text-white">
        <FaTrash className="text-red-400 hover:text-red-500 text-2xl"></FaTrash>
      </td>
    </tr>
  );
};

export default DeveloperRow;

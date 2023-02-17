import React from "react";
import { FaTrash } from "react-icons/fa";

import SmallSpinner from "../../../../components/SmallSpinner";

const DeveloperRow = ({ id, handleRequest, loading, handleDelete, user }) => {
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
      <td className="px-5 py-5  text-sm">
        <p className="text-dimWhite whitespace-no-wrap">
          {user?.role ? user.role : "User"}
        </p>
      </td>
      <td className="px-5 py-5 text-sm">
        {user?.role ? (
          <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">
              {loading ? <SmallSpinner /> : " Admin"}
            </span>
          </span>
        ) : (
          <button
            onClick={() => handleRequest(user)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-dimWhite leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">
              {loading ? <SmallSpinner /> : "Make Admin"}
            </span>
          </button>
        )}
      </td>
      <td className={`px-6 py-4 font-semibold text-gray-500 dark:text-white cursor-pointer`}>
        {
          loading? <SmallSpinner /> : <button
          onClick={()=>handleDelete(user._id)}
          >
            <FaTrash
          
          className={` ${
            user?.role === "admin"
              ? "disable text-gray-600 text-2xl"
              : "text-red-400 hover:text-red-500 text-2xl"
          }`}
        ></FaTrash>
          </button>
        }
      </td>
    </tr>
  );
};

export default DeveloperRow;

import React from "react";
import { FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const User = ({ user }) => {
  const { _id, name, email, project, photoURL, phone, about } = user;
  // console.log("user ", _id);

  const url = `http://localhost:5000/u/admin/${_id}`;
  const {
    data: makeAdmin,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["makeAdmin"],
    queryFn: async () => {
      const res = await axios.put(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      });
      return res.data;
    },
  });
  console.log(makeAdmin);

  const handleMakeAdmin = (id) => {
    const url = `http://localhost:5000/u/admin/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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

      <td class="px-6 py-4">
        <button
          onClick={() => handleMakeAdmin(_id)}
          to="#"
          className="font-medium text-blue-500 "
        >
          Make Admin
        </button>
        2
      </td>
      <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
        <button>
          <FaTrash className="text-red-400 hover:text-red-500 text-2xl"></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default User;

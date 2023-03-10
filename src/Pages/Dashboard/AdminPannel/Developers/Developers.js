import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DeveloperRow from "./DeveloperRow";
import { getAllUsers, makeAdmin } from "../../../../api/user";
import toast from 'react-hot-toast'
import PreLoaderSpinner from "../../../../components/PreLoaderSpinner/PreLoaderSpinner";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

const Developers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    getAllUsers(user?.email).then((data) => {
      setUsers(data.result);
      setLoading(false);
    });
  };

  const handleRequest = (user) => {
    makeAdmin(user).then((data) => {
      getUsers();
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.error(data.message);
          setLoading(false);
          getUsers();
        }
      });
  };

  /* if (loading) {
    return <PreLoaderSpinner />;
  } */


  return (
    <div>
      <main>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-center py-4 bg-gray-900">
            <label for="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm border rounded-lg w-80 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for users"
              />
            </div>
          </div>
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Addres
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Requested
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <DeveloperRow
                    key={user._id}
                    user={user}
                    handleRequest={handleRequest}
                    loading={loading}
                    handleDelete={handleDelete}
                  ></DeveloperRow>
                ))}
              </tbody>
            </table>
        </div>
      </main>
    </div>
  );
};

export default Developers;

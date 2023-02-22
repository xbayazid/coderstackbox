import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaUsers, FaSwatchbook, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllCollections } from "../../../../api/collections";
import { getAllUsers } from "../../../../api/user";
import Button from "../../../../components/Buttons/Button";
import PreLoaderSpinner from "../../../../components/PreLoaderSpinner/PreLoaderSpinner";
import SmallSpinner from "../../../../components/SmallSpinner";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getUsers();
    getCollections();
  }, []);

  const getUsers = () => {
    setLoading(true);
    getAllUsers().then((data) => {
      setUsers(data.result);
      setLoading(false);
    });
  };
  const getCollections = () => {
    setLoading(true);
    getAllCollections().then((data) => {
      setCollections(data.result);
      setLoading(false);
    });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - AdminDashboard</title>
      </Helmet>

      <div className="text-white">
        <div className="main-content w-full">
          <h2 className="text-3xl mb-5 others">Hello, Welcome back!</h2>

          <main className="py-5 px-5">
            <div className="grid gap-10 md:grid-cols-2 grid-cols-1 justify-between items-center font-semibold">
                <div className="flex justify-between items-center bg-dark-1 rounded-xl text-3xl p-5 md:p-10">
                  <div className="flex flex-col justify-between items-center">
                    <h2>{loading ? <SmallSpinner /> : users?.length}+</h2>
                    <p>Developers</p>
                  </div>
                  <div>
                  <div className="mt-3 md:w-44 w-28 flex -space-x-2 overflow-hidden p-1">
                  {loading ? <SmallSpinner /> : users?.map( u => <img className="inline-block h-12 w-12 rounded-full ring-2 ring-secondary" src={`${u?.photoURL}`} alt=""/>)}
                    </div>
                    {/* <FaUsers className="text-secondary text-6xl"></FaUsers> */}
                  </div>
                </div>
              <div className="flex justify-between items-center bg-dark-1 rounded-xl text-3xl p-10">
                <div className="flex flex-col justify-center items-center">
                  <h2>{loading ? <SmallSpinner /> : collections?.length}+</h2>
                  <p>Projects</p>
                </div>
                <FaSwatchbook className="text-secondary text-6xl"></FaSwatchbook>
              </div>
              {/*    <div className="flex justify-between items-center bg-dark-1 rounded-xl hover-bg-blue-green-gradient text-3xl p-10">
                <div className="flex flex-col justify-center items-center">
                  <h2>652</h2>
                  <p>Message</p>
                </div>
                <FaRegEnvelope className="text-secondary text-6xl"></FaRegEnvelope>
              </div> */}
            </div>

            <div className="mt-10 flex gap-5 md:flex-row flex-col ">
              <div className="bg-dark-1 w-full">
                <div className="lg:flex justify-between items-center p-5">
                  <h2 className="text-2xl mb-5 lg:mb-0 others">
                    Recent Projects
                  </h2>
                  {/* <Link to="/adminDashboard/all-projects">
                    <Button id="logout" styles="h-2 ">
                      All Project
                    </Button>
                  </Link> */}
                </div>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase  bg-gray-700 text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Project Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Owner
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {collections?.slice(0, 3).map((collection, i) => (
                        <tr className="border-b bg-gray-800 border-gray-700"
                          key={collection._id}
                        >
                          <td className="px-6 py-4">{i + 1}</td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap text-white"
                          >
                            {collection?.projectName ? collection.projectName : "Untitled"}
                          </th>
                          <td className="px-6 py-4">{collection?.user ? collection.user?.name : "Anonymous"}</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-dark-1 md:w-3/4">
                <div className="lg:flex justify-between items-center p-5">
                  <h2 className="text-2xl mb-5 lg:mb-0 others">
                    Top Developer
                  </h2>
                  {/* <Link to="/adminDashboard/all-projects">
                    <Button id="logout" styles="h-2 ">
                      All Project
                    </Button>
                  </Link> */}
                </div>
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Total Projects
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" border-b bg-gray-800 border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        >
                          Smith Kumar
                        </th>
                        <td className="px-6 py-4">30</td>
                      </tr>
                      <tr className=" border-b bg-gray-800 border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap text-white"
                        >
                          Rasel Mia
                        </th>
                        <td className="px-6 py-4">29</td>
                      </tr>
                      <tr className=" bg-gray-800">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        >
                          Jhon Doe
                        </th>
                        <td className="px-6 py-4">20</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

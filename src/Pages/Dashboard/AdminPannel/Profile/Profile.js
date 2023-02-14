import React from "react";
import { useContext } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../context/AuthProvider";
import ProfileCard from "./ProfileCard";
import ParModal from "./ParModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../../Loading/Loading";
import UpdateModal from "./UpdateModal/UpdateModal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [usr, setUsr] = useState({});

  const url = `http://localhost:5000/u?email=${user?.email}`;

  const {
    data: userEmail,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userEmail"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      });
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const onClick = () => {
    setIsOpen(true);
    setUsr(userEmail[0]);
  };

  const handleOnClose = () => setShowModal(false);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - Profile</title>
      </Helmet>
      <div className="h-full -my-3 text-white-300 ">
        <div className="bg-dark-1 rounded-lg shadow-2xl py-5">
          {/* <div className="w-full h-[220px] bg-dark-1">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div> */}
          <div className="flex flex-col items-center">
            <img
              src={userEmail[0]?.photoURL}
              className="md:w-52 w-44 border-4 border-gray-300 rounded-full"
              alt=""
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl ">{userEmail[0]?.name}</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="">Senior Software Engineer at Coders StackBox</p>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 rounded-lg shadow-xl bg-dark-1 p-8">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold">Personal Info</h4>
                <FaEllipsisH
                  onClick={() => setShowModal(true)}
                  className="hover:bg-black rounded-md"
                ></FaEllipsisH>
              </div>
              <ul className="mt-3 ">
                <li className="flex py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="">{userEmail[0]?.name}</span>
                </li>
                <li className="flex py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="">{userEmail[0]?.phone}</span>
                </li>
                <li className="flex py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="">{userEmail[0]?.email}</span>
                </li>
                <li className="flex py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="">New York, US</span>
                </li>
              </ul>
              <div className="w-2/3 mx-auto my-4">
                <button
                  onClick={onClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>

          {/* modal  */}

          <ParModal onClose={handleOnClose} visible={showModal} />

          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-dark-1 rounded-lg shadow-xl p-8">
              <h4 className="text-xl font-bold">About</h4>
              <p className="mt-2 ">
                Nesciunt voluptates obcaecati numquam error et ut fugiat
                asperiores. Sunt nulla ad incidunt laboriosam, laudantium est
                unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ut, magni odio magnam commodi sunt
                ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta
                autem odio laudantium eligendi commodi distinctio!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dark-1 rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Admins (6)</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-blue-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            <ProfileCard />
          </div>
        </div>
      </div>
      {isOpen && <UpdateModal user={usr} setIsOpen={setIsOpen} />}
    </main>
  );
};

export default Profile;

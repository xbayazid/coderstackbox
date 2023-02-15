import React, { useEffect } from "react";
import { useContext } from "react";
import { FaCamera, FaEllipsisH } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../context/AuthProvider";
import ProfileCard from "./ProfileCard";
import ParModal from "./ParModal";
import { useState } from "react";
import UpdateModal from "./UpdateModal/UpdateModal";
import ImageUpdateModal from "../../../../components/ImageUpdateModal/ImageUpdateModal";
import { getUser } from "../../../../api/user";
import PreLoaderSpinner from "../../../../components/PreLoaderSpinner/PreLoaderSpinner";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [showImgUpdateModal, setShowImgUpdateModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [usr, setUsr] = useState({});

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    setLoading(true);
    getUser(user).then((data) => {
      setUsr(data[0]);
      console.log(data[0]);
      setLoading(false);
    });
  };

  const onClick = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => setShowModal(false);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - Profile</title>
      </Helmet>
      {loading ? (
        <PreLoaderSpinner />
      ) : (
        <div className="h-full -my-3 text-white-300 ">
          <ImageUpdateModal
            isVisible={showImgUpdateModal}
            onClose={() => setShowImgUpdateModal(false)}
            user={usr}
          ></ImageUpdateModal>

          <div className="rounded-lg shadow-2xl py-5">
            <div className="flex flex-col items-center">
              <div
                className="border-4 md:w-52 md:h-52 border-gray-300 rounded-full overflow-hidden
            w-44 h-44 border-r-white"
              >
                <img src={usr?.photoURL} className="md:w-full h-full" alt="" />
              </div>
              <FaCamera
                onClick={() => setShowImgUpdateModal(true)}
                className="-mt-6 text-xl ml-32"
              ></FaCamera>

              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl ">{usr?.name}</p>
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
              <div className="flex-1 rounded-lg shadow-xl p-8">
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
                    <span className="">{usr?.name}</span>
                  </li>
                  <li className="flex py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="">{usr?.phone}</span>
                  </li>
                  <li className="flex py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="">{usr?.email}</span>
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
              <div className="flex-1 rounded-lg shadow-xl p-8">
                <h4 className="text-xl font-bold">About</h4>
                <p className="mt-2 ">{usr?.about}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-xl p-8">
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
      )}
      {isOpen && <UpdateModal user={usr} setIsOpen={setIsOpen} />}
    </main>
  );
};

export default Profile;

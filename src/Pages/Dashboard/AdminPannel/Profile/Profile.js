import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../context/AuthProvider";
import UpdateModal from "./UpdateModal/UpdateModal";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/u?${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  console.log(data);

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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg/800px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Sam_Worthington_%2852563252594%29_%28cropped%29.jpg"
              className="md:w-52 w-44 border-4 border-gray-300 rounded-full"
              alt=""
            />
            <div className="flex items-center space-x-2 mt-2">
              {/* <p className="text-2xl ">{user.displayName}</p> */}
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
              <h4 className="text-xl font-bold">Personal Info</h4>
              <ul className="mt-3 ">
                <li className="flex py-2">
                  <span className="font-bold w-24">Full name:</span>
                  {/* <span className="">{user.displayName}</span> */}
                </li>
                <li className="flex py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="">(123) 123-1234</span>
                </li>
                <li className="flex py-2">
                  <span className="font-bold w-24">Email:</span>
                  {/* <span className="">{user.email}</span> */}
                </li>
                <li className="flex py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="">New York, US</span>
                </li>
              </ul>
              <div className="w-2/3 mx-auto my-4">
                <button
                  onClick={(user) => setIsOpen(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
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
            <div
              className="flex flex-col items-center justify-center hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">
                Benjamin Farrior
              </p>
              <p className="text-xs text-center">
                Software Engineer Lead at Microsoft
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Maria Heal</p>
              <p className="text-xs text-center">
                Linux System Administrator at Twitter
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">Edward Ice</p>
              <p className="text-xs text-center">
                Customer Support at Instagram
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg"
                className="w-16 rounded-full"
              />
              <p className="text-center font-bold text-sm mt-1">
                Jeffery Silver
              </p>
              <p className="text-xs text-center">
                Software Engineer at Twitter
              </p>
            </div>
          </div>
        </div>
        {isOpen && <UpdateModal setIsOpen={setIsOpen}></UpdateModal>}
      </div>
    </main>
  );
};

export default Profile;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { useContext } from "react";

import Loading from "../../../Loading/Loading";
import { AuthContext } from "../../../../context/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const { data = [], isLoading } = useQuery({
    queryKey: ["usersActivityData"],
    queryFn: async () => {
      const res = await fetch("/UsersActivityData.json");
      const data = await res.json();
      return data;
    },
  });
  const { data: aboutUsers = [] } = useQuery({
    queryKey: ["aboutUsers"],
    queryFn: async () => {
      const res = await fetch("/AboutUsers.json");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - UserProfile</title>
      </Helmet>

      <div className="flex text-white mx-auto">
        <div className="main-content w-full">
          <main className="py-5 px-10">
            {/* we will load the username here from email */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aboutUsers?.map((aboutUser) => (
                  <div class="flex  bg-dark-1 rounded-md bg-gradient-to-l from-accent to-cyan-400">
                    <div class="w-12 flex items-center p-2">
                      <img src={aboutUser.picture} className="" alt="" />
                    </div>

                    <div class="w-full p-4 md:p-4 text-white">
                      <h1 class=" dark:text-white font-semibold">
                        {aboutUser.title}
                      </h1>

                      <h2 className="flex justify-end text-2xl font-bold">
                        {aboutUser.numbers}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 my-8">
              <div class="bg-gray-100 rounded-xl shadow-xl lg:w-1/2">
                <div>
                  <div className="w-1/2 mx-auto">
                    <img
                      className="h-28 w-28 rounded-full mt-10"
                      src={user?.photoURL}
                      alt=""
                    ></img>
                  </div>
                  <div className="text-black w-2/3 mx-auto mt-5">
                    {/* <h2 className="font-semibold">Name: {user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <p>Phone: </p> */}
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      disabled
                      name="name"
                      className="w-full border-2 my-2 p-2 rounded-md outline-none"
                      placeholder="Your Full Name"
                    />

                    <label htmlFor="">Email Address</label>
                    <input
                      type="text"
                      defaultValue={user?.email}
                      disabled
                      name="email"
                      className="w-full border-2 my-2 p-2 rounded-md outline-none"
                      placeholder="Email Address"
                    />
                    {/* <label htmlFor="">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="w-full border-2 my-2 p-2 rounded-md outline-none"
                      placeholder="Phone Number"
                    /> */}
                  </div>
                  {/* <div className="w-2/3 mx-auto my-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                      Update Profile
                    </button>
                  </div> */}
                </div>
              </div>
              <div class={`col-span-2 bg-gray-100 rounded-xl shadow-xl`}>
                <h2 className="text-gray-800 m-4 font-semibold">User Track</h2>
                <LineChart width={600} height={300} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    strokeWidth={4}
                    yAxisId="left"
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    strokeWidth={4}
                    yAxisId="right"
                    type="monotone"
                    dataKey="uv"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </div>
            </div>
            {/* <div className="bg-indigo-400 p-5 text-black rounded">
              <form className="lg:flex gap-4 justify-center items-center">
                <div>
                  <textarea
                    name="review"
                    className="lg:w-96 p-5 rounded-md outline-none"
                    placeholder="Your Comment"
                  ></textarea>
                </div>
                <div>
                  <button className="bg-amber-300 text-black p-4 rounded-3xl mt-3 lg:mt-0">
                    Add Review
                  </button>
                </div>
              </form>
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

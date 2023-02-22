import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PreLoaderSpinner from "../../components/PreLoaderSpinner/PreLoaderSpinner";
import { getUsersCollections } from "../../features/collectionSlice/userCollectionSlice";
import { getAllUserCollections } from "../../features/userCollections";
import styles from "../../style";
import DevDetails from "./DevDetails/DevDetails";
import DevProjects from "./DevProjects/DevProjects";

const DevProfile = () => {
  const { id } = useParams();

  const url = `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/user?id=${id}`;
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });

  if (user?.result[0]?.project?.length === 0) {
    return (
      <div className={` ${styles.paddingY} relative`}>
        <div>
          <DevDetails profile={user?.result[0]} />
          <div className="mt-12 text-white">
            <h1 className="text-4xl font-serif font-bold">Projects</h1>
          </div>
         <p className="text-dimWhite text-center my-5">
         No project available for this user
         </p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    <PreLoaderSpinner />;
  }

  return (
    <div className={` ${styles.paddingY} relative`}>
      <div>
        <DevDetails profile={user?.result[0]} />
        <div className="mt-12 text-white">
          <h1 className="text-4xl font-serif font-bold">Projects</h1>
          {/*    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'> */}
          <div
            className="grid lg:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 
                        grid-cols-1
                        gap-10 "
          >
            {user?.result[0].project?.map((devProfile) => (
              <DevProjects
                key={devProfile._id}
                devProfile={devProfile}
              ></DevProjects>
            ))}
          </div>
          {/*   </div> */}
        </div>
      </div>
    </div>
  );
};

export default DevProfile;

import React from 'react';
import { HiOutlineHeart } from "react-icons/hi2";

const DevProjects = ({devProfile}) => {
    const {id, projectImg, devImg, devName, projectTitle, react} = devProfile;
    return (
        <div>
            <div class="flex justify-center items-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <img class="rounded-t-lg" src={projectImg} alt=""/>
    <div class="flex p-6">
        <img className='h-12 w-12 rounded-full' src={devImg} alt="" />
      <div className='ml-3'>
        <h3 className='text-black font-serif font-semibold'>{projectTitle}</h3>
        <p class="text-gray-900 font-medium mb-2 font-poppins">{devName}</p>
      </div>
      {/* <div className='ml-9 flex items-center'><HiOutlineHeart className='bg-red-900 rounded-full p-2 text-4xl'></HiOutlineHeart><span className='text-black  text-2xl font-poppins'>{react}</span></div> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default DevProjects;
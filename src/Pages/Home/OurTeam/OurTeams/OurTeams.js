import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import "./OurTeams.css";

const OurTeams = ({ card }) => {
  const { id, image, designation, name, github } = card;
  return (
    // <div className="rounded-lg">
    //   <div className="rounded-lg shadow-lg pt-8 text-white">
    //     <div className="bg-emerald-100 mx-12 rounded-xl">
    //       <img
    //         className="w-full mx-auto align-center rounded-full p-5 h-52 w-52"
    //         src={image}
    //         alt=""
    //       />
    //     </div>
    //     <div className="p-6 text-center">
    //       <h1 className="text-3xl font-medium mb-2 name">{name}</h1>
    //       <h5 className="designation">{designation}</h5>
    //       <div>
    //         <ul className="flex justify-center mt-5 text-3xl">
    //           <li>
    //             <a target="_blank" href={`${github}`}>
    //               <Button>
    //                 <FaGithubAlt></FaGithubAlt>
    //               </Button>
    //             </a>
    //           </li>
    //           <li className="ml-4">
    //             <Button>
    //               <FaLinkedinIn></FaLinkedinIn>
    //             </Button>
    //           </li>
    //           <li className="ml-4">
    //             <Button>
    //               <HiOutlineDownload></HiOutlineDownload>
    //             </Button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-24 xl:mb-32">
      <div>
        <img src={image} alt="" />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-sky-400 p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {name}
            </h4>

            <div className="mt-1">
              <h5 className="designation">{designation}</h5>
            </div>
            <div className="mt-4">
              <ul className="flex justify-center mt-5 text-3xl">
                <li>
                  <a target="_blank" href={`${github}`} rel="noreferrer">
                    <Button>
                      <FaGithubAlt></FaGithubAlt>
                    </Button>
                  </a>
                </li>
                <li className="ml-4">
                  <Button>
                    <FaLinkedinIn></FaLinkedinIn>
                  </Button>
                </li>
                <li className="ml-4">
                  <Button>
                    <HiOutlineDownload></HiOutlineDownload>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;

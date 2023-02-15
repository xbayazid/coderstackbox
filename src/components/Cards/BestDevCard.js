import React from "react";
import styles from "../../style";
import { motion } from 'framer-motion'
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import DevDetails from "../../Pages/DevProfile/DevDetails/DevDetails";


const BestDevCard = ({ props, i }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <motion.div
      variants={fadeIn("right", "spring", i * 0.2, 1)} className="relative rounded-lg overflow-hidden glassmorphism hover:duration-150 card">
      <div
        className="bg-gradient-to-r from-accent to-secondary"
        style={{ height: "2px" }}
      />
      <div className={`${styles.flexStart} gap-4 m-5`}>
        <img
          className="w-20 h-20 rounded-full p-1 ring-2 "
          src={props.image}
          alt={props.alt}
        />
        <div>
          <div className={`${styles.heading3} hover:text-lime-600`}><Link to="/devProfile">{props.name}</Link></div>
          <div className={`text-dimGreen`}>{props.title}</div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <div
          className={`bg-gradient-to-r from-accent to-secondary w-full `}
          style={{ height: "2px" }}
        />
      </div>
      <div className="p-4 text-justify">
        <div className={`${styles.paragraph}`}>{props.details}</div>
      </div>
      <div className="p-4 flex justify-end">
        <button type="button" class="inline-block flex items-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setShowModal(true)}>View Profile <HiArrowRight className="ml-2 text-lg"></HiArrowRight></button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 outline-none focus:outline-none p-4">
                  <DevDetails></DevDetails>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <Link to="/devProfile">
                      <button type="button" class="inline-block flex items-center px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setShowModal(false)}>View Projects <HiArrowRight className="ml-2 text-lg"></HiArrowRight></button>
                    </Link>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </motion.div>
  );
};

export default BestDevCard;

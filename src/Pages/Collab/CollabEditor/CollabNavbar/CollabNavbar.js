import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { close, menu } from '../../../../assets';
import { AuthContext } from '../../../../context/AuthProvider';
import { FADE_IN_ANIMATION_SETTINGS } from '../../../../utils/motion';
import { motion } from 'framer-motion'
import CloudButton from '../../../../components/Buttons/CloudButton';
import axios from 'axios';
import { useSaveProjectModal } from '../../../../components/Modals/SaveProjectModal';

const CollabNavbar = () => {
    const [projectName, setProjectName] = useState("");
    const [toggle, setToggle] = useState(false);
    const [projectCode, setProjectCode] = useState('');


    const handleSubmit = () => {
        const code = {
          projectName: projectName,
          code: projectCode
        };
        const url = `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/compiled-code`;
        axios.post(url, code, {
          headers: {
            authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
          },
        })
          .then((res) => {
            console.log(res)
            
            if (res.status === 200) {
              toast.success(res.data.message);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      };
    
      function Save () {
        setShowSaveProjectModal(true);
        handleSubmit()
      }
    const { SaveProjectModal, setShowSaveProjectModal } = useSaveProjectModal();
    return (
        <div>
           <nav className="w-full flex py-3 justify-between items-center navbar">
          <>
          <SaveProjectModal  />
            <Link to="/" className="gap-x-4 items-center flex">
              <span className="text-3xl text-secondary  pt-2">
                <ion-icon name="logo-slack"></ion-icon>
              </span>
              <h1 className="text-white">
                Coders<span className="text-secondary">StackBox</span>
              </h1>
            </Link>
          </>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <label>
              <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={Save}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Save
                </motion.button>
            </label>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                <label onClick={handleSubmit}>
                  <CloudButton>Save</CloudButton>
                </label>
              </ul>
            </div>
          </div>
        </nav> 
        </div>
    );
};

export default CollabNavbar;
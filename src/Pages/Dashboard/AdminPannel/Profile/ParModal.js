import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

const ParModal = ({ visible, onClose }) => {
  const { user } = useContext(AuthContext);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex 
         justify-center items-center"
    >
      <div className="bg-white text-black flex justify-center  p-2 rounded">
        <div>
          <div className="flex justify-between">
            <p className="text-2xl text-bold mr-5">User Information</p>
            <button onClick={onClose} className="ml-5 mr-1 text-bold">
              X
            </button>
          </div>
          <ul className="mt-3 ">
            <li className="flex py-2">
              <span className="font-bold w-24">Full name:</span>
              <span className="">{user.displayName}</span>
            </li>
            <li className="flex py-2">
              <span className="font-bold w-24">Mobile:</span>
              <span className="">(123) 123-1234</span>
            </li>
            <li className="flex py-2">
              <span className="font-bold w-24">Email:</span>
              <span className="">{user.email}</span>
            </li>
            <li className="flex py-2">
              <span className="font-bold w-24">Location:</span>
              <span className="">New York, US</span>
            </li>
          </ul>
        </div>
        {/* <button onClick={onClose} className='ml-5 mt-0'>X</button> */}
      </div>
    </div>
  );
};

export default ParModal;

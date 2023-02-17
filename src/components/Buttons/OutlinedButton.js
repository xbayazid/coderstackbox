import React from "react";

const OutlinedButton = ({ children, styles }) => {
  return (
    <div>
      <button class={`py-4 px-6 font-poppins font-thin text-[18px] text-white  custom-btn  btn rounded-[30px] after:rounded-[30px] outline-none relative bg-transparent transition-all duration-300 ease-linear after:absolute z-[1] after:z-[-1]  border border-solid border-green-500 uppercase focus:outline-none active:bg-green-600 hover:bg-green-500 hover:text-white
       after:bg-primary after:w-0
      after:h-full after:top-0 after:right-0 after:transition-all after:duration-500 after:ease-in-out ${styles} flex items-center justify-center gap-2`}>
        {children}
      </button>
    </div>
  );
};

export default OutlinedButton;

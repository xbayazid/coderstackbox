import React from "react";

const Button = ({ styles, children }) => (
  <button
    type="submit"
<<<<<<< HEAD
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white  custom-btn  btn rounded-[30px] after:rounded-[30px] outline-none relative bg-transparent transition-all duration-300 ease-linear after:absolute z-[1] after:z-[-1] bg-green-500 after:bg-primary after:w-0
=======
    className={`py-1 sm:py-4 px-3 sm:px-6 font-poppins font-medium text-[12px] ss:text-[16px] sm:text-[18px] text-white  custom-btn  btn rounded-[30px] after:rounded-[30px] outline-none relative bg-transparent transition-all duration-300 ease-linear after:absolute z-[1] after:z-[-1] bg-green-500 after:bg-primary after:w-0
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
  after:h-full after:top-0 after:right-0 after:transition-all after:duration-500 after:ease-in-out ${styles} flex items-center justify-center gap-2`}
  >
    {children}
  </button>
);

export default Button;

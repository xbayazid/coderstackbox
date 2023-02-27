import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const Logo = ({className}) => {
  return (
    <div className={`xs:scale-100 scale-90 text-[16px] sm:text-[20px] font-bold cursor-pointer flex items-center gap-2 font-[poppins] text-gray-800 transition-all duration-300 ease-in-out ${className} z-[1]`}>
              <img className="w-6 sm:w-10" src={logo} alt="" />
            <Link to="/">
              <h1 className={`${className} text-white`}>
                Coders<span className="text-secondary">StackBox</span>
              </h1>
            </Link>
          </div>
  )
}

export default Logo
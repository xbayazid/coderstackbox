import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const Logo = ({style}) => {
  return (
    <div className={`font-bold text-2xl cursor-pointer flex items-center gap-2 font-[poppins] text-gray-800 xs:scale-100 scale-90 transition-all duration-300 ease-in-out ${style}`}>
            <span className="">
              <img className="w-12" src={logo} alt="" />
            </span>
            <Link to="/">
              <h1 className="text-white">
                Coders<span className="text-secondary">StackBox</span>
              </h1>
            </Link>
          </div>
  )
}

export default Logo
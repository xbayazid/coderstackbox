import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

const Logo = ({styles}) => {
  return (
    <div className={`text-xl sm:text-2xl font-bold cursor-pointer flex items-center gap-2 font-[poppins] text-gray-800 transition-all duration-300 ease-in-out ${styles}`}>
              <img className="w-6 sm:w-10" src={logo} alt="" />
            <Link to="/">
              <h1 className="text-white">
                Coders<span className="text-secondary">StackBox</span>
              </h1>
            </Link>
          </div>
  )
}

export default Logo
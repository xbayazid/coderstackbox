import React from 'react'
import { FaCloud } from 'react-icons/fa'

const CloudButton = ({ styles, children }) => (
    <button
      className={`rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-400 hover:bg-gray-900 hover:text-gray-100 duration-300 ${styles} flex gap-2 items-center transition-all duration-150 ease-in`}
    ><FaCloud />
      {children}
    </button>
)

export default CloudButton
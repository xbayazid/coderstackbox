import React from 'react'
import { FaCloud } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { FADE_IN_ANIMATION_SETTINGS } from '../../utils/motion'
const CloudButton = ({ styles, children }) => (
  
    <motion.button
  
    {...FADE_IN_ANIMATION_SETTINGS}
  
      className={`text-white transition-all  rounded-lg px-4 py-2   bg-green-500 hover:bg-green-700 hover:text-gray-100 duration-300 ${styles} flex gap-2 items-center transition-all duration-150 ease-in`}
    ><FaCloud />
      {children}
    </motion.button>
)

export default CloudButton
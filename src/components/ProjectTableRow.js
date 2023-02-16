import React from 'react'
import { FaTrash } from 'react-icons/fa'
import SmallSpinner from './SmallSpinner'

const ProjectTableRow = ({collection, i, loading, handleRequest}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
     
      <td className="px-6 py-4">{i+1}</td>
      <td className="px-6 py-4">{collection?.projectName ? collection.projectName : "Untitled"}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {collection?.user ? collection?.user.name : "Anonymous"}
        </div>
      </td>
      <td className="px-5 py-5  text-sm">
        <p className="text-dimWhite whitespace-no-wrap">
          {collection?.user ? collection?.user.role : "User"}
        </p>
      </td>
      

      <td className={`px-6 py-4 font-semibold text-gray-500 dark:text-white `}>
        <FaTrash
          className={` ${
            collection?.role === "admin"
              ? "disable text-gray-600 text-2xl"
              : "text-red-400 hover:text-red-500 text-2xl"
          }`}
        ></FaTrash>
      </td>
    </tr>
  )
}

export default ProjectTableRow
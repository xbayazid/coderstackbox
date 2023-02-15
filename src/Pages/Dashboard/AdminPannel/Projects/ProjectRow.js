import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectRow = ({project}) => {

    const { categoryId, _id, categoryName, projectTitle, OnnerName, OnnerEmail, projectImage, projectDescription, createdDate } = project;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-32 p-4">
            <img src={projectImage} alt="Apple Watch" />
        </td>
        <td className="pl-3">
            <div className="text-base font-semibold">{projectTitle}</div>
            <div className="font-normal text-gray-500">Category: {categoryName}</div>
        </td>
        <td className="pl-3">
            <div className="text-base font-semibold">{OnnerName}</div>
            <div className="font-normal text-gray-500">{OnnerEmail}</div>
        </td>
        <td className="pl-3">
            <div className="font-normal text-gray-500">{createdDate}</div>
        </td>
        <td className="px-6 py-4">
            <Link to="#" className="font-medium text-blue-500 ">View</Link>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
            <FaTrash className='text-red-400 hover:text-red-500 text-2xl'></FaTrash>
        </td>
    </tr>
    );
};

export default ProjectRow;
import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeveloperRow = ({developer}) => {
    const { developerName, developerEmail, developerPhone, developerImage, developerAddress } = developer;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
            <div className="flex items-center">
            <input
                id="checkbox-table-search-2"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-table-search-2" className="sr-only">
                checkbox
            </label>
            </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src={developerImage} alt="Jese image" />
            <div className="pl-3">
            <div className="text-base font-semibold">{developerName}</div>
            <div className="font-normal text-gray-500">{developerEmail}</div>
            </div>
        </th>
        <td className="px-6 py-4">{developerPhone}</td>
        <td className="px-6 py-4">
            <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{developerAddress}
            </div>
        </td>
        <td class="px-6 py-4">
            <Link to="#" class="font-medium text-blue-500 ">View</Link>
        </td>
        <td class="px-6 py-4 font-semibold text-gray-500 dark:text-white">
            <FaTrash className='text-red-400 hover:text-red-500 text-2xl'></FaTrash>
        </td>
        </tr>
    );
    };

export default DeveloperRow;
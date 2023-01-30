import React from 'react';
import { Helmet } from 'react-helmet';
import { FaHome, FaUsers, FaSwatchbook, FaUserCircle, FaRegEnvelope, FaSignOutAlt, FaExclamationTriangle, FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BrandIcon from '../../components/BrandIcon/BrandIcon';
import Button from '../../components/Buttons/Button';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - AdminDashboard</title>
            </Helmet>
            <div className="flex text-white">
                <div className='hidden lg:block md:w-3/12 h-[100vh] bg-blue-green-gradient z-50'>
                    <div className='absliute sidebar-menu ml-3 text-white text-2xl'>
                        <ul>
                            <li>
                                <Link to="/dashboard"> <FaHome className='sidebar-icon'></FaHome> <span>Dashboard</span> </Link>
                            </li>
                            <li>
                                <Link to="/developers"> <FaUsers className='sidebar-icon'></FaUsers> <span>Developers</span> </Link>
                            </li>
                            <li>
                                <Link to="/projects"> <FaSwatchbook className='sidebar-icon'></FaSwatchbook> <span>Projects</span> </Link>
                            </li>
                            <li>
                                <Link to="/inbox"> <FaRegEnvelope className='sidebar-icon'></FaRegEnvelope> <span>Inbox</span> </Link>
                            </li>
                            <li>
                                <Link to="/report"> <FaExclamationTriangle className='sidebar-icon'></FaExclamationTriangle> <span>Report</span> </Link>
                            </li>
                            <li>
                                <Link to="/profile"> <FaUserCircle className='sidebar-icon'></FaUserCircle> <span>Profile</span> </Link>
                            </li>
                        </ul>

                        <div>
                            <FaSignOutAlt className=''></FaSignOutAlt>
                        </div>
                    </div>
                </div>

                <div className='main-content w-full'>

                    <header className='bg-dark-1 p-4'>
                        <div className='flex justify-between items-center'>
                            <div className='header-title text-3xl flex gap-x-5 items-center'>
                                <label htmlFor=""><FaBars></FaBars></label>Overview
                            </div>
                            <div className='user-wrapper text-3xl '>
                                <FaUserCircle></FaUserCircle>
                            </div>
                        </div>
                    </header>

                    <main className='py-5 px-10'>
                        {/* we will load the username here from email */}
                        <h2 className='text-3xl mb-5 others'>Hello, Wellcome back!</h2>
                        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 justify-between items-center font-semibold'>
                            <div className='flex justify-between items-center bg-dark-1 rounded-md hover-bg-blue-green-gradient text-3xl p-10'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h2>35</h2>
                                    <p>Developers</p>
                                </div>
                                <FaUsers className='text-secondary text-6xl'></FaUsers>
                            </div>
                            <div className='flex justify-between items-center bg-dark-1 rounded-md hover-bg-blue-green-gradient text-3xl p-10'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h2>157</h2>
                                    <p>Projects</p>
                                </div>
                                <FaSwatchbook className='text-secondary text-6xl'></FaSwatchbook>
                            </div>
                            <div className='flex justify-between items-center bg-dark-1 rounded-md hover-bg-blue-green-gradient text-3xl p-10'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h2>652</h2>
                                    <p>Message</p>
                                </div>
                                <FaRegEnvelope className='text-secondary text-6xl'></FaRegEnvelope>
                            </div>
                        </div>

                        <div className='mt-10 flex gap-5 md:flex-row flex-col '>

                            <div className='bg-dark-1 w-full'>
                                <div className='lg:flex justify-between items-center p-5'>
                                    <h2 className='text-2xl mb-5 lg:mb-0 others'>Recent Projects</h2>
                                    <Button>All Project</Button>
                                </div>


                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Project Title
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Owner
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Prothom Alo
                                                </th>
                                                <td class="px-6 py-4">
                                                    News Portal
                                                </td>
                                                <td class="px-6 py-4">
                                                    John Smith
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Freemoviedrive
                                                </th>
                                                <td class="px-6 py-4">
                                                    Movie Server
                                                </td>
                                                <td class="px-6 py-4">
                                                    Rahim Mia
                                                </td>
                                            </tr>
                                            <tr class="bg-white dark:bg-gray-800">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    CodersStackBox
                                                </th>
                                                <td class="px-6 py-4">
                                                    Online Code Editor
                                                </td>
                                                <td class="px-6 py-4">
                                                    Katrina Kaif
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div className='bg-dark-1 md:w-3/4'>
                                <div className='p-5'>
                                    <h2 className='text-2xl mb-3 others'>Top Developer</h2>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total Projects
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Smith Kumar
                                                </th>
                                                <td class="px-6 py-4">
                                                    30
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Rasel Mia
                                                </th>
                                                <td class="px-6 py-4">
                                                    29
                                                </td>
                                            </tr>
                                            <tr class="bg-white dark:bg-gray-800">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Jhon Doe
                                                </th>
                                                <td class="px-6 py-4">
                                                    20
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
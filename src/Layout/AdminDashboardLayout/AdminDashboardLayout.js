import React from 'react';
import { FaHome, FaUsers, FaSwatchbook, FaUserCircle, FaRegEnvelope, FaSignOutAlt, FaExclamationTriangle, FaBars, FaSearch } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import BrandIcon from '../../components/BrandIcon/BrandIcon';
import Button from '../../components/Buttons/Button';
import './AdminDashboardLayout.css';

const AdminDashboard = () => {
    return (
        <div className="flex text-white">
            <div className='hidden lg:block md:w-3/12 h-[100vh] bg-blue-green-gradient z-50'>
                
                <div className='absliute sidebar-menu ml-3 text-white text-2xl'>
                    <BrandIcon></BrandIcon>
                    <ul>
                        <li>
                            <Link to="/adminDashboard"> <FaHome className='sidebar-icon'></FaHome> <span>Dashboard</span> </Link>
                        </li>
                        <li>
                            <Link to="/adminDashboard/developers"> <FaUsers className='sidebar-icon'></FaUsers> <span>Developers</span> </Link>
                        </li>
                        <li>
                            <Link to="/adminDashboard/projects"> <FaSwatchbook className='sidebar-icon'></FaSwatchbook> <span>Projects</span> </Link>
                        </li>
                        <li>
                            <Link to="/adminDashboard/inbox"> <FaRegEnvelope className='sidebar-icon'></FaRegEnvelope> <span>Inbox</span> </Link>
                        </li>
                        <li>
                            <Link to="/adminDashboard/report"> <FaExclamationTriangle className='sidebar-icon'></FaExclamationTriangle> <span>Report</span> </Link>
                        </li>
                        <li>
                            <Link to="/adminDashboard/profile"> <FaUserCircle className='sidebar-icon'></FaUserCircle> <span>Profile</span> </Link>
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
                    <Outlet></Outlet>
                </main>
            </div>

        </div>
    );
};

export default AdminDashboard;
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaHome, FaUsers, FaSwatchbook, FaUserCircle, FaRegEnvelope, FaSignOutAlt, FaExclamationTriangle, FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../../components/Buttons/Button';

const MyProjects = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - MyProjects</title>
            </Helmet>
            <div className="flex text-white">
                <div className='hidden lg:block md:w-3/12 h-[100vh] bg-blue-green-gradient z-50'>
                    <div className='absolute sidebar-menu ml-3 text-white text-2xl'>
                        <ul className='mt-20'>
                            <li>
                                <Link to="/userProfile"> <FaUserCircle className='sidebar-icon'></FaUserCircle> <span>Profile</span> </Link>
                            </li>
                            <li>
                                <Link to="/myProjects"> <FaSwatchbook className='sidebar-icon'></FaSwatchbook> <span>My Projects</span> </Link>
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
                        <h2 className='text-3xl mb-5 others'>My project</h2>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
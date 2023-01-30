import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaSwatchbook, FaUserCircle, FaRegEnvelope, FaSignOutAlt, FaExclamationTriangle, FaBars, FaSearch } from 'react-icons/fa';
import MyProjects from '../MyProjects/MyProjects';
import UserProfile from '../UserProfile/UserProfile';
import Button from '../../../components/Buttons/Button';

const UserDashboard = () => {
    return (
        <div>
            <UserProfile></UserProfile>
        </div>
    );
};

export default UserDashboard;
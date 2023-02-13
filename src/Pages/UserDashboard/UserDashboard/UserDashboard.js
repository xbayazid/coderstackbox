import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import Button from '../../../components/Buttons/Button';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router';

const UserDashboard = () => {
    return (
        <div>
            <UserProfile></UserProfile>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default UserDashboard;
import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import Button from '../../../components/Buttons/Button';
import { Helmet } from 'react-helmet';

const UserDashboard = () => {
    return (
        <div>
            <UserProfile></UserProfile>
        </div>
    );
};

export default UserDashboard;
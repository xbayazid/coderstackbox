import React from 'react';
import { Helmet } from 'react-helmet';

const Profile = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - Profile</title>
            </Helmet>
            <div>
                <h2>Developer Profile</h2>
            </div>
        </>
    );
};

export default Profile;
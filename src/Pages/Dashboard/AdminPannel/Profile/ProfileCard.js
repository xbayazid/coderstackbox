import React from 'react';

const ProfileCard = () => {

    
    return (
        <div>

            <div className="flex flex-col items-center justify-center hover:text-blue-600" title="View Profile">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg" className="w-16 rounded-full" />
                <p className="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
                <p className="text-xs text-center">Software Engineer Lead at Microsoft</p>
            </div>

        </div>
    );
};

export default ProfileCard;
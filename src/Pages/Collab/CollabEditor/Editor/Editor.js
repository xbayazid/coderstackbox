import React from 'react';
import CollabNavbar from '../CollabNavbar/CollabNavbar';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';


const Editor = () => {
    
    
    return (
        <div className='text-white'>
            <CollabNavbar></CollabNavbar>
            <div className='flex'>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Editor;
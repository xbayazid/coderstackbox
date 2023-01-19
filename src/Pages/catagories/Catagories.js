import React from 'react';
import HelpCategories from '../CommunitySupport/HelpCategories/HelpCategories';
import Leftcategory from './Leftcategory';

const Catagories = () => {
    return (
        <div className='md:flex sm:flex'>
            <Leftcategory></Leftcategory>
            <HelpCategories></HelpCategories>
            <p>Category pagr ready</p>
        </div>
    );
};

export default Catagories;
import React from 'react';
import Leftcategory from '../../catagories/Leftcategory';
// import Left from './Left';
import Right from './Right';

const Doc = () => {
    return (
        <div className='md:flex'>
            <Leftcategory></Leftcategory>
            <Right></Right>
        </div>
    );
};

export default Doc;
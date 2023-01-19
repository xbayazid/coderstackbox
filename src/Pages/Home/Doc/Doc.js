import React from 'react';
import Left from './Left';
import Right from './Right';

const Doc = () => {
    return (
        <div className='md:flex'>
            <Left></Left>
            <Right></Right>
        </div>
    );
};

export default Doc;
import React from 'react';
import { sidebarMenuItem } from '../../constants';

import './Leftcatagory.css';

const Leftcategory = () => {




    return (
        <div className='category left w-64 hidden lg:block'>
            <div className=' leftcatagory pl-10'>
                <ul className=''>
                   {
                    sidebarMenuItem.map(m => <li className='text-xl text-white mb-10' key={m.id}><a href={m.href}>{m.name}</a></li>)
                   }

                </ul>



            </div>
        </div>
    );
};

export default Leftcategory;
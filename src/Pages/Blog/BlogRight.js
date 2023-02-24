import React from 'react';
import { blogRightSide } from '../../constants';
import SearchBar from './SearchBar/SearchBar';



const BlogRight = () => {



    return (
        <div className='lg:block hidden w-64 blogRight text-xl text-white pl-10 mt-10 '>
            <h1 className='text-2xl font-bold mb-5'>Category</h1>

            <ul className='mt-5'>

                {
                    blogRightSide.map(m => <li className='text-xl text-white mb-10' key={m.id}><a href={m.href}>{m.name}</a></li>)
                }
            </ul>

        </div>
    );
};

export default BlogRight;
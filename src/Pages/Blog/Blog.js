import React from 'react';
import BlogLeft from './BlogLeft';
import BlogRight from './BlogRight';

const Blog = () => {
    return (
        <div>
            <div><h1 className='text-2xl text-yellow-400 text-center'>COMMING SOON.....</h1></div>
            <div className='md:flex'>

                <BlogLeft />
                <BlogRight />
            </div>
        </div>
    );
};

export default Blog;
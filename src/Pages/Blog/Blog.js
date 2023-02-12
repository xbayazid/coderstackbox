import React from 'react';
import BlogLeft from './BlogLeft';
import BlogRight from './BlogRight';

const Blog = () => {
    return (
        <div>
            <div className='h-screen'>
            <h1 className='text-2xl text-white flex justify-center font-bold'>" Blog "</h1>
            <p className='text-xl text-white flex justify-center items-center'>     Awesome place to make oneself <br /> productive and entertaind through daily updates</p>
            </div>








            
            <div className='md:flex'>
                <BlogLeft />
                <BlogRight />
            </div>
        </div>
    );
};

export default Blog;
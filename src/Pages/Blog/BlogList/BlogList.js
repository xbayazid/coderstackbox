import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import './BlogList.css';

const BlogList = ({ blogs }) => {
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {blogs.map((blog) => (
                <BlogItem blog={blog} key={blog.id} />
            ))}
        </div>
    );
};

export default BlogList;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogList } from '../../../constants';
import Chip from '../Chip/Chip';
import EmptyList from '../EmptyList/EmptyList';
import './BlogPage.css';

const BlogPage = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

   console.log(blogList);

   useEffect(() => {
    let blog = blogList.find(blog => blog?.id === (id));
    console.log(blog);
    if (blog) {
        setBlog(blog)
    }
}, [id])

    return (
        <div className="">
            <Link className='blog-goBack ' to='/blog'>
            <span> &#8592;</span> Go Back
            </Link>
           
            {
                blog ? (
                    <div className='blog-wrap'>
                    <header>
                        <p className="blog-date ">Published {blog?.createdAt}</p>
                        <h1 className='text-2xl text-white'>{blog?.title}</h1>
                        <div className="blog-subCategory">
                        <div>
                                    <Chip label={blog?.subCategory} />
                                </div>
                        </div>

                    </header>
                    <img className="rounded-lg" src={blog?.cover} alt="cover" />
                    <p className="blog-desc text-xl text-white">{blog?.description}</p>
                    
                </div>
                ) : (
                    <EmptyList />
                )}
        </div>
    );
};

export default BlogPage;
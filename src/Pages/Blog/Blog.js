import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
// import BlogLeft from './BlogLeft';
import BlogRight from './BlogRight';
import BlogList from './BlogList/BlogList';
import { blogList } from '../../constants';
import EmptyList from './EmptyList/EmptyList';
import { Link } from 'react-router-dom';


const Blog = () => {

    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    //search submit
    const handleSearchSubmit = event => {
        event.preventDefault();
        handleSearchResults()
    }

    //search for blogs my category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter(blog =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );

        setBlogs(filteredBlogs);
    }


    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    }

    return (
        <div>
            <div className='mb-10 w-full px-10 blogLeft text-xl text-white'>
                <h1 className='text-3xl text-white flex justify-center font-bold'> Blog </h1>
                <p className='text-xl text-white flex justify-center items-center mt-5'> Awesome place to make oneself</p>
                <p className='text-xl text-white flex justify-center items-center'>
                    productive and entertaind through daily updates</p>
                <Link className=' flex justify-center items-center mt-5' to='/richtext'>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Creat Post
                    </button>
                </Link>
                <SearchBar
                    value={searchKey}
                    clearSearch={handleClearSearch}
                    formSubmit={handleSearchSubmit}
                    handleSearchKey={e => setSearchKey(e.target.value)} />

                <div className="md:flex gap-2">
                    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
                    <div className='md:flex'>

                        <BlogRight />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Blog;
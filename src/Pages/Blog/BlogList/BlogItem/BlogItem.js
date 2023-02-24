import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Chip from '../../Chip/Chip';
import './BlogItem.css'

const BlogItem = ({
    blog: {
        id,
        title,
        description,
        authorName,
        createdAt,
        authorAvatar,
        category,
        cover
    },
}) => {
    return (
        <div className='blogItem-wrap border bg-slate-500 rounded-lg p-2'>
            <img className='rounded-lg blogItem-cover mt-5' src={cover} alt="cover" />
            <Chip label={category} />
            <h3 className='text-2xl text-white font-bold'>{title}</h3>
            <p className='blogItem-desc text-white'>{description}</p>


            <footer>
                <div className='blogItem-author '>
                    <img className='mt-5' src={authorAvatar} alt="avatar" />
                    <div className='ml-2'>
                        <h6 className="text-white mt-5">{authorName}</h6>
                        <p className="text-white">{createdAt}</p>
                    </div>
                </div>
                <Link className='blogItem-link text-white text-sm btn btn-prymary flex justify-center items-center gap-1' to={`/blog/${id}`}> <button className='bg-green-400 hover:bg-green-300 rounded-xl p-2 font-bold py-2 px-4 border-b-4'>Read More <FaArrowRight className='inline-block'></FaArrowRight></button> </Link>

            </footer>
        </div>
    );
};

export default BlogItem;
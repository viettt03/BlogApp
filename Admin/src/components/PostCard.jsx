import React from 'react'
import dateFormat from 'dateformat';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function PostCard({ post, onDeleteClick }) {
    if (!post) return null;
    const { title, thumbnail, tags, meta, createdAt, slug } = post;


    return (
        <div className='bg-white shadow-sm p-2 rounded flex flex-col'>
            <img className="aspect-video" src={thumbnail || "./nothumbnail.jpg"} alt={title} />
            <div className="p-2 flex-1 flex flex-col justify-between">
                <h1 className='text-lg font-semibold text-gray-700'>{title}</h1>
                <p className='text-gray-500'>{meta.substring(0, 80) + " ..."}</p>
                <div className="flex justify-between">
                    <p className=' text-gray-500 text-sm'>{dateFormat(createdAt, "dd/mm/yyyy")}</p>
                    <p className=' text-gray-500 text-sm'>{tags.join(',')}</p>

                </div>
                <div className="flex space-x-3">
                    <Link
                        to={`/update-post/${slug}`}
                        className=' w-8 h-8 rounded-full flex justify-center items-center text-white
                     bg-blue-400 hover:bg-blue-500'>
                        <BsPencilSquare />
                    </Link>
                    <button className=' w-8 h-8 rounded-full flex justify-center items-center 
                     bg-red-400 hover:bg-red-500 text-white'
                        onClick={onDeleteClick}

                    >
                        <BsTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { ImSpinner11, ImEye } from 'react-icons/im'

export default function CreatePost() {
    return (
        <form>
            <div className="flex items-center justify-between">
                <h1 className=' text-xl font-semibold text-gray-700'>
                    Create New Post
                </h1>
                <div className="flex items-center space-x-5">
                    <button className='flex items-center space-x-2 px-3 ring-1 ring-blue-500 rounded h-10
                    text-blue-500 hover:text-white hover:bg-blue-500 transition'>
                        <ImSpinner11 />
                        <span>Reset</span>
                    </button>
                    <button className='flex items-center space-x-2 px-3 ring-1 ring-blue-500 rounded h-10
                    text-blue-500 hover:text-white hover:bg-blue-500 transition'>
                        <ImEye />
                        <span>View</span>
                    </button>
                    <button className=' px-6 hover:ring-1  rounded h-10 bg-blue-500
                    text-white hover:text-blue-500 hover:bg-transparent ring-blue-500 transition'
                    >Post</button>

                </div>
            </div>
            <div>
                <input id='featured' type='checkbox' hidden />
                <label className='flex items-center space-x-2 text-gray-700 cursor-pointer group'
                    htmlFor='featured'
                >
                    <div className='w-4 h-4 rounded-full border-2 border-gray-500 flex
                    items-center justify-center group-hover:border-blue-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500 items-center justify-center
                        group-hover:bg-blue-500'></div>
                    </div>
                    <span className='group-hover:text-blue-500'>Featured</span>
                </label>
            </div>
        </form>
    )
}

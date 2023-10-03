import React from 'react'

export default function SearchForm() {
    return (
        <form>
            <input
                placeholder='Search ...'
                className='rounded border border-gray-500 outline-none p-1 
                 focus:ring-1 ring-blue-500 w-48' />
        </form>
    )
}

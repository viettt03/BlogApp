import React, { useState } from 'react'
import { useSearch } from '../context/SearchProvider';
import { AiOutlineClose } from 'react-icons/ai'

export default function SearchForm() {
    const [query, setQuery] = useState("");
    const { handleSearch, resetSearch, searchResult } = useSearch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        handleSearch(query);
    }
    const handleReset = (e) => {
        resetSearch()
        setQuery('')
    }
    const handleKeyDown = (e) => {
        if ((e.key === 'Escape')) {
            setQuery("")
            resetSearch()
        }
    }

    return (
        <form className='relative' onSubmit={handleSubmit}>
            <input
                onKeyDown={handleKeyDown}
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                placeholder='Search ...'
                className='rounded border border-gray-500 outline-none p-1 
                 focus:ring-1 ring-blue-500 w-48' />
            {searchResult.length ?
                <button onClick={handleReset} className='absolute top-1/2 -translate-y-1/2 text-gray-700 right-3'>
                    <AiOutlineClose />
                </button> : null}
        </form>
    )
}

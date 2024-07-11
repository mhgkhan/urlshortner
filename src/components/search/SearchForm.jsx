"use client"

import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {


    const submitSearchForm = e => e.preventDefault();



    return (
        <section className="searchArea w-full">
            <form method='post' onSubmit={submitSearchForm} className="px-2 w-full border border-1 border-yellow-600 rounded-full flex items-center justify-between shadow-md shadow-yellow-100 bg-white">
                <input type="text" name='searchurl' placeholder='Enter url to search' required className='md:w-[75%] w-[90%] outline-none border-none bg-none rounded-full md:py-3 px-2 py-2 text-xl ' />
                <button type='submit' className='cursor-pointer md:text-3xl text-xl md:px-2 px-1 text-gray-400'> <FaSearch /> </button>
            </form>

        </section>
    )
}

export default SearchForm
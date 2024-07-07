import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='md:mt-0 mt-3'>
        <ul className='flex items-end justify-center gap-1 list-none'>
            <li>
                <Link href={"/"} className='text-xl hover:font-bold transition duration-500 text-white md:p-3 p-2 hover:bg-gray-100 hover:text-yellow-700' >HOME</Link>
            </li>
            <li>
                <Link href={"/about"} className='text-xl hover:font-bold transition duration-500 text-white md:p-3 p-2 hover:bg-gray-100 hover:text-yellow-700' >ABOUT</Link>
            </li>
            <li>
                <Link href={"/search"} className='text-xl hover:font-bold transition duration-500 text-white md:p-3 p-2 hover:bg-gray-100 hover:text-yellow-700' >SEARCH</Link>
            </li>
            <li>
                <Link href={"/login"} className='text-xl hover:font-bold transition duration-500 text-white md:p-3 p-2 hover:bg-gray-100 hover:text-yellow-700' > LOGIN </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa"
import {} from "react-icons/gr"

const Footer = () => {
  return (
    <footer className='bg-blue-950'>
        <div className="container mx-auto p-3 text-center text-xl text-white">
            <p>Copyright&copy; Allright reserved 2024 <span className="text-yellow-300">GH URL SHORTER</span> </p>
            <div className="flex items-center gap-4 justify-center">
              
                <Link href={'/gh'} className='text-xl text-yellow-300 font-bold'>
                    <FaFacebook />
                </Link>
              
                <Link href={'/gh'} className='text-xl text-yellow-300 font-bold'>
                    <FaGithub />
                </Link>
              
                <Link href={'/gh'} className='text-xl text-yellow-300 font-bold'>
                <FaGithub />
                </Link>





            </div>
        </div>
    </footer>
  )
}

export default Footer
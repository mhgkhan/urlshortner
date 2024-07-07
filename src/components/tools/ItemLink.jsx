"use client"


import React from 'react'
import { FaCopy, FaLink } from 'react-icons/fa'
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';




const ItemLink = ({link}) => {

    const router = useRouter();


    const copyLink = async text => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success("Link copied to clipboard")
        } catch (error) {
            toast.error("Please copy url manually.")
        }
    }


    return (
        <>
            <Toaster />
            <li className='w-full flex items-center justify-between my-1 gap-2 p-3 text-lg border border-1 border-blue-600 rounded-full bg-yellow-100 text-blue-600 italic hover:shadow-md hover:shadow-gray-400'>
                <span className='active:scale-105 text-xl text-gray-600  cursor-pointer' onClick={() => router.push(link)} ><FaLink /></span> &nbsp;
               {link}
                <span className='text-xl text-gray-600 cursor-pointer active:scale-105' onClick={() => copyLink(link)} ><FaCopy /></span>
            </li>
        </>

    )
}

export default ItemLink
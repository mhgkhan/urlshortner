"use client"

import React from 'react'
import { FaPaste } from 'react-icons/fa'

const Form = () => {


    const submitUrlForm = e =>{
        e.preventDefault()
    }


  return (
    <section className='form mt-5 mx-auto lg:w-[50%] w-full' >
        <p className='text-lg text-black'>Please Enter Your URL</p>
        <form onSubmit={submitUrlForm} className='w-full flex items-center justify-center gap-1 md:flex-row flex-col'>
            <div className=" flex items-center justify-between gap-1 input border border-1 border-blue-600 rounded-md md:w-[75%] w-full p-1 hover:shadow-md hover:shadow-gray-200">
                <input type="url" name='url' id='url' placeholder='Enter Url'  className=' placeholder:font-bold text-lg px-2 w-[80%] border-none outline-none py-2 ' />
                <span className='cursor-pointer active:scale-105 text-3xl text-blue-900 px-2 hover:text-yellow-500'><FaPaste /></span>
            </div>
            <button className='py-3 px-2 active:scale-95 text-xl bg-blue-950 text-white font-bold outline-none border border-1 border-blue-800 rounded-lg  hover:bg-white hover:text-yellow-600 hover:border-blue-700 w-full md:w-auto md:m-0 my-2'>SHORT NOW</button>
        </form>
    </section>
  )
}

export default Form
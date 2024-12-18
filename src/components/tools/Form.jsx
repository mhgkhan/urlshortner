"use client"

import React, { useState } from 'react'
import Loading from '../Loading';
import ItemLink from './ItemLink';
import { FaPaste } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const Form = ({ domain, font }) => {


    // states for form input 
    const [input, setInput] = useState("");


    // response short urls states
    const [reciveUrls, setRecieveUrls] = useState(null);
    const [OriginalUrl, setOrignalUrl] = useState("");
    //  if response is error
    const [isResponseError, setIsResponseError] = useState(false);
    const [responseError, setResponseError] = useState("");



    // state for if user don't allow the permission
    const [isPermissionOk, setIsPermissionOk] = useState(false)

    // function for paste last copy text 
    const pasteCopied = async e => {
        try {
            const clipBoardData = await navigator.clipboard.readText()
            setInput(clipBoardData)
        } catch (error) {
            // console.log(error)
            setIsPermissionOk(true)
            setTimeout(() => {
                setIsPermissionOk(false)
            }, 50000);
        }
    }


    // function to change data in the input 
    const changeInput = e => setInput(e.target.value);


    // active result states 
    const [isActiveResult, setIsActiveResult] = useState(false)

    // states for callling api 
    const [loading, setLoading] = useState(false)

    // submit the form 
    const submitUrlForm = async e => {
        e.preventDefault()
        setLoading(true)
        setIsActiveResult(true)

        try {

            // calling to the api 
            const reqAndRes = await (await fetch(`${domain}api/urls/regiester`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ url: input })
            })).json();


            setTimeout(() => {
                setLoading(false)
            }, 1000);

            // console.log(reqAndRes)



            if (reqAndRes.success) {
                setRecieveUrls(reqAndRes.data);
                setOrignalUrl(reqAndRes.data.originalUrl);
                toast.success(reqAndRes.message)
            }

            else {
                setIsResponseError(true);
                setResponseError(reqAndRes.message);
                toast.error(reqAndRes.message)
            }

        } catch (error) {
            setIsActiveResult(false)
            setLoading(false)
            setIsResponseError(true);
            setResponseError("Some went wrong ")
            toast.error("Some went wrong")
        }
    }







    return (
        <>
            <Toaster />
            <section className='form mt-5 mx-auto lg:w-[50%] w-full' >
                <p className='text-lg text-black'>Please Enter Your URL</p>

                <form onSubmit={submitUrlForm} method='post' className='w-full flex items-center justify-center gap-1 md:flex-row flex-col'>
                    <div className=" flex items-center justify-between gap-1 input border border-1 border-blue-600 rounded-md md:w-[75%] w-full p-1 hover:shadow-md hover:shadow-gray-200">
                        <input type="url" value={input} onChange={changeInput} required name='url' id='url' placeholder='Enter Url' className=' placeholder:font-bold text-lg px-2 w-[80%] border-none outline-none py-2 ' />
                        <span onClick={pasteCopied} className='cursor-pointer active:scale-105 text-3xl text-blue-900 px-2 hover:text-yellow-500'><FaPaste /></span>
                    </div>
                    <button className='py-3 px-2 active:scale-95 text-xl bg-blue-950 text-white font-bold outline-none border border-1 border-blue-800 rounded-lg  hover:bg-white hover:text-yellow-600 hover:border-blue-700 w-full md:w-auto md:m-0 my-2'>SHORT NOW</button>
                </form>



                {isPermissionOk ? <p className="text-red-800 px-2 py-1 text-center font-bold">Permission Denied: Please type your URL manually</p> : ""}

                {
                    isActiveResult ? <section className='w-full p-3 mt-2'>
                        {loading ? <Loading /> : <>
                            <h2 className={`${font} md:text-4xl text-2xl font-bold m-2 text-blue-900 inline-block border-b border-b-2 border-b-blue-700 border-dotted`}>Results</h2>
                            <p className='text-lg text-black my-1'>Copy or save your shorted urls.</p>
                            <ul className="mt-2">
                                <ItemLink link={reciveUrls && reciveUrls.shortedUrl} />
                            </ul>
                        </>}
                    </section> : ""
                }


            </section>
        </>
    )
}

export default Form
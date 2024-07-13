"use client"

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Loading from '../Loading';
import Table from '../tools/Table';

const SearchForm = ({ domain, font }) => {


    // states for form input 
    const [input, setInput] = useState("");
    // onchange function for input 
    const changeinput = e => setInput(e.target.value);


    // states for fom input submission 
    const [recievedata, setRecievedata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isRecieveError, setIsRecieveError] = useState(false);
    const [recieveError, setReceiveError] = useState('');

    // state for content loaded from api 
    const [isContentLoaded, setIsContentLoaded] = useState(false)

    const submitSearchForm = async e => {
        e.preventDefault();

        try {
            setLoading(true)
            setIsContentLoaded(true)
            console.log("form submitted ")

            const reqAndRes = await (await fetch(`${domain}api/urls/searchurl/`, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ url: input })
            })).json();

            // console.log(reqAndRes)

            if (reqAndRes.success) {
                setRecievedata(reqAndRes.data)
                setIsRecieveError(false)
                setReceiveError(false)
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }

            else {
                setIsRecieveError(true);
                setReceiveError(reqAndRes.message);
                setLoading(false)
            }


        } catch (error) {
            console.log(error)
            setLoading(false)
            setIsRecieveError(true)
            setReceiveError("SOME WENT WRONG PLEASE TRY AGAIN LATER ")
        }


    };



    return (
        <>
            <section className="searchArea w-full md:w-[70%] mx-auto">

                <form method='post' onSubmit={submitSearchForm} className="px-2 w-full border border-1 border-yellow-600 rounded-full flex items-center justify-between shadow-md shadow-yellow-100 bg-white">
                    <input type="text" name='searchurl' onChange={changeinput} value={input} placeholder='Enter url to search' required className='md:w-[75%] w-[90%] outline-none border-none bg-none rounded-full md:py-3 px-2 py-2 text-xl ' />
                    <button type='submit' className='cursor-pointer md:text-3xl text-xl md:px-2 px-1 text-gray-400'> <FaSearch /> </button>
                </form>

            </section>


            <section className='md:w-[70%] w-full bg-white mx-auto mt-3 shadow-md shadow-gray-400 rounded-md py-3 px-2'>

                {
                    !isContentLoaded ? <>
                        <h1 className="text-5xl text-gray-300 text-center">Find Shorted URL</h1>
                        <p className=" mt-3 px-2 text-gray-400 text-center">
                            Find the complete history like created date, original url, url id, total clicks, click history, click time etc of your shorted url. but we give you the public url data not the private!.
                            if you have an account here and you set your url to private so public can't be access your url.
                        </p>
                    </>
                        : loading ? <div className='my-2'><Loading /></div> : <>
                            <h1 className={`text-3xl  my-2 text-blue-900 font-bold flex items-center justify-start flex-wrap ${font}`}>Result! &nbsp; <span className='text-wrap break-all text-yellow-700 '>{input}</span></h1>
                            <Table heading1={"Original Url"} heading2={"Shorted Url "} value1={"https://ghaznaprogrammar.com"} value2={"https://localhost:3000/xuyz"} />
                            <Table heading1={"Creted Date"} heading2={"Url Id"} value1={new Date(Date.now()).toLocaleDateString()} value2={"ABC"} />
                        </>
                }
            </section>



        </>

    )
}

export default SearchForm
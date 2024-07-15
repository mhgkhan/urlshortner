"use client"

import React from 'react'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaPhone, FaUser, FaSms } from 'react-icons/fa';


const ContactusContainer = ({ domain, font }) => {

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? '' : 'Name is required.';
    tempErrors.email = form.email ? '' : 'Email is required.';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    tempErrors.message = form.message ? '' : 'Message is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [isResponseErr, setIsResponseErr] = useState(false)
  const [responseErr, setResponseErr] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      // alert('Form submitted successfully');
      try {
        const toastLoading = toast.loading("wait....")
        const reqAndRes = await (await fetch(`${domain}api/users/contactus`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            ...form
          })
        })).json();


        if (reqAndRes.success) {
          setResponse(reqAndRes.message)
          setIsResponseErr(false)
          setResponseErr("")
          setTimeout(() => {
            setLoading(false)
          }, 1000);
          toast.dismiss(toastLoading)
          toast.success(reqAndRes.message)
          setForm({ name: '', email: '', message: '' });
        }
        else {
          setResponse(reqAndRes.message)
          setIsResponseErr(true)
          setResponseErr(reqAndRes.message)
          toast.dismiss(toastLoading)
          setTimeout(() => {
            setLoading(false)
          }, 1000);
          toast.error(reqAndRes.message)
        }
        
        
      } catch (error) {
        console.log(error)
        setIsResponseErr(true)
        setResponseErr(" SOME WENT WRONG..")
        setLoading(false)
        toast.dismiss()
        toast.error("Some Went Wrong..")
      }
    }
  };




  return (

    <div className="container mx-auto px-4 py-8 ">
    <Toaster /> 
      <h1 className="text-4xl font-bold text-center text-blue-950 mb-8">Contact Us</h1>
      <p className="text-center text-gray-700 mb-8">
        Have any questions or concerns? We're always ready to help! Contact us by phone, email, or by filling out the form below.
      </p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-yellow-700 font-bold mb-2" htmlFor="name">
            <FaUser className="inline mr-2" /> Name
          </label>
          <input
            className={`appearance-none border ${errors.name ? 'border-red-500' : 'border-gray-300'} w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-500 rounded`}
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-yellow-700 font-bold mb-2" htmlFor="email">
            <FaEnvelope className="inline mr-2" /> Email
          </label>
          <input
            className={`appearance-none border ${errors.email ? 'border-red-500' : 'border-gray-300'} w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-500 rounded`}
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-yellow-700 font-bold mb-2" htmlFor="message">
            <FaSms className="inline mr-2" /> Message
          </label>
          <textarea
            className={`appearance-none border ${errors.message ? 'border-red-500' : 'border-gray-300'} w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-yellow-500 rounded`}
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-950 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-2">
          <a href="tel:+92 325 1857693"> <FaPhone className="inline mr-2" /> + +92 325 1857693</a>
        </p>
        <p className="text-gray-700">
          <a href="mailto:muhammadhasnainghazna@gmail.com"> <FaEnvelope className="inline mr-2" /> muhammadhasnainghazna@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default ContactusContainer
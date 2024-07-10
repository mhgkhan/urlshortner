import React from 'react'
import { NewRoker } from '../layout'

import Link from 'next/link';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlineApi } from 'react-icons/ai';
import { FaRegLightbulb } from 'react-icons/fa';



const page = () => {
    return (
        <main className='min-h-screen'>
            <div className="container mx-auto py-5 px-2 md:px-0">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl text-blue-950 font-bold mb-6">Welcome to GH URL Shortener</h1>

                    <p className="text-lg text-gray-700 mb-8">
                        GH URL Shortener, hosted at <Link href="https://usgh.com" className="text-blue-600 hover:underline">usgh.com</Link>, is your go-to platform for simplifying link sharing.
                        Whether you're sharing links on social media, managing marketing campaigns, or simply
                        cleaning up URLs for easier navigation, we're here to streamline the process for you.
                    </p>

                    <h2 className="text-2xl text-blue-950 font-bold mb-4">Our Mission</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Our mission is to provide a reliable and user-friendly URL shortening service that enhances
                        your online presence and saves you time. We believe in making link management effortless
                        and effective for all our users.
                    </p>

                    <h2 className="text-2xl text-blue-950 font-bold mb-4">What We Offer</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <FeatureCard
                            icon={<HiOutlineCheckCircle className="text-4xl text-blue-950 mb-2" />}
                            title="Custom Short URLs"
                            description="Create branded short URLs that reflect your brand identity."
                        />
                        <FeatureCard
                            icon={<AiOutlineApi className="text-4xl text-blue-950 mb-2" />}
                            title="Integration"
                            description="Seamlessly integrate our service into your workflow with API support."
                        />
                        <FeatureCard
                            icon={<FiMessageCircle className="text-4xl text-blue-950 mb-2" />}
                            title="Analytics"
                            description="Track the performance of your links with detailed analytics and insights."
                        />
                        <FeatureCard
                            icon={<FaRegLightbulb className="text-4xl text-blue-950 mb-2" />}
                            title="Innovative Solutions"
                            description="Constantly evolving to provide innovative solutions for your link management needs."
                        />
                    </div>

                    <h2 className="text-2xl text-blue-950 font-bold mb-4">Why Choose Us?</h2>

                    <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                        <li className="mb-4 flex items-start">
                            <span className="mr-2"><HiOutlineCheckCircle className="text-blue-950 text-xl mt-1" /></span>
                            <span className="flex-1">Ease of Use: Our intuitive interface makes shortening URLs a breeze.</span>
                        </li>
                        <li className="mb-4 flex items-start">
                            <span className="mr-2"><FaRegLightbulb className="text-blue-950 text-xl mt-1" /></span>
                            <span className="flex-1">Reliability: Count on us for consistent and reliable performance.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2"><FiMessageCircle className="text-blue-950 text-xl mt-1" /></span>
                            <span className="flex-1">Support: Our dedicated support team is ready to assist you whenever you need help.</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl text-blue-950 font-bold mb-4">Get in Touch</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Have questions or feedback? We'd love to hear from you! <Link href="/contact" className='text-blue-600 hover:underline'> Reach out to us</Link> via our contact form
                        or connect with us on social media. Your input helps us improve our service.
                    </p>

                    <h2 className="text-2xl text-blue-950 font-bold mb-4">Join Us</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Join GH URL Shortener today and start simplifying your links. <Link href="/signup" className='text-blue-600 hover:underline'> Sign up</Link> to access additional
                        features and stay updated on the latest developments in link management.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default page 


const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md flex items-start transition duration-300 transform hover:scale-105">
        <div className="mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg text-blue-950 font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
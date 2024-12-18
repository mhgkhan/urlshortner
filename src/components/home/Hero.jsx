import React from 'react'
import { chakra_Petch } from '@/app/layout'

const Hero = () => {
    return (
        <section className='hero'>
            <h1 className={`${chakra_Petch.className} md:text-5xl text-3xl text-blue-500 font-bold text-center my-3 flex items-center justify-center flex-wrap gap-1`}> Trim Your Links with  <span className="text-yellow-500"> GH URL SHORTNER</span></h1>
            <p className="text-lg text-center font-bold text-blue-800 md:w-[80%] w-full mx-auto">
            Simplify and share with our lightning-fast URL shortener. Perfect for optimizing social media posts, email campaigns, and more. Experience seamless redirects and insightful analytics—all in one click!
            </p>
        </section>
    )
}

export default Hero
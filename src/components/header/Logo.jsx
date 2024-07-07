import React from 'react'
import { NewRoker } from '@/app/layout'

const Logo = () => {
    return (
        <div className="logo flex flex-col items-center justify-center w-[200px]">
            <span className={` ${NewRoker.className} text-3xl text-white text-center`}>GH</span>
            <span className={` ${NewRoker.className} text-2xl text-yellow-500 text-center mt-[-5px]`}>URL SHORTNER</span>
        </div>
    )
}

export default Logo
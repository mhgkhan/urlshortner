import React from 'react'

const Loading = () => {
    return (
        <div className="Loading my-5 mx-auto w-auto flex items-center justify-center gap-2 flex-col">
            <div className=" w-[60px] h-[60px] rounded-full border-r border-r-8 border-t-8 border-t-yellow-600 border-dotted border-r-blue-900 duration-75 animate-spin"></div>
            <span className=' animate-pulse text-xl font-bold text-blue-500'>loading <span className='text-yellow-800'>...</span></span>
        </div>
    )
}

export default Loading
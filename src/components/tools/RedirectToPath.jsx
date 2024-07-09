"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const RedirectToPath = ({ path }) => {
    const router = useRouter()

    useEffect(() => {

        if (!path || path == undefined || path == NaN) {
            router.push("/")
        }
        router.push(path)
    })

    return (
        <main className="min-h-screen">
            <div className="container">
                <p className='text-lg text-blue-950 text-center'>Redirecting...</p>
            </div>
        </main>
    )
}

export default RedirectToPath
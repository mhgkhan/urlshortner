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
        <div>Redirecting ...</div>
    )
}

export default RedirectToPath
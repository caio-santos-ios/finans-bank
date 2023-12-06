"use client"

import { useEffect } from "react"

interface ErrorProps {
    error: Error,
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
            <h1>Sua página deu erro </h1>
            <button type="button" onClick={reset} >tentar novamente</button>
        </>
    )
}
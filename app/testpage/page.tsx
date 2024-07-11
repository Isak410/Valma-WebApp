"use client"
import { useSession } from 'next-auth/react';

export default function Testpage() {

    const { data: session, status } = useSession();

    const logsessionvalues = () => {
        console.log(`Name: ${session?.user?.name}, Email: ${session?.user?.email}`)
        console.log(status)
    }

    return (
        <>
            <h1>test page</h1>
            <button className='bg-gray-100 rounded border-2 border-black p-2 hover:bg-gray-200' onClick={() => {logsessionvalues()}}>Log session values</button>
        </>
    )
}
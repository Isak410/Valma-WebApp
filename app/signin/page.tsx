"use client"
import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
    // useEffect(() => {
    //     signIn('azure-ad', { callbackUrl: '/' });
    // }, []);

    //skal skje automatisk, men yapyapyap ...

    return (
        <>
            <p>Redirecting...</p>
            <button className="bg-gray-200 border-2 border-black p-2 rounded" onClick={() => {signIn('azure-ad', { callbackUrl: '/' })}}>Sign in (knapp bare for testing)</button>
        </>
    );
}
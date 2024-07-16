"use client"
import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
    // useEffect(() => {
    //     signIn('azure-ad', { callbackUrl: '/' });
    // }, []);

    //skal skje automatisk, men yapyapyap ...

    return (
        <div className="flex justify-center pt-20">
            <button 
                className="bg-blue-400 border-2 border-black p-2 rounded font-bold text-3xl" 
                onClick={() => {signIn('azure-ad', { callbackUrl: '/' })}}>Logg inn med EntraID
            </button>
        </div>
    );
}
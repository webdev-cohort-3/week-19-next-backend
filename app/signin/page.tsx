"use client"

export default function Signin() {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="placeholder" />

            <button className="bg-black text-white p-1 rounded-sm" onClick={() => {

            }}>Sign in</button>
        </div>
    </div>
}
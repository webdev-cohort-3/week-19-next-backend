"use client"
import axios from "axios";
import { useState } from "react";

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input className="p-2 mr-2" type="text" placeholder="username" onChange={e => {
                setUsername(e.target.value);
            }}/>
            <input className="p-2 mr-2" type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }} />

            <button className="bg-black text-white p-2 rounded-md" onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup", {
                    username,
                    password
                });
            }}>Sign up</button>
        </div>
    </div>
}
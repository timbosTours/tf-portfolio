'use client'

import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useState } from 'react';
import { Antic_Didone} from 'next/font/google';


const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})

export default function Contact ()  {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
        // handle success
        } else {
        // handle error
        }
    };

        return (<div className="min-h-screen bg-zinc-800 flex flex-col">
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 lg:w-1/4 h-1/4">
        <label className="block text-amber-100">Name</label>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${mainFont.className} block text-amber-100 w-full py-3 bg-zinc-800 border border-b-amber-100 border-t-zinc-800 border-x-0 placeholder:text-amber-100 outline-none`}
            required
        />

        <label className="block text-amber-100">Email</label>
        <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${mainFont.className} block text-amber-100 w-full py-3 bg-zinc-800 border border-b-amber-100 border-t-zinc-800 border-x-0 placeholder:text-amber-100 outline-none`}
            required
        />

        <label className="block text-amber-100">Message</label>
        <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${mainFont.className} block text-amber-100 w-full py-3 bg-zinc-800 border border-b-amber-100 border-t-zinc-800 border-x-0 placeholder:text-amber-100 outline-none`}
            required
        />

        <button type="submit" className="px-10 py-3 bg-zinc-800 border-2 border-amber-100 text-lg text-amber-100 rounded">
            Send
        </button>
    </form>
        </div>
        <Footer/>
    </div>
    );
};



'use client' 

import { useState } from 'react'
import Link from 'next/link'
import { Antic_Didone } from 'next/font/google';

const mainFont = Antic_Didone({
    weight: '400',
    subsets: ['latin']
})



export default function TfLogoPro() {
    const [hover, setHover] = useState(false);
    
    return (
        <div className='m-2'>
        <Link tabIndex={-1} href={'/'} className={mainFont.className}>
            <span 
                className="relative h-12 w-12 inline-block " 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
            >
                <div 
                    className="absolute inset-0 border-t-2 border-b-2 transition-all duration-500 rotate-45" 
                    style={{
                        borderColor: '#fef3c7', 
                        opacity: hover ? 0 : 1, 
                        transition: 'opacity 1s'
                    }}
                >
                </div>
                <div 
                    className="absolute inset-0 border-l-2 border-r-2 transition-all duration-500 rotate-45" 
                    style={{
                        borderColor: '#fef3c7', 
                        opacity: hover ? 1 : 0, 
                        transition: 'opacity 1s'
                    }}
                >
                </div>
                <div className="inset-0 flex items-center justify-center text-3xl font-thin pt-2 hover:animate-pulse text-amber-100 tracking-wide">
                    TF
                </div>
            </span>
            </Link>
        </div>
    )
}

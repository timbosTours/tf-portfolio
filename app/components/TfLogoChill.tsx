'use client' 

import { useState } from 'react'
import Link from 'next/link'
import { Carter_One } from 'next/font/google'
import { Monoton } from 'next/font/google'

const carter = Carter_One({
    weight: '400',
    subsets: ['latin']
})
const monoton = Monoton({
    weight: '400',
    subsets: ['latin']
})

export default function TfLogo() {
    const [hover, setHover] = useState(false);
    
    return (
        <div className='m-2'>
        <Link href={'/'} className={carter.className}>
            <span 
                className="relative h-12 w-12 inline-block " 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
            >
                <div 
                    className="rounded-full absolute inset-0 border-t-2 border-b-2 transition-all duration-500 rotate-45" 
                    style={{
                        borderColor: '#B2CEDE', 
                        opacity: hover ? 0 : 1, 
                        transition: 'opacity 1s'
                    }}
                >
                </div>
                <div 
                    className="rounded-full absolute inset-0 border-l-2 border-r-2 transition-all duration-500 rotate-45" 
                    style={{
                        borderColor: '#B2CEDE', 
                        opacity: hover ? 1 : 0, 
                        transition: 'opacity 1s'
                    }}
                >
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-thin p-1 hover:animate-pulse text-colors-columbiaBlue-700">
                    TF
                </div>
            </span>
            </Link>
        </div>
    )
}

'use client' 

import { useState } from 'react'
import Link from 'next/link'
import { Antic_Didone } from 'next/font/google';
import { motion } from 'framer-motion';

const mainFont = Antic_Didone({
    weight: '400',
    subsets: ['latin']
})

const textTransition = { duration: 0.2, type: "spring", stiffness: 400, damping: 10 };

const variantsOne = {
    initial: { opacity: 1 },
    hover: { opacity: 0 }
};

const variantsTwo = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
};

const textVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    leave: { scale: 1 }
};

export default function TfLogoPro() {
    const [isHovered, setIsHovered] = useState(false);
    const [isTextHovered, setTextHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const transition = isAnimating 
        ? { duration: 1, repeat: Infinity, repeatType: 'reverse' as const }
        : { duration: 1, repeat: 0, repeatType: 'reverse' as const };
    
    return (
        <div className='m-2'>
        <Link tabIndex={-1} href={'/'}>
            <motion.span 
                className="relative h-12 w-12 inline-block" 
                onHoverStart={() => { setIsHovered(true); setTextHovered(true); setIsAnimating(true); }} 
                onHoverEnd={() => { setIsHovered(false); setTextHovered(false); setIsAnimating(false); }}
                initial='initial'
                animate={isHovered ? 'hover' : 'initial'}
            >
                <motion.div 
                    className="absolute inset-0 border-t-2 border-b-2 rotate-45" 
                    style={{ borderColor: '#fef3c7' }}
                    variants={variantsOne}
                    transition={transition}
                >
                </motion.div>
                <motion.div 
                    className="absolute inset-0 border-l-2 border-r-2 rotate-45" 
                    style={{ borderColor: '#fef3c7' }}
                    variants={variantsTwo}
                    transition={transition}
                >
                </motion.div>
                <motion.div 
                        className={`${mainFont.className} inset-0 flex items-center justify-center text-3xl font-thin pt-2 text-amber-100 tracking-wide`}
                    variants={textVariants}
                    initial='initial'
                    animate={isTextHovered ? 'hover' : 'leave'}
                    transition={textTransition}
                >
                    TF
                </motion.div>
            </motion.span>
            </Link>
        </div>
    )
}

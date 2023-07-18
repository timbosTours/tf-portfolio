'use client'

import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import ComputerImage from "./ComputerImage";
import { Carter_One } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { motion } from 'framer-motion'

const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

export default function ChillHeroSection() {
    return (
        <>
            <div className='flex flex-row justify-between min-h-screen pt-44 pl-10 sm:pl-28 overflow-hidden'>
            <div className='flex flex-col sm:flex-row justify-between'>
                    <div>
                        
            {/* Main heading */}

                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    tabIndex={0}
                    className={`${roboto.className} hidden dark:block mx-auto text-zinc-800 font-medium lg:text-lg`}>Hello friends, I'm Tim
                </motion.h1>
                        
            {/* Second heading */}
                        
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    tabIndex={0}
                    className={`${roboto.className}  hidden dark:block text-2xl xs:text-3xl lg:text-5xl xl:text-7xl text-zinc-800 mx-auto mt-4 whitespace-nowrap`}>
                    A Web
                <span
                    tabIndex={0}
                    className={`${carter.className} bg-gradient-to-t from-white via-columbiaBlue-500 to-columbiaBlue-700 bg-clip-text text-transparent text-3xl xs:text-4xl lg:text-6xl xl:text-8xl`}>Developer
            </span>
                        </motion.h2>
                        
            {/* Hero blurb */}
                
                <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}      
                tabIndex={0}
                className={`${roboto.className} font-medium text-xs xs:text-base lg:text-lg text-zinc-800 mx-auto mt-4 `}>Building where the possibilities are infinite.
            </motion.p>
            <br className='xs:mb-8 sm:mb-44' />
            
            {/* Reach out button, routes to contact page */}

            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
            >
            <Link
                href={'/contact'}
                
                >
                    <motion.div
                                    whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{scale: 0.9}}
                    className={`${carter.className} w-52 sm:w-60 md:w-72 lg:w-96 bg-gradient-to-t from-white  via-columbiaBlue-500 to-columbiaBlue-700 bg-clip-text text-transparent py-2 lg:py-4 text-center mt-auto text-2xl lg:text-5xl rounded-lg border-2 border-zinc-800`}                
                    >
                                    Reach Out!
                                </motion.div>
                            </Link>
                        </motion.span>
                    </div>
                    
            {/* Computer SVG */}
            <span className='max-w-2xl pr-8 -ml-24  sm:mt-24 lg:ml-2 xl:absolute xl:right-56 scale-75 sm:scale-100 lg:scale-125 xl:scale-150 '>
            <motion.div
                initial={{x: 150, opacity: 0}}        
                animate={{x: 100, opacity: 1}}
                            transition={{ delay: 1.6 }}
                            className="w-full"
                >
                    <ComputerImage />
                        </motion.div>
                    </span>
            </div>
            </div>

            {/* Wrapper for location and social links */}

            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className='flex justify-center mb-10 '>
            
            {/* Location, Tasmania Australia */}

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, }}
                tabIndex={0}
                aria-label='location, Tasmania, Australia'
                className={`${roboto.className} text-zinc-800`}>Tasmania, Australia
                </motion.p>
                
            {/* Social links with wrappers for animation */}
                <motion.span
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className='flex flex-row sm:ml-4'>
                    
                    {/* Github */}

                    <Link
                        aria-label='github account'
                        href={'https://github.com/timbosTours'} target="_blank">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{  duration: 0.2, type: "spring", stiffness: 400, damping: 10  }}
                        >
                        <AiOutlineGithub
                                className='fill-zinc-800 mx-2 h-6 w-6' />
                        </motion.div>
                    </Link>

                    {/* Linkedin */}

                    <Link
                        aria-label='linkedin account'
                        href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <AiFillLinkedin
                                className='fill-zinc-800 mx-2 h-6 w-6' />
                        </motion.div>
                    </Link>

                    {/* Twitter */}

                    <Link
                        aria-label='twitter account'
                        href={'https://twitter.com/timbosTours'} target="_blank">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <AiOutlineTwitter
                                className='fill-zinc-800 mx-2 h-6 w-6' />
                        </motion.div>
                    </Link>
        </motion.span>
        </motion.span>
        </>
    )
}
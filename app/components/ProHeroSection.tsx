'use client'

import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import InfiniteCode from "./InfiniteCode";
import { Roboto } from 'next/font/google';
import { motion } from "framer-motion";


const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

export default function ProHeroSection() { 
    return (
            <div className='flex flex-col  mt-44 dark:block dark:ml-24 dark:mt-56'>
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                tabIndex={0}
                className={`dark:hidden text-amber-100 text-2xl xs:text-4xl mx-auto sm:text-6xl md:text-7xl xl:text-9xl border-b-2 border-b-amber-100 font-light`}>TIMOTHY FAWCETT
            </motion.h1>
            <br />
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                tabIndex={0}
                className=" text-2xl md:text-5xl xl:text-7xl text-amber-100 mx-auto mt-4 dark:hidden"> Web Developer
            </motion.h2>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                tabIndex={0}
                className={`${roboto.className} text-xs md:text-base font-light text-amber-100 mx-auto mt-4 `}>Building where the possibilities are infinite.
            </motion.p>
            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
                className='mx-auto mt-4 scale-75 dark:hidden'>
            <InfiniteCode />
            </motion.span>
            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="mx-auto mt-28"
            >
            <Link
                    href={'/contact'}
                    className={`${roboto.className}  text-amber-100 border-2 border-amber-100 py-2 px-4 text-2xl rounded-sm`}>Lets Talk!
                </Link>
            </motion.span>
            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.3 }}
                className='flex justify-center mt-16'
                >
                <motion.p
                    tabIndex={0}
                    aria-label='Location Tasmania, Australia'
                    className={`${roboto.className} text-amber-100 font-light`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.4 }}
                >
                    Tasmania, Australia
                </motion.p>
                <motion.span
                    className='flex flex-row ml-4'
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.6 }}
                >
                    <Link
                    aria-label='github account'
                    href={'https://github.com/timbosTours'}
                    target="_blank"
                    >
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2.7 }}
                    >
                        <AiOutlineGithub className='fill-amber-100 mx-2 h-6 w-6' />
                    </motion.div>
                    </Link>
                    <Link
                    aria-label='linkedin account'
                    href={'https://www.linkedin.com/in/timothyfawcett89/'}
                    target="_blank"
                    >
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2.8 }}
                    >
                        <AiFillLinkedin className='fill-amber-100 mx-2 h-6 w-6' />
                    </motion.div>
                    </Link>
                    <Link
                    aria-label='twitter account'
                    href={'https://twitter.com/timbosTours'}
                    target="_blank"
                    >
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2.9 }}
                    >
                        <AiOutlineTwitter className='fill-amber-100 mx-2 h-6 w-6' />
                    </motion.div>
                    </Link>
                </motion.span>
                </motion.span>


        </div>
    )
}
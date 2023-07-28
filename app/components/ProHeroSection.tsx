'use client'

import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import InfiniteCode from "./InfiniteCode";
import { Roboto } from 'next/font/google';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from 'react';
import { useTheme } from "next-themes";


const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

export default function ProHeroSection() { 
    const theme = useTheme();

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    const animation6 = useAnimation();
    const animation7 = useAnimation();
    const animation8 = useAnimation();

    useEffect(() => {
        // Reset animations
        animation1.set({ y: 50, opacity: 0 });
        animation2.set({ y: 50, opacity: 0 });
        animation3.set({ y: 50, opacity: 0 });
        animation4.set({ y: 50, opacity: 0 });
        animation5.set({ y: 50, opacity: 0 });
        animation6.set({ y: 50, opacity: 0 });
        animation7.set({ y: 50, opacity: 0 });
        animation8.set({ y: 50, opacity: 0 });

        // Trigger animations
        animation1.start({ y: 0, opacity: 1, transition: { delay: 0.2 } });
        animation2.start({ y: 0, opacity: 1, transition: { delay: 0.5 } });
        animation3.start({ y: 0, opacity: 1, transition: { delay: 0.9 } });
        animation4.start({ y: 0, opacity: 1, transition: { delay: 1.3 } });
        animation5.start({ y: 0, opacity: 1, transition: { delay: 1.6 } });
        animation6.start({ y: 0, opacity: 1, transition: { delay: 2 } });
        animation7.start({ y: 0, opacity: 1, transition: { delay: 2.2 } });
        animation8.start({ y: 0, opacity: 1, transition: { delay: 2.3 } });
    }, [theme, animation1, animation2, animation3, animation4, animation5, animation6, animation7, animation8]);

    return (
        <div className='flex flex-col  mt-44 dark:block dark:ml-24 dark:mt-56'>

            {/* Main heading */}

            <motion.h1
                ref={ref1}
                initial={{ y: 50, opacity: 0 }}
                animate={animation1}
                transition={{ delay: 0.2 }}
                tabIndex={0}
                className={`dark:hidden text-amber-100 text-2xl xs:text-4xl mx-auto sm:text-6xl md:text-7xl xl:text-9xl border-b-2 border-b-amber-100 font-light`}>TIMOTHY FAWCETT
            </motion.h1>

            <br />

            {/* Second heading */}

            <motion.h2
                ref={ref2}
                initial={{ y: 50, opacity: 0 }}
                animate={animation2}
                transition={{ delay: 0.5 }}
                tabIndex={0}
                className=" text-2xl md:text-5xl xl:text-7xl text-amber-100 mx-auto mt-4 dark:hidden"> Web Developer
            </motion.h2>

            {/* Hero blurb */}

            <motion.p
                ref={ref3}
                initial={{ y: 50, opacity: 0 }}
                animate={animation3}
                transition={{ delay: 0.9 }}
                tabIndex={0}
                className={`${roboto.className} text-xs md:text-base font-light text-amber-100 mx-auto mt-4 `}>Building where the possibilities are infinite.
            </motion.p>

            {/* Infinite code SVG */}

            <motion.span
                ref={ref4}
                initial={{ y: 50, opacity: 0 }}
                animate={animation4}
                transition={{ delay: 1.3 }}
                className='mx-auto mt-4 scale-75 dark:hidden'>
            <InfiniteCode />
            </motion.span>

            {/* Lets talk button, routes to contact page */}

            <motion.span
                ref={ref5}
                initial={{ y: 50, opacity: 0 }}
                animate={animation5}
                transition={{ delay: 1.6 }}
                className="mx-auto mt-28"
            >
            <Link href={'/contact'}>
            <motion.div 
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                        whileTap={{scale: 0.9}}
            className={`${roboto.className} text-amber-100 border-2 border-amber-100 py-2 px-4 text-2xl rounded-sm`}>
            Lets Talk!
            </motion.div>
            </Link>
            </motion.span>

            {/* Wrapper for location and social link */}

            <motion.span
                ref={ref6}
                initial={{ y: 50, opacity: 0 }}
                animate={animation6}
                transition={{ delay: 2 }}
                className='flex justify-center mt-16'
            >
                
                {/* Location, Tasmania Australia */}

                <motion.p
                    ref={ref7}
                    initial={{ y: 50, opacity: 0 }}
                    animate={animation7}
                    transition={{ delay: 2, }}
                    tabIndex={0}
                    aria-label='Location Tasmania, Australia'
                    className={`${roboto.className} text-amber-100 font-light`}
                >
                    Tasmania, Australia
                </motion.p>

                {/* Social Links with wrappers for animations */}


                <motion.span
                    ref={ref8}
                    initial={{ y: -50, opacity: 0 }}
                    animate={animation8}
                    transition={{ delay: 2.2 }}
                    className='flex flex-row ml-4'
                >

                    {/* Github */}

                    <Link
                        aria-label='github account'
                        href={'https://github.com/timbosTours'}
                        target="_blank"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{  duration: 0.2, type: "spring", stiffness: 400, damping: 10  }}
                            className="inline-flex items-center justify-center" 
                        >
                            <AiOutlineGithub className='fill-amber-100 mx-2 h-6 w-6' />
                        </motion.div>
                    </Link>

                    {/* Linkedin */}

                    <Link
                        aria-label='linkedin account'
                        href={'https://www.linkedin.com/in/timothyfawcett89/'}
                        target="_blank"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                            className="inline-flex items-center justify-center" 
                        >
                            <AiFillLinkedin className='fill-amber-100 mx-2 h-6 w-6' />
                        </motion.div>
                    </Link>

                    {/* Twitter */}

                    <Link
                        aria-label='twitter account'
                        href={'https://twitter.com/timbosTours'}
                        target="_blank"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                            className="inline-flex items-center justify-center" 
                        >
                            <AiOutlineTwitter className='fill-amber-100 mx-2 h-6 w-6' />
                        </motion.div>
                    </Link>
                </motion.span>


                </motion.span>


        </div>
    )
}

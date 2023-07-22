'use client'

import Link from "next/link"
import { Roboto } from "next/font/google";
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})

export default function Footer() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);

    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });
    const inView4 = useInView(ref4, { once: true });
    const inView5 = useInView(ref5, { once: true });
    const inView6 = useInView(ref6, { once: true });
    const inView7 = useInView(ref7, { once: true });

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    const animation6 = useAnimation();
    const animation7 = useAnimation();
    

    useEffect(() => {
        if (inView1) {
            animation1.start({ y: 0, opacity: 1, transition: { delay: 0.1 } });
        }
        if (inView2) {
            animation2.start({ y: 0, opacity: 1, transition: { delay: 0.2 } });
        }
        if (inView3) {
            animation3.start({ y: 0, opacity: 1, transition: { delay: 0.3 } });
        }
        if (inView4) {
            animation4.start({ y: 0, opacity: 1, transition: { delay: 0.4 } });
        }
        if (inView5) {
            animation5.start({ y: 0, opacity: 1, transition: { delay: 0.5 } });
        }
        if (inView6) {
            animation6.start({ y: 0, opacity: 1, transition: { delay: 0.6 } });
        }
        if (inView7) {
            animation7.start({ y: 0, opacity: 1, transition: { delay: 0.7 } });
        }
    }, [inView1, inView2, inView3, inView4, inView5, inView6, inView7, animation1, animation2, animation3, animation4, animation5, animation6, animation7]);
    return (<>
        <footer className="h-96 w-screen bg-zinc-900">
            <nav className={`${roboto.className} pt-5 flex flex-col text-center`}>
                <Link
                    href={'/'}
                    className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg">
                    <motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        Home
                    </motion.div>
                </Link>
                <Link
                    href="/#projects-section" className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg">
                    <motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        Projects
                    </motion.div>
                </Link> 
                <Link
                    href="/#about-section" className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg" >
                    <motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        About
                    </motion.div>
                </Link>
                <Link
                    href={'/contact'} className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg">
                    <motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        Contact
                    </motion.div>
                </Link>
            </nav>
            <div className='flex flex-row justify-center mt-8 md:mt-6'>
                <Link
                    aria-label="Github account" href={'https://github.com/timbosTours'} target="_blank">
                    <motion.div ref={ref5}
                        initial={{ y: 50, opacity: 0 }}
                        animate={animation5}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        <AiOutlineGithub className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10' />
                    </motion.div>
                </Link>
                <Link
                    aria-label="Linkedin account" href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank">
                    <motion.div ref={ref6}
                        initial={{ y: 50, opacity: 0 }}
                        animate={animation6}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        <AiFillLinkedin className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10' />
                    </motion.div>
                </Link>
                <Link
                    aria-label="Twitter account" href={'https://twitter.com/timbosTours'} target="_blank">
                    <motion.div ref={ref7}
                        initial={{ y: 50, opacity: 0 }}
                        animate={animation7}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        <AiOutlineTwitter className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10' />
                    </motion.div>
                </Link>
            </div>
        </footer>
    </>)
}
'use client'

import Link from "next/link"
import { Roboto } from "next/font/google";
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { motion } from "framer-motion";

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

export default function Footer() {
    return (<>
        <footer className="h-96 w-screen bg-zinc-900">
            <nav className={`${roboto.className} pt-5 flex flex-col text-center`}>
                <Link
                    href={'/'}
                    className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        Home
                    </motion.div>
                </Link>
                <Link
                    href="/#projects-section" className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        Projects
                    </motion.div>
                </Link> 
                <Link
                    href="/#about-section" className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg" >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        About
                    </motion.div>
                </Link>
                <Link
                    href={'/contact'} className="my-5 text-amber-100 dark:text-columbiaBlue-700 md:text-lg">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        Contact
                    </motion.div>
                </Link>
            </nav>
            <div className='flex flex-row justify-center mt-8 md:mt-6'>
                <Link
                    aria-label="Github account" href={'https://github.com/timbosTours'} target="_blank">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        <AiOutlineGithub className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10' />
                    </motion.div>
                </Link>
                <Link
                    aria-label="Linkedin account" href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        <AiFillLinkedin className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10' />
                    </motion.div>
                </Link>
                <Link
                    aria-label="Twitter account" href={'https://twitter.com/timbosTours'} target="_blank">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                        <AiOutlineTwitter className='fill-amber-100 dark:fill-columbiaBlue-700 mx-2 h-6 w-6 md:h-10 md:w-10' />
                    </motion.div>
                </Link>
            </div>
        </footer>
    </>)
}
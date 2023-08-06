'use client'

import TfLogoChill from "./TfLogoChill";
import TfLogoPro from "./TfLogoPro";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Carter_One, Roboto } from "next/font/google";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import DropMenu from "./DropMenu";
import {motion} from 'framer-motion'

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})
const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

const variants = {
    hover: { 
        rotate: [0, 5, -5, 5, -5, 0], 
        transition: {
        duration: 0.5, 
        },
    },
    rest: { 
        rotate: 0,
        transition: {
        duration: 0.5,
        },
    },
};

export default function NavBar() {
    const [isDropOpen, setDropOpen] = useState(false)


    function handleClick() {
        setDropOpen(isDropOpen => !isDropOpen)
    }

    return (
        <header className="w-full">
            <div className="absolute flex mt-4 px-6 pr-0 w-screen justify-between text-amber-100 dark:text-zinc-900">
                <motion.div 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.04, type: "spring", stiffness: 400, damping: 10 }}
                    className="dark:hidden">
                <TfLogoPro />
                </motion.div>
                <motion.div 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.04, type: "spring", stiffness: 400, damping: 10 }}
                    className="hidden dark:flex">
                <TfLogoChill />
                </motion.div>
                <div>
                <div className="hidden sm:flex mr-6">

                {/* Pro theme navigation */}

                <nav className={`${roboto.className} mt-4 flex dark:hidden`}>
                        <Link
                            href={'/'}
                            className="mx-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.05 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    Home
                                </motion.div>
                        </Link>
                        <Link
                            href="/#projects-section"
                            className="mx-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.06 }}
                                whileHover={{ scale: 1.1,transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    Projects
                                </motion.div>
                        </Link>
                        <Link
                            href="/#about-section"
                                className="mx-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.07 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    About
                                </motion.div>
                        </Link>
                        <Link
                            href={'/contact'}
                            className="ml-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.08 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    Contact
                                </motion.div>
                        </Link>
                </nav>

                {/* Chill theme navigation */}

                <nav className={`${carter.className} mt-4 hidden dark:flex`}>
                        <Link
                            href={'/'}
                                className="mx-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.05 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    Home
                                </motion.div>
                        </Link>
                        <Link
                            href="/#projects-section"
                                className="mx-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.06 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    Projects
                                </motion.div>
                        </Link>
                        <Link
                            href="/#about-section"
                                className="mx-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.07 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    About
                                </motion.div>
                        </Link>
                        <Link
                            href={'/contact'}
                                className="ml-4">
                                <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.08 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
                                    Contact
                                </motion.div>
                        </Link>
                            
                        </nav>
                        <div className="mt-4 ml-6">
                        </div>
                    </div>
                    <div className="absolute right-4 top-4">
                        <ThemeSwitcher />
                    </div>
                    <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.07, type: "spring", stiffness: 400, damping: 10 }}>
                        <motion.button
                        aria-label="drop down menu"
                        variants={variants}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    onClick={handleClick}
                    className="mr-12 mt-4 sm:hidden">
                <GiHamburgerMenu className="w-6 h-6" />
                        </motion.button>
                    </motion.div>
                {isDropOpen && <DropMenu />}
                </div>
            </div>
</header>

    )
}

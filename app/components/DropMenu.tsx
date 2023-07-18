import { useState, useEffect, useRef } from 'react';
import Link from "next/link"
import { Carter_One, Roboto } from "next/font/google"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { motion, AnimatePresence } from 'framer-motion';

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})

const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

export default function DropMenu() {
    const [isOpen, setIsOpen] = useState(true);
    const node = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current?.contains(e.target as Node)) {
            // inside click
            return;
        }
        // outside click 
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
        {isOpen ? (
        <motion.div
                    ref={node}
                    initial={{ opacity: 0, y: -20 }}  
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }} 
                    transition={{ duration: 0.2, mass: 1, type: "spring"}} 
            className=" sm:hidden absolute h-96 w-56 xs:w-80 bg-amber-100 dark:bg-columbiaBlue-700 rounded-lg right-6 mt-6 z-20">
            {/* Pro theme dropdown navigation */}

            <nav
                
                className={`${roboto.className} flex flex-col text-center text-zinc-900 m-4 dark:hidden`}>
                <Link
                    href={'/'}
                            className="mx-4 my-5 text-xl">
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                Home
                            </motion.div>
                </Link>
                <Link
                            href="/#projects-section" className="mx-4 my-5 text-xl" >
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                Projects
                            </motion.div>
                </Link>
                <Link
                            href="/#about-section" className="mx-4 my-5 text-xl" >
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                About
                            </motion.div>
                </Link>
                <Link
                            href={'/contact'} className="mx-4 my-5 text-xl">
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                Contact
                            </motion.div>
                        </Link>
                        <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{ scale: 0.9 }}>
                            <ThemeSwitcher />
                        </motion.div>
            </nav>

            {/* Chill theme drop down navigation */}

            <nav
                className={`${carter.className} hidden dark:flex flex-col text-center text-zinc-900 m-4`}>
                <Link
                    href={'/'}
                            className="mx-4 my-5 text-xl">
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                Home
                            </motion.div>
                </Link>
                <Link
                            href="/#projects-section" className="mx-4 my-5 text-xl" >
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                Projects
                            </motion.div>
                </Link>
                <Link
                            href="/#about-section" className="mx-4 my-5 text-xl" >
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                About
                            </motion.div>
                </Link>
                <Link
                            href={'/contact'} className="mx-4 my-5 text-xl">
                            <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{scale: 0.9}}>
                                Contact
                            </motion.div>
                        </Link>
                        <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}
                            whileTap={{ scale: 0.9 }}>
                            <motion.span>
                                <ThemeSwitcher />
                            </motion.span>
                        </motion.div>
            </nav>
        </motion.div>
    ) : null}</AnimatePresence>);
    
}

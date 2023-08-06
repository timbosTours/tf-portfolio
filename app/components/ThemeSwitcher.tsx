'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSnowboarding } from 'react-icons/fa'
import { FaUserTie } from 'react-icons/fa'
import { motion } from "framer-motion"

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        if (theme) {
            setTheme(theme === 'dark' ? 'light' : 'dark')
        }
    }

    return (
        <div  aria-hidden="true">
            <motion.div  aria-hidden="true" whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
            <button  aria-hidden="true" aria-label="switch visual theme" className="dark:hidden mt-1" onClick={toggleTheme}><FaSnowboarding className="fill-amber-100"/></button></motion.div>
            <motion.div  aria-hidden="true" whileHover={{ scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 10 } }}>
            <button  aria-hidden="true" aria-label="switch visual theme" className="hidden dark:inline" onClick={toggleTheme}><FaUserTie /></button></motion.div>
        </div>
    )
}
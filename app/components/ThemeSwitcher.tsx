'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSnowboarding } from 'react-icons/fa'
import { FaUserSecret } from 'react-icons/fa'

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
        <div>
            <button aria-label="switch visual theme" className="dark:hidden" onClick={toggleTheme}><FaSnowboarding className="fill-amber-100"/></button>
            <button aria-label="switch visual theme" className="hidden dark:inline" onClick={toggleTheme}><FaUserSecret className="fill-columbiaBlue-700"/></button>
        </div>
    )
}
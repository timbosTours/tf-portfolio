'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

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
            setTheme(theme === 'light' ? 'dark' : 'light')
        }
    }

    return (
        <div>
            <button aria-label="switch visual theme" className="text-xl sm:text-base dark:hidden mx-auto sm:ml-4 md:mr-0 my-5 sm:my-0" onClick={toggleTheme}>Too Serious?</button>
            <button aria-label="switch visual theme" className="text-xl sm:text-base hidden dark:block mx-auto sm:ml-4 md:mr-0 my-5 sm:my-0" onClick={toggleTheme}>Too Chill?</button>
        </div>
    )
}
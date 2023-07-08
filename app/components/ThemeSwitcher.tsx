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
            <button className="dark:hidden" onClick={toggleTheme}>Too Serious?</button>
            <button className="hidden dark:block" onClick={toggleTheme}>Too Chill?</button>
        </div>
    )
}
